<template>
  <div>
    <div>small box</div>
    <div>medium box</div>
    <div>large box</div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.box {
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.box--large {
  width: 270px;
  height: 270px;
}
.box--medium {
  width: 180px;
  height: 180px;
}
.box--small {
  width: 90px;
  height: 90px;
}
</style>
