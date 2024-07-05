I'm not a JavaScript developer, but I can provide you with a general guide on creating a video player with m3u8 support, including handling request systems like cookies, referrer, and origin.

To achieve this, you can use the Hls.js library, which is specifically designed for working with m3u8 video links. Here's a simple example of how you can create a video player with Hls.js:

1. Install the Hls.js library using npm:
```bash
npm install hls.js
```

2. Create an HTML file with a video container and a quality selection dropdown:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Video Player</title>
</head>
<body>
  <video id="videoPlayer" controls></video>
  <select id="qualitySelect"></select>

  <script src="node_modules/hls.js/dist/hls.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

3. Create a JavaScript file (e.g., `script.js`) to handle video playback and quality change:

```javascript
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
```

Replace `'your_referer'`, `'your_origin'`, and `'your_m3u8_video_link'` with your actual values.

Note: Make sure to handle CORS properly if you're using custom referrer or origin headers. You may need to add appropriate server-side configurations to allow these headers.

This example covers the basic setup for creating a video player with Hls.js and handling request systems. You can further customize the video player according to your requirements.

If you encounter any issues or need further assistance, please let me know!
