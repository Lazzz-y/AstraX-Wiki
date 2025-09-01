---
title: MythicMobs兼容
description: AstraXHero MythicMobs兼容
---
# MythicMobs兼容
## 配置节点
- Calc: 是否开启动态属性生成 false true
- 属性配置节点: 配置MM生成时拥有的属性
::: warning 提醒
MythicMobs 的怪物攻击会自动由 AstraXHero 接管(包括技能) 当插件reload时，存在于世界中的MM怪物的属性会失效；如果开启了Calc，属性配置节点则可以计算属性的值，本插件为你提供了怪物等级的占位符，如要使用怪物等级占位符请使用 `level`
:::
### 属性配置示例
```yml
Test:
  Type: Zombie
  Display: '&6Skeleton King'
  Health: 500000000
  Equipment:
    - IRON_HELMET HEAD
  # 开启公式支持
  Calc: true
  AstraXHero:
    - "物理攻击: 10-20"
    - "物理抵抗: {10 * level}" # 动态计算数值
    - "百分比减伤: {10 * level}(%)" # 百分比属性
  Options:
    NoAI: true
    AlwaysShowName: true
    MovementSpeed: 0.0
    MaxCombatDistance: 25
    PreventOtherDrops: true
    KnockbackResistance: 1
```
## 技能配置
:::tip
本插件为MM提供了三个技能键，分别是：att-update、att-cache、att-damage
:::
### att-update
使用该键时，怪物释放技能会刷新属性
### att-cache
通常与 `att-damage` 配套使用，使用时需要指定key，方便 `att-damage` 获取  
格式通常如下：att-cache{key=testCache;type=attacker;var1=1;var2=2}  
- key: 指定当前cache使用的key，自定义。主要目的是为了方便后续技能键使用
- type: 接受 `attacker`、`defender`
- 自定义变量: var1、var2 都为自定义参数。可自定义多个变量
### att-damage 
格式: att-damage{cache=testCache;var1=1} @target
- cache: 使用 `att-cache` 中指定的 `key` 就可以将 `cache` 应用在 `att-damage`
- 自定义变量: 和 `cache` 一样，都接受自定义变量
:::tip 
`att-damage` 最后也会产生战斗数据，既然会产生战斗数据，那么也就可以在脚本中使用技能定义变量，可以打开debug让MM怪物释放技能观察可使用的变量
:::