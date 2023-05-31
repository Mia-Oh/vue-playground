export default {
  state: {
    // 글로벌로 관리될 상태 값
    counter: 0,
  },
  getters: {
    // 데이터에 변화를 주지는 X!
    counter: (state) => state.counter,
  },
  mutations: {
    // 실제 데이터 변화가 일어나는 곳
    increment: (state) => (state.counter += 1),
    decrement: (state) => (state.counter -= 1),
  },
  actions: {
    // mutation을 일으키기 위한 행동, 컴포넌트에서는 actions을 사용함
    addCounter: (context) => context.commit("increment"),
    subCounter: (context) => context.commit("decrement"),
  },
};
