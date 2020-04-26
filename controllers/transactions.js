// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// @desc Add a transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = (req, res, next) => {
    res.send('POST transaction')
}

// @desc Delete a transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction')
}