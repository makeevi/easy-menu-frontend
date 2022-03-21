import React from 'react';
import { Stack } from 'react-bootstrap';
import MenuSvg from '../../../components/common/svg/MenuSvg';
import FoodAllView from '../../../components/FoodAllView';
import FoodGroupAllView from '../../../components/food/group/FoodGroupView';
import SanPinGroupAllView from '../../../components/SanPinGroupAllView';
import { useGlobalContext } from '../../../hook/GlobalContext';
import CardMenuComponent from './CardMenuComponent';

const ReferenceBook: React.FunctionComponent = () => {

  const { componet, setComponet: setCompenet } = useGlobalContext();


  function Navigator(component: any) {
    if (setCompenet !== undefined)
      setCompenet(component);
  }

  return (
    <div className="container" style={{ margin: "10px" }}>
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

        <CardMenuComponent className='col' description='Группы продуктов' component={<MenuSvg />} onClick={() => Navigator(<FoodGroupAllView />)} />
        <CardMenuComponent className='col' description='Группы СапПин' component={<MenuSvg />} onClick={() => Navigator(<SanPinGroupAllView />)} />
        <CardMenuComponent className='col' description='Продукты' component={<MenuSvg />} onClick={() => Navigator(<FoodAllView />)} />
      </div>
    </div>
  );
};

export default ReferenceBook;