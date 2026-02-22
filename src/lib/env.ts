const DEFAULT_APP_ID = "app-8p4wg9i9nchs";

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

export function getAppId(): string {
  const value = readEnv("VITE_APP_ID");
  if (!value) {
    console.warn(
      `VITE_APP_ID is missing, using fallback APP_ID: ${DEFAULT_APP_ID}`
    );
    return DEFAULT_APP_ID;
  }
  return value;
}
