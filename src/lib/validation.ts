import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email too long')
    .refine((email) => {
      const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+=/i,
        /<iframe/i,
        /[\x00-\x1f]/,
      ];
      return !suspiciousPatterns.some(pattern => pattern.test(email));
    }, 'Email contains invalid characters'),

  phone: z
    .string()
    .optional()
    .refine((phone) => {
      if (!phone || phone.trim() === '') return true;
      const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
      // More strict: must be 10-15 digits, optional country code
      const phoneRegex = /^\+?[1-9]\d{9,14}$/;
      return phoneRegex.test(cleaned) && cleaned.length >= 10;
    }, 'Phone must be 10-15 digits with optional country code'),

  referralCode: z
    .string()
    .optional()
    .refine((code) => {
      if (!code) return true;
      const codeRegex = /^[A-Z0-9]{5,10}$/;
      return codeRegex.test(code.toUpperCase());
    }, 'Referral code must be 5-10 alphanumeric characters'),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>\"'&]/g, '')
    .substring(0, 1000);
};