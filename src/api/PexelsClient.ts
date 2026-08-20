import { PEXELS_API_KEY } from '../config/env';

const BASE_URL = 'https://api.pexels.com/v1';

export const PexelsClient = {
  async get(endpoint: string) {
    if ((PEXELS_API_KEY as string) === 'YOUR_PEXELS_API_KEY_HERE') {
      throw new Error('Pexels API key is not configured. Please add it to src/config/env.ts');
    }

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Pexels API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Pexels API request failed:', error);
      throw error;
    }
  },
};
