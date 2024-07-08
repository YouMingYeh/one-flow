import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0cmxuYWJhaGdzbnl5Z2pxdHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NjA1MTAsImV4cCI6MjAzNjAzNjUxMH0.jRUwv9HxwiBL-kgF1cCDwaHUNKOgZpVRsN2mnYOtoh4';
const SUPABASE_URL = 'https://dtrlnabahgsnyygjqtpv.supabase.co';
function createSupabaseClientClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export default createSupabaseClientClient;
