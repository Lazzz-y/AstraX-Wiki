---
title: Color
description: AstraXHero 开发者API Color
---
# Color
::: tip
Color 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
* 为文本上颜色
* @param msg
*/
@JvmStatic
fun colored(msg: String): String

/**
* 为文本上颜色
* @param messages
*/
@JvmStatic
fun colored(messages: List<String>): List<String>

/**
* 去除颜色
* @param msg
*/
@JvmStatic
fun uncolored(msg: String): String

/**
* 去除颜色
* @param messages
*/
@JvmStatic
fun uncolored(messages: List<String>): List<String>
```