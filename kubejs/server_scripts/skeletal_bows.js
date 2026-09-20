// Invisible bows
EntityEvents.spawned(event => {
  const {entity} = event;
  if (entity.type != 'minecraft:skeleton') return;
	entity.mainHandItem = Item.of('minecraft:bow', '{Skeletal:1}');
})

// Purple arrows
// Jankiest way to do this ever but itwiw
EntityEvents.spawned(event => {
	const {entity} = event;
	if (entity.type != 'minecraft:arrow') return;
	if (entity.getOwner().type == 'minecraft:skeleton') {
		entity.customName = 'Skeletal';
		entity.setCustomNameVisible(false);
	}
})