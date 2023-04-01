migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1bp40ajgxgskos6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wxd3hc01",
    "name": "title",
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
  const collection = dao.findCollectionByNameOrId("1bp40ajgxgskos6")

  // remove
  collection.schema.removeField("wxd3hc01")

  return dao.saveCollection(collection)
})
