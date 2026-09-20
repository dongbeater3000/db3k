// written by Liopyu
let jumpyMobs = [
    "minecraft:pig",    
    "minecraft:sheep",
    "minecraft:chicken",
    "minecraft:cow",
    "minecraft:creeper",
    "minecraft:skeleton",
    "minecraft:slime", // this probably changes nothing but for consistency's sake
    "minecraft:spider",
    "minecraft:zombie",
    "caverns_and_chasms:mime",
    "caverns_and_chasms:deeper"
]
const DirectionAxis = Java.loadClass("net.minecraft.core.Direction$Axis")
Java.loadClass("net.liopyu.entityjs.builders.modification.ModifyPathfinderMobBuilder")
EntityJSEvents.modifyEntity(event => {
    jumpyMobs.forEach(type => {
        event.modify(type, /**@param {Internal.ModifyPathfinderMobBuilder} modifyBuilder */ modifyBuilder => {
            modifyBuilder.aiStep(entity => global.jumpTick(entity))
        })
    })
})
/**
 * 
 * @param {Internal.PathfinderMob} entity 
 * @returns 
 */
global.jumpTick = entity => {
    try {
        if (!entity.isOnGround() || !entity.getNavigation().isInProgress()) return
        if (shouldEarlyJump(entity)) {
            entity.jumpControl.jump()
        }
    } catch (error) {
        console.log(error)
    }
}

function shouldEarlyJump(entity) {
    let motion = entity.getDeltaMovement()
    if (motion.lengthSqr() < 0.01) return false
    let level = entity.level
    let stepHeight = entity.getStepHeight()
    let pos = entity.blockPosition()
    for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
            if (dx === 0 && dz === 0) continue
            let checkPos = pos.offset(dx, 0, dz)
            if (!level.loadedAndEntityCanStandOn(checkPos, entity)) continue
            let shape = level.getBlockState(checkPos).getShape(level, checkPos)
            let maxY = shape.max(DirectionAxis.Y)
            if (stepHeight < maxY) {
                if (Math.random() < 0.3) return true
            }
        }
    }
    return false
}
