// placed events
const nonsolid_block_list = ['minecraft:water', 'minecraft:lava', 'minecraft:air', "minecraft:cave_air", "minecraft:leaves", "minecraft:snow"]
BlockEvents.placed(event => {
    const { block, player, level } = event
    if(block.id == 'minecraft:soul_wall_torch' || block.id == 'minecraft:soul_torch') {
        if(block.down.id == 'minecraft:air') {
            player.inventoryMenu.broadcastFullState()
            event.cancel()
            player.inventoryMenu.broadcastFullState()
        } 
    }
})