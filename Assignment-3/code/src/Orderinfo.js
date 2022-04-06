function Orderinfo(props) {
  const {object}=props
    return (
      <div className="Orderinfo">
        <div class="s1">Status<br></br><div class="update"></div><span >{object.status}</span></div>
        <div class="s1">Door<br></br><span>{object.Door}</span></div>
        <div class="s1">Time<br></br><span>{object.time}</span></div>        
      </div>
    );
  }
  
  export default Orderinfo;