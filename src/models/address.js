export const StoreDB = (sequelize, Sequelize, DataTypes) => {
    const Store = sequelize.define(
      "store", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        street: {
          type: DataTypes.STRING,
        },
        reference: {
          type: DataTypes.STRING,
        },
        Latitude: {
          type: DataTypes.STRING,
        },
        persona_id: {
          type: DataTypes.INTEGER,
        },
        Longitude: {
          type: DataTypes.INTEGER,
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
  
    return Store;
  };
  