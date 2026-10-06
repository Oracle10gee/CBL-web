import { contact } from '../content/site';
import { supabase } from '../lib/supabase';

const UNIQUE_VIOLATION = '23505';

export async function subscribe(email) {
  if (!supabase) {
    return {
      ok: false,
      message: `Newsletter sign-up isn’t live yet — email ${contact.email} and we’ll add you.`,
    };
  }
  const { error } = await supabase.from('subscribers').insert({ email: email.trim().toLowerCase() });
  if (error && error.code !== UNIQUE_VIOLATION) {
    return { ok: false, message: 'Something went wrong. Please try again.' };
  }
  return { ok: true, message: 'Thank you — you’re on the list.' };
}
