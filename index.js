document.addEventListener("DOMContentLoaded", function () {
  // Get button by ID
  const generateBtn = document.querySelector(".Generate__btn");
  generateBtn.onclick = injectscript;
});

async function injectscript() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["inject.js"],
  });
  //   window.close();
  console.log("hey there ");
}
