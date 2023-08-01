import {sequelize} from "../dbConfig.js";
import {DataTypes} from "sequelize";

const SettingCptCode = sequelize.define("all_cpt", {
  id: {
	type: DataTypes.BIGINT,
	allowNull: false,
	primaryKey: true,
  },
  
  facility_payor_id: {
	type: DataTypes.INTEGER,
	allowNull: true,
  },
  payor_name: {
	type: DataTypes.STRING,
	allowNull: true,
  },
  co_pay: {
	type: DataTypes.INTEGER,
	allowNull: true,
  },
  day_club: {
	type: DataTypes.INTEGER,
	allowNull: true,
  },
  is_electronic: {
	type: DataTypes.INTEGER,
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
