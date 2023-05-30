migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8f1pvz2vcv54z7h")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8f1pvz2vcv54z7h")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
