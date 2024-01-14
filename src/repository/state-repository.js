const DbClient = require('../client/db-client');

class StateRepository {

  static async findAll() {
    console.log('[StateRepository#findAll]');

    const sql =`
      SELECT *
      FROM states
    `;

    const results = await DbClient.executeStatement(sql);

    const stateRecords = results[0];

    return stateRecords;
  }

  static async findById(id) {
    console.log(`[StateRepository#findById] ${id}`);

    const sql = `
      SELECT *
      FROM states
      WHERE id = ?
    `;

    const values = [id];

    const results = await DbClient.executeStatementWithParams(sql, values);

    const stateRecord = results[0][0];

    return stateRecord;
  }

  static async create(state) {
    console.log(`[StateRepository#create] ${JSON.stringify(state)}`);

    const sql = `
      INSERT INTO states (name, symbol)
      VALUES (?, ?)
    `;

    const values = [
      state.name,
      state.symbol
    ];

    const results = await DbClient.executeStatementWithParams(sql, values);

    state.id = results[0].insertId;
    return state;
  }

  static async update(state) {
    console.log(`[StateRepository#update] ${JSON.stringify(state)}`);

    const sql = `
      UPDATE states
      SET name = ?,
          symbol = ?,
      WHERE id = ?
    `;

    const values = [
      state.name,
      state.symbol,
      state.id
    ];

    await DbClient.executeStatementWithParams(sql, values);

    return state;
  }

  static async destroy(id) {
    console.log(`[StateRepository#destroy] ${id}`);

    const sql = `
      DELETE FROM states
      WHERE id = ?
    `;

    const values = [id];

    await DbClient.executeStatementWithParams(sql, values);
  }
}

module.exports = StateRepository;
