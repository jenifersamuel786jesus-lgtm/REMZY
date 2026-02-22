function readEnv(name: keyof ImportMetaEnv): string | undefined {
  const value = import.meta.env[name];
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function getRequiredEnv(name: keyof ImportMetaEnv): string {
  const value = readEnv(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSupabaseUrl(): string {
  return getRequiredEnv("VITE_SUPABASE_URL");
}

export function getSupabaseAnonKey(): string {
  return getRequiredEnv("VITE_SUPABASE_ANON_KEY");
}

export function getGeminiApiKey(): string {
  return getRequiredEnv("VITE_GEMINI_API_KEY");
}
