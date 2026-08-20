export type Post = {
  id: string;
  user: {
    name: string;
    avatarUrl: any; // using any for require() paths currently
    location?: string;
    isVerified?: boolean;
  };
  imageUrl: any;
  likes: number;
  comments: number;
  isLikedByMe?: boolean;
};

export type Story = {
  id: string;
  name: string;
  avatarUrl: any;
  isAddStory?: boolean;
};
