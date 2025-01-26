const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();

//Add
categoryRouter.post(
    "/api/v1/categories/create",
    isAuthenticated,
    categoryController.create
);
//Lists
categoryRouter.get(
    "/api/v1/categories/lists",
    isAuthenticated,
    categoryController.lists
);

module.exports = categoryRouter;