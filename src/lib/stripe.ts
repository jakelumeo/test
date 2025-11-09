import { supabase } from '@/lib/supabase';

export interface CheckoutSessionOptions {
    priceId?: string;
    successUrl?: string;
    cancelUrl?: string;
    metadata?: Record<string, string>;
}

export interface CheckoutSessionResponse {
    url?: string;
    error?: string;
}

export const createFoundingCheckoutSession = async (
    options: CheckoutSessionOptions = {}
): Promise<CheckoutSessionResponse> => {
    try {
        const { data, error } = await supabase.functions.invoke('create-checkout-session', {
            body: {
                name: 'Functions',
                ...options
            },
        });

        if (error) {
            throw error;
        }

        return { url: data?.url };
    } catch (error) {
        console.error('Error creating checkout session:', error.type || 'unknown');
        return {
            error: error instanceof Error ? error.message : 'Failed to create checkout session'
        };
    }
};