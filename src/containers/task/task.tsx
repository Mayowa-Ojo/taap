import * as React from 'react'

export default function task() {
   const [counter, setCounter] = React.useState(0)

   const handleClick = () => {
      setCounter(counter + 1)
   }
   
   return (
      <div className="wrapper h-full flex flex-row">
         <div className="h-full"></div>
         <div className="h-full"></div>
         <div className="h-full"></div>
      </div>
   )
}
