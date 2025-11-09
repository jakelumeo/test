import { useState, useEffect } from 'react';
import { getWaitlistCount } from '@/lib/supabase';

export const useWaitlistCount = () => {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const waitlistCount = await getWaitlistCount();
        setCount(waitlistCount);
      } catch (error) {
        console.error('Error loading waitlist count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCount();
  }, []);

  return { count, isLoading };
};