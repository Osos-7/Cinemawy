import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = props => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;



















// import React from 'react'
// import PropTypes from 'prop-types'
// import { Button } from 'bootstrap'
// import './button.scss'; 

// const button = props => {
//   return (
//         <button 
//             className={`btn ${props.className}`}
//             onClick={props.onClick ? ()=> props.onClick(): null}
//         >
//             {props.children}
//         </button>
//      )
// }

// export const OutlineButton = props=>{
//     return(
//         <Button
//             className={`btn-outline ${props.className}`}
//             onClick={props.onClick ? ()=> props.onClick(): null}
//         >
//             {props.children}
//         </Button>
//     )
// }
// button.propTypes = {
//     onClick: PropTypes.func
// }

// export default button;