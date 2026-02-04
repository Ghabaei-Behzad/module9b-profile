// Behzad Ghabaei
// CS 81 - JavaScript 
// Assignment 9B
// UserProfile.jsx
// Instructor Seno
// 2/3/2026

# Module 9B - Custom Profile Component

## Description
This is a React app built with Vite. It contains a profile component styled with inline CSS.
to demonstrate component-based architecture and JSX syntax. Includes two imaginary characters, bio with circular portrait, images, and toggle dark/light modes.

## What I Learned
- How to use JSX
- How to style with inline CSS
- How to create and render functional components
- The Vite Setup: Initializing a lightweight React environment.
- JSX usage and exposure. Structuring layouts within JavaScript functions.  Noticing the different syntax.
- Inline Styling: Using JavaScript objects to define CSS properties.
- Props: (short for properties) Passing data from parent (App) to child (UserProfile) components.

## Challenges
Briefly describe any issues you encountered and how you resolved them. 
Finding an image for this imaginary person was sort of challenging, I got two emojis. The emojis represent Alex Doe and Jane Smith. Two imaginary people. 
The first problem I encountered was that, the path to the file was challenging. I discovered that the Node.js command shell was not flexible. The git shell gave me an error message that, github was not found. I needed to connect to the website which was difficult at first. It was a  "Git Push Error:" I encountered:  `remote: Repository not found` error, when trying to push my code, with "git push -u origin main" 
Here is what the command prompt said: 
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.
I had to research this and I learned that I needed to manually create the repository on the [GitHub website](https://github.com) first. I also used `git remote set-url origin <URL>` to ensure there were no typos in the link.  GitHub uses a Personal Access Token (PAT) for HTTPS not a password. Here are some commands I used to get through and successfully transfer my files. 
// there was a problem so i used:
git remote -v
git remote remove origin
git remote add origin 
https://github.com
git push -u origin main

## Screenshot
Include a screenshot of your component.
added toggle dark mode, changed to this:

<img width="1366" height="725" alt="togglemode" src="https://github.com/user-attachments/assets/650d8055-e7a2-4239-b6a8-5c563f858e09" />









