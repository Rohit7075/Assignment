# 📸 Smart Photo Gallery with Location & Performance

This project is a simple and smart web application that allows users to upload their photos, apply visual effects, and automatically tag them with location data. The app is optimized for smooth performance, even on slow networks, using modern browser APIs.

It is built using **HTML**, **CSS**, and **JavaScript**, and uses multiple web APIs as part of the TAP Invest assignment.

---

## ✅ What This Project Does

- Allows users to **upload multiple images**
- Displays images using the **Canvas API**, with filters like grayscale or sepia
- Uses the **Geolocation API** to fetch and tag the user's location when a photo is uploaded
- Improves performance with **lazy loading** using the **Intersection Observer API**
- Simulates **background processing** using tasks that don’t block the main UI thread

---

## 🚀 Core Features

- Upload photos from your device
- Display each photo on a canvas with visual filters
- Automatically fetch and attach real-time location data
- Smoothly load images as you scroll
- Background task simulates thumbnail/image processing
- Clean, responsive, mobile-friendly UI

---

## 🔌 Web APIs Used

### 1. **Canvas API**
- Used to render uploaded images
- Allows applying filters like grayscale or sepia using JavaScript

### 2. **Geolocation API**
- Gets the user's current latitude and longitude when a photo is uploaded
- Adds location metadata to each image card

### 3. **Intersection Observer API**
- Detects when image cards enter the viewport
- Triggers lazy loading for smoother performance

### 4. **Background Task (Simulated)**
- Uses `setTimeout()` to process images in the background
- Mimics non-blocking thumbnail generation or metadata syncing

---

## 🛠 Technologies Used

- HTML5 for structure
- CSS3 for styling and layout
- Vanilla JavaScript for logic and API integrations

---

## 🗂 Folder Structure
smart-photo-gallery/
├── index.html # Main page
├── style.css # Styling
├── script.js # App logic and API handling
└── README.md # Project documentation
