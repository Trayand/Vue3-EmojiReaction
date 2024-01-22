# Emoji Reaction

`Emoji Reaction` is a Vue3 based emoji reaction inspired by [VueFeedbackReaction](https://www.npmjs.com/package/vue-feedback-reaction)

<img style="border-radius: 5px;" src="https://i.imgur.com/pBXjht6.gif" title="source: imgur.com" />

## Installation

```
$ npm i @trayand/emoji-reaction
```

Note: This library can be used as plugin with `Vue.use` and can be import as component too.

## Usage

### Plugin

```mjs
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import EmojiReaction from "@trayand/emoji-reaction";

createApp(App).use(EmojiReaction).mount("#app");
```

### Component

```js
import { EmojiReaction } from "@trayand/emoji-reaction";
```

_Note: you can use either Plugin or Component (no need to use both)_

### Implementation

```vue
<script setup>
import { computed, ref } from "vue";
import { EmojiReaction } from "@trayand/emoji-reaction";

const value = ref({ name: "neutral" });
</script>

<template>
  <EmojiReaction
    v-model="value"
    :label="true"
    :size="60"
    :grayscale="true"
    :emoji="[
      { name: 'mad', other_name: 'horrible' },
      { name: 'worried', other_name: 'don\'t like' },
      { name: 'neutral', other_name: 'normal' },
      { name: 'slight_smile', other_name: 'agree' },
      { name: 'smile', other_name: 'totally agree' },
    ]"
    :bindWithEmoji="false"
  />
  <p style="text-align: center">{{ value }}</p>
</template>
```

### Props

| Prop          | Type                 | Default                                                                                                  | Description                                                                                                                           |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| value         | Object               | {name: "", other_name: ""}                                                                               | Input value (v-model)                                                                                                                 |
| emoji         | Array<String,Object> | [<br>&nbsp;"mad",<br>&nbsp;"worried",<br>&nbsp;"neutral",<br>&nbsp;"slight_smile",<br>&nbsp;"smile"<br>] | List of `reaction emoji`.<br>Available emoji will be shown below.<br>can be set to array of object with keys `name` and `other_name`. |
| label         | Boolean              | false                                                                                                    | Show emoji label (can be customized with `other_name` in emoji props)                                                                 |
| size          | Number               | 60                                                                                                       | Emoji Size (px)                                                                                                                       |
| grayscale     | Boolean              | false                                                                                                    | Set inactive emoji to grayscale                                                                                                       |
| bindWithEmoji | Boolean              | false                                                                                                    | the data binded will return the `emoji` in the object.                                                                                |

#### Available Emoji

List :

|             |              |               |                 |
| ----------- | ------------ | ------------- | --------------- |
| 😠 mad      | 😟 worried   | 😐 neutral    | 🙂 slight_smile |
| 😄 smile    | 🤩 star_eyes | 😍 heart_eyes | 😢 cry          |
| 🥺 pleading | 😂 joy       |
