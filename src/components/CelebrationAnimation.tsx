import { useEffect, useState } from 'react';

interface CelebrationAnimationProps {
  isActive: boolean;
  onComplete?: () => void;
}

const CelebrationAnimation = ({ isActive, onComplete }: CelebrationAnimationProps) => {
  const [cashElements, setCashElements] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);
  
  const [celebrationElements, setCelebrationElements] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    emoji: string;
  }>>([]);

  useEffect(() => {
    if (!isActive) {
      setCashElements([]);
      setCelebrationElements([]);
      return;
    }

    // Generate cash elements (1.5x faster)
    const cash = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 1.5, // 2-3.5 seconds (faster)
    }));

    // Generate celebration elements with different emojis
    const celebrationEmojis = ['🎉', '🎊', '🎈', '🥳'];
    const celebration = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 1.5, // 2-3.5 seconds
      emoji: celebrationEmojis[i % celebrationEmojis.length],
    }));

    setCashElements(cash);
    setCelebrationElements(celebration);

    // Call onComplete after the longest animation
    const maxDuration = Math.max(
      ...cash.map(el => el.delay + el.duration),
      ...celebration.map(el => el.delay + el.duration)
    );
    const timer = setTimeout(() => {
      onComplete?.();
    }, maxDuration * 1000);

    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  if (!isActive || (cashElements.length === 0 && celebrationElements.length === 0)) return null;

  return (
    <>
      <style>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes popFromLeft {
          0% {
            transform: translateX(-100px) scale(0);
            opacity: 0;
          }
          20% {
            transform: translateX(0) scale(1.2);
            opacity: 1;
          }
          80% {
            transform: translateX(50px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(200px) scale(0.5);
            opacity: 0;
          }
        }
        .fall-down {
          animation-name: fallDown;
          animation-timing-function: linear;
        }
        .pop-from-left {
          animation-name: popFromLeft;
          animation-timing-function: ease-out;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
         {/* Cash falling */}
         {cashElements.map((cash) => (
           <div
             key={`cash-${cash.id}`}
             className="absolute text-6xl fall-down"
             style={{
               left: `${cash.left}%`,
               top: '-50px',
               animationDelay: `${cash.delay}s`,
               animationDuration: `${cash.duration}s`,
               animationFillMode: 'forwards',
             }}
           >
             💵
           </div>
         ))}
        
         {/* Celebration emojis falling */}
         {celebrationElements.map((celebration) => (
           <div
             key={`celebration-${celebration.id}`}
             className="absolute text-3xl fall-down"
             style={{
               left: `${celebration.left}%`,
               top: '-50px',
               animationDelay: `${celebration.delay}s`,
               animationDuration: `${celebration.duration}s`,
               animationFillMode: 'forwards',
             }}
           >
             {celebration.emoji}
           </div>
         ))}
      </div>
    </>
  );
};

export default CelebrationAnimation;
