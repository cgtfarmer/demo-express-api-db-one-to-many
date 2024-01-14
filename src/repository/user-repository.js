const DbClient = require('../client/db-client');

class UserRepository {

  static async findAll(stateId) {
    console.log(`[UserRepository#findAll] stateId=${stateId}`);

    const sql = `
      SELECT *
      FROM users
    `;

    const results = await DbClient.executeStatement(sql);

    const userRecords = results[0];

    return userRecords;
  }

  static async findById(id) {
    console.log(`[UserRepository#findById] ${id}`);

    const sql = `
      SELECT *
      FROM users
      WHERE id = ?
    `;

    const values = [id];

    const results = await DbClient.executeStatementWithParams(sql, values);

    const userRecord = results[0][0];

    return userRecord;
  }

  static async create(user) {
    console.log(`[UserRepository#create] ${JSON.stringify(user)}`);

    const sql = `
      INSERT INTO users (firstName, lastName, age, weight, income, stateId)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
      user.firstName,
      user.lastName,
      user.age,
      user.weight,
      user.income,
      user.stateId
    ];

    const results = await DbClient.executeStatementWithParams(sql, values);

    user.id = results[0].insertId;
    return user;
  }

  static async update(user) {
    console.log(`[UserRepository#update] ${JSON.stringify(user)}`);

    const sql = `
      UPDATE users
      SET firstName = ?,
          lastName = ?,
          age = ?,
          weight = ?,
          income = ?,
          stateId = ?
      WHERE id = ?
    `;

    const values = [
      user.firstName,
      user.lastName,
      user.age,
      user.weight,
      user.income,
      user.stateId,
      user.id
    ];

    await DbClient.executeStatementWithParams(sql, values);

    return user;
  }

  static async destroy(id) {
    console.log(`[UserRepository#destroy] ${id}`);

    const sql = `
      DELETE FROM users
      WHERE id = ?
    `;

    const values = [id];

    await DbClient.executeStatementWithParams(sql, values);
  }
}

module.exports = UserRepository;
