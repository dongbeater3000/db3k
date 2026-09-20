// removes caverns and chasms ores
WorldgenEvents.remove(event => {
	event.removeFeatureById('underground_ores', [
		'caverns_and_chasms:ore_spinel_buried',
		'caverns_and_chasms:ore_silver_soul',
		'caverns_and_chasms:ore_spinel',
    'caverns_and_chasms:ore_silver_buried',
    'caverns_and_chasms:ore_silver_buried_with_gold',
    'caverns_and_chasms:ore_silver_extra',
    'caverns_and_chasms:ore_gold_and_silver_lower',
    'caverns_and_chasms:ore_gold_buried',
    'caverns_and_chasms:ore_gold_buried_with_silver'
	])
})
