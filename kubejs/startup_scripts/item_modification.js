// priority: 0


ItemEvents.modification(event => {
	// makes a few items inedible
  	event.modify([
	'minecraft:rotten_flesh',
	'minecraft:spider_eye',
	'minecraft:pufferfish',
	'minecraft:poisonous_potato',
	'minecraft:milk_bucket',
	'supplementaries:soap',
	'minecraft:carrot'
	], item => { item.foodProperties = null})

	// makes certains foods not edible at max health
	const foodNotAlwaysEdible = [
		'minecraft:golden_apple'
	]
    event.modify(foodNotAlwaysEdible, c=>{
        c.setFoodProperties(food => {
            food.alwaysEdible(false)
        })
    })
	// durability modification ========

	//wood
	event.modify([
		'minecraft:wooden_sword',
		'minecraft:wooden_axe',
		'minecraft:wooden_pickaxe',
		'minecraft:wooden_shovel',
		'minecraft:wooden_hoe',
		'minecraft:fishing_rod',
 	], item => { item.maxDamage = 65})

	// copper / other
	event.modify([
		'minecraft:stone_sword',
		'minecraft:stone_axe',
		'minecraft:stone_pickaxe',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe',
		'clash:spear'
	], item => { item.maxDamage = 131})

	//gold
	event.modify([
		'minecraft:golden_sword',
		'minecraft:golden_axe',
		'minecraft:golden_pickaxe',
		'minecraft:golden_shovel',
		'minecraft:golden_hoe',
	], item => { item.maxDamage = 193})

	// iron
	event.modify([
		'minecraft:iron_sword',
		'minecraft:iron_axe',
		'minecraft:iron_pickaxe',
		'minecraft:iron_shovel',
		'minecraft:iron_hoe'
	], item => { item.maxDamage = 257})
  
	// silver
	event.modify([
		'caverns_and_chasms:silver_sword',
		'caverns_and_chasms:silver_axe',
		'caverns_and_chasms:silver_pickaxe',
		'caverns_and_chasms:silver_shovel',
		'caverns_and_chasms:silver_hoe'
	], item => { item.maxDamage = 513})
	durabilityMod(event, 'minecraft:carrot_on_a_stick', 1);
	
	// chain armor
	durabilityMod(event, 'minecraft:chainmail_helmet', 140);
	durabilityMod(event, 'minecraft:chainmail_chestplate', 210);
	durabilityMod(event, 'minecraft:chainmail_leggings', 200);
	durabilityMod(event, 'minecraft:chainmail_boots', 165);

	// plate armor
	durabilityMod(event, 'caverns_and_chasms:silver_helmet', 165);
	durabilityMod(event, 'caverns_and_chasms:silver_chestplate', 240);
	durabilityMod(event, 'caverns_and_chasms:silver_leggings', 225);
	durabilityMod(event, 'caverns_and_chasms:silver_boots', 195);

	// diamond
	event.modify([
		'minecraft:diamond_sword',
		'minecraft:diamond_axe',
		'minecraft:diamond_pickaxe',
		'minecraft:diamond_shovel',
		'minecraft:diamond_hoe'
  ], item => { item.maxDamage = 1025})
	event.modify([
		'minecraft:diamond_helmet',
		'minecraft:diamond_chestplate',
		'minecraft:diamond_leggings',
		'minecraft:diamond_boots'
	], item => { item.armorKnockbackResistance = 0.10})
})

/**
 * Function to change an item's durability more cleanly, to save space in cases of unique durability
 * @param {*} event The event
 * @param {*} itemIn The item to modify
 * @param {*} durability The intended durability
 */
function durabilityMod(event, itemIn, durability){
	event.modify(itemIn, item => {
		item.maxDamage = durability}
	)
}