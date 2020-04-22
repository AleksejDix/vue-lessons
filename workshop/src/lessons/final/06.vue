<template>
  <div>
    <div class="box box--small" :style="{ backgroundColor: 'pink' }">
      small box
    </div>
    <div class="box box--medium" :style="{ backgroundColor: 'hotpink' }">
      medium box
    </div>
    <div class="box box--large" :style="{ backgroundColor: 'deeppink' }">
      large box
    </div>
  </div>
</template>

<style>
.box {
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.box--small {
  width: 90px;
  height: 90px;
}
.box--medium {
  width: 180px;
  height: 180px;
}
.box--large {
  width: 270px;
  height: 270px;
}
</style>
