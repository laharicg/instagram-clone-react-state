import React , {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';


function App() {
  const [posts, setPosts] = useState([
    {
      username:'laharic' , 
      caption:'Awesome Love' , 
      imageUrl:'https://i.pinimg.com/736x/4c/32/b1/4c32b1162ccc3edd99f38d60d58783c9.jpg'
    },
    {
      username:'tinny',
      caption:'Pubg lover' ,
      imageUrl:'https://upload.wikimedia.org/wikipedia/en/3/3d/PlayerUnknown%27s_Battlegrounds_Steam_Logo.jpg'
    }
  ]);
  
  return (
    <div className="App">
    <br></br>
      <div className="app__header">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage"/>
      </div>
     
     {
       posts.map(post => (
         <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
     }

    </div>
  );
} 

export default App;
