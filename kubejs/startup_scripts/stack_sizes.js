// priority: 0

ItemEvents.modification(event => {
    event.modify([
      'minecraft:golden_apple',
      'minecraft:bread',
      //'minecraft:porkchop', //done in NT to fix pig loot table issue
      //'minecraft:cooked_porkchop', //done in NT to fix pig loot table issue
      'minecraft:mushroom_stew',
      'minecraft:pumpkin_pie',
      'minecraft:cake'
    ], item => {item.maxStackSize = 1})

    event.modify([
      'minecraft:cod',
      'minecraft:cooked_cod',
      'minecraft:apple'
    ], item => {item.maxStackSize = 2})
    
    event.modify([
      'minecraft:sweet_berries'
    ], item => {item.maxStackSize = 4})
    
    event.modify([
      'supplementaries:bomb'
    ], item => {item.maxStackSize = 16})

    event.modify([
      'sereneseasons:calendar'
    ], item => {item.maxStackSize = 64})


 })
