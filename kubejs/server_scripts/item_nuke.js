// priority: 0

var disabled_items = []

ServerEvents.tags('item', event => {
  let temp = event.get('db3k:disabled_items').getObjectIds()
  temp.forEach(item => {
    disabled_items.push(item)
    event.removeAllTagsFrom(item)
  })
})

ServerEvents.recipes(event => {
  disabled_items.forEach(item => {
    event.remove({output: item})
    event.remove({input: item})
  })
})
