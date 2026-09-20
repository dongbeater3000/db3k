// scripts heavily modified from Raspberry Flavored
const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")

const chainHelmetMeleeProc = new $AttributeModifier("75d47485-6c07-464e-b294-1bf18bef6dd1", "puffish_attributes:player.melee_resistance", .1, "ADDITION")
const chainChestplateMeleeProc = new $AttributeModifier("75d47485-6c07-464e-b294-1bf18bef6dd2", "puffish_attributes:player.melee_resistance", .1, "ADDITION")
const chainLeggingsMeleeProc = new $AttributeModifier("75d47485-6c07-464e-b294-1bf18bef6dd3", "puffish_attributes:player.melee_resistance", .1, "ADDITION")
const chainBootsMeleeProc = new $AttributeModifier("75d47485-6c07-464e-b294-1bf18bef6dd4", "puffish_attributes:player.melee_resistance", .1, "ADDITION")

ForgeEvents.onEvent("net.minecraftforge.event.ItemAttributeModifierEvent", (event) => {
    // Gives chainmail a slight melee damage protection boost?
    if (event.itemStack.id == "minecraft:chainmail_helmet" && event.slotType == "head") {
		event.addModifier("puffish_attributes:player.melee_resistance", chainHelmetMeleeProc)

	}
	if (event.itemStack.id == "minecraft:chainmail_chestplate" && event.slotType == "chest") {
		event.addModifier("puffish_attributes:player.melee_resistance", chainChestplateMeleeProc)

	}
	if (event.itemStack.id == "minecraft:chainmail_leggings" && event.slotType == "legs") {
		event.addModifier("puffish_attributes:player.melee_resistance", chainLeggingsMeleeProc)

	}
	if (event.itemStack.id == "minecraft:chainmail_boots" && event.slotType == "feet") {
		event.addModifier("puffish_attributes:player.melee_resistance", chainBootsMeleeProc)

	}
})

// Makes some adjustments to mob balancing
EntityJSEvents.attributes(event => {
	// Nerf deepers
    event.modify('caverns_and_chasms:deeper', attribute => {
        attribute.add("minecraft:generic.movement_speed", 0.175)
    });
	// Buffs spiders
    event.modify('minecraft:spider', attribute => {
        attribute.add("forge:step_height_addition", 0.45)
    });
	// Nerfs skeleton
    event.modify('minecraft:skeleton', attribute => {
        attribute.add("minecraft:generic.max_health", 14)
    });
	// Buffs zombies
	event.modify('minecraft:zombie', attribute => {
		attribute.add("minecraft:generic.attack_damage", 5)
	})
})