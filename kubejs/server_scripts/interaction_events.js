// Custom berry bush behavior
// very janky but otherwise is hardcoded to did the best I could
BlockEvents.rightClicked(event => {
	const {player, block, item, facing} = event;
	if(block.id == 'minecraft:sweet_berry_bush') {
		// prevents stage 2 berries from being harvested
		if(block.properties.get('age') == 2 && (item.id != 'minecraft:bone_meal' && item.id != 'minecraft:debug_stick')) event.cancel()
			
		// custom picking behavior
		if(block.properties.get('age') == 3) {
			player.swing(event.hand, true)
			block.popItemFromFace('minecraft:sweet_berries', facing)
			// drop seeds, sometimes
			if((Math.floor(Math.random() * 32) + 1) <= 1) {
				block.popItemFromFace('berry_good:sweet_berry_pips', facing)
			}
			block.set('minecraft:sweet_berry_bush', {age:'0'})
			event.level.playSound(null, block.x, block.y, block.z, 'minecraft:block.grass.break', 'blocks', 1, 1)
			event.server.runCommandSilent(`particle minecraft:item minecraft:sweet_berries ${block.x} ${block.y+0.5} ${block.z} 0.25 0.5 0.25 0 10 normal`)

			// prevents regular berry behavior from taking over from here
			event.cancel()
		}
	}
})

// sliming
BlockEvents.rightClicked(event=> {
	const {block, level, item, player} = event;
	if(item.id != "minecraft:slime_ball") return
	if(block.id == "minecraft:sand") { slimeBlock(event, 'kubejs:slimed_sand') }
	if(block.id == "minecraft:gravel") { slimeBlock(event, 'kubejs:slimed_gravel') }
	if(block.id == "redstonedustblock:redstone_dust_block") { slimeBlock(event,'minecraft:redstone_block') }
})

/**
 * Converts a block to a different block, with slime related sound effects
 * @param {} event 
 * @param {*} new_block_id Slimed block ID
 */
function slimeBlock(event, new_block_id) {
	const {block, level, item, player} = event
	block.set(`${new_block_id}`)
	player.swing(event.hand, true)
	level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.slime.squish', 'blocks', 1, 1)
	event.server.runCommandSilent(`particle minecraft:item minecraft:slime_ball ${block.x+0.5} ${block.y+0.5} ${block.z+0.5} 0.75 0.75 0.75 0 10 normal`)
	if (!event.player.isCreative()) {
		event.item.count--
	}
}

BlockEvents.rightClicked(event => {
	if(event.block.id == "respawn_block:bleeding_obsidian") {
		event.player.swing(event.hand, true)
		event.level.spawnParticles('minecraft:smoke', false, event.block.x+0.5, event.block.y+0.5, event.block.z+0.5, 0.5, 0.5, 0.5, 30, 0);
	}
})

// Supplementaries wrench edits
const wrenchBlacklist = ['minecraft:oak_log']
BlockEvents.rightClicked(event => {
	if(wrenchBlacklist.includes(event.block.id) && event.item.id == "supplementaries:wrench"){
		event.cancel()
	}
})

// Chickens drop eggs when fed seeds
ItemEvents.entityInteracted(event => {
	const { target } = event
	if(target.type == 'minecraft:chicken' && event.item.id == 'minecraft:wheat_seeds') {
		// prevents script from running if the chicken is a baby
		if(target.nbt.Age <0) { return }

		// feeds the chicken the seed
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.generic.eat', 'players', 1, 1.3)
		event.server.runCommandSilent(`particle minecraft:item minecraft:wheat_seeds ${target.x} ${target.y + 0.25} ${target.z} 0.25 0.25 0.25 0 5 normal`)

		// removes seed item
		if (!event.player.isCreative()) {
			event.item.count--
		}

		// random chance to drop an egg from the chicken when fed
		if(Math.floor(Math.random() * 8)+1 <= 1){
			spawnItemEntity('minecraft:egg', 1, target)
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.item.pickup', 'players', 1, 1)
		}

		// cancels the regular breeding event
		event.cancel()
	}
})

