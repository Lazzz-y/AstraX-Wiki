---
title: setting.yml
description: AstraXHero setting.yml
---
# setting.yml
该配置文件主要配置和属性相关的配置

```yaml
# 原版所有属性兼容 --来自 AttributeSystem
# 感谢 Glom 提供的技术支持
# 自定义属性请使用脚本属性实现
# 占位符: %axh_attr:属性名[_后缀]%
# 后缀: min-获取最小值, max-获取最大值, random-获取随机值, total-默认(0.0-0.0)
# 占位符解析出来为 min-max 例如: 10.0-20.0
# 所以如果数值一样使用 _min 或 _max 来获取属性固定值
# 也可以使用 _random 获取随机值
update:
  # 属性更新任务周期 (tick)
  period: 20
  # 玩家更新最低间隔 (ms)
  baffle: 40
# 定时属性触发器周期管理
runtime:
  # 默认每20tick(1s)执行一次任务 (见 period)
  period: 20
  # 禁用任务间隔(ms)
  baffle: 40
condition:
  # 卸甲检测任务周期(tick)
  period: 20
  # 是否脱下装备
  deprive-armor: true
  # 是否阻止拾取
  prevent-pickup: true
  # 是否阻止攻击
  prevent-attack: true
# 禁用左键攻击物品
disable-attack-material:
  values:
    - BOW
    - CROSSBOW
# 战斗状态设置
fight-status:
  enable: true
  value: 100
# 玩家基础属性
player-base-attributes:
  物理伤害:
    # 最小值(不写默认0.0)
    min: 10
    # 最大值(不写默认最小值)
    # max: 20
    # 百分比(不写默认非百分比)
    # operator: '%'
# 实体基础属性
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
# 推荐与攻击速度一起使用，攻速快，攻击冷却越快
attack-cooldown:
  # 启用/禁用冷却系统
  enable: true
  # 使用插件冷却系统(cooldown)
  type: cooldown
  # 免冷却武器列表
  no-cooldown-types:
    - BOW
    - CROSSBOW
  # 最小蓄力阈值（0.05 = 5%），低于此值的攻击会被取消
  min-charge: 0.5
  # 冷却期间：
  #   true: 冷却期间走正常流程
  #   false: 冷却期间攻击事件将被取消
  damage-any-time: false
  # 启用蓄力程度计算，可以在属性中通过"charge"获取到蓄力程度
  # 关闭后蓄力值永远为 1
  charged: true
  # 蓄力计算模式 cooldown(最大蓄力值1.0) | minecraft(原版蓄力机制)
  charge-based: cooldown
# 生命值缩放
health-scale:
  enable: true
  value: 20
# 生命恢复
health-regain:
  # 默认每10tick(0.5s)恢复一次生命值 (见 period)
  enable: true
  # 若为false 将移除该属性的其他来源，全权由本插件负责该属性
  origin: false
  # 每多少tick 恢复一次生命
  period: 10
  # 战斗状态禁止生命恢复系统
  disable-in-fighting: false
  value: '%axh_attr:healthRegain_min% / 2'
# 原版属性
# 使用占位符作为 value 的值时，你应该确保你已经注册了该占位符
# 生命上限血量
max-health:
  enable: true
  origin: false
  # 默认血量
  default: 30
  value: '%axh_attr:health_min%'
# 移动速度
movement-speed:
  enable: true
  origin: false
  # 如果直接设置具体值 -- 会飞(真的会飞)
  # 所以 /2250 是为了适配原版，得到近似1格的距离
  value: '%axh_attr:move_min% / 2250'
# 攻击速度
# 仅支持玩家
attack-speed:
  # 单位为 攻击次数/s
  enable: true
  origin: false
  value: '%axh_attr:spd_min%'
# 幸运
# 仅支持玩家
luck:
  enable: true
  origin: false
  value: '0'
``` 