// Written by Liopyu
// let BaseRailBlock = Java.loadClass("net.minecraft.world.level.block.BaseRailBlock")
// LevelEvents.tick(event => {
//     let { level } = event
//     let maxSpeed = 0.3
//     if (level.isClientSide()) return
//     level.entities.filter(e => e.type == "minecraft:furnace_minecart").forEach(/**@param {Internal.MinecartFurnace} entity */entity => {
//         let fuel = entity.nbt.Fuel
//         let k = Math.floor(entity.getX());
//         let i = Math.floor(entity.getY());
//         let j = Math.floor(entity.getZ());
//         if (entity.level.getBlock(new BlockPos(k, i - 1, j)).hasTag("minecraft:rails")) {
//             --i;
//         }
//         let blockpos = new BlockPos(k, i, j);
//         let blockstate = entity.level.getBlockState(blockpos);
//         let onRails = BaseRailBlock.isRail(blockstate);
//         if (fuel <= 0 || !onRails) return
//         entity.setCurrentCartSpeedCapOnRail(maxSpeed)
//         let v = entity.getDeltaMovement()
//         let clamp = c => {
//             let s = Math.sign(c)
//             return s * Math.min(Math.abs(c), maxSpeed)
//         }
//         entity.move("self", new Vec3d(
//             clamp(v.x()),
//             clamp(v.y()),
//             clamp(v.z())
//         ))
//     })
// })

/** For 1.20 versions of the game, the following script can be applied instead
 * LevelEvents.tick(event => {
    let { level } = event
    let maxSpeed = 0.8
    if (level.isClientSide()) return
    level.entities.filter(e => e.type == "minecraft:furnace_minecart").forEach(entity => {
        let fuel = entity.nbt.Fuel
        if (fuel <= 0 || !entity.isOnRails()) return
        entity.setCurrentCartSpeedCapOnRail(maxSpeed)
        let v = entity.getDeltaMovement()
        let clamp = c => {
            let s = Math.sign(c)
            return s * Math.min(Math.abs(c), maxSpeed)
        }
        entity.move("self", new Vec3d(
            clamp(v.x()),
            clamp(v.y()),
            clamp(v.z())
        ))
    })
})
 */