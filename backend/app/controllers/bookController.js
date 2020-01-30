import Responder from '../../lib/expressResponder';
import Book from '../models/book';
import async from 'async';
import _ from 'lodash';
import validator from 'validator';
import nodemailer from 'nodemailer'


export default class BookController { 

  // Add book detail to db 
  static addBookingDetails(data){
          Book.create(data);
         this.sendMail(data)
    }

    // update book detail to db 
  static updateBookingDetails(res,data){
    Book.updateOne({user_id : data.user_id},{$set :{seat_no :data.seat_no}}).then((resp) =>{
      this.sendMail(data)
      return Responder.success(res,{data : resp , msg: "Booking details is updated successfully."})
    });  
    
}


  // get book detail to db 
  static getBookingDetails(req,res){
    Book.find({})
    .then((resp) =>{
      return Responder.success(res,{data : resp?resp :[]})
    })  
    .catch((err) =>{
      Responder.operationFailed(res,err);
    })
}

  // sent email for tikcet confirmation 
    static sendMail(data){
      console.log(data)
      let transporter = nodemailer.createTransport(
        {
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          //service: process.env.SMTP_SERVICE,
          auth: {
            user: "ENTER_YOUR_USER",
            pass:"ENTER_YOUR_PASSWORD"
          },
          logger: true,
          debug: false, // include SMTP traffic in the logs
          tls: {
            rejectUnauthorized: false
          }
        },
        {
          // sender info
          //from: 'noreply@yucreat.com'
  
        }
      );
  
      transporter.sendMail({
          from: '"Ticket-Booking"',
          to: data.email,
          subject: "Ticket confirmation",
          html: `<body>
  
          <h1>Ticket confirmation</h1>
          <p>Your ticket is booked and your seat number is ${data.seat_no}.</p>
          
          </body>`,
      }, (error, info) => {
        if (error) {
          console.log('Error occurred');
          console.log(error);
          return false;
        }
  
        return true;
        console.log('Message sent successfully!');
        // console.log(nodemailer.getTestMessageUrl(info));
        // only needed when using pooled connections
        transporter.close();
      });
  }

}



