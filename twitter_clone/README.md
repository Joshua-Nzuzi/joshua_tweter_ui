# **Twitter Clone**

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
   git clone https://github.com/fouz0062/twitter_clone.git
   
2. Navigate to the project directory:

   ```bash
   cd twitter-clone
3. Install project dependencies:

    ```bash
    npm i

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

## **Screenshots**

Add app screenshots here:

- **Home Page**  
  ![image](https://github.com/user-attachments/assets/c527e6e2-4ca6-4c61-bd73-e2ef2a1c01e8)

- **User Profile Page**  
  ![image](https://github.com/user-attachments/assets/782bc56b-522f-4940-8f1b-99be8e81dd72)

- **Interactions**: Like, Retweet, Comment  
  ![image](https://github.com/user-attachments/assets/5d41418b-8a85-4713-b114-590cb6221c69)
  ![image](https://github.com/user-attachments/assets/80f27aa3-f928-4edf-b341-4722e2167a62)
  ![image](https://github.com/user-attachments/assets/4bfef01b-ad56-42c1-b501-d72985d2b8d4)


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


## **License**

This project is licensed under the MIT License. 

**MIT License**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## **Acknowledgements**

- **APIs**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and [RandomUser.me](https://randomuser.me/) for providing dummy data.
- **Inspiration**: Design and functionality inspired by Twitter.
- **Tools**: Built using React, Tailwind CSS, and Vite.

