---
title: setting.yml
description: AstraXHero setting.yml
---
# setting.yml
该配置文件主要配置和属性相关的配置

## 原版属性兼容列表
> 所有原版属性均兼容
- max-health: 最大生命值
- movement-speed: 移动速度
- knockback-resistance: 击退抗性
- fly-speed: 飞行速度
- attack-damage: 近战攻击伤害
- attack-knockback: 攻击击退
- armor: 护甲值
- armor-toughness: 护甲韧性
> 以下原版属性只支持玩家
- attack-speed: 攻击速度
- luck: 幸运

```yaml
# 原版所有属性兼容 --来自 AttributeSystem# 感谢 Glom 提供的技术支持  
# 自定义属性请使用脚本属性实现  
# 占位符: %axh_attr:属性名[_后缀]%  
# 后缀: min-获取最小值, max-获取最大值, random-获取随机值, total-默认(0.0-0.0)  
# 占位符解析出来为 min-max 例如: 10.0-20.0  
# 所以如果数值一样使用 _min 或 _max 来获取属性固定值  
# 也可以使用 _random 获取随机值  
update:  
  # 属性更新任务周期 (tick)  period: 20  
  # 玩家更新最低间隔 (ms)  baffle: 40  
condition:  
  # 卸甲检测任务周期(tick)  
  period: 20  
  # 是否脱下装备  
  deprive-armor: true  
  # 是否阻止拾取  
  prevent-pickup: true  
  # 是否阻止攻击  
  prevent-attack: true  
  
# 玩家基础属性  
player-base-attributes:  
  物理伤害:  
    # 最小值(不写默认0.0)  
    min: 10  
    # 最大值(不写默认最小值)  
    # max: 20    # 百分比(不写默认非百分比)  
    # operator: '%'# 实体基础属性  
entity-base-attributes:  
  # 是否开启原版实体基础属性渲染  
  bukkit-entity: false  
  物理抵抗:  
    # 最小值(不写默认0.0)  
    min: 10  
    # max: 20  
    # 百分比(不写默认非百分比)  
    # operator: '%'  
# 攻击冷却  
# 受攻击速度影响  
attack-cooldown:  
  # 启用/禁用冷却系统  
  enable: true  
  # 免冷却武器列表  
  no-cooldown-types:  
    - BOW  
    - CROSSBOW  
  # 最小蓄力阈值（0.05 = 5%），低于此值的攻击会被取消  
  min-charge: 0.5  
  # 是否允许在冷却期间造成伤害：  
  #   true: 冷却中也能攻击  
  #   false: 冷却中不能攻击  
  damage-any-time: false  
  # 使用插件冷却系统（非原版冷却机制） cooldown | minecraft  type: cooldown  
  # 启用蓄力程度计算，可以在属性中通过"charge"获取到蓄力程度  
  charged: true  
  # 蓄力计算模式 cooldown | minecraft  charge-based: cooldown  
  
# 攻击距离  
attack-distance:  
  # 启用/禁用  
  enable: true  
  # 播放音效  
  sound: true  
  # 默认攻击距离  
  default: 3  
  # 创造模式攻击距离  
  creative: 4.5  
  # 攻击距离值  
  value: '%axh_attr:攻击距离_min%'  
  
# 生命值缩放  
health-scale:  
  enable: true  
  value: 20  
  
# 生命恢复  
health-regain:  
  # 默认每10tick(0.5s)恢复一次生命值 (见 period)  # 为了方便实现"每秒回血" %axh_healthregain_min% /s 故将值除以二  
  enable: true  
  # 若为false 将移除该属性的其他来源，全权由本插件负责该属性  
  origin: false  
  # 每多少tick 恢复一次生命  
  period: 10  
  # 战斗时间禁生命恢复系统  
  disable-in-fighting: false  
  value: '%axh_attr:生命恢复_min% / 2'  
  
# 原版属性  
# 使用占位符作为 value 的值时，你应该确保你已经注册了该占位符  
# 生命上限血量  
max-health:  
  enable: true  
  origin: false  
  # 默认血量  
  default: 30  
  value: '%axh_attr:生命上限_min%'  
  
# 移动速度  
movement-speed:  
  enable: true  
  origin: false  
  # 如果直接设置具体值 -- 会飞(真的会飞)  
  # 所以 /2250 是为了适配原版，得到近似1格的距离  
  value: '%axh_attr:移动速度_min% / 2250'  
  
# 攻击速度  
# 仅支持玩家  
attack-speed:  
  # 单位为 攻击次数/s  
  enable: true  
  origin: false  
  value: '%axh_attr:攻击速度_min%'  
  
# 击退抗性  
knockback-resistance:  
    enable: true  
    origin: false  
    value: '0'  
# 幸运  
# 仅支持玩家  
luck:  
  enable: true  
  origin: false  
  value: '0'
``` 