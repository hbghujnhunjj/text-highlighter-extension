document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['highlights'], (result) => {
    const { highlights } = result;
    const highlightList = document.getElementById('highlightList');
    if (highlights && highlights.length > 0) {
      highlights.forEach((highlight) => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightList.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'No highlights saved yet.';
      highlightList.appendChild(li);
    }
  });
});
