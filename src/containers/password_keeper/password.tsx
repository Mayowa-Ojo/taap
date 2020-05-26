import * as React from 'react'

import Locker from "./components/locker/locker";
import Illustration from "./components/illustration/illustration";
import "./password.scss";

const Password = () => {
   return (
      <div className="h-full flex justify-center px-16 pt-16">
         <Locker />
         <Illustration />
      </div>
   )
}

export default Password;
