let currentTab = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);

  if (currentTab && tab.url && tab.url.startsWith("http")) {
    saveTime();
  }

  if (tab.url && tab.url.startsWith("http")) {
    currentTab = new URL(tab.url).hostname;
    startTime = Date.now();
  }
});

function saveTime() {
  const timeSpent = Math.floor((Date.now() - startTime) / 1000);

  chrome.storage.local.get([currentTab], (data) => {
    const previous = data[currentTab] || 0;

    chrome.storage.local.set({
      [currentTab]: previous + timeSpent
    });
  });
}