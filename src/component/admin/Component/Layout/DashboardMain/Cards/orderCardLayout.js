import React,{ useState, useEffect } from 'react';
import Axios from 'axios'
import OrderCountCard from './orderCountCard';

function OrderCardLayout(props) {
    const [Orders, setOrders] = useState(0)
    useEffect(() => {
        let source = Axios.CancelToken.source()
        setTimeout(() => {
            try{
                Axios({
                    method: 'get',
                    url: `https://localhost:44376/api/orders/${props.api}orderscount`,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('admintoken')}`
                    },
                    cancelToken: source.token
                }).then(res => {
                    setOrders(res.data)
                }).catch(err => console.error(err))
            } catch(error) {
                if(Axios.isCancel(error)){
                    console.log("Request Canceled")
                }
            }
        }, 3000);

        return() => {
            source.cancel()
        }
    }, [Orders,props.api])
    return (
        <div>
            <OrderCountCard title={props.title} ordersCount={Orders} cardbg={props.cardbg} badgebg={props.badgebg}/>
        </div>
    )
}

export default OrderCardLayout;
