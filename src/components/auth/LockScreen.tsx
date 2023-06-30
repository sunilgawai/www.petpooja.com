import lockScreen from "/public/img/lockScreen.png";
import { useEffect } from "react";


const LockScreen = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${lockScreen})`;
    })

    console.log(lockScreen)
    return (
        <div style={{ width: '100%', height: '100%' }}>
            
        </div>
    )
}

export default LockScreen;