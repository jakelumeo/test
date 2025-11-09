import React, { useMemo } from 'react';

type ConfettiShape = 'circle' | 'square' | 'ribbon' | 'triangle' | 'star' | 'emoji'

type ConfettiPiece = {
    id: string;
    leftPercent: number;
    sizePx: number;
    color: string;
    rotateStartDeg: number;
    rotateEndDeg: number;
    animationDelayMs: number;
    animationDurationMs: number;
    borderRadiusPx: number;
    shape: ConfettiShape;
    swayX: number;
    swayDurationMs: number;
    emojiChar?: string;
    emojiSizePx?: number;
};

type Props = {
    appName?: string;
};


export default function PaymentSuccessPage({ appName = 'the app' }: Props) {
    const confettiPieces = useMemo<ConfettiPiece[]>(() => {
        const palette = ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#EF476F', '#835AF1'];
        // const emojis = [':tada:', ':sparkles:', ':star:', ':partying_face:', ':confetti_ball:'];
        const totalPieces = 100;
        const pieces: ConfettiPiece[] = [];
        for (let i = 0; i < totalPieces; i++) {
            const color = palette[i % palette.length];
            const sizePx = 8 + Math.round(Math.random() * 10);
            const borderRadiusPx = Math.random() < 0.4 ? 2 : 50;
            const shapes: ConfettiShape[] = ['ribbon', 'triangle', 'star', 'circle', 'square', 'emoji'];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const swayX = (Math.random() - 0.5) * 140;
            const swayDurationMs = 1600 + Math.floor(Math.random() * 1600);
            const isEmoji = shape === 'emoji';
            // const emojiChar = isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : undefined;
            const emojiSizePx = isEmoji ? 18 + Math.round(Math.random() * 12) : undefined;
            pieces.push({
                id: `confetti-${i}`,
                leftPercent: Math.random() * 100,
                sizePx,
                color,
                rotateStartDeg: Math.floor(Math.random() * 180),
                rotateEndDeg: 360 + Math.floor(Math.random() * 360),
                animationDelayMs: Math.floor(Math.random() * 1200),
                animationDurationMs: 4200 + Math.floor(Math.random() * 2600),
                borderRadiusPx,
                shape,
                swayX,
                swayDurationMs,
                // emojiChar,
                emojiSizePx,
            });
        }
        return pieces;
    }, []);

    return (
        <div style={styles.page}>
            <style dangerouslySetInnerHTML={{ __html: css }} />

            <div className="confetti-layer" aria-hidden>
                {confettiPieces.map(piece => {
                    const wrapperStyle: React.CSSProperties = {
                        left: `${piece.leftPercent}%`,
                        animationDelay: `${piece.animationDelayMs}ms`,
                        animationDuration: `${piece.animationDurationMs}ms`,
                        ['--rotate-start' as any]: `${piece.rotateStartDeg}deg`,
                        ['--rotate-end' as any]: `${piece.rotateEndDeg}deg`,
                    };

                    const innerBaseStyle: React.CSSProperties = {
                        animationDuration: `${piece.swayDurationMs}ms`,
                        ['--sway-amp' as any]: `${piece.swayX}px`,
                    };

                    if (piece.shape === 'emoji') {
                        return (
                            <div key={piece.id} className="confetti-wrapper" style={wrapperStyle}>
                                <div
                                    className={`confetti emoji`}
                                    style={{
                                        ...innerBaseStyle,
                                        color: piece.color,
                                        fontSize: piece.emojiSizePx,
                                    }}
                                >
                                    {piece.emojiChar}
                                </div>
                            </div>
                        );
                    }

                    let width = piece.sizePx;
                    let height = piece.sizePx;
                    let clipPath: string | undefined;
                    let borderRadius: number | string = piece.borderRadiusPx;

                    if (piece.shape === 'ribbon') {
                        width = 8 + Math.round(Math.random() * 6);
                        height = 16 + Math.round(Math.random() * 18);
                        borderRadius = 4;
                    } else if (piece.shape === 'triangle') {
                        clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                    } else if (piece.shape === 'star') {
                        clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 56%, 79% 91%, 50% 70%, 21% 91%, 32% 56%, 2% 35%, 39% 35%)';
                    } else if (piece.shape === 'circle') {
                        borderRadius = '50%';
                    }

                    return (
                        <div key={piece.id} className="confetti-wrapper" style={wrapperStyle}>
                            <div
                                className={`confetti ${piece.shape}`}
                                style={{
                                    ...innerBaseStyle,
                                    width,
                                    height,
                                    backgroundColor: piece.color,
                                    borderRadius,
                                    clipPath,
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            <main className="container" role="main">
                <div className="card">
                    <div className="icon">
                        <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden>
                            <circle cx="60" cy="60" r="48" fill="none" stroke="#FF6B6B" strokeWidth="8" />
                            <path
                                d="M40 62 L54 76 L82 48"
                                fill="none"
                                stroke="#FF6B6B"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h1 className="title">
                        <span>Payment</span>
                        <span>Successful</span>
                    </h1>

                    <p className="subtitle">
                        Thank you. You can now close this page on your browser and return to {appName} to start enjoying your benefits.
                    </p>
                </div>
            </main>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
    },
};

const css = `
  :root {
   --text-strong: #1A1A1A;
   --text-muted: #6B7280;
   --accent: #FF6B6B;
  }
 
  * { box-sizing: border-box; }
 
  body, html, #root { height: 100%; }
 
  .container {
   min-height: 100vh;
   display: grid;
   place-items: center;
   padding: 24px;
  }
 
  .card {
   text-align: center;
   max-width: 460px;
   margin: 0 auto;
  }
 
  .icon {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: 120px;
   height: 120px;
   margin: 0 auto 24px;
  }
 
  .title {
   margin: 0 0 18px;
   display: grid;
   gap: 2px;
   font-size: 32px;
   line-height: 1.15;
   font-weight: 800;
   color: var(--text-strong);
  }
 
  @media (min-width: 420px) {
   .title { font-size: 36px; }
  }
 
  .subtitle {
   margin: 0 auto;
   max-width: 420px;
   font-size: 14px;
   line-height: 1.6;
   color: var(--text-muted);
  }
 
  /* Confetti */
  .confetti-layer {
   position: fixed;
   inset: 0;
   overflow: hidden;
   pointer-events: none;
   z-index: 0;
  }
 
  .confetti-wrapper {
   position: absolute;
   top: -10vh;
   will-change: transform;
   transform: translate3d(0, 0, 0) rotate(var(--rotate-start, 0deg));
   animation-name: fallRotate;
   animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
   animation-iteration-count: 1;
  }
 
  .confetti {
   will-change: transform;
   animation-name: sway;
   animation-timing-function: ease-in-out;
   animation-iteration-count: infinite;
  }
 
  .confetti.ribbon { border-radius: 4px; }
  .confetti.triangle { }
  .confetti.star { }
  .confetti.circle { border-radius: 50%; }
  .confetti.square { }
  .confetti.emoji { background: transparent; line-height: 1; }
 
  @keyframes fallRotate {
   0% { transform: translate3d(0, -10vh, 0) rotate(var(--rotate-start, 0deg)); opacity: 0; }
   10% { opacity: 1; }
   100% { transform: translate3d(0, 110vh, 0) rotate(var(--rotate-end, 360deg)); opacity: 0.95; }
  }
 
  @keyframes sway {
   0% { transform: translateX(0); }
   50% { transform: translateX(var(--sway-amp, 0px)); }
   100% { transform: translateX(0); }
  }
 `;