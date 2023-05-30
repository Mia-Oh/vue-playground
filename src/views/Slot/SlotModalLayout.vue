<template>
  <div>
    <header>
      <slot name="header">
        <h1>정의된 값이 없으면 기본값이 출력</h1>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "SlotModalLayout",
};
</script>
