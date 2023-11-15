"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const verifytoken_1 = require("../middelwares/verifytoken");
const user_router = (0, express_1.default)();
user_router.get("/getallusers", verifytoken_1.verifyToken, userControllers_1.getAllUsers);
user_router.post("/register", userControllers_1.registerUser);
user_router.post("/login", userControllers_1.loginUser);
user_router.get("/checkuserdetails", verifytoken_1.verifyToken, userControllers_1.checkUserDetails);
user_router.get("/getoneuser", userControllers_1.getOneUser);
user_router.post("/updateuser", userControllers_1.updateUserDetails);
user_router.delete("/deleteuser", userControllers_1.deleteUser);
user_router.post("/updatepassword", userControllers_1.updatePassword);
exports.default = user_router;
