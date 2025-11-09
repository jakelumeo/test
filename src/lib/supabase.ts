import { createClient } from '@supabase/supabase-js'
import { waitlistSchema } from '@/lib/validation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface WaitlistEntry {
  email: string
  phone?: string
  referral_source?: string
  referral_code?: string
  my_referral_code?: string
}

export const insertWaitlistEntry = async (entry: WaitlistEntry) => {
  const emailToAdd = entry.email
  const validationResult = waitlistSchema
    .pick({ email: true })
    .safeParse({ email: emailToAdd })

  if (!validationResult.success) {
    throw new Error('Invalid email format.')
  }
  const { data, error } = await supabase
    .from('waitlist')
    .insert([entry])
    .select()

  if (error) {
    throw error
  }

  return data
}

export const validateReferralCode = async (
  referralCode: string
): Promise<boolean> => {
  if (!referralCode) return false

  const { data, error } = await supabase.rpc('validate_referral_code', {
    code: referralCode,
  })

  if (error) {
    console.error('Error validating referral code:')
    return false
  }

  return data
}

export const checkEmailExists = async (email: string): Promise<boolean> => {
  if (!email) return false

  const { data, error } = await supabase.rpc('check_email_exists', {
    email_input: email.toLowerCase(),
  })

  if (error) {
    console.error('Error checking email:')
    return false
  }

  return data
}

export const getWaitlistCount = async (): Promise<number> => {
  const { data, error } = await supabase.rpc('get_waitlist_count')

  if (error) {
    console.error('Error getting waitlist count:')
    return 0
  }

  return data || 0
}
