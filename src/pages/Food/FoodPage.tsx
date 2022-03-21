import React, { useState } from 'react';
import { Tabs, Tab, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import FoodGroupAllView from '../../components/FoodGroupAllView';
import FoodAllView from '../../components/FoodAllView';
import SanPinGroupAllView from '../../components/SanPinGroupAllView';
import SearchFormView from '../../components/SearchFormView';

const FoodPage: React.FunctionComponent = () => {
    const [key, setKey] = useState<any>('foodGroup');

    return (
        <React.Fragment>

        <SearchFormView/>

        <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
         >
            <Tab eventKey="foodGroup" title="Группы продуктов">
                <FoodGroupAllView/>
            </Tab>
            <Tab eventKey="sanPinGroup" title="СанПин">
                <SanPinGroupAllView/>
            </Tab>

            <Tab eventKey="foodsAll" title="Продукты">
                <FoodAllView/>            
            </Tab>
         </Tabs>

        </React.Fragment>




    );
};

export default FoodPage;