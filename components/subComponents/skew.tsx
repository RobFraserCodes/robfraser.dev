import React from 'react'

interface Props {
  colour: string,
  area: string
}

function Skew({colour, area}: Props) {    
    return (
        area === "bottom" ?
        <div className={`absolute -bottom-10 left-0 w-full h-20 mt-20 
            ${colour} transform skew-y-3 lg:skew-y-2 xl:skew-y-1`}>
        </div> :
        <div className={`absolute -top-10 left-0 w-full h-20 
            ${colour} transform -skew-y-3 lg:-skew-y-2 xl:-skew-y-1`}>
        </div>
    )
  }
  
  export default Skew;