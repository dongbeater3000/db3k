// priority: 0

ServerEvents.recipes(event => {
  event.remove({id: 'minecraft:rail'})
  event.remove({id: 'minecraft:redstone_from_smelting_redstone_ore'})
  event.remove({id: 'minecraft:mossy_cobblestone_from_moss_block'})
  event.remove({id: 'minecraft:bone_meal_from_bone_block'})
  event.remove({id: 'minecraft:redstone_lamp'})
  event.remove({id: 'minecraft:piston'})
  event.remove({id: 'minecraft:ender_chest'})
  event.remove({id: 'heartstone:heartstone'})
  event.remove({id: 'quark:tools/crafting/trowel'})
  event.remove({id: 'quark:tools/crafting/abacus'})
  event.remove({id: 'quark:automation/crafting/abacus'})
  event.remove({id: 'minecraft:sponge'})
  event.remove({id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore'})
  //event.remove({id: 'minecraft:sponge'})
  event.remove({id: 'minecraft:lodestone'})
  event.remove({id: 'berry_good:sweet_berry_pips'})
  event.remove({id: 'redstonedustblock:redstone_dust_block'})

  event.remove({output: 'minecraft:firework_rocket'})

  event.remove({type: 'blasting'})
  event.remove({type: 'smithing'})
  event.remove({type: 'smoking'})
  event.remove({type: 'stonecutting'})
  event.remove({type: 'campfire_cooking'})

  // when possible, recipes should be done with a datapack.
  // the following recipes are impossible or very tedious to do so with, for one reason or another
  //event.shaped('3x guildedarrows:lit_arrow', ['AAA', ' B '], {A: 'minecraft:arrow', B: 'kubejs:oil'}).replaceIngredient('kubejs:oil', 'minecraft:bowl')
  event.shaped('32x minecraft:rail', ['A A', 'ABA', 'A A'], {A: 'minecraft:iron_ingot', B: 'minecraft:stick'}).id('minecraft:rail')
  event.shaped('2x heartstone:heartstone', [' B ', 'A A', ' A '], {A: 'minecraft:gold_ingot', B: 'minecraft:diamond'}).id('heartstone:heartstone')

  event.shapeless('minecraft:sponge', ['minecraft:wet_sponge', 'minecraft:bucket']).replaceIngredient('minecraft:bucket', 'minecraft:water_bucket')
  event.shapeless('minecraft:wet_sponge', ['minecraft:sponge', 'minecraft:water_bucket']).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  event.shaped('minecraft:compass',['E'], {E: Item.of('minecraft:compass', '{LodestoneTracked:1b}').weakNBT()}).id('db3k:compass_demagnetize')

  // dyes ===
  /*
   * OF NOTE: many dyes have had their names changed
   * minecraft_color_name -> db3k_color_name
   * ###
   * light_blue -> blue
   * light_gray -> violet
   * blue -> indigo
   * brown -> teal
   * pink -> rose
   */
  const dyeColors = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
  dyeColors.forEach(color => {
    event.remove({output: 'minecraft:' + color + '_dye'})
    event.remove({output: 'minecraft:' + color + '_wool'})
    event.remove({output: 'quark:' + color + '_shingles'})

  })
  event.shaped('8x minecraft:red_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:red_dye'}).id('minecraft:red_cloth')
  event.shaped('8x minecraft:magenta_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:magenta_dye'}).id('minecraft:magenta_cloth')
  event.shaped('8x minecraft:blue_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:blue_dye'}).id('minecraft:indigo_cloth')
  event.shaped('8x minecraft:light_blue_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:light_blue_dye'}).id('minecraft:blue_cloth')
  event.shaped('8x minecraft:green_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:green_dye'}).id('minecraft:green_cloth')
  event.shaped('8x minecraft:yellow_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:yellow_dye'}).id('minecraft:yellow_cloth')
  event.shaped('8x minecraft:white_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:white_dye'}).id('minecraft:white_cloth')
  event.shaped('8x minecraft:black_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:black_dye'}).id('minecraft:black_cloth')
  event.shaped('8x minecraft:orange_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:orange_dye'}).id('minecraft:orange_cloth')
  event.shaped('8x minecraft:pink_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:pink_dye'}).id('minecraft:rose_cloth')
  event.shaped('8x minecraft:light_gray_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:light_gray_dye'}).id('minecraft:violet_cloth')
  event.shaped('8x minecraft:cyan_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:cyan_dye'}).id('minecraft:cyan_cloth')
  event.shaped('8x minecraft:brown_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:brown_dye'}).id('minecraft:teal_cloth')
  event.shaped('8x minecraft:lime_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:lime_dye'}).id('minecraft:lime_cloth')
  event.shaped('8x minecraft:gray_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:gray_dye'}).id('minecraft:gray_cloth')
  event.shaped('8x minecraft:purple_wool', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:wool', B: 'minecraft:purple_dye'}).id('minecraft:purple_cloth')


  //primaries
  event.shapeless('2x minecraft:red_dye', ['minecraft:poppy']).id('minecraft:red_dye')
  event.shapeless('2x minecraft:magenta_dye', ['minecraft:nautilus_shell']).id('minecraft:magenta_dye')
  event.shapeless('2x minecraft:blue_dye', ['minecraft:sweet_berries']).id('minecraft:indigo_dye')
  event.shapeless('2x minecraft:light_blue_dye', ['minecraft:blue_orchid']).id('minecraft:blue_dye')
  event.smelting('minecraft:green_dye', 'minecraft:cactus').id('minecraft:green_dye')
  event.shapeless('2x minecraft:yellow_dye', ['minecraft:dandelion']).id('minecraft:yellow_dye')
  event.shapeless('2x minecraft:bone_meal', ['minecraft:bone']).id('minecraft:white_dye')
  event.shapeless('4x minecraft:black_dye', ['minecraft:coal', 'minecraft:coal']).id('minecraft:black_dye')
  //secondaries
  event.shapeless('2x minecraft:orange_dye', ['minecraft:red_dye', 'minecraft:yellow_dye']).id('minecraft:orange_dye')
  event.shapeless('2x minecraft:pink_dye', ['minecraft:red_dye', 'minecraft:magenta_dye']).id('minecraft:rose_dye')
  event.shapeless('2x minecraft:light_gray_dye', ['minecraft:blue_dye', 'minecraft:black_dye']).id('minecraft:violet_dye')
  event.shapeless('2x minecraft:cyan_dye', ['minecraft:light_blue_dye', 'minecraft:bone_meal']).id('minecraft:cyan_dye')
  event.shapeless('2x minecraft:brown_dye', ['minecraft:blue_dye', 'minecraft:green_dye']).id('minecraft:teal_dye')
  event.shapeless('2x minecraft:lime_dye', ['minecraft:green_dye', 'minecraft:yellow_dye']).id('minecraft:lime_dye')
  event.shapeless('2x minecraft:gray_dye', ['minecraft:black_dye', 'minecraft:bone_meal']).id('minecraft:gray_dye')
  event.shapeless('2x minecraft:purple_dye', ['minecraft:red_dye', 'minecraft:light_blue_dye']).id('minecraft:purple_dye')

    //bulk replaces any instance of white dye with bonemeal
  event.replaceInput(
    { input: 'minecraft:white_dye' }, // Arg 1: the filter
    'minecraft:white_dye',            // Arg 2: the item to replace
    'minecraft:bone_meal'         // Arg 3: the item to replace it with
  )
  event.replaceInput({input: 'supplementaries:soap'}, 'quark:shingles','quark:white_shingles')
});
