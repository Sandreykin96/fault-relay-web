import React from "react";
import './authorization.css';


const Authorization = () => {
    return (
        <div className = "authorization">
          Authoooorization  
          <textarea>Имя пользователя</textarea>
          <textarea>Пароль</textarea>
          <button>Sign in</button>
          <button>Forgot your password?</button>
        </div>
    )
}

export default Authorization;