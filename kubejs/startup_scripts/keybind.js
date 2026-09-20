// priority: 0
KeyBindEvents.modify((event) => {  
  event.modifyCategory("iconrefresh.keybind.iconrefresh", "key.categories.misc");
  event.modifyCategory("quark.keybind.autorun", "key.categories.movement");
  event.modifyCategory("key.naming_unconvention.reroll", "key.categories.misc");
  event.modifyCategory("quark.keybind.back", "key.categories.misc");
  event.modifyCategory("quark.keybind.camera_mode", "key.categories.misc");
  event.modifyCategory("quark.keybind.change_hotbar", "key.categories.gameplay");
  event.modifyCategory("quark.keybind.lock_rotation", "key.categories.gameplay");
  event.modifyCategory("key.nostalgic_tweaks.toggle_fog", "key.categories.gameplay");

  event.remove("key.toastcontrol.clear");
  event.remove("placebo.toggleTrails");
  event.remove("placebo.toggleWings");
  event.remove("key.modernfix.config");
  event.remove("key.map_atlases.open_minimap");
  event.remove("key.map_atlases.zoom_out_minimap");
  event.remove("key.map_atlases.zoom_in_minimap");
  event.remove("key.map_atlases.increase_slice");
  event.remove("key.map_atlases.decrease_slice");
  event.remove("key.advancements");
  event.remove("quark.keybind.variant_selector");
  event.remove("quark.keybind.transfer_insert");
  event.remove("quark.keybind.transfer_extract");
  event.remove("quark.keybind.shift_lock");
  event.remove("supplementaries.keybind.quiver");
  event.remove("key.entityculling.toggle");
  event.remove("key.screenshot_viewer.open_screenshots_screen");
  event.remove("key.nostalgic_tweaks.open_config");
  event.remove("auditory.sound_reload_key");
  event.remove('key.mount_jump');
  event.remove("quark.keybind.sort_player");
  event.remove("quark.keybind.sort_container");
  event.remove("key.swapOffhand")
  
  //event.remove("key.configured.open_mod_list");
});