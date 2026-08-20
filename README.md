<h1 align="center">📸 Instagram Clone</h1>

<h3 align="center">A modern Instagram-style React Native mobile application with authentication, photo feeds, reels, search, post creation, social interactions, and profile management.</h3>

<p align="center">
  <a href="https://drive.google.com/file/d/1azC25-qXeVksHdTmMIeNdNztCMZR2H_a/view?usp=sharing" target="_blank">
    <img src="https://img.shields.io/badge/📲%20Download%20APK-4CAF50?style=for-the-badge&logo=android&logoColor=white" alt="Download APK">
  </a>
</p>

<p align="center"><i>Debug build — enable "Install from unknown sources" on Android if required.</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit">
  <img src="https://img.shields.io/badge/Pexels-05A081?style=for-the-badge&logo=pexels&logoColor=white" alt="Pexels API">
</p>

<h3 align="center">📸 Screenshots</h3>

<p align="center">
  <img src="./screenshots/home.jpeg" width="190">
  <img src="./screenshots/search.jpeg" width="190">
  <img src="./screenshots/reels.jpeg" width="190">
  <img src="./screenshots/profile.jpeg" width="190">
  <img src="./screenshots/add-post.jpeg" width="190">
  <img src="./screenshots/login.jpeg" width="190">
</p>

<p align="center"><i>Instagram-style feed, search, reels, profile, and post creation experience.</i></p>

<h2>About the Project</h2>

<p>
This project is an Instagram-inspired mobile application built with React Native. It was developed to explore how a modern social media application can be structured across multiple screens while working with real authentication, external APIs, local state persistence, media selection, and video playback.
</p>

<p>
The application uses Firebase Authentication for user accounts, Pexels for remote photo and video content, and Redux Toolkit with Redux Persist for managing and storing local application state.
</p>

<h2>Features</h2>

<ul>
  <li><strong>Authentication</strong> — Email/password registration and login, password reset, validation, password visibility controls, and logout using Firebase Authentication.</li>
  <li><strong>Home Feed</strong> — Instagram-style stories and a scrollable photo feed powered by the Pexels API.</li>
  <li><strong>Search</strong> — Search Pexels images with debounced requests, featured results, grid browsing, retry handling, and empty states.</li>
  <li><strong>Create Post</strong> — Select an image from the gallery or capture one using the camera, preview it, add a caption, and create a local post.</li>
  <li><strong>Reels</strong> — Full-screen vertical video browsing with autoplay, pause/play controls, likes, comments, and pagination.</li>
  <li><strong>Likes</strong> — Like state for posts and reels is managed with Redux and persisted locally.</li>
  <li><strong>Comments</strong> — Shared comment interface for posts and reels with emoji shortcuts and comment creation.</li>
  <li><strong>Profile</strong> — Profile information, post count, followers/following sections, discover-people cards, and profile navigation.</li>
  <li><strong>Settings</strong> — Account and settings screen with logout functionality.</li>
</ul>

<h2>Tech Stack</h2>

<p>
The application is built using the following technologies:
</p>

<ul>
  <li>React Native</li>
  <li>React Navigation</li>
  <li>TypeScript and JavaScript</li>
  <li>Redux Toolkit</li>
  <li>Redux Persist</li>
  <li>AsyncStorage</li>
  <li>Firebase Authentication</li>
  <li>Pexels API</li>
  <li>React Native Video</li>
  <li>Camera and gallery media selection</li>
</ul>

<h2>Architecture</h2>

<p>
The project follows a feature-oriented React Native structure. Screens are responsible for application flows, shared components handle reusable UI, services handle remote data, and Redux manages persistent local state.
</p>

<ul>
  <li><strong>App Shell</strong> — Provides Redux, Redux Persist, and Safe Area context before rendering the navigation tree.</li>
  <li><strong>Navigation</strong> — Combines stack navigation for authentication and detail screens with bottom tabs for the main application.</li>
  <li><strong>Feature Screens</strong> — Authentication, home feed, search, post creation, reels, profile, settings, followers/following, and post details.</li>
  <li><strong>Shared Components</strong> — Reusable post cards, stories, modals, and comments components.</li>
  <li><strong>State Management</strong> — Redux Toolkit manages likes and locally-created posts, while Redux Persist stores selected state using AsyncStorage.</li>
  <li><strong>Remote Media</strong> — Pexels provides photos for the feed and search experience and videos for reels.</li>
</ul>

<h2>Navigation</h2>

<p>
The application uses a root stack navigator together with bottom tab navigation.
</p>

<h3>Authentication and Secondary Screens</h3>

<ul>
  <li>Login</li>
  <li>Sign Up</li>
  <li>Main Application</li>
  <li>Settings</li>
  <li>Followers / Following</li>
  <li>Post Detail</li>
</ul>

<h3>Main Tabs</h3>

<ul>
  <li>Home</li>
  <li>Search</li>
  <li>Add Post</li>
  <li>Reels</li>
  <li>Profile</li>
</ul>

<h2>Project Structure</h2>

