StartupEvents.registry('mob_effect', event => {
    event.create('fragile').color(0x5C5C5C).harmful()
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
    global.onEntityHurt(event)
})

/**
 * 
 * @param {Internal.LivingDamageEvent} event 
 */
global.onEntityHurt = event => {
    const {amount, entity} = event
    if(entity.isUndead() && entity.hasEffect('glowing')) {
        event.amount *= 2
    }

    if(entity.hasEffect('kubejs:fragile')) {
        event.amount *= 1.5
    }
}
