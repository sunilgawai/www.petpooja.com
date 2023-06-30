
const CartView = () => {
    return (
        <div className="table-item-total">
            <div className="table-rasponsibe">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Check Items</th>
                            <th>QTY.</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Item1</td>
                            <td>Check Items</td>
                            <td>QTY.</td>
                            <td>Price</td>
                        </tr>
                        <tr>
                            {/* <div className="no-item"> */}
                                <td colSpan={4}>
                                    <h6>No Item Selected</h6>
                                    <p>Please Select Item From Left Menu Item </p>
                                </td>
                            {/* </div> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartView;