import EmojiReaction from "./EmojiReaction.vue";

const plugin = {
  install(app) {
    app.component("EmojiReaction", EmojiReaction);
  },
};

export { EmojiReaction };

export default plugin;
