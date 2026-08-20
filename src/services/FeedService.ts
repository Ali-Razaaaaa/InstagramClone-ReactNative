import { mockStories } from '../mock/mockPosts';
import { PexelsClient } from '../api/PexelsClient';
import { Post } from '../models/Post';

export class FeedService {
  static async getPosts(page: number = 1, perPage: number = 20): Promise<Post[]> {
    try {
      const data = await PexelsClient.get(`/curated?page=${page}&per_page=${perPage}`);
      
      return data.photos.map((photo: any) => ({
        id: photo.id.toString(),
        user: {
          name: photo.photographer,
          // Pexels doesn't provide user avatars, so we use a generic icon
          avatarUrl: require('../assets/pic.jpeg'), 
          location: 'Pexels Photographer',
          isVerified: false,
        },
        imageUrl: { uri: photo.src.large2x || photo.src.large },
        likes: Math.floor(Math.random() * 500) + 10, // Simulated likes
        comments: Math.floor(Math.random() * 50) + 1, // Simulated comments
        isLikedByMe: false,
      }));
    } catch (error) {
      console.warn('Failed to fetch from Pexels:', error);
      throw error;
    }
  }

  static async getStories() {
    return mockStories;
  }
}
