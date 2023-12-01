import {expect, test} from "vitest";
import {biliEmoticons, douyinEmoticons, tiebaEmoticons} from "./data";

const emoticons = [tiebaEmoticons, biliEmoticons, douyinEmoticons]

test("Emoticons should not be duplicated",()=>{
  emoticons.forEach(emoticonSet=>{
    let idSet = new Set<string>
    let nameSet = new Set<string>
    let urlSet = new Set<string>

    emoticonSet.forEach(emoticon=>{
      // console.debug("Testing",emoticon)
      expect(idSet.has(emoticon.id)).toBe(false)
      expect(nameSet.has(emoticon.name)).toBe(false)
      expect(urlSet.has(emoticon.url)).toBe(false)

      idSet.add(emoticon.id)
      nameSet.add(emoticon.name)
      urlSet.add(emoticon.url)
    })
  })
})
