migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
