chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'highlightSaved') {
    sendResponse({ message: 'Highlight saved successfully!' });
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Text Highlighter',
      message: 'The highlighted text has been saved.'
    });
  }
});
