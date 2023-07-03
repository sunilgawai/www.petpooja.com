import { FC } from "react"
import { ITable } from "../../types"
import { useCartContext } from "../../context"

type Props = {
    tables: ITable[]
}
const Tables: FC<Props> = ({ tables }) => {
    const { setActiveTable } = useCartContext();

    return (
        <>
            {
                tables.map(table => <li
                    onClick={() => {
                        setActiveTable(table);
                        console.log('current active table', table.cart_table_name)
                    }}
                    key={table.id}>
                    <img
                        className="w-50"
                        src="/public/img/dine-table.png"
                        alt="" />
                    {table.cart_table_name}
                </li>)
            }
        </>
    )
}

export default Tables;