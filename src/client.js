import { createClient } from '@supabase/supabase-js';

const URL = 'https://bfuqscexcymjjgghmhia.supabase.co';
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmdXFzY2V4Y3ltampnZ2htaGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3NTQ2NTYsImV4cCI6MTk5NjMzMDY1Nn0.81MeZocenXCBnj3CjXYlmcKy2VASmNBWzOjafvodp3w"

export const supabase = createClient(URL, API_KEY); 