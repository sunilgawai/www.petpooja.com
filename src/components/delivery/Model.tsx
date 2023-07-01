import { MDBBtn, MDBModal, MDBModalHeader, MDBModalContent, MDBModalDialog, MDBModalTitle, MDBModalFooter, MDBModalBody } from "mdb-react-ui-kit";
import { useState } from "react";

const Model = () => {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
    return (
        <>
            <MDBBtn onClick={toggleShow}>LAUNCH</MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default Model;