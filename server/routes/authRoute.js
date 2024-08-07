import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPasswordController,
  updateProfileController,
  getOrderController,
  getAllOrdersController,
  orderStatusController,
  getAllUsersController,
} from "../controllers/authController.js";
import { isAdmin,requireSignIn } from "../middlewares/authmiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);


//get all the register user

router.get('/getUsers',getAllUsersController);


//Forgot Password || POST
router.post("/forget-password", forgetPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});


//update profile 
router.put('/profile',requireSignIn, updateProfileController)


//orders 

router.get('/orders',requireSignIn,getOrderController)


//orders 

router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

//order status route
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)

export default router;