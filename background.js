chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'saveHighlight') {
    chrome.storage.local.get(['highlights'], (result) => {
      const { highlights } = result;
      const newHighlights = highlights ? [...highlights, request.highlight] : [request.highlight];
      chrome.storage.local.set({ highlights: newHighlights }, () => {
        sendResponse({ message: 'Highlight saved successfully.' });
      });
    });
  }
});
