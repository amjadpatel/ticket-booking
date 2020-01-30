import Responder from '../../lib/expressResponder';
import User from '../models/user';
import async from 'async';
import _ from 'lodash';
import validator from 'validator';
import BookController from './bookController'


export default class UserController { 

  // Add user detail to db 
  static addUserDetails(req,res){
        let data = req.body
        if(!data.name){
            return  Responder.success(res,{msg: "Please enter your name"})
          }
      
          if(!data.email){
            return  Responder.success(res,{data : {} , msg: "Please enter your email."})
          }

        User.findOne({email : data.email})
        .then((finduser) =>{
          if(finduser != null && finduser != undefined){
            data.user_id = finduser._id;
            BookController.updateBookingDetails(res,data); 
          }else{
            User.create(data)
            .then((resp) =>{
                if(resp != null && resp != undefined){
                    Responder.success(res,{data : resp , msg: "User details is added successfully."})
                    data.user_id = resp._id
                    BookController.addBookingDetails(data)
                }else{
                  Responder.success(res,{data : {} , msg: "User details is  not added to db."})
                }
            })
                   }
        })
        .catch((err) =>{
          Responder.operationFailed(res,err)
        })  
       
    }
}



