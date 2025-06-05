chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translation") {
      const selectedText = encodeURIComponent(info.selectionText);
      const url = `https://fanyi.baidu.com/mtpe-individual/multimodal?query= ${selectedText}`;
      chrome.tabs.create({ url: url });
    }
  });


chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "translation",
      title: "翻译：%s", // %s 会自动替换为选中文本
      contexts: ["selection"]
    });
  });
  
