exports.seed = knex => {
  return knex('creations').del()
    .then(() => {
      return knex('creations').insert([
        { id: 1, clay: 1, shape: 2, status: 2, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-06-15T13:45:30', date_complete: '2020-07-15T13:45:30', note: 'Glaze with criss-cross pattern' },
        { id: 2, clay: 2, shape: 2, status: 1, glaze: 2, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-05-24T14:45:30', date_complete: '2020-06-24T14:45:30', note: 'Glaze with criss-cross pattern' },
        { id: 3, clay: 3, shape: 3, status: 3, glaze: 1, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-05-25T14:49:30', date_complete: '2020-06-25T14:49:30', note: 'Glaze in full colour' },
        { id: 4, clay: 1, shape: 5, status: 4, glaze: 5, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-05-28T16:23:30', date_complete: '2020-07-28T16:23:30', note: 'Glaze in full colour' },
        { id: 5, clay: 1, shape: 2, status: 5, glaze: 8, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-07-12T16:11:30', date_complete: '2020-08-15T13:45:30', note: 'Glaze top-half' },
        { id: 6, clay: 3, shape: 7, status: 6, glaze: 6, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-07-20T18:56:30', date_complete: '2020-08-20T18:56:30', note: 'Glaze top-half and underglaze with black matte details' },
        { id: 7, clay: 1, shape: 1, status: 7, glaze: 3, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-07-21T12:34:30', date_complete: '2020-08-21T12:34:30', note: '' },
        { id: 8, clay: 3, shape: 6, status: 8, glaze: 7, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-08-03T14:12:30', date_complete: '2020-09-03T14:12:30', note: '' },
        { id: 9, clay: 2, shape: 4, status: 7, glaze: 4, weight_wet: 0, weight_leather_hard: 0, weight_bone_dry: 0, weight_bisque: 0, weight_glaze: 0, weight_complete: 0, date_created: '2020-08-10T17:22:30', date_complete: '2020-09-10T17:22:30', note: '' }
      ])
    })
}
