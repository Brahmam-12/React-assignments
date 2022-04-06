const Productlist = (props) => {
  const {object}=props
    return (
      <div className="Productlist">
        <div class="square"></div><img src="https://www.w3schools.com/howto/img_avatar.png" alt="id"></img>
        <div class="title"><b>{object.data}</b><br></br><span>This is the react assignment 3</span></div>
        <div class="arrow">{object.right}</div>

      </div>
    );
  }
  
  export default Productlist;