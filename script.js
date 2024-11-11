// Function to open the URL entered by the user
function openURL() {
  const urlInput = document.getElementById('urlInput').value;

  // Check if the input is a valid URL
  if (urlInput) {
    // Open the URL in a new tab
    window.open(urlInput, '_blank');
  } else {
    alert('Please enter a valid URL.');
  }
}
