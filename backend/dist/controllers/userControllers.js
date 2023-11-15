"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.deleteUser = exports.updateUserDetails = exports.getOneUser = exports.checkUserDetails = exports.getAllUsers = exports.loginUser = exports.registerUser = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sqlConfig_1 = require("../config/sqlConfig");
const userValidator_1 = require("../Validators/userValidator");
//REGISTER USER
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName, email, password, phone_no } = req.body;
        const { error } = userValidator_1.userRegisterValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        let userID = (0, uuid_1.v4)();
        const hashedPwd = yield bcrypt_1.default.hash(password, 5);
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const checkEmailQuery = `SELECT 1 FROM Users WHERE email = @email`;
        const emailCheckResult = yield pool
            .request()
            .input("email", mssql_1.default.VarChar, email)
            .query(checkEmailQuery);
        if (emailCheckResult.recordset.length > 0) {
            return res
                .status(400)
                .json({ error: "Email already exists. User not registered." });
        }
        const registerQuery = `EXEC registerUser @userID, @userName, @email, @phone_no, @password`;
        const data = yield pool
            .request()
            .input("userID", mssql_1.default.VarChar, userID)
            .input("userName", mssql_1.default.VarChar, userName)
            .input("email", mssql_1.default.VarChar, email)
            .input("phone_no", mssql_1.default.VarChar, phone_no)
            .input("password", mssql_1.default.VarChar, hashedPwd)
            .query(registerQuery);
        return res.status(200).json({
            message: "User registered successfully",
        });
    }
    catch (error) {
        return res.json({
            error: error,
        });
    }
});
exports.registerUser = registerUser;
//LOGIN USER
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { error } = userValidator_1.userLoginValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        let user = yield (yield pool
            .request()
            .input("email", mssql_1.default.VarChar, email)
            .input("password", mssql_1.default.VarChar, password)
            .execute("loginUser")).recordset;
        if (user.length === 1) {
            const correctPwd = yield bcrypt_1.default.compare(password, user[0].password);
            if (!correctPwd) {
                return res.status(401).json({
                    message: "Incorrect password",
                });
            }
            const loginCredentials = user.map((record) => {
                const { phone_no, id_no, password } = record, rest = __rest(record, ["phone_no", "id_no", "password"]);
                return rest;
            });
            const token = jsonwebtoken_1.default.sign(loginCredentials[0], process.env.SECRET, {
                expiresIn: "86400s",
            });
            return res.status(200).json({
                message: "Logged in successfully",
                token,
            });
        }
        else {
            return res.status(401).json({
                message: "Email not found",
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
});
exports.loginUser = loginUser;
//GET ALL USERS
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        let users = (yield pool.request().execute("fetchAllUsers")).recordset;
        return res.json({
            users: users,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error,
        });
    }
});
exports.getAllUsers = getAllUsers;
//CHECK USER DETAILS
const checkUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.info) {
        return res.json({
            info: req.info,
        });
    }
});
exports.checkUserDetails = checkUserDetails;
//GET SINGLE USER
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const singleUser = yield pool
            .request()
            .input("email", mssql_1.default.VarChar, email)
            .execute("getSingleUser");
        console.log(singleUser);
        return res.status(200).json({
            message: "Single User retrieved successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
exports.getOneUser = getOneUser;
//UPDATE USER
const updateUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, phone_no } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const updateuser = yield pool
            .request()
            .input("userName", mssql_1.default.VarChar, userName)
            .input("phone_no", mssql_1.default.VarChar, phone_no)
            .execute("UpdateUserDetails");
        if (updateuser.rowsAffected[0] > 0) {
            return res.json({
                message: "User details updated successfully",
            });
        }
        else {
            return res.status(400).json({
                error: "User details update failed",
                details: "An error occurred while updating the user details.",
            });
        }
    }
    catch (error) {
        console.error("Error updating user details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.updateUserDetails = updateUserDetails;
//DELETE USER
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const result = yield pool
            .request()
            .input("email", mssql_1.default.VarChar, email)
            .execute("deleteUser");
        if (result.recordset[0].DeletionResult === 1) {
            return res.status(200).json({
                message: "User deleted successfully.",
            });
        }
        else {
            console.log("User with the provided ID does not exist");
        }
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
exports.deleteUser = deleteUser;
//FORGOT PASSWORD
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const updatepassword = yield pool
            .request()
            .input("password", mssql_1.default.VarChar, password)
            .execute("UpdatePassword");
        if (updatepassword.rowsAffected[0] > 0) {
            return res.json({
                message: "Password updated successfully",
            });
        }
        else {
            return res.status(400).json({
                error: "Password update failed",
                details: "An error occurred while updating the password.",
            });
        }
    }
    catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.updatePassword = updatePassword;
