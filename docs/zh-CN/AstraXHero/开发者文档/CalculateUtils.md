---
title: CalculateUtils
description: AstraXHero 开发者API CalculateUtils
---
# CalculateUtils
::: tip
CalculateUtils 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
 * 获取字符表达式的计算结果，支持Placeholder
 * @param entity
 * @return 计算结果
 */
fun String.calculate(entity: LivingEntity? = null): Double

/**
 * 获取字符表达式的计算结果
 * @param entity
 * @return 计算结果
 */
fun String.calculateDouble(entity: LivingEntity? = null): Double

/**
 * 获取字符表达式的计算结果
 * @param input 表达式
 * @return 计算结果
 */
fun calculate(input: String): Double
```