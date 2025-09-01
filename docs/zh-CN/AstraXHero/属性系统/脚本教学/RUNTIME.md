---
title: RUNTIME
description: AstraXHero RUNTIME
---
# RUNTIME 属性教学
:::danger 警告
请优先阅读前言，阅读前言之前不要尝试理解，除非你很自信
:::
## 混沌元素伤害加成
```js
const id = "testRuntime"
const placeholder = "testRuntime"
const display = "间隔伤害"
const combat_value = 30.0
const priority = 1
const type = "RUNTIME"

function onInit(attr) {
	// 关闭异步，部分操作需要在主线程执行
    attr.async = false
    return attr
}

function onTask(data) {
    // 获取光标指向5格内的实体
    let entities = Tool.getEntityRayHits(data.self, 5.0)
    // 为 data.self 创建名一个为 "ThreeTimes",初始值为0，最小值为0，最大值为3，步进1的计数器
    let counter = AttributeAPI.createCounter(data.self, "ThreeTimes", 0, 0, 3, 1)
    // 计数器累加
    counter.increment()
    print(`当前计数器值: ${counter.getValue()}`)
	let damage = 100.0
    if (counter.getValue() >= 3) {
        for (let idx in entities) {
            Tool.doDamageEntity(entities[idx], damage, data.self)
        }
        print(`对眼前的实体造成伤害: ${damage}`)
		// 重置计数器
        counter.reset()
    }
}
```
这样你就实现了一个带计数器的间隔伤害，当计数器到3，则会对眼前5个的实体造成 100.0 点伤害