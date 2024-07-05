// Get video element and quality select element
const videoPlayer = document.getElementById('videoPlayer');
const qualitySelect = document.getElementById('qualitySelect');

// Create Hls.js instance
const hls = new Hls();

// Attach Hls.js to the video element
hls.attachMedia(videoPlayer);

// Set request headers (e.g., cookies, referrer, origin)
hls.xhr.withCredentials = true; // Enable sending cookies
hls.xhr.setRequestHeader('Referer', 'your_referer');
hls.xhr.setRequestHeader('Origin', 'your_origin');

// Load the m3u8 video link
hls.loadSource('your_m3u8_video_link');

// Update quality options in the dropdown
hls.on(Hls.Events.MANIFEST_PARSED, () => {
  hls.levels.forEach((level, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = level.name;
    qualitySelect.appendChild(option);
  });
});

// Change quality on dropdown change
qualitySelect.addEventListener('change', () => {
  hls.currentLevel = qualitySelect.value;
}); 
