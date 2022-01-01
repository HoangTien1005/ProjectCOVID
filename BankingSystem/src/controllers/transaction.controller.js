const { DEPOSIT, WITHDRAWAL, ADMIN_ID, PAYMENT } = require('../constants');
const transactionModel = require('../models/transaction');

module.exports = {
    newTransaction: async (req, res) => {
        const { send_id, amount, action } = req.body;
        const transaction = { send_id, amount, action }

        try {
            const { data } = await transactionModel.newTransaction(transaction);

            res.json({ status: 200, msg: "SUCCESS", data });
        } catch (error) {
            res.json({ status: 400, msg: error });
        }
    },
    deposit: async (req, res) => {
        const { send_id, amount } = req.body;
        const transaction = { send_id, amount, action: DEPOSIT }

        try {
            await transactionModel.updateBalance(send_id, amount);
            const { data } = await transactionModel.newTransaction(transaction);

            res.json({ status: 200, msg: "SUCCESS", data });
        } catch (error) {
            res.json({ status: 400, msg: error });
        }
    },
    withdrawal: async (req, res) => {
        const { send_id, amount } = req.body;
        const transaction = { send_id, amount, action: WITHDRAWAL }

        try {
            await transactionModel.updateBalance(send_id, -1 * amount);

            const { data } = await transactionModel.newTransaction(transaction);

            res.json({ status: 200, msg: "SUCCESS", data });
        } catch (error) {
            res.json({ status: 400, msg: error });
        }
    },
    payment: async (req, res) => {
        const { send_id, amount } = req.body;
        const transaction = { send_id, amount, action: PAYMENT }

        try {
            await transactionModel.updateBalance(send_id, -1 * amount);
            await transactionModel.updateBalance(ADMIN_ID, amount);

            const { data } = await transactionModel.newTransaction(transaction);

            res.json({ status: 200, msg: "SUCCESS", data });
        } catch (error) {
            res.json({ status: 400, msg: error });
        }
    },
}