<pre>
src/
  api/
    PexelsClient.ts

  components/
    PostItem.tsx
    StoryItem.tsx

  config/
    env.ts

  modals/
    AppModal.js
    CommentModal/

  navigation/
    AppNavigator.tsx
    BottomTabs.tsx

  screens/
    LoginScreen/
    SignUpScreen/
    HomeScreen/
    SearchScreen/
    AddScreen/
    ReelsScreen/
    ProfileScreen/
    DrawerScreen/
    FollowListScreen/
    PostDetailScreen/

  services/
    FeedService.ts
    ReelsService.ts

  store/
    index.js
    likesSlice.js
    postsSlice.js
</pre>

<h2>Authentication</h2>

<p>
Firebase Authentication handles the application's email and password authentication flow.
</p>

<ul>
  <li>Email/password sign in</li>
  <li>New account registration</li>
  <li>Password reset emails</li>
  <li>Password visibility toggle</li>
  <li>Firebase error handling</li>
  <li>Logout</li>
</ul>

<p>
The authentication screens also include input validation, password confirmation, modal-based feedback, and navigation into the main application after a successful login or registration.
</p>

<h2>Home Feed</h2>

<p>
The home screen is designed around the familiar Instagram browsing experience. Stories appear at the top, followed by a vertically scrolling photo feed.
</p>

<ul>
  <li>Pexels-powered photo content</li>
  <li>Instagram-style stories</li>
  <li>Persistent likes</li>
  <li>Comment interactions</li>
  <li>Post detail navigation</li>
  <li>Pagination and load-more behavior</li>
  <li>Pexels attribution</li>
</ul>

<h2>Search</h2>

<p>
The search screen connects directly to the Pexels API and provides an image discovery experience with both featured content and grid-based results.
</p>

<ul>
  <li>Debounced search queries</li>
  <li>600ms delay between typing and API requests</li>
  <li>Featured search result</li>
  <li>Grid-based image results</li>
  <li>Clear search functionality</li>
  <li>Retry handling for API errors</li>
  <li>Empty search states</li>
</ul>

<h2>Create Post</h2>

<p>
The Add Post screen provides a complete local post creation flow.
</p>

<ul>
  <li>Capture an image using the camera</li>
  <li>Select an image from the gallery</li>
  <li>Preview the selected image</li>
  <li>Add a caption</li>
  <li>Share the post</li>
  <li>Persist created posts using Redux Persist</li>
  <li>Display success and error feedback using reusable modals</li>
</ul>

<h2>Reels</h2>

<p>
The Reels screen provides a full-screen vertical video experience using portrait and lifestyle videos supplied by Pexels.
</p>

<ul>
  <li>Automatic playback based on visibility</li>
  <li>Tap-to-pause and play</li>
  <li>Reel likes</li>
  <li>Reel comments</li>
  <li>Full-screen vertical video layout</li>
  <li>Load-more behavior while scrolling</li>
  <li>React Native Video playback</li>
</ul>

<h2>Profile</h2>

<p>
The profile screen combines local application state with profile data to provide an Instagram-inspired account experience.
</p>

<ul>
  <li>Profile information</li>
  <li>Dynamic locally-created post count</li>
  <li>Followers and following sections</li>
  <li>Discover people cards</li>
  <li>Quick access to post creation</li>
  <li>Settings and privacy access</li>
  <li>Posts, reels, and tagged content tabs</li>
</ul>

<h2>State Management</h2>

<p>
Redux Toolkit is used for application state that needs to remain available across screens and application launches.
</p>

<ul>
  <li><strong>Likes Slice</strong> — Stores liked posts and reels.</li>
  <li><strong>Posts Slice</strong> — Stores locally-created posts and related post information.</li>
  <li><strong>Redux Persist</strong> — Persists selected Redux state using AsyncStorage.</li>
</ul>

<p>
As a result, likes and locally-created posts remain available after restarting the application without requiring a dedicated social-media backend.
</p>

<h2>Reusable Components</h2>

<h3>PostItem</h3>

<p>
The main reusable post component used throughout the feed and post detail experience.
</p>

<ul>
  <li>User avatar and name</li>
  <li>Optional location and verification badge</li>
  <li>Post image</li>
  <li>Like interaction</li>
  <li>Comment interaction</li>
  <li>Caption and comment count</li>
</ul>

<h3>StoryItem</h3>

<p>
A reusable story component responsible for the circular story presentation and the user's "Your Story" state.
</p>

<h3>AppModal</h3>

<p>
A shared modal component used for success, error, and informational feedback throughout authentication, post creation, and logout flows.
</p>

<h3>CommentModal</h3>

<p>
A reusable bottom-sheet comment interface shared by posts and reels. It supports existing comments, emoji shortcuts, and creating new comments.
</p>

<h2>Data Flow</h2>

<pre>
Firebase Authentication
        |
        v
  Login / Sign Up
        |
        v
   Main Application
        |
  +-----+-------+---------+
  |     |       |         |
  v     v       v         v
Feed  Search   Reels    Profile
  |     |       |         |
  +-----+-------+---------+
              |
              v
          Pexels API

User-created posts -> Redux -> Redux Persist
Likes               -> Redux -> Redux Persist

