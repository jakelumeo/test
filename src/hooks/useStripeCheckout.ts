import { useState } from 'react';
import { createFoundingCheckoutSession, CheckoutSessionOptions } from '@/lib/stripe';

export interface UseStripeCheckoutResult {
    isCreatingCheckout: boolean;
    error: string | null;
    createCheckout: (options?: CheckoutSessionOptions) => Promise<void>;
}

export const useStripeCheckout = (): UseStripeCheckoutResult => {
    const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createCheckout = async (options: CheckoutSessionOptions = {}) => {
        setIsCreatingCheckout(true);
        setError(null);

        try {
            const result = await createFoundingCheckoutSession(options);

            if (result.error) {
                setError(result.error);
                return;
            }

            if (result.url) {
                window.location.href = result.url;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
            setError(errorMessage);
        } finally {
            setIsCreatingCheckout(false);
        }
    };

    return {
        isCreatingCheckout,
        error,
        createCheckout,
    };
};