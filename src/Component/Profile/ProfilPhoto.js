import myPic from './profilepic.jpg'
import React from 'react';
const MyPic = () => {
    return ( 
     <>   
        <img src={myPic} className="me" alt ='myImage'/>
     </>
        )
}
export default MyPic;
    
