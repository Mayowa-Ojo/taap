import * as React from 'react'

import Locker from "./components/locker/locker";
import Accounts from "./components/accounts/accounts";
import Illustration from "./components/illustration/illustration";
import "./password.scss";

const Password = () => {
   const [route, setRoute] = React.useState<string>("login")

   const switchRoute = (route) => {
      setRoute(route)
   }

   const renderComponent = (component: string): JSX.Element => {
      switch (component) {
         case "login":
            return <Locker switchRoute={switchRoute} />
         case "accounts":
            return <Accounts switchRoute={switchRoute} />
      }
   }
   return (
      <div className="h-full flex justify-center px-16 pt-16">
         { renderComponent(route) }
         <Illustration />
      </div>
   )
}

export default Password;
