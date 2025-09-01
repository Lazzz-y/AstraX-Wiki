---
title: ATTACK
description: AstraXHero ATTACK
---
# ATTACK 属性教学
:::danger 警告
请优先阅读前言，阅读前言之前不要尝试理解，除非你很自信
:::
## 混沌元素伤害
```js
const id = "testAttack"
const placeholder = "testAttack"
const display = "混沌元素伤害"
const combat_value = 30.0
const priority = 1
const type = "ATTACK"

/* 加法操作器 */
Plus = Tool.operation("plus")

/* onAttack 触发器会在实体攻击时触发 */
function onAttack(data) {
	// 获取攻击者当前属性的随机值
	let damage = AttributeAPI.getRandomValue(data.attacker,id)
	// 你也可以使用eval(data.handleStr("xxx - xxx")) 解析伤害类型来获取伤害值
	// let damage = eval(data.handleStr("xxx - xxx"))
	if(damage > 0){
		// 添加伤害并注明伤害来源
		data.damageSources.put("混沌元素伤害", Plus.element(damage))
	}
	data.attacker.sendMessage(`&c${damage > 0 ? damage : "miss"}`)
	return damage
}
```
这样你就实现了一个简单的混沌元素伤害