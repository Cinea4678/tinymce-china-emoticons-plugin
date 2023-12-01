"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const data_1 = require("./data");
const emoticons = [data_1.tiebaEmoticons, data_1.biliEmoticons, data_1.douyinEmoticons];
(0, vitest_1.test)("Emoticons should not be duplicated", () => {
    emoticons.forEach(emoticonSet => {
        let idSet = new Set;
        let nameSet = new Set;
        let urlSet = new Set;
        emoticonSet.forEach(emoticon => {
            // console.debug("Testing",emoticon)
            (0, vitest_1.expect)(idSet.has(emoticon.id)).toBe(false);
            (0, vitest_1.expect)(nameSet.has(emoticon.name)).toBe(false);
            (0, vitest_1.expect)(urlSet.has(emoticon.url)).toBe(false);
            idSet.add(emoticon.id);
            nameSet.add(emoticon.name);
            urlSet.add(emoticon.url);
        });
    });
});
