import SettingCptCode from "../models/SettingCptCode.js";

export const addCptCode = async (req, res, next) => {
    // console.log(req.body);
    try {
  
      // To insert the new record at the last position in the table we need to find the last record
      const lastRecord = await SettingCptCode.findOne({
        order: [["id", "DESC"]],
      });
  
      await SettingCptCode.create({
        id: lastRecord ? parseInt(lastRecord.id) + 1 : 1, // To insert the new record at the last position in the table
        admin_id: 1,
        cpt_id: parseInt(1),
        facility_treatment_id: 10,
        cpt_code: 100,
      });
      res.json({
        status: "success",
        message: "Setting cpt code successfully created",
      });
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server error");
    }
  };
  