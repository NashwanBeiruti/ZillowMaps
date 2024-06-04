document.getElementById('openMaps').addEventListener('click', () => {
  const address = document.getElementById('address').value;
  if (address) {
    chrome.runtime.sendMessage({ action: 'openInGoogleMaps', address: address });
  } else {
    alert('Please enter an address.');
  }
});
