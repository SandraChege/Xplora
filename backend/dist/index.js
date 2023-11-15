"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_2.default)();
app.use((0, express_1.json)());
app.use("/user", userRoutes_1.default);
app.listen(port, () => {
    console.log(`Xplora Tours is running on port ${port}`);
});
