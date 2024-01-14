class PwHelpers {

  static async createDefaultState(request) {
    const response = await request.post('/states', {
      data: {
        name: 'Nebraska',
        symbol: 'NE',
      }
    });

    return await response.json();
  }

  static async createDefaultUser(request) {
    const createStateBody = await this.createDefaultState(request);

    const createUserResponse = await request.post('/users', {
      data: {
        firstName: "John",
        lastName: "Doe",
        age: 35,
        weight: 185.3,
        income: 50000.0,
        stateId: createStateBody.id,
      }
    });

    return await createUserResponse.json();
  };
}

module.exports = PwHelpers;
