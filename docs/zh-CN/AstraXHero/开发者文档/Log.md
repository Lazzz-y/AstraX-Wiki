---
title: Log
description: AstraXHero 开发者API Log
---
# NumberUtils
::: tip
Log 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
* 发送消息
* @param sender CommandSender
* @param msg String
*/
@JvmStatic
fun message(sender: CommandSender, msg: String)

/**
* 发送警告
* @param msg String
*/
@JvmStatic
fun warning(msg: Any?)

/**
* 发送信息
* @param msg String
*/
@JvmStatic
fun info(msg: Any?)

/**
* 输出调试信息
* @param msg String
*/
@JvmStatic
fun debug(msg: Any?)

/**
* 获取信息
* @param key String
* @return String
*/
@JvmStatic
fun Any.information(key: String): String
```