# Random Bible Verse and Quote Generator Frontend

## Overview
This is a simple Vue.js frontend application that allows users to fetch a random Bible verse or an inspirational quote by clicking buttons. The application integrates with the backend **Random Bible Verse and Quote API** to display the results dynamically.

## Features
- Fetch and display a **random Bible verse**.
- Fetch and display a **random inspirational quote**.
- Responsive design for mobile and desktop devices.

## How to Check Site

[Random Bible & Quote Generator](<https://bible-verse-front-2.onrender.com>)



## Usage

### Buttons
- Click **"Generate Random Bible Verse"** to fetch a Bible verse.
- Click **"Generate Random Quote"** to fetch an inspirational quote.

### API Integration
- Ensure the backend API is running at `http://localhost:3000`.
- The frontend communicates with:
  - `GET /bible-verse/verse` for Bible verses.
  - `GET /bible-verse/quote` for quotes.

## Technologies Used
- **HTML5**: For structure.
- **CSS3**: For styling.
- **Vue.js**: For interactivity.

## Future Improvements
- Add error messages for failed API calls.
- Include loading spinners while fetching data.
- Expand with additional inspirational content.
