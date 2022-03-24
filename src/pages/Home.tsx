import { useGlobalContext } from '../hook/GlobalContext'
import React, { useEffect } from 'react';
import MenuPage from './menu/MenuPage';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    const { componet, setComponet: setComponet } = useGlobalContext()

    useEffect(() => {

        if (setComponet !== undefined)
            setComponet(<MenuPage />);

    }, []);

    return <div>{componet}</div>
}
export default Home