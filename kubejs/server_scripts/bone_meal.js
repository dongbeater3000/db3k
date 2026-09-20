//#############################################################################//
// Script by DevDyna!
// For some unknown reason, bonemeal just was NOT placing any flowers, so had to use this to totally recreate its behavior from scratch lol 
// This is more customizable anyways so not a bad thing

BlockEvents.rightClicked(event => {
	if(event.block.id == 'minecraft:grass_block' && event.item.id == "minecraft:bone_meal"){
		event.cancel()
	}
})

/**
 * @returns true|false as 50%
 */
function rnd_bool() {
    if (Math.floor(Math.random() * 2) == 1)
        return true
    return false
}

/**
 * @param {number} chance   - like loot table weight 
 * @returns                   number based on all chance as success
 */
function roll_time(chance) {
    let count = 0;
    for (let i = 0; i < chance; i++) {
        if (rnd_bool()) {
            count++
        }
    }
    return count
}

/**
 * 
 * @param {number} min  - excluded
 * @param {number} max  - included
 * @returns               random int value
 */

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @param {Block} block_replace         - block id ||  grass block
 * @param {Item} item_trigger           - item id || like bone meal
 * @param {object} block_list           - string-array of block id
 * @param {object} area                 - int-array of x , y , z radius || [x,y,z] *y based on top block
 * @param {object} pool                 - chance to success || [min,max]
 * @param {string} particles            - string || particles name
 * @param {boolean} require_air         - if true require air to success
 * @param {boolean} first_as_good       - if true the first click have success
 */

function meal(block_replace, item_trigger, block_list, area, pool, particles, require_air, first_as_good) {

    BlockEvents.rightClicked(block_replace, (event) => {
        const { block, item, player, level ,server} = event
        const { x, y, z } = block
        const { inventory } = player

        if (item == item_trigger && !(level.getBlock(x, y + 1, z) != "minecraft:air" && require_air)) {
            //if bool = true -> require that block was air || if bool = false -> if air = true|false -> true
            player.swing()

            if (!player.isCreative()) {
                item.count--
            }
            if (first_as_good) { level.getBlock(x, y + 1, z).set(block_list[rnd(0, block_list.length)]) }

            server.runCommandSilent('/playsound minecraft:item.bone_meal.use block @a ${x} ${y} ${z} 10 ${rnd(1, 2)}')

            //server.runCommandSilent(`/particle ${particles} ${x} ${y + 1} ${z} ${area[0]} ${area[1]} ${area[2]} 0.1 10`)

            let roll = rnd(pool[0], pool[1])
            let xyz = [x, y, z]
            for (let i = 0; i < roll; i++) {
                if (area[0] != 0) { (xyz[0] += rnd(-area[0], area[0])) }
                if (area[1] != 0) { (xyz[1] += rnd(-area[1], area[1])) }
                if (area[2] != 0) { (xyz[2] += rnd(-area[2], area[2])) }
                if (level.getBlock(xyz[0], xyz[1], xyz[2]) == block_replace && !(level.getBlock(xyz[0], xyz[1] + 1, xyz[2]) != "minecraft:air" && require_air)) {
                    level.getBlock(xyz[0], xyz[1] + 1, xyz[2]).set(block_list[rnd(0, block_list.length - 1)])
                }
                xyz = [x, y, z]
            }
        }
    })
}

meal("minecraft:grass_block", "minecraft:bone_meal", ["minecraft:poppy", "minecraft:dandelion", "minecraft:blue_orchid"], [3, 0, 3], [8, 24], "minecraft:bubble_pop", true)






