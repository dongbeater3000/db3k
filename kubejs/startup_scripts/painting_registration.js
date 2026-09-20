// priority: 0

StartupEvents.registry('painting_variant', (event) => {
  //creates custom paintings
  // 1x1
  event.create('chateau').width(16).height(16).tag('minecraft:placeable')
  event.create('dodfagel').width(16).height(16).tag('minecraft:placeable')
  event.create('mountain').width(16).height(16).tag('minecraft:placeable')
  event.create('whitecloud').width(16).height(16).tag('minecraft:placeable')
  event.create('desert').width(16).height(16).tag('minecraft:placeable')
  // 1x2
  event.create('drawings').width(16).height(32).tag('minecraft:placeable')
  event.create('elegy').width(16).height(32).tag('minecraft:placeable')
  event.create('spawn').width(16).height(32).tag('minecraft:placeable')
  // 2x1
  event.create('average').width(32).height(16).tag('minecraft:placeable')
  event.create('route').width(32).height(16).tag('minecraft:placeable')
  event.create('bull').width(32).height(16).tag('minecraft:placeable')
  event.create('makrill').width(32).height(16).tag('minecraft:placeable')
  event.create('lion').width(32).height(16).tag('minecraft:placeable')
  // 2x2
  event.create('bathers').width(32).height(32).tag('minecraft:placeable')
  event.create('deer').width(32).height(32).tag('minecraft:placeable')
  event.create('evening').width(32).height(32).tag('minecraft:placeable')
  event.create('john').width(32).height(32).tag('minecraft:placeable')
  event.create('luteplayer').width(32).height(32).tag('minecraft:placeable')
  event.create('pergola').width(32).height(32).tag('minecraft:placeable')
  event.create('ruins').width(32).height(32).tag('minecraft:placeable')
  event.create('wait').width(32).height(32).tag('minecraft:placeable')
  // 3x3
  event.create('bouquet').width(48).height(48).tag('minecraft:placeable')
  event.create('cavebird').width(48).height(48).tag('minecraft:placeable')
  event.create('endboss').width(48).height(48).tag('minecraft:placeable')
  event.create('fern').width(48).height(48).tag('minecraft:placeable')
  event.create('owlemons').width(48).height(48).tag('minecraft:placeable')
  event.create('sunflower').width(48).height(48).tag('minecraft:placeable')
  event.create('tides').width(48).height(48).tag('minecraft:placeable')
  // 3x4
  event.create('backyard').width(48).height(64).tag('minecraft:placeable')
  event.create('pond').width(48).height(64).tag('minecraft:placeable')
  event.create('box').width(48).height(64).tag('minecraft:placeable')
  // 4x2
  event.create('changing').width(64).height(32).tag('minecraft:placeable')
  event.create('finding').width(64).height(32).tag('minecraft:placeable')
  event.create('lowmist').width(64).height(32).tag('minecraft:placeable')
  event.create('passage').width(64).height(32).tag('minecraft:placeable')
  event.create('gate').width(64).height(32).tag('minecraft:placeable')
  event.create('skulls').width(64).height(32).tag('minecraft:placeable')
  // 4x3
  event.create('phototiles').width(64).height(48).tag('minecraft:placeable')
  event.create('stage').width(64).height(48).tag('minecraft:placeable')
  // 4x4
  event.create('goldenapple').width(64).height(64).tag('minecraft:placeable')
  event.create('source').width(64).height(64).tag('minecraft:placeable')
  event.create('orb').width(64).height(64).tag('minecraft:placeable')

 })
