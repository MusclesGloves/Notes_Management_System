# 📝 Notes Management App

A full-featured **Markdown Notes Management App** built with **ReactJS**, **Firebase**, and **React-MDE**. Create, edit, and delete notes seamlessly with real-time updates, auto-save, and markdown preview support.

Check out the project over here : 

https://68330d768988c67ee3fc5f3f--notesmanagementsystem-reactjs.netlify.app/

---

## ✨ Features

- 📋 Create, edit, and delete notes
- 🧠 Auto-save note edits after a delay
- ⏱️ Notes are sorted by last updated time
- 🔥 Real-time syncing with Firebase Firestore
- ✍️ Rich markdown editing using **React-MDE**
- 💡 Responsive and intuitive UI with Split.js

---

## 🛠️ Tech Stack

- **ReactJS 17**
- **Firebase Firestore** (for real-time DB)
- **React-MDE** (for rich markdown editing)
- **Showdown** (markdown to HTML conversion)
- **React-Split** (for adjustable panes)
- **NanoID** (for unique identifiers)

---

## 🚀 Getting Started

- 🔧 Install Dependencies - npm install
- 🧪 Start Development Server - npm run dev

## 🗂️ Project Structure

src/
- App.jsx               - Main application component
- firebase.js           - Firebase setup and config
- index.jsx             - ReactDOM entry point
- index.html            - HTML template
- style.css             - Styles
- components/
    - Editor.jsx        - Markdown editor using React-MDE
    - Sidebar.jsx       - Sidebar with list of notes and controls

## 🧠 Functionality Highlights

📝 Note Creation
- Adds a new markdown note with a default template.

- Automatically sets the new note as active.

💾 Auto-Save Logic
- Text is stored locally in state and only saved to Firestore after 500ms of inactivity (debounced save).

🗑️ Deleting Notes
- Notes can be deleted from the sidebar using the trash icon.

- Immediate update in the UI and Firestore.


## Screenshots

### Startup Page :


![image](https://github.com/user-attachments/assets/a7693ae4-cbde-4ce7-9835-ae50244b98f3)



### First Page :


![image](https://github.com/user-attachments/assets/78791c31-fc0e-435c-9661-88f11ac95652)



## After Adding Notes :


![image](https://github.com/user-attachments/assets/03dd3428-52e5-42d9-8228-c3edbe361424)



## After Deleting Some Notes :


![image](https://github.com/user-attachments/assets/64ab609e-f216-486c-883a-9e819e61643b)



## Editing the Contents of a Note :


![image](https://github.com/user-attachments/assets/a24088c6-e777-4c7d-a8d1-fb59c59d8199)

## 📄 License

This project is licensed under the MIT License.
