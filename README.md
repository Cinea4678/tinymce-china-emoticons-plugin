# TinyMCE贴吧/抖音/B站表情插件

想要为你的论坛/博客/网站增加一点活力吗？（笑） 本插件收集了常用的一组贴吧/抖音/B站表情，可以让你的网站更加生动有趣。

![](https://s.c.accr.cc/picgo/1701419679-e900cb.png)

## 安装和使用

在node中，使用以下代码安装并引入：

```shell
npm i tinymce-china-emoticons-plugin
```

```typescript
import "tinymce"
import "tinymce-china-emoticons-plugin"
```



在浏览器环境中，直接使用以下代码引入（你亦可更换成其他你喜欢的CDN）：

```html
<script src="https://cdn.jsdelivr.net/npm/tinymce-china-emoticons-plugin"></script>
```



引入后，在`tinymce.init`中引入即可：

```javascript
tinymce.init({
    selector: "textarea",
    plugins: ["china-emoticons"],
    toolbar: "china-emoticons",
});
```

## 配置项

你可设置表情插入到编辑器中的大小。默认的大小是80x80，你可更换成其他您喜欢的大小。

```javascript
tinymce.init({
    selector: "textarea",
    plugins: ["china-emoticons"],
    toolbar: "china-emoticons",
    china_emoticons_insert_size: 25,
});
```

## 贡献指南

本项目需要你的协助以变得更好。具体来说，你可以考虑：

- 优化插件对话框的排版。插件目前在表情数量不为4的整数倍时行为不佳。
- 按照常用、热门等顺序重新排列表情的顺序。
- 补充其他没有出现的常用表情。

表情的数据位于`src/data.ts`内，代码位于`src/index.ts`内。

请将表情图片托管到`sm.ms`或其他中国大陆可用之稳定图床。

本项目采用`vitest`进行测试。提交前，请确保测试已经通过。



## 声明

本仓库未持有亦未向公众分发其中出现的表情图片，且仓库中提供的表情图片链接均搜集于网络。仓库管理者提示，表情图片的一切权利属于其法定著作权人，本仓库并未授予您任意使用这些图片的权利和便利，亦不为可能的后果承担任何责任。使用本仓库即代表您同意以上声明。
