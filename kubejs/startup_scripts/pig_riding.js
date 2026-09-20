// written by Liopyu for db3k
let Vec2 = Java.loadClass("net.minecraft.world.phys.Vec2")
let isClient = Platform.isClientEnvironment()
let Minecraft = isClient ? Java.loadClass("net.minecraft.client.Minecraft") : null
EntityJSEvents.modifyEntity(event => {
    event.modify("minecraft:pig", modifyBuilder => {
        modifyBuilder
            .isImmobile(entity => global.isImmobile(entity))
            .tick(entity => {
                global.travelRidden(entity, entity.getFirstPassenger())
            })
    })
})
global.isImmobile = entity => {
    let isJumping = isClient && Minecraft.getInstance().player?.input?.jumping
    return (entity.saddled && entity.firstPassenger != null && !isJumping) || entity.isDeadOrDying()
}
global.travelRidden = (entity, player) => {
    if (!player || !entity.isAlive()) return
    let isJumping = isClient && Minecraft.getInstance().player?.input?.jumping
    entity.navigation.stop()
    let vec3 = getRiddenInput(player)
    let vec2 = new Vec2(player.pitch * 0.5, player.yaw)
    let currentYaw = entity.yaw
    let targetYaw = vec2.y
    let deltaYaw = targetYaw - currentYaw
    while (deltaYaw < -180) deltaYaw += 360
    while (deltaYaw > 180) deltaYaw -= 360
    let lerpFactor = 0.25
    let newYaw = currentYaw + deltaYaw * lerpFactor
    entity.setRotation(newYaw, vec2.x)
    entity.yRotO = entity.yaw
    entity.yBodyRot = newYaw
    entity.yHeadRot = newYaw
    if (isJumping) {
        entity.jumpControl.jump()
    }
    entity.addMotion(vec3.x(), 0, vec3.z())
}

function getRiddenInput(player) {
    let strafe = player.xxa * 0.5
    let forward = player.zza
    let vehicle = player.getVehicle()
    if (forward <= 0.0) {
        forward *= 0.25
    }
    let yawRad = (player.yRotO * JavaMath.PI) / 180
    let sin = Math.sin(yawRad)
    let cos = Math.cos(yawRad)
    let x = strafe * cos - forward * sin
    let z = strafe * sin + forward * cos
    let airborne = vehicle && !vehicle.isOnGround()
    let water = vehicle && vehicle.isInWater()
    let xSpeed = airborne ? x * 0.03 : x * 0.12
    let zSpeed = airborne ? z * 0.03 : z * 0.12
    if (water) {
        xSpeed *= 0.2
        zSpeed *= 0.2
    }
    return new Vec3d(xSpeed, 0, zSpeed)
}