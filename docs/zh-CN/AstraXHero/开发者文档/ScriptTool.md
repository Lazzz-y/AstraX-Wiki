---
title: ScriptTool
description: AstraXHero 开发者API ScriptTool
---
# ScriptTool
::: tip
ScriptTool 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
* 获取计算操作器对象
* @param key 操作对象名称
* @return 计算操作器
*/
@JvmStatic
fun operation(key: String): Operation<*>

/**
* 同步执行任务
* @param task 任务
* @return 任务结果
*/
@JvmStatic
fun sync(task: () -> Any?): Any?

/**
* 同步执行任务
* @param task 任务
*/
@JvmStatic
fun task(task: PlatformExecutor.PlatformTask.() -> Unit)

/**
* 异步执行任务
* @param task 任务
*/
@JvmStatic
fun taskAsync(task: PlatformExecutor.PlatformTask.() -> Unit)

/**
* 同步延迟执行任务
* @param delay 延迟时间
* @param task 延迟任务
*/
@JvmStatic
fun taskLater(delay: Long, task: PlatformExecutor.PlatformTask.() -> Unit)

/**
* 异步延迟执行任务
* @param delay 延迟时间
* @param task 延迟任务
*/
@JvmStatic
fun taskAsyncLater(delay: Long, task: PlatformExecutor.PlatformTask.() -> Unit)

/**
* 循环执行任务
* @param delay 延迟时间
* @param period 循环间隔
* @param task 循环任务
*/
@JvmStatic
fun taskTimer(delay: Long, period: Long, task: PlatformExecutor.PlatformTask.() -> Unit)

/**
* 异步循环执行任务
* @param delay 延迟时间
* @param period 循环间隔
* @param task 循环任务
*/
@JvmStatic
fun taskAsyncTimer(delay: Long, period: Long, task: PlatformExecutor.PlatformTask.() -> Unit)

/**
* 设置实体元数据
* @param entity 实体
* @param key 元数据键
* @param value 元数据值
*/
@JvmStatic
fun setMeta(entity: Entity, key: String, value: Any)

/**
* 获取实体元数据
* @param entity 实体
* @param key 元数据键
* @return 元数据值
*/
@JvmStatic
fun getMeta(entity: Entity, key: String): List<Any?>

/**
* 判断实体元数据是否存在
* @param entity 实体
* @param key 元数据键
* @return 元数据是否存在
*/
@JvmStatic
fun hasMeta(entity: Entity, key: String): Boolean

/**
* 伤害实体
* @param entities 实体列表
* @param damage 伤害值
* @param attacker 攻击者
*/
@JvmStatic
fun doDamageEntity(entities: List<LivingEntity>, damage: Double, attacker: LivingEntity)

/**
* 伤害实体
* @param entity 实体
* @param damage 伤害值
* @param attacker 攻击者
*/
@JvmStatic
fun doDamageEntity(entity: LivingEntity, damage: Double, attacker: LivingEntity)

/**
* 获取实体射线命中的实体
* @param entity 实体
* @param distance 射线距离
* @return 命中的实体
*/
@JvmStatic
fun getEntityRayHit(entity: LivingEntity, distance: Double): LivingEntity?

/**
* 获取实体射线命中的实体
* @param entity 实体
* @param distance 射线距离
* @return 命中的实体
*/
@JvmStatic
fun getEntityRayHits(entity: LivingEntity, distance: Double): Collection<LivingEntity>

/**
* 获取附近实体
* @param entity 实体
* @param x 范围X
* @param y 范围Y
* @param z 范围Z
* @return 附近的实体
*/
@JvmStatic
fun getNearbyEntities(entity: LivingEntity, x: Double, y: Double, z: Double): Collection<LivingEntity>
```