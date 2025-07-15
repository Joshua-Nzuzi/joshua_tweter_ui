# **joshua_tweter_ui**

This is a **Twitter clone** built with **React** and **Tailwind CSS**. The app mimics the layout and core functionality of Twitter using dummy data. It includes features like user profiles, tweets, and interactions such as **likes**, **retweets**, and **comments**. The app is fully responsive, ensuring seamless usability on mobile, tablet, and desktop devices.

---

## **Features**

- 🚀 **Responsive Design**: The layout dynamically adjusts across all screen sizes using **Tailwind CSS**.
- 🧑‍💻 **User Profile**: Basic user profiles display user tweets, images, and interactive buttons.
- ✏️ **Tweeting**: Users can **type and post tweets** via an interactive text box on the Home page.
- ❤️ **Interactions**: Users can **like**, **retweet**, **comment**, and **share** tweets with real-time UI updates.
- 📦 **API Integration**: Fetches dummy data for posts and user profiles using:
   - **JSONPlaceholder**: Fetches dummy post data.
   - **RandomUser.me**: Fetches random user details and images.

---

## **Technologies Used**

- **React**: A JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern design.
- **React Router**: Enables client-side navigation between pages.
- **FontAwesome**: Provides icons for like, retweet, share, etc.
- **Vite**: Optimized development tool for blazing-fast builds and hot reloading.

---

## **Installation**

Follow the steps below to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Joshua-Nzuzi/joshua_tweter_ui.git
   
2. Navigate to the project directory:

   ```bash
   cd joshua_tweter_ui
3. Install project dependencies:

    ```bash
    npm install

4. Start the development server:

    ```bash
    npm run dev

5. Open the app in your browser by visiting:

    ```bash
    http://localhost:3000

## **Folder Structure**
Here's an overview of the project's folder structure:

twitter-clone/
│
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable components
│   │   ├── LeftSide.jsx     # Navigation sidebar on the left
│   │   ├── RightSide.jsx    # Trending and suggestions sidebar
│   │   ├── Home.jsx         # Main feed with posts and input area
│   │   ├── Profile.jsx      # User profile page with tweets
│   │   ├── CommentBox.jsx   # Comment input box
│   │   ├── Comment.jsx      # Comment display component
│   │
│   ├── pages/               # Placeholder pages for routing
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point of the app
│
├── public/                  # Static files
└── package.json             # Project dependencies and scripts

## **API Endpoints Used**

- **Posts API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com)  
  Fetches dummy posts for the tweet feed.

- **User Image API**: [RandomUser.me](https://randomuser.me)  
  Fetches random user data (names, profile pictures, usernames).

---

## **Usage**

Once the project is running, you can navigate through the following pages:

### **Home:**
- Post new tweets.
- Interact with existing tweets (like, comment, retweet, share).

### **Profile:**
- View user profile information.
- See a list of user tweets.

### **Other Sections:**
- Placeholder pages for Explore, Notifications, Messages, Bookmarks, and Lists.

---

## **Responsive Design**

This project uses **Tailwind CSS** to ensure responsiveness. Key features include:

- **Flexbox and Grid Layouts**: Components automatically stack vertically on small screens and display horizontally on larger screens.
- **Dynamic Widths**: Elements use `w-full`, `max-w-*`, and breakpoints like `sm`, `md`, and `lg` for adaptive sizing.
- **Interactive Buttons**: Hover and focus effects for better usability across devices.
- **Mobile First Design**: Ensures an optimized experience on smaller devices before scaling up.

---

## **Future Enhancements**

Here are features planned for future versions:

- 🔐 **Authentication**: Add user login and registration functionality.  
- 🗄️ **Database Integration**: Replace dummy data with a real backend (e.g., Firebase, MongoDB).  
- 💬 **Comment Functionality**: Implement real-time commenting on tweets.  
- 🖼️ **Media Support**: Allow users to upload and display images/videos in tweets.   

---

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature-branch

3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature XYZ"

4. Push to your branch:
   ```bash
   git push origin feature-branch
   
5. Submit a Pull Request.

## **Acknowledgements**

- **Inspiration**: Design and functionality inspired by Twitter.
- **Tools**: Built using React, Tailwind CSS, and Vite.

