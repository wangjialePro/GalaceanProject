<template>
  <div class="json-editor">
    <div class="editor-container">
      <div class="editor-header">
        <h2>JSON Editor</h2>
        <button @click="loadDefaultData">Load Default Data</button>
      </div>
      <textarea v-model="inputData" @input="handleInput"></textarea>
      <div class="editor-preview">
        <pre>{{ highlightedData }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsonEditor',
  data() {
    return {
      inputData: '',
      highlightedData: ''
    }
  },
  methods: {
    handleInput() {
      try {
        const parsedData = JSON.parse(this.inputData)
        this.highlightedData = JSON.stringify(parsedData, null, 2)
      } catch (err) {
        this.highlightedData = err.message
      }
    },
    loadDefaultData() {
      this.inputData = '{ "name": "John Doe", "age": 30 }'
      this.handleInput()
    }
  },
  mounted() {
    this.loadDefaultData()
  }
}
</script>

<style scoped>
.json-editor {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}

.editor-container {
  width: 80%;
  height: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.editor-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

textarea {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
}

.editor-preview {
  height: 200px;
  padding: 10px;
  overflow-y: auto;
  background-color: #f6f8fa;
}

pre {
  white-space: pre-wrap;
}
</style>

