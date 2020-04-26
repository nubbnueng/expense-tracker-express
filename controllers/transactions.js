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
        return res.status(500).json({
            success: false,
            error: `Server error: ${error.message}`
        })
    }
}

// @desc Add a transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body
        const transaction = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message)
            return res.status(500).json({
                success: false,
                errors: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Server error: ${error.message}`
            })
        }
    }

}

// @desc Delete a transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction')
}