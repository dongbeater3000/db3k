// priority: 0

ServerEvents.tags('block', event => {
    event.get('minecraft:mineable/axe')
    .add('minecraft:oak_leaves')
    event.get('minecraft:mineable/hoe')
    .remove('minecraft:oak_leaves')

    let temp = event.get('minecraft:wool').getObjectIds()
    temp.forEach(item => {
        event.get('minecraft:mineable/hoe').add(item)
    })

    event.get('snowrealmagic:not_containables')
    .add('minecraft:sweet_berry_bush')

    // makes copper ore mineable with wooden pickaxe
    event.get('minecraft:needs_stone_tool')
    .remove('minecraft:copper_ore')
    .remove('minecraft:deepslate_copper_ore')

    // most of these already have this but never hurts to be sure
    event.get('minecraft:needs_iron_tool')
    .add('minecraft:deepslate_coal_ore')
    .add('minecraft:deepslate_copper_ore')
    .add('minecraft:deepslate_iron_ore')
    .add('minecraft:deepslate_gold_ore')
    .add('minecraft:deepslate_redstone_ore')
    .add('minecraft:deepslate')
    .remove('supplementaries:gold_door') 
    .remove('supplementaries:gold_trapdoor') 

    //event.get('minecraft:needs_diamond_tool')
    //.add('minecraft:diamond_ore') 
    //.add('minecraft:deepslate_diamond_ore') 

    event.get('minecraft:infiniburn_overworld')
    .add('kubejs:brimstone')
    .add('kubejs:brimstone_bricks')
    .add('caverns_and_chasms:rotten_flesh_block')

    // makes certain blocks burn green
    event.get('caverns_and_chasms:cupric_fire_base_blocks')
    .add('kubejs:copper_block')
    .add('kubejs:copper_plating')
    .add('minecraft:dispenser')
    .add('minecraft:piston')
    .add('minecraft:sticky_piston')
    .add('minecraft:redstone_lamp')

    // makes certain blocks burn blue
    event.get('minecraft:soul_fire_base_blocks')
    .add('minecraft:lodestone')
    .add('kubejs:bone_pile')
    .add('kubejs:bone_pillar')
  
})

ServerEvents.tags('item', event => {
    // tag clearing
    event.removeAll('vtweaks:ignition_item')
    event.removeAll('caverns_and_chasms:magic_damage_items')

    event.get('vtweaks:ignition_item')
    .add('minecraft:flint_and_steel')

    event.get('supplementaries:ropes')
    .remove('supplementaries:rope')
    event.get('minecraft:creeper_drop_music_disc')
    .add('minecraft:music_disc_pigstep')

})

// remove paintings that shouldnt be placeable
ServerEvents.tags('painting_variant', event => {
	event.get('minecraft:placeable')
	.remove('minecraft:wither')
    .remove('supplementaries:bombs')
    .remove('caverns_and_chasms:isolation')
})
