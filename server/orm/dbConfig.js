import { Sequelize } from "sequelize";

// db name, username, password=>learning,postgres,1234
export const sequelize = new Sequelize('learning', 'postgres', '1234', {
  host: 'localhost',
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: true,
  },
  dialectOptions: {
    useUTC: true,
  },
  //   timezone: "+08:00",
});
export const DbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};