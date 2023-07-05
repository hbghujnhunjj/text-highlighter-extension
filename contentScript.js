function handleContextMenu(event) {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText && selectedText !== '') {
    chrome.runtime.sendMessage({ action: 'saveHighlight', highlight: selectedText }, (response) => {
      console.log(response.message);
    });
  }
}

document.addEventListener('contextmenu', handleContextMenu);
