import  * as React from "react";

type Ref = React.MutableRefObject<HTMLObjectElement>
type Params = {
   isOpen: boolean
   setOpen: () => void
}
const useClickAway = ({isOpen, setOpen}: Params): Ref => {
   const node: React.MutableRefObject<HTMLObjectElement> = React.useRef(null!);

   const handleClickAway = (e) => {
      if(node.current.contains(e.target)) {
         return
      }

      setOpen()
   }

   React.useEffect(() => {
      if(isOpen) {
         document.addEventListener("click", handleClickAway)
      }
      // clean up
      return () => {
         document.removeEventListener("click", handleClickAway)
      }
   }, [isOpen])

   return node;
}

export default useClickAway;