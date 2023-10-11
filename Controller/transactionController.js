const Transaction = require("../Model/Transaction");

module.exports.getAllTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find({});

    return res.status(200).json({
      message: "Here is All your transactions",
      data: { transactions },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching the transaction",
      data: {},
      error,
    });
  }
};

module.exports.getSingleTransaction = async (req, res) => {
  try {
    const id = req.params.id;

    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(200).json({
        message: "There is no such transaction",
        data: {},
      });
    }

    return res.status(200).json({
      message: "Here is your transaction detail",
      data: { transaction },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching the transaction",
      data: {},
      error,
    });
  }
};

module.exports.updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById(id);
    if (!transaction) {
        return res.status(200).json({
          message: "There is no such transaction",
          data: {},
        });
    }

    if(transaction.status == "SUCCESS"){
        return res.status(200).json({
            message: "Transaction is Successfull",
            data: { transaction },
        });
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(id,{status:"SUCCESS"},{new:true});

    return res.status(200).json({
        message: "Transaction is Successfull",
        data: { updatedTransaction },
      });

  } catch (error) {

    return res.status(500).json({
        message: "Something went wrong",
        data: {},
        error,
      });
  }
};
