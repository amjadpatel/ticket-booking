import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ration: [],
      book_details:{
        name : '',
        email : '',
        is_booked: false,
        seat_no :''
      },
      total_seat :[],
      lastIndex :null,
      booked_seats :[]
    };
  }

  componentDidMount() {
   this.getAllBookedSeatDetails();
  }

  totalSeat(){
    console.log(this.state.booked_seats)
    for(let i=1;i < 31;i++){
      let obj ={
        seat_no: i,
        is_booked:false,
        is_active: false
      }
      for(let j = 0 ;j < this.state.booked_seats.length;j++){
        if(i == this.state.booked_seats[j].seat_no){
          obj.is_booked = true;
          obj.is_active = true;
          console.log(obj)
        }
       
      }
        this.state.total_seat.push(obj);
    }
         const state = this.state.total_seat;
         this.setState(state);
         console.log( this.state.total_seat)
  }

  onChange = (e) => {
    const state = this.state.book_details
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  addBookedSeatDetails(){
    axios.post('http://localhost:5000/api/user/add-user-seat',this.state.book_details)
      .then(res => {
        console.log(res)
        this.getAllBookedSeatDetails()
        
      })
      .catch((err) =>{
        console.log(err);
      })
  }

  getAllBookedSeatDetails(){
    axios.get('http://localhost:5000/api/book/get-book')
      .then(res => {
        console.log("-------------",res)
        this.setState({ booked_seats: res.data.data});
        this.state.total_seat =[];
          this.totalSeat();
      })
      .catch((err) =>{
        console.log(err);
      })
  }



  clickOnSeat(value,i){
    if(value.is_booked || value.is_active){
      value.is_booked = false;
      value.is_active = false;
    }else{
      value.is_active = !value.is_active;
    }
    if(this.state.lastIndex != null){
      this.state.total_seat[this.state.lastIndex].is_booked = false;
      this.state.total_seat[this.state.lastIndex].is_active = false;
    }
    this.state.lastIndex = i;

    
   // value.is_booked = !value.is_booked;
    const state = this.state.total_seat;
    this.state.book_details.is_booked = true;
    this.state.book_details.seat_no = value.seat_no;
    this.setState(state);
    
  }   


  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.book_details)
 
    if(!this.state.book_details.name){
      toast.error('Please enter your name.', {
        position: toast.POSITION.TOP_RIGHT
      })
      return
    }
    if(!this.state.book_details.email){
      toast.error('Please enter your email.', {
        position: toast.POSITION.TOP_RIGHT
      })
      return
    }
    if(!this.state.book_details.seat_no){
      toast.error('Please select seat no.', {
    position: toast.POSITION.TOP_RIGHT
  })
  return
}

this.addBookedSeatDetails()

    
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
             Ticket Booking
            </h3>
          </div>
          <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          <div className="panel-body">
            {/* <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Ration</Link></h4> */}
          
            <form onSubmit={this.onSubmit}>
              <div className="form-group col col-4">
                <label >Name:</label>
                <input type="text" className="form-control" name="name" onChange={this.onChange} placeholder="Enter your name" />
              </div>

              <div className="form-group col col-4">
                <label >Email Id:</label>
                <input type="text" className="form-control" name="email" onChange={this.onChange} placeholder="Enter your email" />
              </div>
              <br/>
              <div className="row total-seat" >
              {this.state.total_seat.map((value,index) =>
              <div className="col col-1">
                <div className="row ">
              <div className="col col-4">
              </div>
                <a  href="javascript:void()">
                <div className="col col-4 mar-2" onClick={this.clickOnSeat.bind(this, value,index)}>
               
                <button disabled={value.is_booked}  type="button" className={ value.is_active ? (value.is_booked ? "btn btn-danger" : "btn btn-success") : "btn"}> {value.seat_no}</button>
              </div>
              </a>
              <div className="col col-4">
              
              </div>
              </div>
              </div>
              )}
              
              </div>
              <br/>
              <div className="row">
              <div className="form-group col col-2">
                <label >Booked Seat:</label>&nbsp;
                <button type="submit" className="btn btn-danger"></button>
              </div>
              <div className="form-group col col-2">
                <label >Selected Seat:</label>&nbsp;
                <button type="submit" className="btn btn-success"></button>
              </div>
              </div>
              <button type="submit" className="btn btn-info">Submit</button>
             
            </form>

           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
