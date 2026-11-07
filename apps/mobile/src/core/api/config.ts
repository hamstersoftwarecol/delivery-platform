const defaultApiUrl = 'http://localhost:8000/api/v1';

export const apiConfig = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL ?? defaultApiUrl,
  timeoutMs: 10_000,
} as const;
