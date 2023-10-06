<script setup lang="ts">
import {ref} from "vue";
import {SidePanelChannelImpl} from "./channel";

const origin = ref('')
const output = ref('')
const isErr = ref(false)

const encode = () => {
  SidePanelChannelImpl
      .encrypt(origin.value)
      .then(r => {
        isErr.value = false
        output.value = r
      })
      .catch(err => {
        isErr.value = true
        output.value = `Error: ${err}`
      })
}

const decode = () => {
  SidePanelChannelImpl
      .decrypt(origin.value)
      .then(r => {
        isErr.value = false
        output.value = r
      })
      .catch(err => {
        isErr.value = true
        output.value = `Error: ${err}`
      })
}
</script>

<template>
  <div class="banner"></div>

  <textarea class="source" v-model="origin" placeholder="在此输入原文"></textarea>

  <el-button-group>
    <el-button type="success" :disabled="origin.length === 0" @click="encode">Encrypt</el-button>
    <el-button type="warning" :disabled="origin.length === 0" @click="decode">Decrypt</el-button>
    <el-button type="danger" :disabled="origin.length === 0" @click="origin = ''">Clear</el-button>
  </el-button-group>

  <div class="result">
    <pre class="plain" :style="`color: ${isErr ? '#DC143C' : '#333'}`">{{ output }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 32px;
  border-bottom: solid 1px #ccc;
}

.source {
  width: 100%;
  height: 120px;
  padding: 8px;
  margin: 16px 0;
  border: solid 1px #ccc;
  border-radius: 8px;
  outline: none;
  font-family: "Roboto Light", "Roboto", sans-serif;
  line-height: 1.5;
  resize: none;
}

.result {
  width: 100%;
  flex: 1;
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: aliceblue;
  overflow: auto;

  .plain {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>