// priority: 0

// NOTE: this script is mostly pointless but is here just in case tooltips are enabled on client or otherwise made visible
// also doesnt even work so..
ItemEvents.tooltip(tooltip => {

  // Hard removes item names, for EMI
  tooltip.addAdvanced([Ingredient.of(/.*/).itemIds], (item, advanced, text) => {
    	text.remove(0) // removes item header
    	text.remove(0) // extra case for items that have a second line
	text.remove(0) // just covering all my bases here
    	text.remove(0) // just covering all my bases here
	text.remove(0) // just covering all my bases here
    })
  tooltip.add('#db3k:disabled_items', '§4Disabled item')

    // This just straight up does not work, tried to remove a single. line. of. text. from nametags. and kubejs cant seem to do it. please someone else make this work i tried like 8 different methods for this and none did it
  // tooltip.addAdvanced([
  //   'minecraft:name_tag'
  //   ], (item, advanced, text) => {
  //     for (let i = text.size() - 1; i > 0; i--) {
  //       // Delete the element at the current index
  //       text.remove(i);
  //   }
  //   })
  
  tooltip.addAdvanced([
    'clash:spear'
    ], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    })
})
