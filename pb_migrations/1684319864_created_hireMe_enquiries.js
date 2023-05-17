migrate((db) => {
  const collection = new Collection({
    "id": "hctfbntzkktcf60",
    "created": "2023-05-17 10:37:44.362Z",
    "updated": "2023-05-17 10:37:44.362Z",
    "name": "hireMe_enquiries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3qdfonmo",
        "name": "type_of_app",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Website",
            "Application",
            "Mobile App",
            "UX Design"
          ]
        }
      },
      {
        "system": false,
        "id": "f0owxa3k",
        "name": "time_of_enquiry",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "7fgj4fa7",
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
        "id": "lhqrhoki",
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
        "id": "dhg1oyf3",
        "name": "exisiting_website",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "wji4nog2",
        "name": "details",
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
  const collection = dao.findCollectionByNameOrId("hctfbntzkktcf60");

  return dao.deleteCollection(collection);
})
