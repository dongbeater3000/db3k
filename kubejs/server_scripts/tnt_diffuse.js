ItemEvents.entityInteracted((event) => {
	const { target } = event;

	  //check if target is tnt
	if (target.type != "minecraft:tnt") return;
	
	// delete primed tnt
  	target.discard();

	// creates tnt item to "drop"
	// code modified from Raspberry Flavoured script
	let itemEntity = event.level.createEntity("item")
	itemEntity.item = ('minecraft:tnt')
	itemEntity.y = target.y + 0.25
	itemEntity.x = target.x
	itemEntity.z = target.z
	itemEntity.item.count = 1
	itemEntity.motionY = 0.15
	itemEntity.motionX = 0.075
	itemEntity.spawn()

	//visual/audio flare
	event.player.swing(event.hand, true)
	event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.fire.extinguish', 'blocks', 1, 1)
  })

// EntityEvents.hurt (event => {
// 	const { target, item } = event;

// 	  //check if target is tnt
// 	if (target.type != "minecraft:tnt") return;
	
// 	// delete primed tnt
//   	target.discard();

// 	// creates tnt item to "drop"
// 	// code modified from Raspberry Flavoured script
// 	let itemEntity = event.level.createEntity("item")
// 	itemEntity.item = ('minecraft:tnt')
// 	itemEntity.y = target.y + 0.25
// 	itemEntity.x = target.x
// 	itemEntity.z = target.z
// 	itemEntity.item.count = 1
// 	itemEntity.motionY = 0.15
// 	itemEntity.motionX = 0.075
// 	itemEntity.spawn()

// 	//visual/audio flare
// 	event.player.swing(event.hand, true)
// 	event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:block.fire.extinguish', 'blocks', 1, 1)
//   })