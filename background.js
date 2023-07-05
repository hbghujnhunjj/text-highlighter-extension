chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "highlightAndSave",
    title: "Highlight and Save",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "highlightAndSave") {
    const selectedText = info.selectionText.trim();
    if (selectedText && selectedText !== "") {
      chrome.storage.local.get(['highlights'], (result) => {
        const { highlights } = result;
        const newHighlights = highlights ? [...highlights, selectedText] : [selectedText];
        chrome.storage.local.set({ highlights: newHighlights }, () => {
          chrome.tabs.sendMessage(tab.id, { action: 'highlightSaved' });
        });
      });
    }
  }
});
