migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fru82dg8",
    "name": "slug",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  // remove
  collection.schema.removeField("fru82dg8")

  return dao.saveCollection(collection)
})
