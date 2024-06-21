import { Children } from "react";


interface ButtonProps{
    btnClick:() => void;
    children: string;
    //color: string;
   
    
}


const Button = ({btnClick, children}:ButtonProps) => {
  return (
    <>
    <button onClick={btnClick} >{children}</button>
    
    
    </>
  )
}

export default Button