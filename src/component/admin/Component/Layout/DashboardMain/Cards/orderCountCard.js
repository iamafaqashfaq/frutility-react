import React,{useState} from 'react';

function OrderCountCard(props) {
    const [cardclasses] = useState(['card',props.cardbg])
    const [bagdgeclasses] = useState(['badge',props.badgebg])
    return (
        <div className={cardclasses.join(' ')}>
            <div className="card-body text-capitalize text-center align-items-center">
                <i className="card-title fa fa-cart-arrow-down fa-3x"></i>
                <h3 className="card-text">
                    {props.title}&nbsp;
                    <span className={bagdgeclasses.join(' ')}>
                        {props.ordersCount}
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default OrderCountCard;
