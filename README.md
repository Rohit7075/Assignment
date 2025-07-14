# Assignment
📸 Smart Photo Gallery with Location & Performance
A lightweight web app to upload, enhance, and display photos with geolocation and smart performance optimization.

✅ Project Overview
This project is a smart, responsive photo gallery built using vanilla HTML, CSS, and JavaScript. Users can upload images, which are displayed using the Canvas API, tagged with the user’s location, and optimized with lazy loading and background processing for smooth performance.

🚀 Features
Feature	Description
📁 File Upload	Upload multiple photos from your device
🎨 Canvas API	Display images and apply basic filters like grayscale or sepia
🌍 Geolocation API	Capture user's location when they upload a photo
👁️ Intersection Observer API	Lazy-load images as they scroll into view to improve performance
🔄 Background Task (Simulated)	Use setTimeout to simulate thumbnail processing without blocking UI
🧼 Progressive Enhancement	If location or background features fail, the gallery still works fine
💅 Clean UI	Responsive layout with scrollable grid, filter buttons, and error handling

🌐 Web APIs Used
API	Used For
Canvas API	Displaying and filtering images
Geolocation API	Attaching user’s location to each photo
Intersection Observer	Lazy loading images only when visible
Background Task (Simulated)	Thumbnail processing after upload using setTimeout

🗂️ Project Structure
matlab
Copy
Edit
smart-photo-gallery/
├── index.html
├── style.css
├── script.js
└── README.md
🧪 How It Works
User selects multiple images using file input

Each image is displayed on a <canvas>

Geolocation is fetched and saved with each image

Images are lazy-loaded using Intersection Observer

Background task simulates thumbnail processing after upload

🛠️ How to Run Locally
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/smart-photo-gallery.git
Open the folder in VS Code

Run with Live Server or open index.html in your browser

🖼️ Screenshots (optional)
Add screenshots here for better presentation:

Upload view

Filter buttons

Scrollable photo grid

Location info below photos

💡 Future Enhancements
Store photo metadata using localStorage

Allow location editing manually

Add more image filters (blur, brightness, contrast)

PWA support (offline usage)

👨‍💻 Author
Name: Rohit Dubey

Assignment: TAP Invest – Web API Project

Project: Smart Photo Gallery with Canvas & Geolocation
