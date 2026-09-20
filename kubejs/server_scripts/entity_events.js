// priority: 0

entitySpawnEvents_init()
entityHurtEvents_init()

const undeadEntities = ['minecraft:zombie', 'minecraft:skeleton']
const blacklistEntities = ['caverns_and_chasms:peeper', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'minecraft:pufferfish', 'minecraft:bat', 'minecraft:allay', 'minecraft:axolotl', 'minecraft:bee', 'minecraft:dolphin', 'minecraft:donkey', 'minecraft:drowned', 'minecraft:elder_guardian', 'minecraft:enderman', 'minecraft:endermite', 'minecraft:evoker', 'minecraft:fox', 'minecraft:frog', 'minecraft:glow_squid', 'minecraft:goat', 'minecraft:guardian', 'minecraft:hoglin', 'minecraft:horse', 'minecraft:husk', 'minecraft:illusioner', 'minecraft:iron_golem', 'minecraft:llama', 'minecraft:mule', 'minecraft:panda', 'minecraft:parrot', 'minecraft:phantom', 'minecraft:piglin', 'minecraft:pillager', 'minecraft:polar_bear', 'minecraft:rabbit', 'minecraft:ravager', 'minecraft:shulker', 'minecraft:silverfish', 'minecraft:skeleton_horse', 'minecraft:stray', 'minecraft:tadpole', 'minecraft:trader_llama', 'minecraft:turtle', 'minecraft:vex', 'minecraft:villager', 'minecraft:vindicator', 'minecraft:wandering_trader', 'minecraft:witch', 'minecraft:wither', 'minecraft:wither_skeleton', 'minecraft:zoglin', 'minecraft:zombie_horse', 'minecraft:zombie_villager']

function entitySpawnEvents_init(){
  entityArmor_init()
  entityBlacklist_init()
  baby_be_gone()

  // Sets mimes to burn in daylight
  EntityEvents.spawned("caverns_and_chasms:mime", event => {
    const {entity, server} = event
    const checkExposed = () => server.scheduleInTicks(20, _ => {
        if(!entity.alive) return;
        checkExposed()
        if(!entity.level.day) return;
        const block = entity.block.offset(0, Math.floor(entity.eyeHeight), 0)
        if(block.skyLight < 15) return;
        entity.setSecondsOnFire(5)
    })
    checkExposed()
  })
}

function baby_be_gone() {
  EntityEvents.spawned((event) => {
    let {entity} = event;
    if (!entity.alive) return;
    entity.mergeNbt({Age: 1})
  })
}

function entityBlacklist_init() {
  EntityEvents.spawned((event) => {
    let { entity } = event;
    if (blacklistEntities.includes(entity.type)){
      event.cancel()
    }
  })
}

function entityArmor_init() {
  EntityEvents.spawned((event) => {
      let { entity } = event;
      if (undeadEntities.includes(entity.type)){

      // defaults to removing armor
      entity.headArmorItem = 'minecraft:air';
      entity.chestArmorItem = 'minecraft:air';
      entity.legsArmorItem = 'minecraft:air';
      entity.feetArmorItem = 'minecraft:air';

      // checks if entity is zombie
      if (entity.type === 'minecraft:zombie') {
        let difficultyMultiplier = 30; // change this based on difficulty of world? larger number = rarer

        // gets random number between 1 and some value difficultyMultiplier
        let randChance = Math.floor(Math.random() * difficultyMultiplier) + 1;

        // 3 way coin flip to determine if armor is leather, chain, or plate
        let coinFlip = Math.floor(Math.random() * 3) + 1;

        if (randChance === 1) {   // IE. 1/difficultyMultiplier chance for monster to wear armor
            if (coinFlip === 1) { entity.headArmorItem = 'caverns_and_chasms:silver_helmet'; entity.chestArmorItem = 'caverns_and_chasms:silver_chestplate'; }
            else if (coinFlip === 2) { entity.headArmorItem = 'minecraft:chainmail_helmet'; entity.chestArmorItem = 'minecraft:chainmail_chestplate'; }
            else if (coinFlip === 3) { entity.headArmorItem = 'minecraft:leather_helmet'; entity.chestArmorItem = 'minecraft:leather_chestplate'; }
          }
        }

      // prevents monsters from dropping armor/tools if they spawn with them
      // also fixes skeletons dropping bows, so two birds with one stone!
      entity.mergeNbt({
        ArmorDropChances: [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)],
        HandDropChances: [NBT.f(0), NBT.f(0)],
      })
    }
  });

  EntityEvents.spawned((event) => {
      const { entity, entity: { nbt } } = event;
      if (!entity.alive) return;

      nbt.put('ArmorDropChances', NBT.listTag([NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)]));
      nbt.put('HandDropChances', NBT.listTag([NBT.f(0), NBT.f(0)]));
      entity.mergeNbt(nbt);
  });
}

/**
 * Spawns an additional dropped item when called 
 * @param {*} item The item to drop
 * @param {*} maxCount The maximum count of this item which will be dropped
 * @param {*} targetEntity The entity which is targetted to drop this item
 */
function spawnItemEntity(item, maxCount, targetEntity){
  let itemEntity = targetEntity.level.createEntity("item")
  itemEntity.item = (item)
  itemEntity.y = targetEntity.y + 0.25
  itemEntity.x = targetEntity.x
  itemEntity.z = targetEntity.z
  itemEntity.item.count = Math.floor(Math.random() * (maxCount - 1 + 1) + 1)
  itemEntity.motionY = 0.15
  itemEntity.motionX = 0.075
  itemEntity.spawn()
}

// // experimental equipment determined mob drops
// EntityEvents.death(event => {
//   const entity = event.entity
//     if (entity.type === 'minecraft:player') return;
//     if (entity.headArmorItem === 'minecraft:leather_helmet' || entity.chestArmorItem === 'minecraft:leather_chestplate' || entity.legsArmorItem === 'minecraft:leather_leggings' || entity.feetArmorItem === 'minecraft:leather_boots') {
//       spawnItemEntity('minecraft:leather', 2, entity)
// 		}
//     if (entity.headArmorItem === 'minecraft:iron_helmet' || entity.chestArmorItem === 'minecraft:iron_chestplate' || entity.legsArmorItem === 'minecraft:iron_leggings' || entity.feetArmorItem === 'minecraft:iron_boots') {
//       spawnItemEntity('minecraft:iron_ingot', 2, entity)
// 		}
// })

function entityHurtEvents_init(){
  // let executed = false;
  // EntityEvents.hurt(event=> {
  //   const { entity } = event;
  //   if(!undeadEntities.includes(entity.type) || !entity.hasEffect('minecraft:glowing')|| executed) return;
  //   executed = true;
  //   event.entity.attack(event.damage * 1.5);
  //   executed = false;
  // })
}