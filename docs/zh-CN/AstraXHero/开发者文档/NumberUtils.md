---
title: NumberUtils
description: AstraXHero 开发者API NumberUtils
---
# NumberUtils
::: tip
NumberUtils 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
 * 数字格式化
 * @param input 格式化字符串
 * @return 格式化后的字符串
 */
fun Number.format(input: String = AstraX.numberFormat): String 

/**
 * 随机数
 * @param a 最小值
 * @param b 最大值
 * @return 随机数
 */
fun randomInt(a: Int, b: Int): Int


/**
 * 随机数
 * @param a 最小值
 * @param b 最大值
 * @param format 格式化字符串
 * @return 随机数
 */
fun random(a: Number, b: Number, format: String = AstraX.numberFormat): String
```