import { useAppContext, useCartContext } from "../../context";

const Tables = () => {
    const { setActiveCart } = useCartContext();
    const { cartTables } = useAppContext();

    return (
        <>
            {
                cartTables.map((table) => <li
                    key={table.cart_table_id}>
                    <img
                        className="w-50"
                        src="/public/img/dine-table.png"
                        alt=""
                        onClick={() => setActiveCart(table.id)} />
                    {table.id}
                </li>)
            }
        </>
    )
}

export default Tables;