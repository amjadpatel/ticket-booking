import express from 'express';
import BookController from '../controllers/bookController';

//Routes for all bookRoutes api 
const initBookRoutes = () => {
  const bookRoutes = express.Router();

  bookRoutes.get('/get-book',BookController.getBookingDetails);


  
  return bookRoutes;
};

export default initBookRoutes;