// Pigs drop mushrooms when fed
ItemEvents.entityInteracted(event => {
	const { target } = event
	if(target.type == 'minecraft:pig' && event.item.id == 'minecraft:wheat') {
		// prevents script from running if the pig is a baby
		if(target.nbt.Age < 0) { return }

		// feeds the pig the seed
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.generic.eat', 'players', 1, 1.3)
		event.server.runCommandSilent(`particle minecraft:item minecraft:wheat ${target.x} ${target.y + 0.25} ${target.z} 0.45 0.45 0.45 0 5 normal`)

		// removes seed item
		if (!event.player.isCreative()) {
			event.item.count--
		}

		// random chance to drop an item
		if(Math.floor(Math.random() * 8)+1 <= 1){
			spawnItemEntity('minecraft:brown_mushroom', 1, target)
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.item.pickup', 'players', 1, 1)
		}

		// cancels the regular event
		event.cancel()
	}
})

// Item Interaction Disabler

const disabledEntityInteractions = ['caverns_and_chasms:golden_bucket', 'minecraft:wheat', 'minecraft:carrot', 'minecraft:white_dye', 'minecraft:bone_meal', 'minecraft:black_dye', 'minecraft:red_dye', 'minecraft:yellow_dye', 'minecraft:blue_dye', 'minecraft:orange_dye', 'minecraft:green_dye', 'minecraft:purple_dye', 'minecraft:gray_dye', 'minecraft:light_gray_dye', 'minecraft:lime_dye', 'minecraft:light_blue_dye', 'minecraft:brown_dye', 'minecraft:magenta_dye', 'minecraft:pink_dye', 'minecraft:cyan_dye']
ItemEvents.entityInteracted(event => {
	const {target} = event
	if(!target.isAlive()) { return }
	if(disabledEntityInteractions.includes(event.item.id) && (target.type == 'minecraft:pig' || target.type == 'minecraft:sheep' || target.type == 'minecraft:cow')){
		event.cancel()
	}

})

/**
 * Spawns an additional dropped item when called 
 * @param {*} item The item to drop
 * @param {*} maxCount The maximum count of this item which will be dropped
 * @param {*} target The object which is targetted to drop this item
 */
function spawnItemEntity(item, maxCount, target){
	let itemEntity = target.level.createEntity("item")
	itemEntity.item = (item)
	itemEntity.y = target.y + 0.25
	itemEntity.x = target.x
	itemEntity.z = target.z
	itemEntity.item.count = Math.floor(Math.random() * (maxCount) + 1)
	itemEntity.motionY = 0.15 + Math.random() * (0.25)
	itemEntity.motionX = 0.075 + Math.random() * (0.25)
	itemEntity.motionZ = Math.random() * (0.25)
	itemEntity.spawn()
  }

  
//DEPRICATED SINCE v1.0.2_01
// // Makes seeds occasionally drop from grass when tilled, with a rare chance for a turnip to drop instead
// let hoes = ['minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe', 'minecraft:golden_hoe', 'minecraft:diamond_hoe', 'caverns_and_chasms:silver_hoe']
// BlockEvents.rightClicked(event => {
// 	const {block, level, item, facing} = event;

// 	// prevents script from running if item isnt a hoe
// 	if(!hoes.includes(item.id)) { return; }

// 	// checks that grass block is valid for being tilled
// 	if(block.id == "minecraft:grass_block" && level.getBlock(block.x, block.y + 1, block.z).id == "minecraft:air") {
// 		// randomly selects whether to drop an item, and whether that item is seeds or a turnip
// 		let randChance = Math.floor(Math.random() * 64) + 1
// 		if(item.id == 'minecraft:golden_hoe') { randChance = Math.floor(Math.random() * 48) + 1} // fortune
// 		if(randChance <= 8) {
// 			block.popItemFromFace('minecraft:wheat_seeds', facing)
// 		} 
// 		// else if(randChance <= 10) {
// 		// 	block.popItemFromFace('kubejs:turnip_seed', facing)
// 		// }
// 	}
// })