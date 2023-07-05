chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'highlightSaved') {
    console.log('Highlight saved successfully!');
  }
});
