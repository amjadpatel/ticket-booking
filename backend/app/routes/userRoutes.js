import express from 'express';
import UserController from '../controllers/userController';

//Routes for all userRoutes api 
const initUserRoutes = () => {
  const userRoutes = express.Router();

  userRoutes.post('/add-user-seat',UserController.addUserDetails);
  
  return userRoutes;
};

export default initUserRoutes;
