import { useParams,  useSearchParams } from 'react-router-dom'

const CartScreen = () => {
    const { id } = useParams() ;

    const [searchParams] = useSearchParams();
    const qty = searchParams.get('qty')

    console.log(id,qty)

    return <div>CartScreen</div>
}

export default CartScreen;