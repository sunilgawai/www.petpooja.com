import { useCartContext } from "../../context";
import { useState } from "react";
const CustomerDetails = () => {
    const { updateCustomerDetails, activeCart } = useCartContext();


    const [customer, setCustomer] = useState({
        customer_first_name: '',
        customer_last_name: '',
        customer_mobile: ''
    });

    const update = () => {
        updateCustomerDetails(activeCart, customer.customer_first_name, customer.customer_last_name, customer.customer_mobile);
    }


    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal fade" id="staticBackdrop"
                    data-bs-backdrop="static" data-bs-keyboard="false"
                    tabIndex={-1} aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">
                                    Customer Details.
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        value={customer.customer_first_name}
                                        onChange={(e) => setCustomer({
                                            ...customer,
                                            customer_first_name: e.target.value
                                        })}
                                        name="customer_first_name"
                                        className="form-control w-50 center my-4 text-center "
                                        placeholder="customer's first name"
                                        required
                                        aria-label="Username"></input>
                                    <input
                                        type="text"
                                        value={customer.customer_last_name}
                                        onChange={(e) => setCustomer({
                                            ...customer,
                                            customer_last_name: e.target.value
                                        })}
                                        name="customer_last_name"
                                        className="form-control w-50 center my-4 text-center "
                                        placeholder="customer's last name"
                                        required
                                        aria-label="Username"></input>
                                    <input
                                        type="text"
                                        value={customer.customer_mobile}
                                        onChange={(e) => setCustomer({
                                            ...customer,
                                            customer_mobile: e.target.value
                                        })}
                                        name="customer_mobile"
                                        className="form-control w-50 center my-4 text-center "
                                        placeholder="customer's phone number"
                                        required
                                        aria-label="Username"></input>
                                    <button className="btn btn-primary w-50 fs-lg">
                                        Update details.
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                                    close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerDetails;
