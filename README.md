# Notes Management System

Notes Management System is a project that I have worked on and finished using React.JS as Front-End framework, and Firebase as the database system. 
This application is made in a very dynamic way, considering the user's vast demands at every point of implementation, making this project very user-friendly.

## About the project

### -> ReactMde

This project makes use of React.JS for the front-end, where ReactMde is a react library, which is the foundation on which this application is built upon.
All the typed in values or data, any changes made to this data, any tab change from one tab to another is passed as props to this library, which 
basically handles all this smoothly, and helps us in displaying the necessary data on the User Interface. 

### -> Split

This is another library component made especially for React framework, where we divide or split the window into any number of parts, in this case, 2 parts, where
one of them is a Sidebar and the other one is the Editor. Sidebar basically manages the number of notes added or deleted, while the Editor handles or
manages all the changes made to the contents of any of the notes one at a time.

### -> Debouncing

Debouncing is basically a concept, through which we can delay the time required for database to update according to the changes made in the application
by a specified amount of time. This is implemented in the app through useEffect() hook, and making use of setTimeOut() and clearTimeOut() functions.

### -> Firebase

Firebase is a major part of this project, as it maintains all the application data, which will be saved in a Firestore database, and we can manipulate
this data through React at any capacity, or whenever we want through some simple functions provided by Firebase, as a whole. This project could have been
implemented through localStorage, but that would have had too many limitations, so that is where Firebase comes in and helps us in making sure that our
data is being saved and manipulated seamlessly without any limitations.

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
