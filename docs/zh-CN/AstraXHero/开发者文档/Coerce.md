---
title: Coerce
description: AstraXHero 开发者API Coerce
---
# Coerce
::: tip
Coerce 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
* 转换为Double
* @param any
* @return Double
*/
@JvmStatic
fun toDouble(any: Any): Double

/**
* 枚举转换
* @param any
* @param enum
* @return T
*/
@JvmStatic
fun <T: Enum<T>> toEnum(any: Any, enum: Class<T>): T

/**
* 转换为Boolean
* @param any
* @return Boolean
*/
@JvmStatic
fun toBoolean(any: Any): Boolean

/**
* 转换为String
* @param any
* @return String
*/
@JvmStatic
fun toString(any: Any): String?

/**
* 转换为List
* @param any
* @return List<*>
*/
@JvmStatic
fun toList(any: Any): MutableList<*>?

/**
* 转换为Float
* @param any
* @return Float
*/
@JvmStatic
fun toFloat(any: Any): Float

/**
* 转换为Int
* @param any
* @return Int
*/
@JvmStatic
fun toInteger(any: Any): Int

/**
* 转换为Long
* @param any
* @return Long
*/
@JvmStatic
fun toLong(any: Any): Long

/**
* 转换为Short
* @param any
* @return Short
*/
@JvmStatic
fun toShort(any: Any): Short

/**
* 转换为Char
* @param any
* @return Char
*/
@JvmStatic
fun toChar(any: Any): Char

/**
* 转换为Byte
* @param any
* @return Byte
*/
@JvmStatic
fun toByte(any: Any): Byte
```