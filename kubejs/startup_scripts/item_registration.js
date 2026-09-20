// priority: 0

StartupEvents.registry('item', event => {
  //event.create('rock').displayName('Rock').tag('supplementaries:throwable_bricks')
  event.create('mold').displayName('Mold')
  event.create('cinnabar').displayName('Red Stone')
  event.create('cobalt').displayName('Cobalt')
  event.create('chalice').displayName('Chalice').maxStackSize(16)
  event.create('mercury').displayName('Mercury')
  event.create('tallow').displayName('Tallow')

  // Gotta leave a few joke items
  event.create('amulet').displayName('Amulet')
  event.create('coin').displayName('Coin')
  event.create('ring').displayName('Ring')
  event.create('quiver').displayName('Quiver')

// FOOD
event.create('cheese').displayName('Cheese').maxStackSize(1).food(food => {
  food
      .hunger(8)
        })
event.create('muffin').displayName('Muffin').maxStackSize(4).food(food => {
  food
      .hunger(3)
        })
event.create('apple_pie').displayName('Pie').maxStackSize(1).food(food => {
  food
      .hunger(10)
        })
event.create('cooked_egg').displayName('Fried Egg').maxStackSize(16).food(food => {
  food
      .hunger(1)
        })
event.create('cured_porkchop').displayName('Cured Meat').maxStackSize(1).food(food => {
  food
      .hunger(6)
        })
// BOWL FOOD 

// Chalice
event.create('beer').displayName('Beer').maxStackSize(1).useAnimation('drink').food(food => {
   food
      .hunger(0)
      .effect('strength', 400, 0, 1)
      .effect('slowness', 400, 1, 1)
      .alwaysEdible(true)
        })
event.create('wine').displayName('Wine').maxStackSize(1).useAnimation('drink').food(food => {
   food
      .hunger(0)
      .effect('regeneration', 400, 0, 1)
      .effect('weakness', 400, 1, 1)
      .alwaysEdible(true)
        })
event.create('cider').displayName('Cider').maxStackSize(1).useAnimation('drink').food(food => {
  food
      .hunger(0)
      .effect('speed', 400, 1, 1)
      .effect('kubejs:fragile', 400, 0, 1)
      .alwaysEdible(true)
        })
event.create('mead').displayName('Mead').maxStackSize(1).useAnimation('drink').food(food => {
  food
      .hunger(0)
      .effect('haste', 400, 1, 1)
      .effect('darkness', 400, 0, 1)
      .alwaysEdible(true)
      })
})
