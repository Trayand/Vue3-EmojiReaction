import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from 'rollup-plugin-postcss';
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/EmojiReaction.mjs",
      format: "esm",
      name: "EmojiReaction",
    },
    {
      file: "dist/EmojiReaction.js",
      format: "cjs",
      name: "EmojiReaction",
    },
  ],
  plugins: [
    vue(),
    peerDepsExternal(),
    postcss()
  ],
};
