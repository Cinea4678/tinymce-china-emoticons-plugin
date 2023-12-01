import tinymce from "tinymce"
import {BodyComponentSpec} from "./tinymce"  // 这个类型原本没有导出，为了编码方便，我复制了原版.d.ts并做了导出。

import {Emoticon, tiebaEmoticons, douyinEmoticons, biliEmoticons} from "./data";

const icon = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M511.488 118.670222a398.222222 398.222222 0 1 0 0 796.444445 398.222222 398.222222 0 0 0 0-796.444445z m0-85.333333a483.555556 483.555556 0 1 1 0 967.111111 483.555556 483.555556 0 0 1 0-967.111111zM292.067556 378.709333a69.063111 69.063111 0 1 1 138.126222 0 69.063111 69.063111 0 0 1-138.126222 0z m300.657777 0a69.063111 69.063111 0 1 1 138.183111 0 69.063111 69.063111 0 0 1-138.183111 0zM275.626667 545.336889h475.249777c0 108.828444-100.067556 239.502222-240.355555 239.502222-140.231111 0-234.894222-130.673778-234.894222-239.502222z" fill="#333333"></path></svg>`

const emoticonToMceComponent = (e: Emoticon): BodyComponentSpec => {
  return {
    type: "bar",
    items: [
      {
        type: "htmlpanel",
        html: `<div style="height: 40px; width: 40px"><img alt="${e.name}" src="${e.url}" style="height: 40px; width: 40px"/></div>`,
      },
      {
        type: "button",
        name: e.id,
        text: "添加",
      },
    ],
  }
}

tinymce.PluginManager.add("china-emoticons", function (editor) {
  const openDialog = () => {
    return editor.windowManager.open({
      title: "常用表情",
      body: {
        type: "panel",
        items: [
          {
            type: "label",
            label: "贴吧表情",
            items: [
              {
                type: "grid",
                columns: 4,
                items: [...tiebaEmoticons.map(emoticonToMceComponent)],
              },
            ],
          },
          {
            type: "label",
            label: "B站表情",
            items: [
              {
                type: "grid",
                columns: 4,
                items: [...biliEmoticons.map(emoticonToMceComponent)],
              },
            ],
          },
          {
            type: "label",
            label: "抖音表情",
            items: [
              {
                type: "grid",
                columns: 4,
                items: [...douyinEmoticons.map(emoticonToMceComponent)],
              },
            ],
          },
        ],
      },
      onAction(d, details) {
        let e: Emoticon
        switch (details.name.substring(0, 2)) {
          case "tb":
            e = tiebaEmoticons.find((e: Emoticon) => e.id === details.name) ?? tiebaEmoticons[0]
            break
          case "bl":
            e = biliEmoticons.find((e: Emoticon) => e.id === details.name) ?? biliEmoticons[0]
            break
          case "dy":
            e = douyinEmoticons.find((e: Emoticon) => e.id === details.name) ?? douyinEmoticons[0]
            break
          default:
            return
        }
        const insertSize = editor.options.get("china_emoticons_insert_size")
        editor.insertContent(`<img alt="${e.name}" src="${e.url}" style="height: ${insertSize}px; width: ${insertSize}px"/>`)
        d.close()
      },
    })
  }

  editor.options.register("china_emoticons_insert_size", {processor: 'number', default: 80})

  editor.ui.registry.addIcon("china-emoticons", icon)

  editor.ui.registry.addButton("china-emoticons", {
    icon: "china-emoticons",
    tooltip: "常用表情",
    onAction: function () {
      openDialog()
    },
  })

  editor.ui.registry.addMenuItem("china-emoticons", {
    icon: "china-emoticons",
    text: "常用表情",
    onAction: function () {
      openDialog()
    },
  })

  return {
    getMetadata: function () {
      return {
        name: "China Emoticons",
        url: "https://www.cinea.cc/",
      }
    },
  }
})
