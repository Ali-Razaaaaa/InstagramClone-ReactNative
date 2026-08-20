export type Reel = {
  id: string;
  user: {
    name: string;
    avatarUrl: any;
  };
  title: string;
  videoUrl: any; // the string address for require() or http later
  likes: number;
  commentsCount: number;
  isLikedByMe?: boolean;
  comments: { user: string; text: string }[];
};
