<script setup>
import { computed, ref } from "vue";
// import { EmojiReaction } from "@trayand/emoji-reaction";
import EmojiReaction from "./EmojiReaction.vue";
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
