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
