import { Reel } from '../models/Reel';

export const mockReels: Reel[] = [
  {
    id: 'reel-1',
    user: {
      name: 'Memes Official',
      avatarUrl: require('../assets/reel/meme1.PNG'),
    },
    title: 'Kon hai ye log🤣😛,',
    videoUrl: require('../assets/videos/videoplayback.mp4'),
    likes: 1101,
    commentsCount: 2,
    isLikedByMe: false,
    comments: [
      { user: 'CoolUser123', text: 'Hahahaha😁🤣' },
      { user: 'Saif Ali', text: 'Ye Patwari Hai😁' },
    ],
  },
  {
    id: 'reel-2',
    user: {
      name: 'Ashir Ki Memes',
      avatarUrl: require('../assets/reel/meme2.PNG'),
    },
    title: '😛Ab To Job Paki Hai😛',
    videoUrl: require('../assets/videos/videoplayback2.mp4'),
    likes: 196,
    commentsCount: 2,
    isLikedByMe: false,
    comments: [
      { user: 'Mumtaz Ali', text: 'Modi BSCS graduate from Daraz' },
      { user: 'Ahsan', text: 'Quantum Computation❌Kauntam Computation☑️' },
    ],
  },
  {
    id: 'reel-3',
    user: {
      name: 'Songs For Status',
      avatarUrl: require('../assets/reel/status1.PNG'),
    },
    title: 'Use Headphones🎧❤️',
    videoUrl: require('../assets/videos/videoplayback3.mp4'),
    likes: 12,
    commentsCount: 2,
    isLikedByMe: false,
    comments: [
      { user: 'Meer Hasnain', text: '❤️💞💙' },
      { user: 'Ayaz Hussain', text: 'Full Song link? 💙' },
    ],
  },
  {
    id: 'reel-4',
    user: {
      name: 'Movies Shorts',
      avatarUrl: require('../assets/reel/status2.PNG'),
    },
    title: 'Follow For More Statuses👉💕',
    videoUrl: require('../assets/videos/videoplayback4.mp4'),
    likes: 236,
    commentsCount: 2,
    isLikedByMe: false,
    comments: [
      { user: 'Waseem', text: 'Favorite Movie 💞' },
      { user: 'Prince ki Memes', text: 'Attitude 🤍' },
    ],
  },
  {
    id: 'reel-5',
    user: {
      name: 'Islamic Videos',
      avatarUrl: require('../assets/reel/islamic.PNG'),
    },
    title: 'Inshallah One Day☝️❤️',
    videoUrl: require('../assets/videos/videoplayback5.mp4'),
    likes: 125,
    commentsCount: 2,
    isLikedByMe: false,
    comments: [
      { user: 'Mufti Sami', text: 'Mashallah' },
      { user: 'Harry Here', text: 'I Love Madinah🧡' },
    ],
  },
];
