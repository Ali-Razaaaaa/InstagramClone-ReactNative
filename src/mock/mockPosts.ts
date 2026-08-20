import { Post, Story } from '../models/Post';

export const mockStories: Story[] = [
  {
    id: 'story-1',
    name: 'Your Story',
    avatarUrl: require('../assets/pic.jpeg'),
    isAddStory: true,
  },
  {
    id: 'story-2',
    name: 'William',
    avatarUrl: require('../assets/men2.PNG'),
  },
  {
    id: 'story-3',
    name: 'Instagram',
    avatarUrl: require('../assets/instagram.PNG'),
  },
  {
    id: 'story-4',
    name: 'Daraz.pk',
    avatarUrl: require('../assets/daraz.PNG'),
  },
  {
    id: 'story-5',
    name: 'Jack Hebrew',
    avatarUrl: require('../assets/men3.PNG'),
  },
];

export const mockPosts: Post[] = [
  {
    id: 'post-1',
    user: {
      name: 'Bykea',
      avatarUrl: require('../assets/bykea.PNG'),
      location: 'Pakistan',
      isVerified: true,
    },
    imageUrl: require('../assets/bykeacontainer.jpeg'),
    likes: 5,
    comments: 3,
    isLikedByMe: false,
  },
  {
    id: 'post-2',
    user: {
      name: 'Rowan Atkinson',
      avatarUrl: require('../assets/beanicon.jpeg'),
      location: 'United States',
      isVerified: true,
    },
    imageUrl: require('../assets/beancontainer.jpeg'),
    likes: 10,
    comments: 3,
    isLikedByMe: false,
  },
  {
    id: 'post-3',
    user: {
      name: 'HP',
      avatarUrl: require('../assets/hpicon.PNG'),
      location: 'United States',
      isVerified: true,
    },
    imageUrl: require('../assets/hpcontainer.jpeg'),
    likes: 15,
    comments: 3,
    isLikedByMe: false,
  },
];

export const mockSearchImages = [
  require('../assets/pic1.PNG'),
  require('../assets/pic2.PNG'),
  require('../assets/pic3.PNG'),
  require('../assets/pic4.PNG'),
  require('../assets/pic5.PNG'),
  require('../assets/pic6.PNG'),
  require('../assets/pic7.PNG'),
  require('../assets/pic8.jpeg'),
  require('../assets/pic9.jpeg'),
  require('../assets/pic10.jpeg'),
  require('../assets/pic11.jpeg'),
  require('../assets/pic12.jpeg'),
  require('../assets/pic13.jpeg'),
  require('../assets/pic14.jpeg'),
  require('../assets/pic15.jpeg'),
  require('../assets/pic16.PNG'),
  require('../assets/pic17.jpeg'),
  require('../assets/pic18.jpeg'),
  require('../assets/pic19.PNG'),
];
