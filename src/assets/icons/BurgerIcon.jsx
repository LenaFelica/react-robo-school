import React from "react";

export const BurgerIcon = () => {
   return (
      <svg 
        width="26" 
        height="12" 
        viewBox="0 0 26 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line 
           x1="1" 
           y1="1" 
           x2="25" 
           y2="1" 
           stroke="white" 
           strokeWidth="2" 
           strokeLinecap="round"
         />
         <line 
           x1="1" 
           y1="6" 
           x2="25" 
           y2="6" 
           stroke="white" 
           strokeWidth="2" 
           strokeLinecap="round"
         />
         <line 
           x1="1" 
           y1="11" 
           x2="12" 
           y2="11" 
           stroke="white" 
           strokeWidth="2" 
           strokeLinecap="round"
         />
      </svg>
   );
};