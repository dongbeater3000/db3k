// priority: 0

// Foods that should return an item when eaten

ItemEvents.foodEaten([
  	'kubejs:beer',
	'kubejs:wine',
	'kubejs:cider',
	'kubejs:mead'
	], event => {
	event.server.schedule(1, callback => {
		event.player.giveInHand('kubejs:chalice')
	})
})

const seasons = Java.loadClass('sereneseasons.api.season.SeasonHelper')
// const seasonAllowWeather = ['EARLY_SPRING', 'MID_SPRING', 'LATE_SPRING'], 
// const alwaysSnow = ['EARLY_WINTER', 'MID_WINTER', 'LATE_WINTER']

LevelEvents.tick(event => {
	// makes code run less often for TPS
	if(event.server.tickCount % 10 != 0)
		return
	const overworld = event.server.getLevel('minecraft:overworld'); // Get the Overworld
	const seasonState = seasons.getSeasonState(event.level.getLevel()).getSeason();

	if(seasonState == 'WINTER' || seasonState == 'SUMMER') {
		if(!overworld.isRaining()) {
			event.level.setWeatherParameters(0, 24000, true, false)
		} 
	}
	else {
		if(overworld.isRaining()) {
			event.level.setWeatherParameters(24000, 0, false, false)
		}
	}
})

// Sets default gamerules on the first time a world is loaded
ServerEvents.loaded(event => {
	// only run on first load
	const {server} = event;
	//if (event.server.persistentData.gameRules) return
	
	// some of these may be unneccessary but it doesnt hurt to be thorough
	server.gameRules.set("doTraderSpawning", false)
	server.gameRules.set("doWeatherCycle", false)
	server.gameRules.set("maxEntityCramming", '0')
	server.gameRules.set("doPatrolSpawning", false)
	server.gameRules.set("reducedDebugInfo", true)
	server.gameRules.set("doInsomnia", false)
	server.gameRules.set("mobExplosionDropDecay", false)
	server.gameRules.set("blockExplosionDropDecay", false)
	
	// death counter in tab list
    server.runCommandSilent('/scoreboard objectives add deathCount deathCount')
	server.runCommandSilent('/scoreboard objectives setdisplay list deathCount')

	//event.server.persistentData.gameRules = true
})

// Disables some commands
ServerEvents.command((event) => {
    const command = event.input
    const arguments = command.split(" ")
    if (arguments[0] === "emi") {
        event.cancel()
    }
})