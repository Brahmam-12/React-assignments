const Information = (prop) => {
  const {object}=prop
    return (
      <div className="Information">
        <div class="p1">Appointment: <span>{object.Appointment}</span></div><br></br>
        <div class="p1">Email: <span>{object.Email}</span></div><br></br>
        <div class="p1">Phone: <span>{object.phone}</span></div>
      </div>
    );
  }
  
  export default Information;