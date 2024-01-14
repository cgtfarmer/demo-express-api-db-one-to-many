class DbConfiguration {

  static #configuration = {
    host: 'db', // This is the service name defined in the docker-compose file
    user: 'root',
    password: 'super',
    database: 'myDatabase'
  };

  static getConfig() {
    return this.#configuration;
  }
}

module.exports = DbConfiguration;
