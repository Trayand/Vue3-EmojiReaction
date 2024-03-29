<template>
  <div class="container" id="emoji-reaction-wrapper">
    <div class="inner-container" id="emoji-reaction-inner-wrapper">
      <div
        v-for="(el, index) in reactionList"
        :key="index"
        class="reaction-button"
        @click="handleClickReaction(el)"
        :class="{ active: activeReaction.name === el.name }"
        :style="{
          filter: grayscale && 'grayscale(100%)',
          display: 'flex',
          flexDirection: 'column',
          width: size + 'px',
          justifyContent: 'center',
        }"
      >
        <span
          class="emoji"
          :style="{
            fontSize: size + 'px',
            textAlign: 'center',
          }"
        >
          {{ el.emoji }}
        </span>
        <span
          class="emoji-label"
          :style="{
            textAlign: 'center',
            maxWidth: '100%',
          }"
          v-if="label"
        >
          {{ el.other_name || el.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReactionButton",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Object,
      default: {
        name: "",
        other_name: "",
      },
    },
    emoji: {
      type: Array,
      default: ["mad", "worried", "neutral", "slight_smile", "smile"],
      // default: [
      //   { name: "mad", other_name: "horrible" },
      //   { name: "worried", other_name: "don't like" },
      //   { name: "neutral", other_name: "normal" },
      //   { name: "slight_smile", other_name: "agree" },
      //   { name: "smile", other_name: "totally agree" },
      // ],
    },
    label: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 60,
    },
    grayscale: {
      type: Boolean,
      default: false,
    },
    bindWithEmoji: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      availableReactionList: [
        {
          name: "mad",
          emoji: "😠",
        },
        {
          name: "worried",
          emoji: "😟",
        },
        {
          name: "neutral",
          emoji: "😐",
        },
        {
          name: "slight_smile",
          emoji: "🙂",
        },
        {
          name: "smile",
          emoji: "😄",
        },
        {
          name: "star_eyes",
          emoji: "🤩",
        },
        {
          name: "heart_eyes",
          emoji: "😍",
        },
        {
          name: "cry",
          emoji: "😢",
        },
        {
          name: "pleading",
          emoji: "🥺",
        },
        {
          name: "joy",
          emoji: "😂",
        },
      ],
      activeReaction: this.modelValue || {},
    };
  },
  computed: {
    reactionList() {
      return this.emoji
        .map((element) => {
          let listed_emoji = element;
          let other_name;
          if (listed_emoji instanceof Object) {
            other_name = listed_emoji.other_name;
            listed_emoji = listed_emoji.name;
          }

          let emo = this.availableReactionList.find(
            (el) => listed_emoji === el.name
          );
          if (emo) {
            if (other_name) emo.other_name = other_name;
            return emo;
          }
          return null;
        })
        .filter((el) => el);
    },
  },
  methods: {
    handleClickReaction(emoji) {
      if (this.activeReaction === emoji) {
        this.activeReaction = "";
      } else {
        this.activeReaction = emoji;
      }
      let output = { ...this.activeReaction };
      if (!this.bindWithEmoji) delete output.emoji;
      this.$emit("update:modelValue", output);
    },
    setActiveReaction() {
      this.activeReaction = this.availableReactionList.find(
        (el) =>
          el.name === this.modelValue.name ||
          el.name === this.modelValue.other_name
      ) || {
        name: "",
        other_name: "",
      };
    },
  },
  mounted() {
    this.setActiveReaction();
  },
  watch: {
    value() {
      this.setActiveReaction();
    },
  },
};
</script>

<style scoped>
.container {
  user-select: nonec;
  margin: 30px auto;
  padding: 10px;
  width: 100%;
  background: whitesmoke;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inner-container {
  user-select: none;
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-evenly;
}

.reaction-button {
  user-select: none;
  display: inline-block;
  animation: none;
  cursor: pointer;
}

.reaction-button.active {
  filter: grayscale(0%) !important;
  /* transform: scale(1.1);  */
  text-shadow: rgb(255, 187, 0) 0px 0px 25px;
}
.reaction-button.active .emoji-label {
  /* filter: grayscale(50%) !important; */
  transform: unset;
  /* text-shadow: rgb(255, 187, 0) 0px 0px 25px; */
}

.emoji-label,
.emoji {
  user-select: none;
}

.emoji:hover {
  filter: grayscale(0%) !important;   
  transform: scale(1.1);
  animation: wiggle 1s infinite;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(5deg) scale(1.05);
  }
  75% {
    transform: rotate(-5deg) scale(1.05);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>
