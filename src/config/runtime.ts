const fallbackRuntimeConfig = {
  appName: "Eftanasya",
  supabaseUrl: "https://opfryiuywxrwlbguthgg.supabase.co",
  supabaseAnonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZnJ5aXV5d3hyd2xiZ3V0aGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MjExODUsImV4cCI6MjA2OTI5NzE4NX0.5wdM1Y05fRM1XbqpHhNEkIFvpy5qc_HN7CeESoMGgWM",
  youtubeApiKey: "",
} as const;

export const runtimeConfig = {
  appName: import.meta.env.VITE_APP_NAME || fallbackRuntimeConfig.appName,
  supabaseUrl:
    import.meta.env.VITE_SUPABASE_URL || fallbackRuntimeConfig.supabaseUrl,
  supabaseAnonKey:
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    fallbackRuntimeConfig.supabaseAnonKey,
  youtubeApiKey:
    import.meta.env.VITE_YOUTUBE_API_KEY ||
    fallbackRuntimeConfig.youtubeApiKey,
} as const;
