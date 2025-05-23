const BussinessLoan = require("../models/BussinessLoan");
const PersonalLoan = require("../models/Personal-Loan");

const PersonalLoanEnq = async (req, res) => {
  try {
    const { formdata } = req.body;

    if (!formdata) {
      return res.status(400).json({
        message: "Form data is not provided",
        success: false,
      });
    }

    const personalL = new PersonalLoan(formdata);
    await personalL.save();

    return res.status(201).json({
      message: "Data saved successfully",
      success: true,
    });

  } catch (error) {
    console.error("Error saving personal loan:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};

const BussinessLoanenq=async(req,res)=>{
try {
    const { formdata } = req.body;

    if (!formdata) {
      return res.status(400).json({
        message: "Form data is not provided",
        success: false,
      });
    }

    const bussinessloan = new BussinessLoan(formdata);
    await bussinessloan.save();

    return res.status(201).json({
      message: "Data saved successfully",
      success: true,
    });

  } catch (error) {
    console.error("Error saving personal loan:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
}
module.exports = { PersonalLoanEnq,BussinessLoanenq };
