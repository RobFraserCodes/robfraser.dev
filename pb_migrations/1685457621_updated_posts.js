migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("szgc88djp6vhtgx")

  // remove
  collection.schema.removeField("fru82dg8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wy1oo9ov",
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

  // remove
  collection.schema.removeField("wy1oo9ov")

  return dao.saveCollection(collection)
})
