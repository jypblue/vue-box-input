# vue-box-input

[![Version](https://img.shields.io/npm/v/vue-box-input.svg)](https://www.npmjs.com/package/vue-box-input) [![License](https://img.shields.io/npm/l/vue-box-input.svg)](https://www.npmjs.com/package/vue-box-input) [![Downloads](https://img.shields.io/npm/dt/vue-box-input.svg)](https://www.npmjs.com/package/vue-box-input)

A Vue.js component of chat input box

## Features
- Supports Vue2
- Press 'shift + enter' to Change line
- Press 'enter' to send message
- Support 'paste event', we can get the image file and the text that is pasting in box.
- Support the cursor positioning when we insert Text or emoji


## Installation

### NPM
```
$ npm install vue-box-input --save
```
### Yarn
```
$ yarn add vue-box-input
```


### Component Attributes:

| 参数        | 说明           | 类型               | 默认值       |  必写   |
|------------|----------------|--------------------|--------------|----------------|
| emoji | 可插入的表情包(emoji)字符串 | String | -   | false |

### Component Methods:

| 参数        | 说明           | 类型               | 默认值       |  必写   |
|------------|----------------|--------------------|--------------|----------------|
| input | input事件| Function(val) | -   | false |
| image-paste  | 剪贴板图片粘贴事件|Function(file) |  - | false |
| message-send | 消息发送事件  |Function(text) | -  | true |
## How To Use

```
Import:
import Vue from 'vue'
import VueBoxInput from 'vue-box-input'
Vue.use(VueBoxInput)

Component Use:
 	<vue-box-input
 		:emoji="emojiValue"
	    @input="handleWordsInput"
	    @image-paste="handleImageFileGet"
	    @message-send="handleMessageSend"
	    >

    </vue-box-input>

```

## Update Log

- version 1.0.0 => add basic function of a chat input box



## License

[MIT](http://opensource.org/licenses/MIT)
