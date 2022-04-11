import React ,{ useState, useEffect } from 'react';
import Post from "./Post";
import Header from "./Post/Header";



const Postview=()=> {
  const [posts, setPosts] = useState([]);

  const setPostsAsync = async() => {
    const response = await fetch("http://localhost:3004/user"),
    data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    setPostsAsync();
  }, []);
  return (
    
    <div className="Postview">
      <Header/>
      {posts.map((post, index) => (  
      <Post key={index} config={post}/>
      ))}
    </div>
    
  );
}

export default Postview;
