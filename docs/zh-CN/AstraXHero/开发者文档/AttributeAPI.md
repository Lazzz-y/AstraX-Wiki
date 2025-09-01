---
title: AttributeAPI
description: AstraXHero 开发者API AttributeAPI
---
# AttributeAPI
::: tip
AttributeAPI 为插件内部命名，脚本内使用请查看 script.yml 中的命名。
:::
---
```kotlin
/**
* EntityUpdate
* 异步更新实体(装备 属性 原版属性实现)
* 原版属性不会立即生效
*
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.update()

/**
* EntityUpdate
*
* 更新实体(装备 属性 原版属性实现)
*
* 同步版本，原版属性会立即生效
*
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.updateSync()

/**
* 删除实体属性数据
*
* @receiver UUID 实体的uuid
*/
@JvmStatic
fun remove(uuid: UUID)

/**
* 批量读取属性
*
* @return AttributeData 属性数据
* @receiver Collection<String> Lore集合
*/
@JvmStatic
fun Collection<String>.readAttributes(): AttributeData

/**
* 读取物品属性(Lore & NBT)
*
* @return AttributeData 属性数据
* @receiver ItemStack 物品
*/
@JvmStatic
fun ItemStack.readAttribute(): AttributeData

/**
* 读取物品属性(Lore)
*
* @return AttributeData 属性数据
* @receiver ItemStack 物品
*/
@JvmStatic
fun ItemStack.readAttributeLore()

/**
* 读取物品属性(NBT)
*
* @return AttributeData 属性数据
* @receiver ItemStack 物品
*/
@JvmStatic
fun ItemStack.readAttributeNBT(): AttributeData

/**
* 判断实体是否有属性数据
*
* @return Boolean 是否有属性数据
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.hasData(): Boolean

/**
* 给实体添加属性数据(不参与属性更新)
*
* @param source String 键(源)
* @param attributeData AttributeData 属性数据
* @return AttributeData 属性数据
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.addSourAttr(source: String, attributeData: AttributeData): AttributeData

/**
* 给实体添加属性数据(不参与属性更新)
*
* @param source String 键(源)
* @param map 属性数据
* @return AttributeData 属性数据
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.addSourAttr(source: String, map: Map<String, Map<String, Double>>): AttributeData

@JvmStatic
fun LivingEntity.addSourAttr(source: String, list: List<String>): AttributeData

/**
* 删除属性数据(不参与属性更新)
*
* @param source String 键(源)
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.takeSourAttr(source: String): AttributeData?

/**
* 是否拥有属性
*
* @param attribute
* @return
*/
@JvmStatic
fun LivingEntity.hasAttribute(attribute: HeroAttribute): Boolean

/**
* 是否拥有属性
*
* @param attribute
* @return
*/
@JvmStatic
fun LivingEntity.hasAttribute(attribute: String): Boolean

/**
* 获取属性数据集
*
* @return AttributeDataCompound? 属性数据集
* @receiver UUID 实体uuid
*/
@JvmStatic
fun UUID.getAttrData(): AttributeDataCompound

/**
* 获取属性数据集
*
* @return AttributeDataCompound? 属性数据集
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.getAttrData(): AttributeDataCompound

/**
* 通过属性显示名称查找属性id
*
* @param display 属性显示名称
* @return id
*/
@JvmStatic
fun findIdByDisplay(display: String): String

/**
* 通过属性id查找属性显示名称
*
* @param id
* @return display
*/
@JvmStatic
fun findDisplayById(id: String): String

/**
* 获取属性数据中的随机属性值
*
* @param attribute String 属性标签
* @return Double 属性值
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.getRandomValue(attribute: String)

/**
* 获取属性数据中的最小属性值
*
* @param attribute String 属性标签
* @return Double 属性值
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.getMinValue(attribute: String)

/**
* 获取属性数据中的最大属性值
*
* @param attribute String 属性标签
* @return Double 属性值
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.getMaxValue(attribute: String)

/**
* 获取属性，通过属性key或属性名
*
* @param key String 属性key或属性名
* @return Attribute 属性
*/
@JvmStatic
fun attribute(key: String): HeroAttribute?

/**
* 获取装备数据集
*
* @return EquipmentDataCompound? 装备数据集
* @receiver UUID 实体uuid
*/
@JvmStatic
fun UUID.getEquipData(): EquipmentDataCompound?

/**
* 获取装备数据集
*
* @return EquipmentDataCompound? 装备数据集
* @receiver LivingEntity 实体
*/
@JvmStatic
fun LivingEntity.getEquipData(): EquipmentDataCompound?

/**
* 给实体添加装备数据
*
* @param source 键(源)
* @param equipments 装备数据（槽位 to 物品）
* @return 装备数据
* @receiver entity 实体
*/
@JvmStatic
fun LivingEntity.addEquipData(source: String, equipments: Map<String, ItemStack>): EquipmentData


/**
* 给实体添加装备数据
*
* @param source 键(源)
* @param equipmentData 装备数据
* @return 装备数据
* @receiver entity 实体
*/
@JvmStatic
fun LivingEntity.addEquipData(source: String, equipmentData: EquipmentData,): EquipmentData

/**
* 根据 键(源) 删除实体的装备数据
*
* @param source 键(源)
* @return 装备数据
* @receiver UUID 实体的uuid
*/
@JvmStatic
fun UUID.removeEquipData(source: String)

/**
* 为实体创建一个计数器
*
* @param id 计数器的id
* @param initialValue 计数器的初始值
* @param minValue 计数器的最小值
* @param maxValue 计数器的最大值
* @param step 计数器的步进值
* @return 计数器
*/
@JvmStatic
fun LivingEntity.createCounter(
id: String,
initialValue: Int = 0,
minValue: Int = Int.MIN_VALUE,
maxValue: Int = Int.MAX_VALUE,
step: Int = 1
): Counter {

/**
* 获取指定计数器的值
* @param id 计数器的ID
*/
@JvmStatic
fun LivingEntity.deleteCounter(id: String)

/**
* 获取指定计数器的值
* @param id 计数器的ID
*/
@JvmStatic
fun LivingEntity.getCounter(id: String): Counter

/**
* 是否拥有计数器
* @param id 计数器的ID
*/
@JvmStatic
fun LivingEntity.hasCounter(id: String): Boolean

/**
* 获取计数器数据
*/
@JvmStatic
fun LivingEntity.getCounterData(): CounterData
```