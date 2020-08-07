import React,{ useState, useEffect } from 'react';
import Axios from 'axios'
import OrderCountCard from './orderCountCard';
import { useSelector} from 'react-redux';

function OrderCardLayout(props) {
    const [Orders, setOrders] = useState(0)
    const redux = useSelector(state => state.adminlogin.StatusChanged)
    useEffect(() => {
        let source = Axios.CancelToken.source()
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

        return() => {
            source.cancel('Cancelling Order Requests')
        }
    }, [Orders,props.api,redux])
    return (
        <div>
            <OrderCountCard title={props.title} ordersCount={Orders} cardbg={props.cardbg} badgebg={props.badgebg}/>
        </div>
    )
}

export default OrderCardLayout;
