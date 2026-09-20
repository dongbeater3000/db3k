ServerEvents.tags("worldgen/biome", (event => {

event.removeAll("minecraft:has_structure/ancient_city");
event.removeAll("minecraft:has_structure/bastion_remnant");
event.removeAll("minecraft:has_structure/buried_treasure");
event.removeAll("minecraft:has_structure/desert_pyramid");
event.removeAll("minecraft:has_structure/end_city");
event.removeAll("minecraft:has_structure/igloo");
event.removeAll("minecraft:has_structure/jungle_temple");
event.removeAll("minecraft:has_structure/mineshaft");
event.removeAll("minecraft:has_structure/mineshaft_mesa");
event.removeAll("minecraft:has_structure/nether_fortress");
event.removeAll("minecraft:has_structure/nether_fossil");
event.removeAll("minecraft:has_structure/ocean_monument");
event.removeAll("minecraft:has_structure/ocean_ruin_cold");
event.removeAll("minecraft:has_structure/ocean_ruin_warm");
event.removeAll("minecraft:has_structure/pillager_outpost");
event.removeAll("minecraft:has_structure/ruined_portal_desert");
event.removeAll("minecraft:has_structure/ruined_portal_jungle");
event.removeAll("minecraft:has_structure/ruined_portal_mountain");
event.removeAll("minecraft:has_structure/ruined_portal_nether");
event.removeAll("minecraft:has_structure/ruined_portal_ocean");
event.removeAll("minecraft:has_structure/ruined_portal_standard");
event.removeAll("minecraft:has_structure/ruined_portal_swamp");
event.removeAll("minecraft:has_structure/shipwreck");
event.removeAll("minecraft:has_structure/shipwreck_beached");
event.removeAll("minecraft:has_structure/stronghold");
event.removeAll("minecraft:has_structure/swamp_hut");
event.removeAll("minecraft:has_structure/trail_ruins");
event.removeAll("minecraft:has_structure/village_desert");
event.removeAll("minecraft:has_structure/village_plains");
event.removeAll("minecraft:has_structure/village_savanna");
event.removeAll("minecraft:has_structure/village_snowy");
event.removeAll("minecraft:has_structure/village_taiga");
event.removeAll("minecraft:has_structure/woodland_mansion");

// also nukes some other biome tags
event.removeAll("caverns_and_chasms:has_animal/glare");
event.removeAll("caverns_and_chasms:has_feature/silver_ore");
event.removeAll("caverns_and_chasms:has_feature/extra_silver_ore");
event.removeAll("caverns_and_chasms:has_feature/spinel_ore");
event.removeAll("caverns_and_chasms:has_monster/lost_goat");
//event.removeAll("caverns_and_chasms:has_monster/mime");
event.removeAll("caverns_and_chasms:has_feature/rocky_dirt");

event.removeAll("savage_and_ravage:has_monster/iceologer");
event.removeAll("savage_and_ravage:has_monster/skeleton_villager");
event.removeAll("savage_and_ravage:has_monster/skeleton_villager/common");
event.removeAll("savage_and_ravage:has_monster/skeleton_villager/rare");
event.removeAll("savage_and_ravage:has_monster/skeleton_villager/weird");
// why does spelunkery not do feature gen with biome tags.. evil..
}))
