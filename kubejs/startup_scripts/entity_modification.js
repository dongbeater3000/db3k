//
EntityJSEvents.modifyEntity(event => {
    event.modify("caverns_and_chasms:mime", builder => {
        builder.isSunBurnTick(entity => true)
    })
})