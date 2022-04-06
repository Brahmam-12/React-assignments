
const Header = (props) => {
  const {object}=props
    return (
      <div className="Header">
        <div class="block">
        <div class="icon"><span>{object.left}</span></div>
        <div class="name"><span>{object.name}</span><br></br>
        <span>{object.id}</span></div>
        <button class="btn">Print</button></div>
        
          
      </div>

    );
  }
  
  export default Header;