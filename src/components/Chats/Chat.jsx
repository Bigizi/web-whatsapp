import React from "react";
import './chat.css';

const Chat = ({...props}) => {
    return (
        <>
          { "" }
          <input className="in-put" { ...props } />{ "" } <img  src="https://img.icons8.com/small/344/filled-sent.png" alt="send" id="image" width='13px' height='13px'/>
        </>
    );
};

export default Chat;