
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
    tbl.increments('id');

    tbl.string('vin', 17).notNullable().unique();

    tbl.string('make').notNullable();

    tbl.string('model').notNullable();

    tbl.string('mileage').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
