migrate((db) => {
  const collection = new Collection({
    "id": "1bp40ajgxgskos6",
    "created": "2023-03-27 03:57:15.307Z",
    "updated": "2023-03-27 03:57:15.307Z",
    "name": "components",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uy9l8usi",
        "name": "code",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "9d2gt4is",
        "name": "author",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "momqyjup",
        "name": "source",
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
        "id": "i8iwb5uf",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("1bp40ajgxgskos6");

  return dao.deleteCollection(collection);
})
