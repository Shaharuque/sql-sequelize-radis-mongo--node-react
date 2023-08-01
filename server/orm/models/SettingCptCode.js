import { sequelize } from "../dbConfig.js";
import { DataTypes } from "sequelize";

const SettingCptCode = sequelize.define("all_cpt", {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },

  cpt_code: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payor_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  company_name:{
    type: DataTypes.STRING,
    allowNull: true,
  },

  createdAt: {
    field: "created_at",
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: DataTypes.DATE,
  },
});

SettingCptCode.sync().then(() => {
  console.log("All CPT Model synced");
});

export default SettingCptCode;
