migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8f1pvz2vcv54z7h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7qqcala9",
    "name": "slug",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8f1pvz2vcv54z7h")

  // remove
  collection.schema.removeField("7qqcala9")

  return dao.saveCollection(collection)
})
