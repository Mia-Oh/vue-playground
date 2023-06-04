export default {
  data() {
    return {
      day6: ["원필", "도운", "영현", "성진"],
    };
  },
  methods: {
    helloDay6() {
      alert(`${this.day6[0]}이 제 최애 입니다`);
    },
  },
};
