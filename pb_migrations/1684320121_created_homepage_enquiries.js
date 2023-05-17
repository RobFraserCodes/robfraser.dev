migrate((db) => {
  const collection = new Collection({
    "id": "4bgxirb2et3ujiq",
    "created": "2023-05-17 10:42:01.679Z",
    "updated": "2023-05-17 10:42:01.679Z",
    "name": "homepage_enquiries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0htvfu8i",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "ztmxnhwl",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4bgxirb2et3ujiq");

  return dao.deleteCollection(collection);
})
