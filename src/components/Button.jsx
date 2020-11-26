import React, { Children } from 'react';
import classNames from 'classnames';


const Button = ({ clickEvent, className, outline, children }) => {
    return (
        <button onClick={clickEvent} className={classNames('button', className, {
            'button-outline': outline,
        })}>{children}</button>
    )
}

export default Button;