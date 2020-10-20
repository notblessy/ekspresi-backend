exports.up = function (knex) {
  return knex.schema.createTable("todo_list", function (table) {
    table.increments("id");

    table.string("name", 150).index();
    table.boolean("is_completed").defaultTo(false);
    table.timestamps(true, true);
    table.datetime("deleted_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todo_list");
};
