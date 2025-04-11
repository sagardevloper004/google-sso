// filepath: c:\Users\sagar\Documents\Cmp1\test3\next-sso\nextjs-google-sso\migrations\YYYYMMDDHHMMSS_create_users_table.js
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
      table.string('image');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };