// @ts-check
const { test, expect } = require('@playwright/test');

test('retrieve users', async ({ request }) => {
  const response = await request.get('/users');

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.length).toBeGreaterThan(-1);
});

test('create user', async ({ request }) => {
  // Create State
  const createStateResponse = await request.post('/states', {
    data: {
      name: 'Nebraska',
      symbol: 'NE',
    }
  });

  expect(createStateResponse.ok()).toBeTruthy();

  const response = await request.post('/users', {
    data: {
      firstName: "John",
      lastName: "Doe",
      age: 35,
      weight: 185.3,
      income: 50000.0,
      stateId: 1
    }
  });

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.id).toBeGreaterThan(-1);
});

test('retrieve user', async ({ request }) => {
  // Create State
  const createStateResponse = await request.post('/states', {
    data: {
      name: 'Nebraska',
      symbol: 'NE',
    }
  });

  expect(createStateResponse.ok()).toBeTruthy();

  // Create User
  const createUserResponse = await request.post('/users', {
    data: {
      firstName: "John",
      lastName: "Doe",
      age: 35,
      weight: 185.3,
      income: 50000.0,
      stateId: 1
    }
  });

  expect(createUserResponse.ok()).toBeTruthy();

  const createUserBody = await createUserResponse.json();
  const newUserId = createUserBody.id;

  // Retrieve User
  const getUserResponse = await request.get(`/users/${newUserId}`);

  expect(getUserResponse.ok()).toBeTruthy();

  const getUserBody = await getUserResponse.json();
  expect(getUserBody.id).toBe(newUserId);
});

test('destroy user', async ({ request }) => {
  // Create State
  const createStateResponse = await request.post('/states', {
    data: {
      name: 'Nebraska',
      symbol: 'NE',
    }
  });

  expect(createStateResponse.ok()).toBeTruthy();

  // Create User
  const createUserResponse = await request.post('/users', {
    data: {
      firstName: "John",
      lastName: "Doe",
      age: 35,
      weight: 185.3,
      income: 50000.0,
      stateId: 1
    }
  });

  expect(createUserResponse.ok()).toBeTruthy();

  const createUserBody = await createUserResponse.json();
  const newUserId = createUserBody.id;

  // Destroy User
  const destroyUserResponse = await request.delete(`/users/${newUserId}`);

  expect(destroyUserResponse.ok()).toBeTruthy();

  const destroyUserBody = await destroyUserResponse.json();
  expect(destroyUserBody.msg).toBe('Deleted successfully');
});
