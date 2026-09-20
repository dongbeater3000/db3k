Platform.mods.kubejs.name = 'DB3K'

let $Color = Java.loadClass('java.awt.Color')

StartupEvents.registry('block', event => {
  event.create('substrate', 'falling').hardness(0.6).resistance(0.6).displayName('Substrate').tagBlock('minecraft:mineable/shovel').gravelSoundType()
  event.create('cobblestone_bricks').hardness(1.5).resistance(6).displayName('Stone Bricks').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('rubblestone_bricks').hardness(3.5).resistance(6).displayName('Basalt Bricks').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('tiles').hardness(1.5).resistance(6).displayName('Tiles').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('paper_wall').hardness(1.5).displayName('Paper Wall').tagBlock('minecraft:mineable/axe').defaultCutout().woodSoundType().material('wood')
  event.create('adobe').hardness(1.1).displayName('Adobe').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('concrete').hardness(2).resistance(6).displayName('Concrete').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('log_pile', 'cardinal').hardness(2).resistance(2).displayName('Logpile').tagBlock('minecraft:mineable/axe').soundType('wood').material('wood')
  event.create('bone_pile', 'falling').hardness(0.5).displayName('Bone Pile').tagBlock('minecraft:mineable/pickaxe').soundType('wood')
  event.create('copper_plating').hardness(4).resistance(5).displayName('Copper Plating').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true)
  event.create('iron_plating').hardness(4).resistance(5).displayName('Iron Plating').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true)
  event.create('gold_bricks').hardness(6).resistance(5).displayName('Gold Bricks').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true)
  event.create('silver_bricks').hardness(6).resistance(5).displayName('Silver Bricks').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true)
  event.create('cobalt_tiles').hardness(4.5).resistance(5).displayName('Cobalt Tiles').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true)
  event.create('iron_bars').hardness(3).resistance(2).displayName('Iron Bars').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true).waterlogged().notSolid().renderType('cutout')
  event.create('cage').hardness(2).resistance(1).displayName('Cage').tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true).waterlogged().notSolid().renderType('cutout')
  event.create('plaster').hardness(2).displayName('Plaster').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('red_planks').hardness(2).resistance(3).displayName('Red Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('orange_planks').hardness(2).resistance(3).displayName('Orange Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('yellow_planks').hardness(2).resistance(3).displayName('Yellow Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('lime_planks').hardness(2).resistance(3).displayName('Lime Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('green_planks').hardness(2).resistance(3).displayName('Green Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('teal_planks').hardness(2).resistance(3).displayName('Teal Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('cyan_planks').hardness(2).resistance(3).displayName('Cyan Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('indigo_planks').hardness(2).resistance(3).displayName('Indigo Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('blue_planks').hardness(2).resistance(3).displayName('Blue Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('violet_planks').hardness(2).resistance(3).displayName('Violet Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('purple_planks').hardness(2).resistance(3).displayName('Purple Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('magenta_planks').hardness(2).resistance(3).displayName('Magenta Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('pink_planks').hardness(2).resistance(3).displayName('Rose Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('white_planks').hardness(2).resistance(3).displayName('White Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('gray_planks').hardness(2).resistance(3).displayName('Gray Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  event.create('black_planks').hardness(2).resistance(3).displayName('Black Planks').tagBlock('minecraft:mineable/axe').woodSoundType()
  //event.create('chamber_bricks').hardness(6).resistance(5).displayName('Chamber Bricks').tagBlock('minecraft:mineable/pickaxe').soundType('stone').requiresTool(true)
  event.create('coral').hardness(0.8).resistance(1).displayName('Coral').tagBlock('minecraft:mineable/pickaxe').soundType('stone').waterlogged().notSolid().renderType('cutout')
  event.create('mossy_rubblestone').hardness(3.5).resistance(6).displayName('Moss Basalt').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('stone_bricks').hardness(1.5).resistance(6).displayName('Stone Bricks').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  event.create('basalt_bricks').hardness(3.5).resistance(6).displayName('Basalt Bricks').tagBlock('minecraft:mineable/pickaxe').stoneSoundType().requiresTool(true)
  
  event.create('candle_block').hardness(3).resistance(1).displayName('Candle').tagBlock('minecraft:mineable/axe').soundType('wool').requiresTool(false).tagBlock('minecraft:infiniburn_overworld')

  event.create("iron_fence", "fence").hardness(2).displayName("Wrought Iron Fence").tagBlock('minecraft:mineable/pickaxe').soundType('metal').requiresTool(true)

  event.create('slimed_sand').hardness(0.75).resistance(0.5).soundType('sand').tagBlock('minecraft:mineable/shovel').model('minecraft:block/sand')
  event.create('slimed_gravel').hardness(0.75).resistance(0.6).soundType('gravel').tagBlock('minecraft:mineable/shovel').model('minecraft:block/gravel')
 // event.create('slimed_redstone_dust_block').hardness(0.75).resistance(0.5).soundType('sand').tagBlock('minecraft:mineable/shovel').model('redstonedustblock:block/redstone_dust_block')

  // the default minecraft copper block has oxidization which I do not feel like dealing with so here I define a custom one that replaces it
  event.create('copper_block').hardness(5).resistance(6).displayName('Copper Block').soundType('metal').tagBlock('minecraft:mineable/pickaxe').material('metal').requiresTool(true).tagBlock('minecraft:needs_wood_tool').model('minecraft:block/copper_block')
  // used for lamp block silk touch "bug"
  event.create('lit_lamp').displayName('Lit Lamp').textureAll('minecraft:block/redstone_lamp_on')
  

})
