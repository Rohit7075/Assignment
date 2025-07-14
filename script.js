
        // // Global variables
        // let photos = [];
        // let currentFilter = 'none';
        // let backgroundTaskScheduler;
        // let intersectionObserver;
        // let locationEnabled = false;
        // let processedCount = 0;
        // let networkInfo = null;

        // // Initialize application
        // document.addEventListener('DOMContentLoaded', function() {
        //     initializeAPIs();
        //     setupEventListeners();
        //     updateNetworkStatus();
        // });

        // // 1. BACKGROUND TASKS API - Initialize background task scheduler
        // function initializeBackgroundTasks() {
        //     if ('requestIdleCallback' in window) {
        //         backgroundTaskScheduler = {
        //             schedule: function(callback, options = {}) {
        //                 return requestIdleCallback(callback, options);
        //             },
        //             cancel: function(id) {
        //                 cancelIdleCallback(id);
        //             }
        //         };
        //         console.log('✅ Background Tasks API initialized');
        //     } else {
        //         // Fallback for browsers without requestIdleCallback
        //         backgroundTaskScheduler = {
        //             schedule: function(callback) {
        //                 return setTimeout(callback, 0);
        //             },
        //             cancel: function(id) {
        //                 clearTimeout(id);
        //             }
        //         };
        //         console.log('⚠️ Background Tasks API not supported, using fallback');
        //     }
        // }

        // // 2. GEOLOCATION API - Get user location
        // function initializeGeolocation() {
        //     if ('geolocation' in navigator) {
        //         navigator.geolocation.getCurrentPosition(
        //             function(position) {
        //                 locationEnabled = true;
        //                 console.log('✅ Geolocation API initialized');
        //                 console.log('📍 Location:', position.coords.latitude, position.coords.longitude);
        //                 showLocationStatus('✅ Location access granted');
        //             },
        //             function(error) {
        //                 locationEnabled = false;
        //                 let errorMessage = '';
        //                 switch(error.code) {
        //                     case error.PERMISSION_DENIED:
        //                         errorMessage = '❌ Location access denied by user';
        //                         break;
        //                     case error.POSITION_UNAVAILABLE:
        //                         errorMessage = '⚠️ Location information unavailable';
        //                         break;
        //                     case error.TIMEOUT:
        //                         errorMessage = '⏱️ Location request timed out';
        //                         break;
        //                     default:
        //                         errorMessage = '❓ Unknown location error';
        //                         break;
        //                 }
        //                 console.log(errorMessage);
        //                 showLocationStatus(errorMessage);
        //             },
        //             {
        //                 enableHighAccuracy: true,
        //                 timeout: 10000,
        //                 maximumAge: 60000
        //             }
        //         );
        //     } else {
        //         console.log('⚠️ Geolocation API not supported');
        //         locationEnabled = false;
        //         showLocationStatus('⚠️ Geolocation not supported');
        //     }
        // }

        // // 3. NETWORK INFORMATION API - Monitor connection
        // function initializeNetworkInfo() {
        //     if ('connection' in navigator) {
        //         networkInfo = navigator.connection;
        //         console.log('✅ Network Information API initialized');
        //         updateNetworkStatus();
                
        //         // Listen for network changes
        //         networkInfo.addEventListener('change', updateNetworkStatus);
        //     } else {
        //         console.log('⚠️ Network Information API not supported');
        //     }
        // }

        // // 4. INTERSECTION OBSERVER API - Lazy loading
        // function initializeIntersectionObserver() {
        //     if ('IntersectionObserver' in window) {
        //         intersectionObserver = new IntersectionObserver(
        //             function(entries) {
        //                 entries.forEach(entry => {
        //                     if (entry.isIntersecting) {
        //                         const photoCard = entry.target;
        //                         const canvas = photoCard.querySelector('.photo-canvas');
        //                         const photoData = photos.find(p => p.id === photoCard.dataset.photoId);
                                
        //                         if (photoData && !photoData.loaded) {
        //                             loadPhotoToCanvas(canvas, photoData);
        //                             photoData.loaded = true;
        //                             intersectionObserver.unobserve(photoCard);
        //                         }
        //                     }
        //                 });
        //             },
        //             { threshold: 0.1, rootMargin: '50px' }
        //         );
        //         console.log('✅ Intersection Observer API initialized');
        //     } else {
        //         console.log('⚠️ Intersection Observer API not supported');
        //     }
        // }

        // // Initialize all APIs
        // function initializeAPIs() {
        //     initializeBackgroundTasks();
        //     initializeGeolocation();
        //     initializeNetworkInfo();
        //     initializeIntersectionObserver();
        // }

        // // Setup event listeners
        // function setupEventListeners() {
        //     const fileInput = document.getElementById('fileInput');
        //     const uploadArea = document.getElementById('uploadArea');

        //     // File input change
        //     fileInput.addEventListener('change', handleFileSelect);

        //     // Drag and drop
        //     uploadArea.addEventListener('dragover', handleDragOver);
        //     uploadArea.addEventListener('dragleave', handleDragLeave);
        //     uploadArea.addEventListener('drop', handleDrop);
        //     uploadArea.addEventListener('click', () => fileInput.click());
        // }

        // // Handle file selection
        // function handleFileSelect(event) {
        //     const files = Array.from(event.target.files);
        //     processFiles(files);
        // }

        // // Drag and drop handlers
        // function handleDragOver(event) {
        //     event.preventDefault();
        //     event.currentTarget.classList.add('dragover');
        // }

        // function handleDragLeave(event) {
        //     event.currentTarget.classList.remove('dragover');
        // }

        // function handleDrop(event) {
        //     event.preventDefault();
        //     event.currentTarget.classList.remove('dragover');
        //     const files = Array.from(event.dataTransfer.files);
        //     processFiles(files);
        // }

        // // Process uploaded files
        // function processFiles(files) {
        //     const imageFiles = files.filter(file => file.type.startsWith('image/'));
        //     let processed = 0;
            
        //     imageFiles.forEach((file, index) => {
        //         const reader = new FileReader();
        //         reader.onload = function(e) {
        //             const photoData = {
        //                 id: 'photo_' + Date.now() + '_' + index,
        //                 file: file,
        //                 dataUrl: e.target.result,
        //                 name: file.name,
        //                 size: file.size,
        //                 uploadTime: new Date(),
        //                 location: null,
        //                 loaded: false
        //             };

        //             photos.push(photoData);
                    
        //             // Get location for this photo
        //             if (locationEnabled) {
        //                 getLocationForPhoto(photoData);
        //             }

        //             // Create photo card
        //             createPhotoCard(photoData);
                    
        //             // Update progress
        //             processed++;
        //             updateProgress(processed, imageFiles.length);
                    
        //             if (processed === imageFiles.length) {
        //                 updateStats();
        //                 // Schedule background processing
        //                 scheduleBackgroundProcessing();
        //             }
        //         };
        //         reader.readAsDataURL(file);
        //     });
        // }

        // // Get location for a photo
        // function getLocationForPhoto(photoData) {
        //     if (!locationEnabled) {
        //         // Use mock location for demonstration
        //         photoData.location = generateMockLocation();
        //         const photoCard = document.querySelector(`[data-photo-id="${photoData.id}"]`);
        //         if (photoCard) {
        //             updatePhotoCardLocation(photoCard, photoData.location);
        //         }
        //         updateStats();
        //         return;
        //     }

        //     navigator.geolocation.getCurrentPosition(
        //         function(position) {
        //             photoData.location = {
        //                 latitude: position.coords.latitude,
        //                 longitude: position.coords.longitude,
        //                 accuracy: position.coords.accuracy
        //             };
                    
        //             // Update the photo card with location info
        //             const photoCard = document.querySelector(`[data-photo-id="${photoData.id}"]`);
        //             if (photoCard) {
        //                 updatePhotoCardLocation(photoCard, photoData.location);
        //             }
                    
        //             updateStats();
        //         },
        //         function(error) {
        //             console.log('Location access denied for photo:', photoData.name);
        //             // Use mock location as fallback
        //             photoData.location = generateMockLocation();
        //             const photoCard = document.querySelector(`[data-photo-id="${photoData.id}"]`);
        //             if (photoCard) {
        //                 updatePhotoCardLocation(photoCard, photoData.location);
        //             }
        //             updateStats();
        //         },
        //         {
        //             enableHighAccuracy: false,
        //             timeout: 5000,
        //             maximumAge: 300000
        //         }
        //     );
        // }

        // // Create photo card HTML
        // function createPhotoCard(photoData) {
        //     const gallery = document.getElementById('gallery');
        //     const photoCard = document.createElement('div');
        //     photoCard.className = 'photo-card';
        //     photoCard.dataset.photoId = photoData.id;
            
        //     photoCard.innerHTML = `
        //         <div class="photo-container">
        //             <div class="loading-placeholder">Loading...</div>
        //             <canvas class="photo-canvas" style="display: none;"></canvas>
        //         </div>
        //         <div class="photo-info">
        //             <h3>${photoData.name}</h3>
        //             <div class="location-info">
        //                 <span class="location-icon">📍</span>
        //                 <span class="location-text">Getting location...</span>
        //             </div>
        //             <div class="photo-meta">
        //                 <span>${(photoData.size / 1024).toFixed(1)} KB</span>
        //                 <span>${photoData.uploadTime.toLocaleTimeString()}</span>
        //             </div>
        //         </div>
        //     `;

        //     gallery.appendChild(photoCard);
            
        //     // Use Intersection Observer for lazy loading
        //     if (intersectionObserver) {
        //         intersectionObserver.observe(photoCard);
        //     } else {
        //         // Fallback: load immediately
        //         const canvas = photoCard.querySelector('.photo-canvas');
        //         loadPhotoToCanvas(canvas, photoData);
        //         photoData.loaded = true;
        //     }

        //     // Animate card appearance
        //     setTimeout(() => {
        //         photoCard.classList.add('loaded');
        //     }, 100);
        // }

        // // 5. CANVAS API - Load and process image
        // function loadPhotoToCanvas(canvas, photoData) {
        //     const ctx = canvas.getContext('2d');
        //     const img = new Image();
            
        //     img.onload = function() {
        //         // Set canvas size
        //         const container = canvas.parentElement;
        //         canvas.width = container.offsetWidth;
        //         canvas.height = container.offsetHeight;
                
        //         // Calculate scaling to fit container
        //         const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        //         const scaledWidth = img.width * scale;
        //         const scaledHeight = img.height * scale;
        //         const x = (canvas.width - scaledWidth) / 2;
        //         const y = (canvas.height - scaledHeight) / 2;
                
        //         // Clear canvas and draw image
        //         ctx.clearRect(0, 0, canvas.width, canvas.height);
        //         ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
                
        //         // Apply current filter
        //         applyCanvasFilter(ctx, canvas, currentFilter);
                
        //         // Show canvas, hide placeholder
        //         canvas.style.display = 'block';
        //         const placeholder = container.querySelector('.loading-placeholder');
        //         if (placeholder) {
        //             placeholder.style.display = 'none';
        //         }
        //     };
            
        //     img.src = photoData.dataUrl;
        // }

        // // Apply filters using Canvas API
        // function applyCanvasFilter(ctx, canvas, filter) {
        //     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        //     const data = imageData.data;
            
        //     switch (filter) {
        //         case 'grayscale':
        //             for (let i = 0; i < data.length; i += 4) {
        //                 const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        //                 data[i] = gray;
        //                 data[i + 1] = gray;
        //                 data[i + 2] = gray;
        //             }
        //             break;
        //         case 'sepia':
        //             for (let i = 0; i < data.length; i += 4) {
        //                 const r = data[i];
        //                 const g = data[i + 1];
        //                 const b = data[i + 2];
        //                 data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
        //                 data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
        //                 data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
        //             }
        //             break;
        //         case 'blur':
        //             // Simple box blur
        //             const blurRadius = 2;
        //             const tempData = new Uint8ClampedArray(data);
        //             for (let y = blurRadius; y < canvas.height - blurRadius; y++) {
        //                 for (let x = blurRadius; x < canvas.width - blurRadius; x++) {
        //                     let r = 0, g = 0, b = 0;
        //                     let count = 0;
        //                     for (let dy = -blurRadius; dy <= blurRadius; dy++) {
        //                         for (let dx = -blurRadius; dx <= blurRadius; dx++) {
        //                             const i = ((y + dy) * canvas.width + (x + dx)) * 4;
        //                             r += tempData[i];
        //                             g += tempData[i + 1];
        //                             b += tempData[i + 2];
        //                             count++;
        //                         }
        //                     }
        //                     const i = (y * canvas.width + x) * 4;
        //                     data[i] = r / count;
        //                     data[i + 1] = g / count;
        //                     data[i + 2] = b / count;
        //                 }
        //             }
        //             break;
        //     }
            
        //     if (filter !== 'none') {
        //         ctx.putImageData(imageData, 0, 0);
        //     }
        // }

        // // Set filter for all photos
        // function setFilter(filter) {
        //     currentFilter = filter;
            
        //     // Update button states
        //     document.querySelectorAll('.btn-secondary').forEach(btn => {
        //         btn.classList.remove('active');
        //     });
        //     document.getElementById('filter' + filter.charAt(0).toUpperCase() + filter.slice(1)).classList.add('active');
            
        //     // Reapply filter to all loaded photos
        //     document.querySelectorAll('.photo-canvas').forEach(canvas => {
        //         if (canvas.style.display !== 'none') {
        //             const photoId = canvas.closest('.photo-card').dataset.photoId;
        //             const photoData = photos.find(p => p.id === photoId);
        //             if (photoData) {
        //                 loadPhotoToCanvas(canvas, photoData);
        //             }
        //         }
        //     });
        // }

        // // Update photo card with location
        // function updatePhotoCardLocation(photoCard, location) {
        //     const locationText = photoCard.querySelector('.location-text');
        //     if (location) {
        //         if (location.isMock) {
        //             locationText.textContent = `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)} (Demo)`;
        //         } else {
        //             locationText.textContent = `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}`;
        //         }
        //     } else {
        //         locationText.textContent = 'Location unavailable';
        //     }
        // }

        // // Generate mock location for demo purposes
        // function generateMockLocation() {
        //     // Generate random coordinates around Delhi, India
        //     const baseLatitude = 28.6139;
        //     const baseLongitude = 77.2090;
        //     const randomOffset = () => (Math.random() - 0.5) * 0.1; // ±0.05 degrees
            
        //     return {
        //         latitude: baseLatitude + randomOffset(),
        //         longitude: baseLongitude + randomOffset(),
        //         accuracy: 10,
        //         isMock: true
        //     };
        // }

        // // Show location status to user
        // function showLocationStatus(message) {
        //     // Create or update location status message
        //     let statusDiv = document.getElementById('locationStatus');
        //     if (!statusDiv) {
        //         statusDiv = document.createElement('div');
        //         statusDiv.id = 'locationStatus';
        //         statusDiv.style.cssText = `
        //             position: fixed;
        //             top: 70px;
        //             right: 20px;
        //             background: white;
        //             padding: 10px 15px;
        //             border-radius: 25px;
        //             box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        //             z-index: 1000;
        //             font-size: 0.9em;
        //             max-width: 300px;
        //         `;
        //         document.body.appendChild(statusDiv);
        //     }
            
        //     statusDiv.textContent = message;
        //     statusDiv.style.display = 'block';
            
        //     // Hide after 5 seconds
        //     setTimeout(() => {
        //         statusDiv.style.display = 'none';
        //     }, 5000);
        // }

        // // Schedule background processing
        // function scheduleBackgroundProcessing() {
        //     if (!backgroundTaskScheduler) return;
            
        //     backgroundTaskScheduler.schedule(function(deadline) {
        //         // Process thumbnails or other heavy operations
        //         photos.forEach(photo => {
        //             if (deadline.timeRemaining() > 0 && !photo.backgroundProcessed) {
        //                 // Simulate background processing
        //                 photo.backgroundProcessed = true;
        //                 processedCount++;
        //                 updateStats();
        //             }
        //         });
        //     });
        // }

        // // Update network status
        // function updateNetworkStatus() {
        //     const networkDot = document.getElementById('networkDot');
        //     const networkText = document.getElementById('networkText');
        //     const networkType = document.getElementById('networkType');
            
        //     if (networkInfo) {
        //         const effectiveType = networkInfo.effectiveType;
        //         const downlink = networkInfo.downlink;
                
        //         networkType.textContent = effectiveType || 'Unknown';
                
        //         if (effectiveType === '4g' || downlink > 2) {
        //             networkDot.className = 'network-dot';
        //             networkText.textContent = 'Fast';
        //         } else if (effectiveType === '3g' || downlink > 0.5) {
        //             networkDot.className = 'network-dot slow';
        //             networkText.textContent = 'Slow';
        //         } else {
        //             networkDot.className = 'network-dot offline';
        //             networkText.textContent = 'Very Slow';
        //         }
        //     } else {
        //         networkText.textContent = 'Unknown';
        //         networkType.textContent = 'Unknown';
        //     }
        // }

        // // Update progress bar
        // function updateProgress(current, total) {
        //     const progressFill = document.getElementById('progressFill');
        //     const percentage = (current / total) * 100;
        //     progressFill.style.width = percentage + '%';
            
        //     if (current === total) {
        //         setTimeout(() => {
        //             progressFill.style.width = '0%';
        //         }, 1000);
        //     }
        // }

        // // Update statistics
        // function updateStats() {
        //     document.getElementById('photoCount').textContent = photos.length;
        //     document.getElementById('locationCount').textContent = photos.filter(p => p.location).length;
        //     document.getElementById('processedCount').textContent = processedCount;
        // }

        // // Request location permission manually
        // function requestLocationPermission() {
        //     if ('geolocation' in navigator) {
        //         showLocationStatus('🔄 Requesting location permission...');
        //         navigator.geolocation.getCurrentPosition(
        //             function(position) {
        //                 locationEnabled = true;
        //                 showLocationStatus('✅ Location access granted!');
        //                 console.log('✅ Location permission granted');
                        
        //                 // Update existing photos with location
        //                 photos.forEach(photo => {
        //                     if (!photo.location) {
        //                         getLocationForPhoto(photo);
        //                     }
        //                 });
        //             },
        //             function(error) {
        //                 locationEnabled = false;
        //                 let errorMessage = '';
        //                 switch(error.code) {
        //                     case error.PERMISSION_DENIED:
        //                         errorMessage = '❌ Location access denied. Using demo locations.';
        //                         break;
        //                     case error.POSITION_UNAVAILABLE:
        //                         errorMessage = '⚠️ Location unavailable. Using demo locations.';
        //                         break;
        //                     case error.TIMEOUT:
        //                         errorMessage = '⏱️ Location request timed out. Using demo locations.';
        //                         break;
        //                     default:
        //                         errorMessage = '❓ Location error. Using demo locations.';
        //                         break;
        //                 }
        //                 showLocationStatus(errorMessage);
                        
        //                 // Update existing photos with mock location
        //                 photos.forEach(photo => {
        //                     if (!photo.location) {
        //                         getLocationForPhoto(photo);
        //                     }
        //                 });
        //             },
        //             {
        //                 enableHighAccuracy: true,
        //                 timeout: 10000,
        //                 maximumAge: 60000
        //             }
        //         );
        //     } else {
        //         showLocationStatus('⚠️ Geolocation not supported by this browser');
        //     }
        // }

        // // Set initial filter
        // document.getElementById('filterNone').classList.add('active');


          // Global variables
        let photos = [];
        let currentFilter = 'none';
        let backgroundTaskScheduler;
        let intersectionObserver;
        let locationEnabled = false;
        let processedCount = 0;
        let networkInfo = null;

        // Initialize application
        document.addEventListener('DOMContentLoaded', function() {
            initializeAPIs();
            setupEventListeners();
            updateNetworkStatus();
        });

        // 1. BACKGROUND TASKS API - Initialize background task scheduler
        function initializeBackgroundTasks() {
            if ('requestIdleCallback' in window) {
                backgroundTaskScheduler = {
                    schedule: function(callback, options = {}) {
                        return requestIdleCallback(callback, options);
                    },
                    cancel: function(id) {
                        cancelIdleCallback(id);
                    }
                };
                console.log('✅ Background Tasks API initialized');
            } else {
                // Fallback for browsers without requestIdleCallback
                backgroundTaskScheduler = {
                    schedule: function(callback) {
                        return setTimeout(callback, 0);
                    },
                    cancel: function(id) {
                        clearTimeout(id);
                    }
                };
                console.log('⚠️ Background Tasks API not supported, using fallback');
            }
        }

        // 2. GEOLOCATION API - Get user location
        function initializeGeolocation() {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        locationEnabled = true;
                        console.log('✅ Geolocation API initialized');
                        console.log('📍 Location:', position.coords.latitude, position.coords.longitude);
                        showLocationStatus('✅ Location access granted');
                    },
                    function(error) {
                        locationEnabled = false;
                        let errorMessage = '';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage = '❌ Location access denied by user';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage = '⚠️ Location information unavailable';
                                break;
                            case error.TIMEOUT:
                                errorMessage = '⏱️ Location request timed out';
                                break;
                            default:
                                errorMessage = '❓ Unknown location error';
                                break;
                        }
                        console.log(errorMessage);
                        showLocationStatus(errorMessage);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 60000
                    }
                );
            } else {
                console.log('⚠️ Geolocation API not supported');
                locationEnabled = false;
                showLocationStatus('⚠️ Geolocation not supported');
            }
        }

        // 3. NETWORK INFORMATION API - Monitor connection
        function initializeNetworkInfo() {
            if ('connection' in navigator) {
                networkInfo = navigator.connection;
                console.log('✅ Network Information API initialized');
                updateNetworkStatus();
                
                // Listen for network changes
                networkInfo.addEventListener('change', updateNetworkStatus);
            } else {
                console.log('⚠️ Network Information API not supported');
            }
        }

        // 4. INTERSECTION OBSERVER API - Lazy loading
        function initializeIntersectionObserver() {
            if ('IntersectionObserver' in window) {
                intersectionObserver = new IntersectionObserver(
                    function(entries) {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const photoCard = entry.target;
                                const canvas = photoCard.querySelector('.photo-canvas');
                                const photoData = photos.find(p => p.id === photoCard.dataset.photoId);
                                
                                if (photoData && !photoData.loaded) {
                                    loadPhotoToCanvas(canvas, photoData);
                                    photoData.loaded = true;
                                    intersectionObserver.unobserve(photoCard);
                                }
                            }
                        });
                    },
                    { threshold: 0.1, rootMargin: '50px' }
                );
                console.log('✅ Intersection Observer API initialized');
            } else {
                console.log('⚠️ Intersection Observer API not supported');
            }
        }

        // Initialize all APIs
        function initializeAPIs() {
            initializeBackgroundTasks();
            initializeGeolocation();
            initializeNetworkInfo();
            initializeIntersectionObserver();
        }

        // Setup event listeners
        function setupEventListeners() {
            const fileInput = document.getElementById('fileInput');
            const uploadArea = document.getElementById('uploadArea');

            // File input change
            fileInput.addEventListener('change', handleFileSelect);

            // Drag and drop
            uploadArea.addEventListener('dragover', handleDragOver);
            uploadArea.addEventListener('dragleave', handleDragLeave);
            uploadArea.addEventListener('drop', handleDrop);
            uploadArea.addEventListener('click', () => fileInput.click());
        }

        // Handle file selection
        function handleFileSelect(event) {
            const files = Array.from(event.target.files);
            processFiles(files);
        }

        // Drag and drop handlers
        function handleDragOver(event) {
            event.preventDefault();
            event.currentTarget.classList.add('dragover');
        }

        function handleDragLeave(event) {
            event.currentTarget.classList.remove('dragover');
        }

        function handleDrop(event) {
            event.preventDefault();
            event.currentTarget.classList.remove('dragover');
            const files = Array.from(event.dataTransfer.files);
            processFiles(files);
        }

        // Process uploaded files
        function processFiles(files) {
            const imageFiles = files.filter(file => file.type.startsWith('image/'));
            let processed = 0;
            
            imageFiles.forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const photoData = {
                        id: 'photo_' + Date.now() + '_' + index,
                        file: file,
                        dataUrl: e.target.result,
                        name: file.name,
                        size: file.size,
                        uploadTime: new Date(),
                        location: null,
                        loaded: false
                    };

                    photos.push(photoData);
                    
                    // Get location for this photo
                    if (locationEnabled) {
                        getLocationForPhoto(photoData);
                    }

                    // Create photo card
                    createPhotoCard(photoData);
                    
                    // Update progress
                    processed++;
                    updateProgress(processed, imageFiles.length);
                    
                    if (processed === imageFiles.length) {
                        updateStats();
                        // Schedule background processing
                        scheduleBackgroundProcessing();
                    }
                };
                reader.readAsDataURL(file);
            });
        }

        // Get location for a photo
        function getLocationForPhoto(photoData) {
            if (!locationEnabled) {
                // Use mock location for demonstration
                photoData.location = generateMockLocation();
                const photoCard = document.querySelector(`[data-photo-id="${photoData.id}"]`);
                if (photoCard) {
                    updatePhotoCardLocation(photoCard, photoData.location);
                    // Get address for mock location
                    getAddressFromCoordinates(photoData.location.latitude, photoData.location.longitude, photoCard);
                }
                updateStats();
                return;
            }

            navigator.geolocation.getCurrentPosition(
                function(position) {
                    photoData.location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    
                    // Update the photo card with location info
                    const photoCard = document.querySelector(`[data-photo-id="${photoData.id}"]`);
                    if (photoCard) {
                        updatePhotoCardLocation(photoCard, photoData.location);
                        // Get real address from coordinates
                        getAddressFromCoordinates(photoData.location.latitude, photoData.location.longitude, photoCard);
                    }
                    
                    updateStats();
                },
                function(error) {
                    console.log('Location access denied for photo:', photoData.name);
                    // Use mock location as fallback
                    photoData.location = generateMockLocation();
                    const photoCard = document.querySelector(`[data-photo-id="${photoData.id}"]`);
                    if (photoCard) {
                        updatePhotoCardLocation(photoCard, photoData.location);
                        // Get address for mock location
                        getAddressFromCoordinates(photoData.location.latitude, photoData.location.longitude, photoCard);
                    }
                    updateStats();
                },
                {
                    enableHighAccuracy: false,
                    timeout: 5000,
                    maximumAge: 300000
                }
            );
        }

        // Create photo card HTML
        function createPhotoCard(photoData) {
            const gallery = document.getElementById('gallery');
            const photoCard = document.createElement('div');
            photoCard.className = 'photo-card';
            photoCard.dataset.photoId = photoData.id;
            
            photoCard.innerHTML = `
                <div class="photo-container">
                    <div class="loading-placeholder">Loading...</div>
                    <canvas class="photo-canvas" style="display: none;"></canvas>
                </div>
                <div class="photo-info">
                    <h3>${photoData.name}</h3>
                    <div class="location-info">
                        <span class="location-icon">📍</span>
                        <span class="location-text">Getting location...</span>
                    </div>
                    <div class="photo-meta">
                        <span>${(photoData.size / 1024).toFixed(1)} KB</span>
                        <span>${photoData.uploadTime.toLocaleTimeString()}</span>
                    </div>
                </div>
            `;

            gallery.appendChild(photoCard);
            
            // Use Intersection Observer for lazy loading
            if (intersectionObserver) {
                intersectionObserver.observe(photoCard);
            } else {
                // Fallback: load immediately
                const canvas = photoCard.querySelector('.photo-canvas');
                loadPhotoToCanvas(canvas, photoData);
                photoData.loaded = true;
            }

            // Animate card appearance
            setTimeout(() => {
                photoCard.classList.add('loaded');
            }, 100);
        }

        // 5. CANVAS API - Load and process image
        function loadPhotoToCanvas(canvas, photoData) {
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = function() {
                // Set canvas size
                const container = canvas.parentElement;
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
                
                // Calculate scaling to fit container
                const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
                const scaledWidth = img.width * scale;
                const scaledHeight = img.height * scale;
                const x = (canvas.width - scaledWidth) / 2;
                const y = (canvas.height - scaledHeight) / 2;
                
                // Clear canvas and draw image
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
                
                // Apply current filter
                applyCanvasFilter(ctx, canvas, currentFilter);
                
                // Show canvas, hide placeholder
                canvas.style.display = 'block';
                const placeholder = container.querySelector('.loading-placeholder');
                if (placeholder) {
                    placeholder.style.display = 'none';
                }
            };
            
            img.src = photoData.dataUrl;
        }

        // Apply filters using Canvas API
        function applyCanvasFilter(ctx, canvas, filter) {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            switch (filter) {
                case 'grayscale':
                    for (let i = 0; i < data.length; i += 4) {
                        const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
                        data[i] = gray;
                        data[i + 1] = gray;
                        data[i + 2] = gray;
                    }
                    break;
                case 'sepia':
                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
                        data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
                        data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
                    }
                    break;
                case 'blur':
                    // Simple box blur
                    const blurRadius = 2;
                    const tempData = new Uint8ClampedArray(data);
                    for (let y = blurRadius; y < canvas.height - blurRadius; y++) {
                        for (let x = blurRadius; x < canvas.width - blurRadius; x++) {
                            let r = 0, g = 0, b = 0;
                            let count = 0;
                            for (let dy = -blurRadius; dy <= blurRadius; dy++) {
                                for (let dx = -blurRadius; dx <= blurRadius; dx++) {
                                    const i = ((y + dy) * canvas.width + (x + dx)) * 4;
                                    r += tempData[i];
                                    g += tempData[i + 1];
                                    b += tempData[i + 2];
                                    count++;
                                }
                            }
                            const i = (y * canvas.width + x) * 4;
                            data[i] = r / count;
                            data[i + 1] = g / count;
                            data[i + 2] = b / count;
                        }
                    }
                    break;
            }
            
            if (filter !== 'none') {
                ctx.putImageData(imageData, 0, 0);
            }
        }

        // Set filter for all photos
        function setFilter(filter) {
            currentFilter = filter;
            
            // Update button states
            document.querySelectorAll('.btn-secondary').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById('filter' + filter.charAt(0).toUpperCase() + filter.slice(1)).classList.add('active');
            
            // Reapply filter to all loaded photos
            document.querySelectorAll('.photo-canvas').forEach(canvas => {
                if (canvas.style.display !== 'none') {
                    const photoId = canvas.closest('.photo-card').dataset.photoId;
                    const photoData = photos.find(p => p.id === photoId);
                    if (photoData) {
                        loadPhotoToCanvas(canvas, photoData);
                    }
                }
            });
        }

        // Update photo card with location
        function updatePhotoCardLocation(photoCard, location) {
            const locationText = photoCard.querySelector('.location-text');
            if (location) {
                if (location.isMock) {
                    locationText.innerHTML = `<span style="color: #666;">📍 Getting address...</span>`;
                } else {
                    locationText.innerHTML = `<span style="color: #666;">📍 Getting address...</span>`;
                }
            } else {
                locationText.textContent = 'Location unavailable';
            }
        }

        // Get real address from coordinates using reverse geocoding
        function getAddressFromCoordinates(latitude, longitude, photoCard) {
            // Using OpenStreetMap Nominatim API for reverse geocoding (free)
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const locationText = photoCard.querySelector('.location-text');
                    if (data && data.display_name) {
                        // Extract relevant parts of the address
                        const address = data.address;
                        let displayAddress = '';
                        
                        if (address) {
                            // Build a clean address string
                            const parts = [];
                            if (address.road) parts.push(address.road);
                            if (address.neighbourhood) parts.push(address.neighbourhood);
                            if (address.suburb) parts.push(address.suburb);
                            if (address.city) parts.push(address.city);
                            if (address.state) parts.push(address.state);
                            if (address.country) parts.push(address.country);
                            
                            displayAddress = parts.slice(0, 3).join(', '); // Take first 3 parts
                            
                            if (displayAddress.length > 50) {
                                displayAddress = displayAddress.substring(0, 47) + '...';
                            }
                        }
                        
                        if (!displayAddress) {
                            displayAddress = data.display_name.split(',').slice(0, 3).join(',');
                            if (displayAddress.length > 50) {
                                displayAddress = displayAddress.substring(0, 47) + '...';
                            }
                        }
                        
                        locationText.innerHTML = `📍 ${displayAddress}`;
                        locationText.title = data.display_name; // Full address on hover
                    } else {
                        locationText.innerHTML = `📍 ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                    }
                })
                .catch(error => {
                    console.log('Reverse geocoding failed:', error);
                    const locationText = photoCard.querySelector('.location-text');
                    locationText.innerHTML = `📍 ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                });
        }

        // Generate mock location for demo purposes
        function generateMockLocation() {
            // Generate random coordinates around Delhi, India
            const delhiLocations = [
                { lat: 28.6139, lng: 77.2090, name: "Connaught Place" },
                { lat: 28.6562, lng: 77.2410, name: "Red Fort" },
                { lat: 28.6129, lng: 77.2295, name: "India Gate" },
                { lat: 28.5244, lng: 77.1855, name: "Qutub Minar" },
                { lat: 28.6448, lng: 77.2167, name: "Chandni Chowk" },
                { lat: 28.5535, lng: 77.2588, name: "Lotus Temple" },
                { lat: 28.5933, lng: 77.2507, name: "Humayun's Tomb" },
                { lat: 28.6280, lng: 77.2183, name: "Rajpath" }
            ];
            
            const randomLocation = delhiLocations[Math.floor(Math.random() * delhiLocations.length)];
            const randomOffset = () => (Math.random() - 0.5) * 0.01; // Smaller offset for more realistic locations
            
            return {
                latitude: randomLocation.lat + randomOffset(),
                longitude: randomLocation.lng + randomOffset(),
                accuracy: 10,
                isMock: true
            };
        }

        // Show location status to user
        function showLocationStatus(message) {
            // Create or update location status message
            let statusDiv = document.getElementById('locationStatus');
            if (!statusDiv) {
                statusDiv = document.createElement('div');
                statusDiv.id = 'locationStatus';
                statusDiv.style.cssText = `
                    position: fixed;
                    top: 70px;
                    right: 20px;
                    background: white;
                    padding: 10px 15px;
                    border-radius: 25px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    z-index: 1000;
                    font-size: 0.9em;
                    max-width: 300px;
                `;
                document.body.appendChild(statusDiv);
            }
            
            statusDiv.textContent = message;
            statusDiv.style.display = 'block';
            
            // Hide after 5 seconds
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 5000);
        }

        // Schedule background processing
        function scheduleBackgroundProcessing() {
            if (!backgroundTaskScheduler) return;
            
            backgroundTaskScheduler.schedule(function(deadline) {
                // Process thumbnails or other heavy operations
                photos.forEach(photo => {
                    if (deadline.timeRemaining() > 0 && !photo.backgroundProcessed) {
                        // Simulate background processing
                        photo.backgroundProcessed = true;
                        processedCount++;
                        updateStats();
                    }
                });
            });
        }

        // Update network status
        function updateNetworkStatus() {
            const networkDot = document.getElementById('networkDot');
            const networkText = document.getElementById('networkText');
            const networkType = document.getElementById('networkType');
            
            if (networkInfo) {
                const effectiveType = networkInfo.effectiveType;
                const downlink = networkInfo.downlink;
                
                networkType.textContent = effectiveType || 'Unknown';
                
                if (effectiveType === '4g' || downlink > 2) {
                    networkDot.className = 'network-dot';
                    networkText.textContent = 'Fast';
                } else if (effectiveType === '3g' || downlink > 0.5) {
                    networkDot.className = 'network-dot slow';
                    networkText.textContent = 'Slow';
                } else {
                    networkDot.className = 'network-dot offline';
                    networkText.textContent = 'Very Slow';
                }
            } else {
                networkText.textContent = 'Unknown';
                networkType.textContent = 'Unknown';
            }
        }

        // Update progress bar
        function updateProgress(current, total) {
            const progressFill = document.getElementById('progressFill');
            const percentage = (current / total) * 100;
            progressFill.style.width = percentage + '%';
            
            if (current === total) {
                setTimeout(() => {
                    progressFill.style.width = '0%';
                }, 1000);
            }
        }

        // Update statistics
        function updateStats() {
            document.getElementById('photoCount').textContent = photos.length;
            document.getElementById('locationCount').textContent = photos.filter(p => p.location).length;
            document.getElementById('processedCount').textContent = processedCount;
        }

        // Request location permission manually
        function requestLocationPermission() {
            if ('geolocation' in navigator) {
                showLocationStatus('🔄 Requesting location permission...');
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        locationEnabled = true;
                        showLocationStatus('✅ Location access granted!');
                        console.log('✅ Location permission granted');
                        
                        // Update existing photos with location
                        photos.forEach(photo => {
                            if (!photo.location) {
                                getLocationForPhoto(photo);
                            }
                        });
                    },
                    function(error) {
                        locationEnabled = false;
                        let errorMessage = '';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage = '❌ Location access denied. Using demo locations.';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage = '⚠️ Location unavailable. Using demo locations.';
                                break;
                            case error.TIMEOUT:
                                errorMessage = '⏱️ Location request timed out. Using demo locations.';
                                break;
                            default:
                                errorMessage = '❓ Location error. Using demo locations.';
                                break;
                        }
                        showLocationStatus(errorMessage);
                        
                        // Update existing photos with mock location
                        photos.forEach(photo => {
                            if (!photo.location) {
                                getLocationForPhoto(photo);
                            }
                        });
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 60000
                    }
                );
            } else {
                showLocationStatus('⚠️ Geolocation not supported by this browser');
            }
        }

        // Set initial filter
        document.getElementById('filterNone').classList.add('active');