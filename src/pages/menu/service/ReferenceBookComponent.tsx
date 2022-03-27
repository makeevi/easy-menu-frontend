import React from 'react';
import { Stack } from 'react-bootstrap';
import MenuSvg from '../../../components/common/svg/MenuSvg';
import FoodsView from '../../../components/referenceBook/food/FoodsView';
import FoodGroupView from '../../../components/referenceBook/foodGroup/FoodGroupView';
import SanPinGroup from '../../../components/referenceBook/sanpin/SanPinGroup';
import { useGlobalContext } from '../../../hook/GlobalContext';
import CardMenuComponent from './CardMenuComponent';

const ReferenceBook: React.FunctionComponent = () => {

  const { componet, setComponet: setComponet } = useGlobalContext();


  function Navigator(component: any) {
    if (setComponet !== undefined)
      setComponet(component);
  }

  return (
    <div className="container" style={{ margin: "10px" }}>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

        <CardMenuComponent className='col' description='Группы продуктов' component={<MenuSvg />} onClick={() => Navigator(<FoodGroupView />)} />
        <CardMenuComponent className='col' description='Группы СапПин' component={<MenuSvg />} onClick={() => Navigator(<SanPinGroup />)} />
        <CardMenuComponent className='col' description='Продукты' component={<MenuSvg />} onClick={() => Navigator(<FoodsView />)} />
      </div>
    </div>
  );
};

export default ReferenceBook;