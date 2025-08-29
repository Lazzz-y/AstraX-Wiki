---
title: config.yml
description: AstraXHero config.yml
---
# config.yml

```yaml
options:
  # 开启调试模式
  # 正式环境警惕开启
  debug: false
  # 格式化数值
  number-format: "#.##"
  fight:
    # 开启原版护甲，默认关闭
    bukkit-armor: false
    # 默认伤害类型
    default: default
    #原版抛射物伤害是否会按攻击者射箭时的属性计算 而非射中时的属性
    projectile-cache-data: true
    #是否进行非玩家实体间的战斗计算
    eve-fight-cal: false
  # 选择属性读取源
  read:
    # 百分百读取符号 --- 当使用 lore 读取属性时，该符号将用于百分比读取
    # 支持正则表达式 如: "\\(%\\)"、'\(%\)'、\(%\) 匹配的都是(%)
    # 因为在正则表达式中括号有特殊语意，所以需要 \ 转义
    percent: '\(%\)'
    # 是否读取物品描述
    lore: true
    # 是否读取NBT
    nbt: true
  # 属性设置
  attribute:
    # NBT属性标签
    # 支持多层级, 使用.分割
    # 例如: AstraXHero.Attribute
    # NBT 如下:
    #   AstraXHero:
    #     Attribute:
    #       "属性标签":
    #          min: "最小属性值"
    #          max: "最大属性值"
    # 例如: Attribute
    # NBT 如下:
    #   Attribute:
    #     "属性标签":
    #        min: "最小属性值"
    #        max: "最大属性值"
    # 如果该属性为固定值，则只需填写min(最小属性值)
    # 百分比属性使用 operator: '%'
    # 例如：
    #   Attribute:
    #     "属性标签":
    #        min: "最小属性值"
    #        max: "最大属性值"
    #        operator: '%'
    tag: Attribute
    # Lore读取格式 @key=属性标签 @value=属性值
    format:
      # 属性标签: 属性值
      - "@key: @value"
      # 属性值 属性标签
      - "@value @key"
  condition:
    # NBT条件标签
    # 多层级使用使用.分割 例如: AstraXHero.Condition
    tag: Condition
    # Lore读取格式
    format:
      - "@key: @value"
      - "@value @key"
```