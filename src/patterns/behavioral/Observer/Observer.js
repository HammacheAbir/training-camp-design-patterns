import React, {useState, useEffect} from 'react';
import { Switch } from 'antd';

const Observer = ()=>{

    const [checked, setChecked] = useState(true)

    useEffect(() => {
        window.addEventListener('offline', (event) => {
            console.log("The network connection has been lost.");
            setChecked(false)
        })

        window.addEventListener('online', (event) => {
            console.log("You are now connected to the network.");
            setChecked(true)
        });

        return () => {
            window.removeEventListener("offiline", setChecked)
            window.removeEventListener("online", setChecked)
        }
    }, [])


    return <div>
    
       Off <Switch checked={checked} /> On
    </div>

}

export default Observer