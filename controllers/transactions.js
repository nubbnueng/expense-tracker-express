const Transaction = require('../models/Transaction')

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.send(500).json({
            success: false,
            message: `Server error: ${error.message}`
        })
    }
}

// @desc Add a transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    res.send('POST transaction')
}

// @desc Delete a transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction')
}