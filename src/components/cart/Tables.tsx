import { useCartContext } from "../../context";

const Tables = () => {
    const { cartT̥ables, setActiveCart } = useCartContext();
    
    return (
        <>
            {
                cartT̥ables.map((table) => <li key={table.cart_table_id}>
                    <img
                        className="w-50"
                        src="/public/img/dine-table.png"
                        alt=""
                        onClick={() => setActiveCart(table.id)} />
                    {table.cart_table_name}
                </li>)
            }
        </>
    )
}

export default Tables;