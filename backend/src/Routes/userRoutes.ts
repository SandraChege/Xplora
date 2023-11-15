import Router from "express";
import {
  checkUserDetails,
  deleteUser,
  getAllUsers,
  getOneUser,
  loginUser,
  registerUser,
  updatePassword,
  updateUserDetails,
} from "../controllers/userControllers";
import { verifyToken } from "../middelwares/verifytoken";

const user_router = Router();

user_router.get("/getallusers", verifyToken, getAllUsers);
user_router.post("/register", registerUser);
user_router.post("/login", loginUser);
user_router.get("/checkuserdetails", verifyToken, checkUserDetails);
user_router.get("/getoneuser", getOneUser);
user_router.post("/updateuser", updateUserDetails);
user_router.delete("/deleteuser", deleteUser);
user_router.post("/updatepassword", updatePassword)

export default user_router;
