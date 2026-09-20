// priority: 0
BlockEvents.modification(event => {
	event.modify('quark:glow_lichen_growth', block=> {
		block.lightEmission = 7
		block.destroySpeed = 0
	})

	event.modify('minecraft:magma_block', block=> {
		block.destroySpeed = 4
		block.explosionResistance = 6
	})
	event.modify('kubejs:lantern', block=> {
		block.lightEmission = 15
	})
	event.modify('minecraft:spawner', block=> {
		block.destroySpeed = 25
		block.explosionResistance = 10
	})
	event.modify('minecraft:diamond_block', block=> {
		block.destroySpeed = 25
		block.explosionResistance = 1200
	})
	event.modify('mysticaloaktree:wise_oak', block=> {
		block.destroySpeed = 4
		block.explosionResistance = 1200
	})
	event.modify('minecraft:redstone_block', block=> {
		block.lightEmission = 7
	})

	// makes ores explosion resistant
	event.modify([
	'minecraft:coal_ore',
	'minecraft:iron_ore',
	'minecraft:copper_ore',
	'minecraft:gold_ore',
	'minecraft:redstone_ore',
	'minecraft:diamond_ore',
	'minecraft:deepslate_coal_ore',
	'minecraft:deepslate_iron_ore',
	'minecraft:deepslate_copper_ore',
	'minecraft:deepslate_gold_ore',
	'minecraft:deepslate_redstone_ore',
	'minecraft:deepslate_diamond_ore',
	'caverns_and_chasms:silver_ore',
	'caverns_and_chasms:deepslate_silver_ore'
	], block => {block.explosionResistance = 1200})

	// slightly reduces explosion resistance of some blocks to make TNT more viable when mining
	event.modify([
		'minecraft:stone',
		'minecraft:deepslate',				// basalt
	], block => {block.explosionResistance = 2})
})
