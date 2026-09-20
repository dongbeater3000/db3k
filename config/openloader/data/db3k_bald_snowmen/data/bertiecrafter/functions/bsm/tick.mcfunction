#As/At: Server
execute as @e[type=minecraft:snow_golem,tag=!bcbsm_bald] run function bertiecrafter:bsm/make_bald
execute as @e[type=minecraft:sheep,tag=!db3k_white] run function bertiecrafter:bsm/make_bald

data modify entity @e[type=minecraft:zombie,limit=1,sort=random] CanBreakDoors set value 1b