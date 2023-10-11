const DisburseSchool = require('../Model/DisburseSchool');
const School = require('../Model/School');

module.exports.disbursedAmount = async(req,res)=>{
    try {

        const id = req.params.id;

        const school = await School.findById(id);
        const { disburse_status, disburse_amount} = req.body;
        const disb_school = await DisburseSchool.create({
            disburse_status,
            disburse_amount,
            school:school._id
        });

        return res.status(200).json({
            message: `Amount Disbursed to ${school.name}`,
            data: {disb_school},
          });

    } catch (error) {
        return res.status(200).json({
            message: "Something went wrong while disbursing amount to school",
            data: {},
            error,
          });
        
    }
}

module.exports.disbursedSchool = async(req, res)=>{
    try {
        const disbursedSchools = await DisburseSchool.find({}).populate('school');
        return res.status(200).json({
            message: "Here is the list of  disbursed school",
            data: {disbursedSchools},
          });
    } catch (error) {
        return res.status(200).json({
            message: "Something went wrong while fetching disbursed schools list",
            data: {},
            error,
          });
    }
} 