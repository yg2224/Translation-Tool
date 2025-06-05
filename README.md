
# 翻译扩展 (Translation Tool) 

一款简洁高效的浏览器右键翻译扩展，让您一键翻译选中的文本内容至中文。

## 🚀 功能特性

- **即选即译**：选中任意网页文本，右键点击`翻译：选中的内容`即可查看翻译
- **高效跳转**：自动在新标签页打开百度翻译页面并显示翻译结果
- **兼容性强**：支持所有使用Chromium内核的浏览器（Chrome/Edge等）
- **轻量设计**：无后台占用，不影响浏览器性能

## 📦 安装方法

1. 下载[最新版本压缩包](https://github.com/your-repo/releases)并解压
2. 在浏览器地址栏输入：`chrome://extensions/`
3. 开启右上角`开发者模式`
4. 点击`加载已解压的扩展程序` → 选择解压后的文件夹

## 🛠 使用指南

1. 在网页中**选中需要翻译的文本**
2. **右键单击** 选中区域
3. 在右键菜单中选择 `翻译：[您选中的内容]`
4. 自动在新标签页打开百度翻译结果

## 📁 文件结构

```
.
├── background.js     # 核心功能脚本
├── manifest.json     # 扩展配置文件
├── popup.html        # 扩展图标弹窗页
└── icons/
    ├── logo.png      # 16x16 图标
    ├── logo.png      # 48x48 图标
    └── logo.png      # 128x128 图标
```

## ⚙ 技术实现

```javascript
// 创建右键菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translation",
    title: "翻译：%s",  // 自动替换选中文本
    contexts: ["selection"]
  });
});

// 处理翻译请求
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "translation") {
    const encodedText = encodeURIComponent(info.selectionText);
    chrome.tabs.create({ 
      url: `https://fanyi.baidu.com/mtpe-individual/multimodal?query=${encodedText}`
    });
  }
});
```

## 🔐 权限说明

| 权限 | 用途 |
|------|------|
| `contextMenus` | 创建右键菜单 |
| `activeTab` | 获取当前标签页内容 |
| `scripting` | 预留脚本执行能力 |

## ❓ 常见问题

**Q：为什么没有即时的弹窗翻译？**  
A：本扩展设计为打开专业翻译页面，确保翻译结果的准确性和完整性

**Q：支持哪些语言？**  
A：基于免费翻译引擎，支持100+语言互译

**Q：如何更改翻译引擎？**  
A：修改background.js中的URL即可切换其他翻译服务

## 💡 开发计划

- [ ] 添加多语言支持
- [ ] 实现悬浮窗即时翻译
- [ ] 增加翻译历史记录功能

## 📜 许可协议

[MIT License](LICENSE) © 2025 Translation Tool
