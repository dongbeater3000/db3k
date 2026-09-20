// Disables offhand
const playersHavingOffhandItem = []
PlayerEvents.inventoryChanged(event => {
    if(!event.player.offHandItem.empty){
        playersHavingOffhandItem.push(event.player)
    }
})

/**
 * 
 * @param {Internal.ServerPlayer} player 
 */
function popItemFromOffhand(player){
    const offHandItem = player.offHandItem.copy()
    player.offHandItem.setCount(0)
    player.give(offHandItem)
}

ServerEvents.tick(event => {
    if(!playersHavingOffhandItem.length) return;
    popItemFromOffhand(playersHavingOffhandItem.shift())
})