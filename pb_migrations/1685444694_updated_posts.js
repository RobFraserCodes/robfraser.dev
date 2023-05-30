migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  collection.listRule = null

  return dao.saveCollection(collection)
})
