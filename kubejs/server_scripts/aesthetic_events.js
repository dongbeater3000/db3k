// priority 0
aesthetic_init();



/**
 * Initalizes entity aesthetic events
 */
function aesthetic_init() {
    playerSpawnParticleEvents_init();

    // particles when other mobs spawn
    const poofEntities = ['minecraft:zombie', 'minecraft:skeleton', 'minecraft:creeper', 'minecraft:spider', 'minecraft:slime',
        'minecraft:pig', 'minecraft:sheep', 'minecraft:chicken', 'minecraft:cow', 'caverns_and_chasms:deeper', 'caverns_and_chasms:mime', 'minecraft:tnt'
    ]

    EntityEvents.spawned(event => {
        // checks both whether the target is in whitelist, and checks that it was NOT spawned with a cage (which already has particles)
        if (poofEntities.includes(event.entity.type) && event.checkSpawn !== 'SPAWNER') {
            if (event.entity.type == 'minecraft:slime' && event.entity.nbt.size <= 2) {
                return;
            }
            playerSpawnParticles(event);
        }
    });

    EntityEvents.hurt(event => {
        if(poofEntities.includes(event.entity.type)) {
            if(event.source.player) {
                event.level.spawnParticles('minecraft:smoke', false, event.entity.x, event.entity.y + 1, event.entity.z, 0.1, 0.6, 0.1, 1, 0);
            }
        }
    });
	
    // Mob spawner sounds
	EntityEvents.checkSpawn(event => {
		if (event.type == 'SPAWNER') {
			//event.level.spawnParticles('minecraft:flame', true, event.entity.x, event.entity.y, event.entity.z, 0, 0, 0, 20, 0.075)
			event.level.playSound(null, event.entity.x, event.entity.y, event.entity.z, 'minecraft:entity.player.breath', 'hostile', 1, 1);
		}
	});

    // Additional sounds/particles for furnace minecarts
    ItemEvents.entityInteracted(event => {
        if (event.target.type == 'minecraft:furnace_minecart' && event.item.id == 'minecraft:coal') {
            event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'minecraft:entity.creeper.hurt', 'players', 0.75, 0.60);
            event.server.runCommandSilent(`particle minecraft:flame ${event.target.x} ${event.target.y} ${event.target.z} 0.33 0.33 0.33 0 5 normal`)
        }
    });

    // Survival test inspired explosion particles
    LevelEvents.afterExplosion(event => {
        if(event.exploder.type == 'minecraft:creeper') { 
            event.server.runCommandSilent(`particle minecraft:block minecraft:oak_leaves ${event.exploder.x} ${event.exploder.y} ${event.exploder.z} 1.5 1.5 1.5 0 150 normal`)
        }
        if(event.exploder.type == 'caverns_and_chasms:deeper') { 
            event.server.runCommandSilent(`particle minecraft:block minecraft:cobblestone ${event.exploder.x} ${event.exploder.y} ${event.exploder.z} 1.5 1.5 1.5 0 150 normal`)
        }
    })
}

/**
 * Initalizes player aesthetic events
 */
function playerSpawnParticleEvents_init() {
    // particles when player spawns / despawns
    PlayerEvents.respawned(event => {
        playerSpawnParticles(event);
    });

    PlayerEvents.loggedIn(event => {
        playerSpawnParticles(event);
    });

    PlayerEvents.loggedOut(event => {
        playerSpawnParticles(event);
    });
}

/**
 * Spawns poof particles when called
 * @param {*} event value used to get the called function event, pulls entity
 */
function playerSpawnParticles(event) {
    event.level.spawnParticles('minecraft:poof', false, event.entity.x, event.entity.y + 1, event.entity.z, 0.4, 0.6, 0.4, 13, 0);
}