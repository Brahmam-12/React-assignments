import React from 'react';
import './App.css';
import Header from './Header';
import Information from './Information';
import Orderinfo from './Orderinfo';
import Productlist from './Productlist';

const details={
  name:"Alan Ford",
  id:"00005152",
  Appointment: "9:00(24-05-2016)",
  Email: "alan.form@email.nl",
  phone: +31123456789,
  status: "In Progress",
  Door: "Mark",
  time: "10:30(25-06-2016)",
  pic: "https://www.w3schools.com/howto/img_avatar.png",
  data:"Boltaart Bosbessen",
  summary: " relevant description",
  left: "<",
  right: ">",

};

function App(){
  
  return (
    <div className="App">
      <Header object={details}/>
      <Information object={details} />
      <Orderinfo object={details} />
      <Productlist object={details} />
    </div>
  );
}

export default App;


