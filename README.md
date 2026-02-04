// Behzad Ghabaei
// CS 81 - JavaScript 
// Assignment 9B
// UserProfile.jsx
// Instructor Seno
// 2/3/2026

# Module 9B - Custom Profile Component

## Description
This is a React app built with Vite. It contains a profile component styled with inline CSS.
to demonstrate component-based architecture and JSX syntax.

## What I Learned
- How to use JSX
- How to style with inline CSS
- How to create and render functional components
- The Vite Setup: Initializing a lightweight React environment.
- "JSX usage and exposure" Structuring layouts within JavaScript functions.  Noticing the different syntax.
- "Inline Styling:" Using JavaScript objects to define CSS properties.
- "Props:" (short for properties) Passing data from parent (App) to child (UserProfile) components.

## Challenges
Briefly describe any issues you encountered and how you resolved them. 
Finding an image for this imaginary person was sort of challenging, but I searched and found an older portrait of a Jane Doe.  The link works well, and much better than an emoji that I had originally selected. 
The first problem I encountered was that, the path to the file was challenging. I discovered that the Node.js command shell was not flexible about that. The git shell gave me an error message that, github was not found. I needed to connect to the website which was difficult at first. It was a  "Git Push Error:" I encountered:  `remote: Repository not found` error, when trying to push my code, with "git push -u origin main" 
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
<img width="1366" height="685" alt="JaneDoe" src="https://github.com/user-attachments/assets/ab45888e-ea02-4586-bacc-f8ce22256bff" />




-----(ignore everything below this line)-----------------------------------------------------------------------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
