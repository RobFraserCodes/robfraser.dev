migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4bgxirb2et3ujiq")

  // remove
  collection.schema.removeField("kjbgraxp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1oqcgynp",
    "name": "email",
    "type": "email",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4bgxirb2et3ujiq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjbgraxp",
    "name": "tel",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1oqcgynp",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
