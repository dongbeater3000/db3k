const E_SCORE = {
  'minecraft:zombie': 100,
  'minecraft:skeleton': 200,
  'minecraft:creeper': 200,
	'caverns_and_chasms:deeper': 250,
	'caverns_and_chasms:mime': 300,
  'minecraft:spider': 150,
  'minecraft:slime': 15,
  'minecraft:pig': 10,
  'minecraft:sheep': 10,
  'minecraft:cow': 10,
  'minecraft:chicken': 5,
}

const B_SCORE = {
  'minecraft:diamond_ore': 1000,
  'caverns_and_chasms:silver_ore': 100,
  'minecraft:gold_ore': 100,
  'minecraft:redstone_ore': 50,
  'minecraft:iron_ore': 25,
	'minecraft:copper_ore': 20,
	'minecraft:coal_ore': 15,
  'minecraft:deepslate_diamond_ore': 1000,
  'caverns_and_chasms:deepslate_silver_ore': 100,
  'minecraft:deepslate_gold_ore': 100,
  'minecraft:deepslate_redstone_ore': 50,
  'minecraft:deepslate_iron_ore': 25,
	'minecraft:deepslate_copper_ore': 20,
	'minecraft:deepslate_coal_ore': 15,
  'minecraft:spawner': 2500
}

BlockEvents.broken(event => {
	const {player, block} = event;
	const id = block.id.toString()
	let silktouch = player.mainHandItem.getEnchantmentLevel('silk_touch') > 0;

	player.xp += (B_SCORE[id] && !silktouch) ? B_SCORE[id] : 1;
})

BlockEvents.placed(event => {
	event.player.xp += 1
})

EntityEvents.death(event => {
	const {source, entity} = event;
	const player = source.player;
	const id = entity.type.toString();
	if (!player) return;
	player.xp += E_SCORE[id] ?? 10;
})

