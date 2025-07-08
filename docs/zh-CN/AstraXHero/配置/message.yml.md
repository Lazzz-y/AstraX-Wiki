---
title: message.yml
description: AstraXHero message.yml
---
# message.yml
该配置文件主要配置战斗消息推送

```yaml
options:
  default:
    # TITLE 标题
    # ACTION_BAR ActionBar文本
    # CHAT 聊天框文本
    # HOLO 全息文本
    # DISABLE 关闭
    attack: HOLO
    # ACTION_BAR ActionBar文本
    # CHAT 聊天框文本
    # DISABLE 关闭
    defend: CHAT
fight-message:
  #默认的名字
  default-name:
    #attacker为null时
    attacker: '大自然'
    #defender为null时
    defender: '未知'
  chat:
    attack:
      text: "!&d[&9战斗系统&d] &e你对 &a{defender-name} &e造成了: {message}"
      separator: "&5,"
    defend:
      text: "!&d[&9战斗系统&d] &e&a{attacker-name} &e对你造成了: {message}"
      separator: "&5,"
  action-bar:
    attack:
      text: "!&e你对 &a{defender-name} &e造成了: {message}"
      separator: "&5|"
    defend:
      text: "!&e&a{attacker-name} &e对你造成了: {message}"
      separator: "&5|"
    stay: 30
  title:
    attack:
      title: "{message}"
      sub-title: "{message}"
      separator: "&5|"
    defend:
      title: "{message}"
      sub-title: "{message}"
      separator: "&5|"
    fade-in: 3
    stay: 7
    fade-out: 5
  #全息伤害显示
  #支持动画
  #纯发包不卡服务器
  holo:
    #起始位置
    begin:
      x: 0
      y: 0.5
      z: 0
    #终止位置
    end:
      x: -2.0
      y: -2.0
      z: 0
    #运动次数
    time: 15
    #存在时间
    stay: 20
```