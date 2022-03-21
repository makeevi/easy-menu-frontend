import { useGlobalContext } from '../hook/GlobalContext'
import React, { useEffect } from 'react';
import MenuPage from './menu/MenuPage';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
const { componet, setComponet: setCompenet } = useGlobalContext()

useEffect(() => {

    if(setCompenet!== undefined)
        setCompenet(<MenuPage/>);

}, []);

return <div>{componet}</div>
}
export default Home