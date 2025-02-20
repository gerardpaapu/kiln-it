/* eslint-disable promise/no-nesting */
const { connection } = require('./connection')

module.exports = {
  getCreations,
  getGlazesByCreationId,
  createCreationGlazes,
  getCreationById,
  updateCreationStatusById,
  updateCreationById,
  createCreation,
  deleteCreationGlazes,
  deleteCreation
}

function getCreations(db = connection) {
  return db('creations')
    .join('clay', 'clay.id', 'creations.clay_id')
    .join('shapes', 'shapes.id', 'creations.shape_id')
    .join('statuses', 'statuses.id', 'creations.status_id')
    .select(
      'creations.id',
      'clay.id as clayId',
      'clay.clay',
      'shapes.id as shapeId',
      'shapes.shape',
      'statuses.id as statusId',
      'statuses.status',
      'weight_leather_hard',
      'weight_bone_dry',
      'weight_bisque_fired',
      'weight_glazed',
      'weight_complete',
      'date_created',
      'date_complete',
      'description',
      'note',
      'name',
      'img_leather_hard',
      'img_bisque_fired',
      'img_glazed',
      'img_complete',
      'img_gallery'
    )
}

function getGlazesByCreationId(id, db = connection) {
  return db('glaze_creations')
    .join('glazes', 'glazes.id', 'glaze_creations.glaze_id')
    .where('glaze_creations.creation_id', id)
    .select('glazes.id as id', 'glazes.glaze')
}

function createCreationGlazes(id, glazeId, db = connection) {
  return db('glaze_creations')
    .where('creation_id', id)
    .delete()
    .then(() => {
      return db('glaze_creations').insert({
        glaze_id: glazeId,
        creation_id: id,
      })
    })
}

function deleteCreationGlazes(id, db = connection) {
  return db('glaze_creations')
  .where('creation_id', id)
  .delete()
}

function getCreationById(id, db = connection) {
  return db('creations')
    .join('clay', 'clay.id', 'creations.clay_id')
    .join('shapes', 'shapes.id', 'creations.shape_id')
    .join('statuses', 'statuses.id', 'creations.status_id')
    .where('creations.id', id)
    .select(
      'creations.id',
      'clay.id as clayId',
      'clay.clay',
      'shapes.id as shapeId',
      'shapes.shape',
      'statuses.id as statusId',
      'statuses.status',
      'weight_leather_hard',
      'weight_bone_dry',
      'weight_bisque_fired',
      'weight_glazed',
      'weight_complete',
      'date_created',
      'date_complete',
      'description',
      'note',
      'name',
      'img_leather_hard',
      'img_bisque_fired',
      'img_glazed',
      'img_complete',
      'img_gallery'
    )
    .first()
}

function updateCreationStatusById(id, creation, db = connection) {
  return db('creations')
    .where('creations.id', id)
    .update({ status_id: creation.status_id })
}

function updateCreationById(id, creation, db = connection) {
  return db('creations').where('creations.id', id).update({
    clay_id: creation.clay_id,
    shape_id: creation.shape_id,
    status_id: creation.status_id,
    glaze_id: creation.glaze_id,
    weight_leather_hard: creation.weight_leather_hard,
    weight_bone_dry: creation.weight_bone_dry,
    weight_bisque_fired: creation.weight_bisque_fired,
    weight_glazed: creation.weight_glazed,
    weight_complete: creation.weight_complete,
    name: creation.name,
    description: creation.description,
    note: creation.note,
  })
}

function createCreation(creation, db = connection) {
  return db('creations').insert({
    clay_id: creation.clay_id,
    shape_id: creation.shape_id,
    status_id: creation.status_id,
    glaze_id: creation.glaze_id,
    weight_leather_hard: creation.weight_leather_hard,
    weight_bone_dry: creation.weight_bone_dry,
    weight_bisque_fired: creation.weight_bisque_fired,
    weight_glazed: creation.weight_glazed,
    weight_complete: creation.weight_complete,
    name: creation.name,
    description: creation.description,
    note: creation.note,
  })
}

function deleteCreation(id, db = connection) {
  return db('creations').where('id', id).delete()
}
