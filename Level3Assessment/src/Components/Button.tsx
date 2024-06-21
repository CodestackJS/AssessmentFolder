import { Children } from "react";


interface ButtonProps{
    btnClick:() => void;
    children: string;
    color: string;
   
    
}


const Button = ({btnClick}:ButtonProps) => {
  return (
    <>
    <button onClick={btnClick} >Button</button>
    
    
    </>
  )
}

export default Button