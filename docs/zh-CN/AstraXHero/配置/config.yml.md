---
title: config.yml
description: AstraXHero config.yml
---
# config.yml

```yaml
options:
  # 开启调试模式
  # 正式环境警惕开启
  debug: true
  # 格式化数值
  number-format: "#.##"
  fight:
    # 开启原版护甲，默认关闭
    bukkit-armor: false
    # 缓存抛射物的缓存数据，在脚本中通过data能获取到
    projectile-cache-data: true
    #是否进行非玩家实体间的战斗计算
    eve-fight-cal: false
  # 全息伤害设置
  # 只接管总伤害，如果需要单属性伤害全息，请在脚本属性中调用发送全息方法
  hologram:
    enable: true
    text: "&6造成伤害: &a{damage}"
    holo:
      #起始位置
      begin:
        x: 0
        y: 0.5
        z: 0
      #终止位置
      end:
        x: 0
        y: 1.5
        z: 0
      #运动次数
      time: 15
      #存在时间
      stay: 20
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