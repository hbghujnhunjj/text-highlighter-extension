chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'highlightSaved') {
    sendResponse({ message: 'Highlight saved successfully!' });
  }
});
