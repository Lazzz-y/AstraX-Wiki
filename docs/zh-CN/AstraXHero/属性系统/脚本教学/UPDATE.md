---
title: UPDATE
description: AstraXHero UPDATE
---
# UPDATE 属性教学
:::danger 警告
请优先阅读前言，阅读前言之前不要尝试理解，除非你很自信
:::
## 混沌元素伤害加成
```js
const id = "testUpdate"
const placeholder = "testUpdate"
const display = "混沌元素伤害加成"
const combat_value = 30.0
const priority = 1
const type = "UPDATE"

function onUpdate(data) {
// self 表示自身，即触发该方法的实体
	let value = AttributeAPI.getRandomValue(data.self, id)
	// AttributeAPI 可以直接使用，详细请看配置文件中 script.yml
	// 为了避免该来源的属性会对后续计算造成影响，所以先移除该来源的属性
	AttributeAPI.takeSourAttr(data.self, display)
	// 获取当前实体的 testAttack 属性随机值
	let testAttack = AttributeAPI.getRandomValue(data.self, "testAttack")
	// 向实体增加一个来源的属性
	AttributeAPI.addSourAttr(data.self, display, [`testAttack: ${testAttack * value}`])
}
```
这样你就实现了一个简单的混沌元素伤害加成，并会在属性更新的同时触发该方法的更新逻辑