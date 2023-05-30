migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4bgxirb2et3ujiq")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4bgxirb2et3ujiq")

  collection.createRule = null

  return dao.saveCollection(collection)
})
