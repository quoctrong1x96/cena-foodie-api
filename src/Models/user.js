export const UserDB = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      users: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      passwordd: {
        type: DataTypes.STRING,
      },
      persona_id: {
        type: DataTypes.INTEGER,
      },
      rol_id: {
        type: DataTypes.INTEGER,
      },
      notification_token: {
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return User;
};
