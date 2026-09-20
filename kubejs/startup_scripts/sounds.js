// priority: 0

StartupEvents.registry('sound_event', (event) => {
  // used for spawners
  event.create('spawner.spawn')

  // custom lever sound without overwriting others
  //event.create('block.lever.flick')

  // overwrites EXTRASOUNDS sounds for menus
  event.create('generic.menutick')
  event.create('generic.menuscroll')
  event.create('generic.menuopen')
  event.create('generic.menuclose')

  // ambient loops
  event.create('loops.bird')
  event.create('loops.chimes')
  event.create('loops.crickets')
  event.create('loops.ocean')
  event.create('loops.waterfall')
  event.create('loops.wind')

})
