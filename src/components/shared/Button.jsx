import React from 'react'

const Button = ({children, version , handleClick}) => {

    return(
        <button className={`btn ${version}`} 
        type='submit' 
        onClick={()=>handleClick()}
        disabled={(version==='secondary'&&true)}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    handleClick: ()=>{}
}

export default Button