Comments            -> Local Component State
Followers/Following -> Mock Local Data
</pre>

<h2>Setup</h2>

<h3>Prerequisites</h3>

<p>
Before running the project, make sure you have the following installed:
</p>

<ul>
  <li>Node.js</li>
  <li>React Native development environment</li>
  <li>Android Studio and Android SDK for Android builds</li>
  <li>JDK compatible with the project's React Native version</li>
  <li>A Firebase project</li>
  <li>A Pexels API account and API key</li>
</ul>

<h3>Installation</h3>

<pre>
git clone &lt;repository-url&gt;
cd Instagramclone
npm install
</pre>

<h3>Android</h3>

<p>
Start an Android emulator or connect a physical Android device, then run:
</p>

<pre>
npx react-native run-android
</pre>

<p>
To generate a release APK on Windows:
</p>

<pre>
cd android
.\gradlew.bat assembleRelease
</pre>

<p>
The generated APK can normally be found at:
</p>

<pre>
android/app/build/outputs/apk/release/app-release.apk
</pre>

<h2>Environment Variables and Configuration</h2>

<p>
The application requires a Pexels API key for the feed, search, and reels features.
</p>

<p>
The current project expects the Pexels configuration through:
</p>

<pre>
src/config/env.ts
</pre>

<p>
Add the required API key to the configuration used by the project before running the application. Keep private API credentials out of public repositories where possible.
</p>

<p>
Firebase also needs to be configured for the authentication flow. Make sure the Firebase configuration included in the Android project points to the Firebase project you intend to use.
</p>

<h2>Important Limitations</h2>

<p>
This project focuses on demonstrating a realistic social-media mobile experience and a clean React Native architecture. It is not intended to be a complete production social network.
</p>

<ul>
  <li><strong>No dedicated social backend</strong> — Posts, comments, followers, and profile relationships are not currently backed by a social-media database.</li>
  <li><strong>Posts are stored locally</strong> — User-created posts are persisted with Redux Persist rather than uploaded to a remote server.</li>
  <li><strong>Media upload is simulated</strong> — The Add Post flow handles local media selection and post creation but does not upload media to Firebase Storage.</li>
  <li><strong>Created posts do not appear in the Pexels feed</strong> — The main feed currently displays content retrieved from Pexels.</li>
  <li><strong>Comments are local</strong> — Comments are maintained in component state and are not persisted to a backend.</li>
  <li><strong>Followers and following use mock data</strong> — These relationships are not connected to Firebase or another backend service.</li>
  <li><strong>Search is based on Pexels</strong> — Search results represent external Pexels media rather than content uploaded by application users.</li>
  <li><strong>Settings is implemented as a screen</strong> — The current settings/privacy experience is not implemented as a native drawer navigator.</li>
  <li><strong>Authentication restoration can be improved</strong> — A centralized Firebase authentication state listener can be added to provide more robust session restoration when the application starts.</li>
  <li><strong>Limited automated testing</strong> — The project currently contains basic testing rather than comprehensive unit, integration, and end-to-end coverage.</li>
</ul>

<h2>Future Improvements</h2>

<p>
The current implementation provides a good foundation for expanding the application into a more complete social platform. Some of the next improvements would include:
</p>

<ul>
  <li>Upload user media to Firebase Storage</li>
  <li>Store posts and comments in Firestore</li>
  <li>Implement real follower and following relationships</li>
  <li>Combine user-created posts with the main feed</li>
  <li>Add centralized Firebase authentication state management</li>
  <li>Persist comments remotely</li>
  <li>Synchronize likes with a backend</li>
  <li>Add push notifications</li>
  <li>Add direct messaging</li>
  <li>Expand unit and integration test coverage</li>
  <li>Add stronger error handling and offline states</li>
</ul>

<h2>Project Purpose</h2>

<p>
This project was built as a React Native learning and portfolio project inspired by Instagram.
</p>

<p>
The main goal was to build more than a collection of static screens. The application combines real Firebase authentication, external photo and video APIs, persistent local state, media selection, video playback, reusable components, and structured navigation into a single mobile application.
</p>

<h2>What I Learned</h2>

<ul>
  <li>Building multi-screen React Native applications with React Navigation</li>
  <li>Implementing Firebase email/password authentication</li>
  <li>Integrating REST APIs for remote image and video content</li>
  <li>Managing application state with Redux Toolkit</li>
  <li>Persisting state using Redux Persist and AsyncStorage</li>
  <li>Designing reusable post, story, modal, and comment components</li>
  <li>Building vertical video feeds with React Native Video</li>
  <li>Working with camera and gallery media selection</li>
  <li>Handling API loading, pagination, retry, and empty states</li>
  <li>Designing mobile interfaces based on familiar social-media interaction patterns</li>
</ul>

<h2>Contact</h2>

<div align="center">

  <a href="https://www.linkedin.com/in/ali-raza-42965a237/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>

  <a href="mailto:razabugtiali@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>

  <a href="https://alirazaaaportfolio.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio">
  </a>

</div>

<p align="center">
  ⭐ If you found this project useful or interesting, feel free to explore the code and give the repository a star.
</p>
