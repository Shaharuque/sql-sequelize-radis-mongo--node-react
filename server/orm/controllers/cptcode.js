import { Op } from "sequelize";
import SettingCptCode from "../models/SettingCptCode.js";

export const getCptCodes = async (req, res) => {
  try {
    const allCpt = await SettingCptCode.findAndCountAll({
        where:{
            // payor_name:"ZACO Techo"  //1
            // payor_name:{             //2
            //     [Op.eq]: "ZACO Techo"
            // }

            //3
            [Op.and]:[ 
                {payor_name:"ZACO Techo"},
                {cpt_code:6}
            ]

        },
        order: [["cpt_code", "ASC"]],  //cpt_code col wise ascending order a data pabo
        distinct: true, 
    });

    res.status(200).json({
      status: "success",
      data: {
        allCpt,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
    });
  }
};
export const addCptCode = async (req, res, next) => {
  const { cptCode, payor_name, company_name } = req.body;
  // console.log(req.body);
  try {
    // To insert the new record at the last position in the table we need to find the last record
    const lastRecord = await SettingCptCode.findOne({
      order: [["id", "DESC"]],
    });

    await SettingCptCode.create({
      id: lastRecord ? parseInt(lastRecord.id) + 1 : 1, // To insert the new record at the last position in the table
      payor_name: payor_name,
      cpt_code: cptCode,
      company_name: company_name,
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
