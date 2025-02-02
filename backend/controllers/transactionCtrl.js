const asyncHandler = require("express-async-handler");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");

const transactionController = {
    //Add
    create: asyncHandler(async (req, res) => {
        const { type, category, amount, date, description } = req.body;
        if (!amount || !type || !date) {
            throw new Error('Type, amount and date are required');
        }
        //Create
        const transaction = await Transaction.create({
            user: req.user,
            type,
            category,
            amount,
            description,
        });
        res.json(transaction);
    }),

    //Lists
    lists: asyncHandler(async (req, res) => {
        const transactions = await Transaction.find({ user: req.user });
        res.json(transactions);
    }),

    //Update
    update: asyncHandler(async (req, res) => { }),
    //Delete
    delete: asyncHandler(async (req, res) => { }),
};

module.exports = categoryController;