---
title: DEFENSE
description: AstraXHero DEFENSE
---
# DEFENSE 属性教学
:::danger 警告
请优先阅读前言，阅读前言之前不要尝试理解，除非你很自信
:::
## 混沌元素抗性
```js
const id = "testDenfense"
const placeholder = "testDenfense"
const display = "混沌元素抗性"
const combat_value = 30.0
const priority = 1
const type = "DEFENSE"

/* 减法操作器 */
Reduce = Tool.operation("reduce")

function onDefense(data) {
	// 获取 testAttack 的返回值
	let damage = data["testAttack"] 
	// 获取防御者当前属性的随机值
	let value = AttributeAPI.getRandomValue(data.defender,id)
	if(value > 0){
		// 添加伤害并注明伤害来源
		data.damageSources.put("混沌元素抗性", Reduce.element(value))
	}
	data.defender.sendMessage(`&c${data["attacker-name"]} 对你造成了 ${damage > 0 ? damage : "miss"}，被你抵消掉 ${value}`)
	return damage
}
```
这样你就实现了一个简单的混沌元素抗性