import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    const scrollToBottom = () => setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }, 300);
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <div style={{ display: 'inline-block' }} onClick={scrollToBottom}>
                <Button
                    btnType="Success"
                    clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>
        </div>
    );
}

export default checkoutSummary;