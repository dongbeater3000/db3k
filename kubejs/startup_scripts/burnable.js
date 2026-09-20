// script by vibriwhisker. Thanks!
let burnableBlocks = [
 "kubejs:log_pile",
 "kubejs:paper_wall",
 "kubejs:rope_coil",
 "kubejs:leaf_pile",
 "minecraft:wheat",
 "kubejs:turnip",
  "kubejs:red_planks",
  "kubejs:orange_planks",
  "kubejs:yellow_planks",
  "kubejs:lime_planks",
  "kubejs:green_planks",
  "kubejs:teal_planks",
  "kubejs:cyan_planks",
  "kubejs:capri_planks",
  "kubejs:blue_planks",
  "kubejs:violet_planks",
  "kubejs:purple_planks",
  "kubejs:magenta_planks",
  "kubejs:pink_planks",
  "kubejs:white_planks",
  "kubejs:gray_planks",
  "kubejs:black_planks"
 ];

 const oddsValue = 250;

 const Integer = Java.loadClass("java.lang.Integer");
 const Object2IntMap = Java.loadClass("it.unimi.dsi.fastutil.objects.Object2IntMap");
 const Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks");

 BlockEvents.modification(event => {
     burnableBlocks.forEach(burnableBlock => {
         let fields = Blocks.FIRE.class.getDeclaredFields();
         fields.forEach(field => {
             if (field.getType().getName().includes("Object2IntMap")) {
                 field.setAccessible(true);
                 event.modify(burnableBlock, block => {
                     let oddsMap = field.get(Blocks.FIRE);
                     oddsMap.put(block, oddsValue);
                 })
             }
         });
     });
 });
