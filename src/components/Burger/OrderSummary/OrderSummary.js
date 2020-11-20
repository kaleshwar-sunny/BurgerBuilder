import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import classes from '../../UI/Button/Button.css'

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li className={classes.liBefore} style={{ beforeAll: 'red' }} key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Aux>
                <div style={{ color: '#321f28' }}>
                    <h3 style={{ color: '#ef962d', borderBottom: '2px solid' }}>Your Order</h3>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul className={classes.discNone}>
                        {ingredientSummary}
                    </ul>
                    <p style={{ marginBottom: '6%' }}><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                    <p style={{ color: '#9c5518', marginBottom: '5px' }}>Continue to Checkout?</p>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </div>
            </Aux >
        );
    }
}

export default OrderSummary;