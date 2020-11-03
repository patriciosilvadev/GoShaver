import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelizeConnection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelizeConnection,
      }
    );
  }
}

export default User;
