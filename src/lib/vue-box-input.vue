<template>
  <div
    class="vue-box-input"
    ref="inputbox"
    contenteditable="true"
    @keydown="handleKeydown"
    @paste="handlePaste"
    @blur="handleBlur"
    @input="handleInput"
    >
  </div>
</template>

<script>
import * as utils from './utils.js';
export default {
  name: 'vue-box-input',
  props:{
    inputDelayTime: {
      type: Number,
      default: 100
    },
    emoji:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      lastEditRange: null,
    }
  },
  watch:{
    emoji(val){
      this.fnInsertText(val);
    }
  },
  methods:{
    handleKeydown(event) {
      // 按下shift+enter换行，enter发送
      if(event.keyCode === 13 && !event.shiftKey) {
        event.returnValue = false;
        this.handleSend();
      }
    },
    // 处理粘贴事件
    handlePaste(event) {
      event.preventDefault();
      // 如果是 Safari 直接 return
      if (!(event.clipboardData && event.clipboardData.items)) {
        throw new Error('浏览器不支持剪贴板粘贴')
        return false;
      }

      const items = event.clipboardData.items;
      for (let i = 0; i < items.length; i++) {
        // 图片粘贴
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          const URLObj = window.URL || window.webkitURL;
          const source = URLObj.createObjectURL(blob);
          console.log(source);
          if (blob.size === 0) {
            return false;
          }
          // blob 就是从剪切板获得的文件 可以进行上传或其他操作
          console.log(blob);
          // 获取图片粘贴文件，可以进行后续操作
          this.$emit('image-paste', blob);
          return false;
        }
      }

      // 文字粘贴
      const text = event.clipboardData.getData('text/plain') || '';
      document.execCommand('insertText', false, utils.escapeHTML(text));
    },
    handleBlur() {
      // 获取当前光标位置
      this.fnGetCursorPos();
    },
    fnGetCursorPos(){
      this.lastEditRange = window.getSelection().getRangeAt(0);
    },
    fnSetBoxInputCursorPos(value){
      const inputBox = this.$refs.inputbox;
      const emojiValue = value;
      // 聚焦
      inputBox.focus();
      const selection = window.getSelection();

      if(this.lastEditRange) {
        // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
        selection.removeAllRanges();
        selection.addRange(this.lastEditRange);
      }

      // 判断选定对象范围是编辑框还是文本节点
      if(selection.anchorNode.nodeName !== '#text') {
        // 如果是编辑框范围。则创建表情文本节点进行插入
        const emojiNode = document.createTextNode(emojiValue);
        const insertIndex = selection.anchorOffset;
        const len = inputBox.childNodes.length;
        if(len > 0) {
          // 如果文本框的子元素大于0，则表示有其它元素，则按照位置插入表情节点
          if(utils.isType(insertIndex) === 'Number' && len >= insertIndex) {
            inputBox.insertBefore(emojiNode, inputBox.childNodes[insertIndex]);
          }
        } else {
          // 否则直接插入一个表情元素
          inputBox.appendChild(emojiNode);
        }

        // 创建新的光标对象
        const range = document.createRange();
        // 光标对象的范围界定为新建的表情节点
        range.selectNodeContents(emojiNode);
        // 光标位置定位在表情节点的最大长度
        range.setStart(emojiNode, emojiNode.length);
        // 使光标开始和光标结束重叠
        range.collapse(true);
        // 清除选定对象的所有光标对象
        selection.removeAllRanges();
        // 插入新的光标对象
        selection.addRange(range);
      } else {
        // 如果是文本节点则先获取光标对象
        const range = selection.getRangeAt(0);
        // 获取光标对象的范围界定对象，一般就是textNode对象
        const textNode = range.startContainer;
        // 获取光标位置
        const rangeStartOffset = range.startOffset;
        // 文本节点在光标位置处插入新的表情内容
        textNode.insertData(rangeStartOffset, emojiValue);
        // 光标移动到到原来的位置加上新内容的长度
        range.setStart(textNode, rangeStartOffset + emojiValue.length);
        // 光标开始和光标结束重叠
        range.collapse(true);
        // 清除选定对象的所有光标对象
        selection.removeAllRanges();
        // 插入新的光标对象
        selection.addRange(range);
      }
      // 无论如何都要记录最后光标对象
      this.lastEditRange = selection.getRangeAt(0);
    },
    fnInsertText(val){
      this.fnSetBoxInputCursorPos(val);
    },
    // 回调输入信息
    handleInput() {
      const inputContent = this.$refs.inputbox.innerHTML;
      this.$emit('input', inputContent);
    },
    handleSend() {
      this.$emit('message-send', this.$refs.inputbox.innerHTML);
    },
    fnSetScrollToEnd(){
      const inputBox = this.$refs.inputbox;
      window.setTimeout(()=>{
        inputBox.scrollTop = inputBox.scrollHeight;
      }, 0)
    },
    fnFocusToEnd(){
      const inputBox = this.$refs.inputbox;
      if(window.getSelection) {
        inputBox.focus();
        const selection = window.getSelection();
        selection.selectAllChildren(inputBox);
        selection.collapseToEnd();
      } else if(document.selection) {
        const range = document.selection.createRange();
        range.moveToElementText(inputBox);
        range.collapse(false);
        range.select();
      }
      this.fnSetScrollToEnd();
    }
  }
}
</script>

<style lang="scss">
  .vue-box-input{
    width: 100%;
    height: auto;
    min-height: 200px;
    border: 1px solid #dadada;
    text-align: left;
    padding: 5px 10px;
    outline: none;
    box-sizing: border-box;
  }
</style>
