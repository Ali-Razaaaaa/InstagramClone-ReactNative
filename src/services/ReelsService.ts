import { PexelsClient } from '../api/PexelsClient';
import { Reel } from '../models/Reel';

export class ReelsService {
  static async getReels(page: number = 1, perPage: number = 10): Promise<Reel[]> {
    try {
      // Using 'lifestyle' and 'portrait' to get Instagram Reel-style videos
      const data = await PexelsClient.get(
        `/videos/search?query=lifestyle&orientation=portrait&size=small&page=${page}&per_page=${perPage}`
      );

      return data.videos.map((video: any) => {
        // Find a suitable MP4 file (prefer SD that fits well on mobile to avoid large files/buffering)
        const videoFile = 
          video.video_files.find((f: any) => f.file_type === 'video/mp4' && f.quality === 'sd') ||
          video.video_files.find((f: any) => f.file_type === 'video/mp4' && f.quality === 'hd') ||
          video.video_files[0];

        return {
          id: video.id.toString(),
          user: {
            name: video.user.name,
            avatarUrl: { uri: video.image }, // use the video thumbnail as avatar placeholder
          },
          title: `Video by ${video.user.name} on Pexels`, // Pexels videos don't have captions
          videoUrl: { uri: videoFile.link },
          likes: Math.floor(Math.random() * 1000) + 50,
          commentsCount: Math.floor(Math.random() * 50) + 1,
          isLikedByMe: false,
          comments: [
            { user: 'PexelsFan', text: 'Great video! 🎥' }
          ],
        };
      });
    } catch (error) {
      console.warn('Failed to fetch Reels from Pexels:', error);
      throw error;
    }
  }
}
