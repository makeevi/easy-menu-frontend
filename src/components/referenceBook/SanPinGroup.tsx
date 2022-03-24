import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Row, Card, Col, Badge, Button, Form, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import GetService from '../../api/GetService';
import lodash from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodGroupItem, { RequestSource } from './components/foodGroup/ListFoodInGroup';
import AccordionComponent from '../common/AccordionComponent';
import PostGroupView from '../PostGroupView';
import { useIsLoading } from '../../hook/useIsLoading';
import TrashSvg from '../common/svg/TrashSvg';
import PlusSvg from '../common/svg/PlusSvg';
import PencilSvg from '../common/svg/PencilSvg';
import CustomToggle from '../common/CustomToggle';
import YupValidationStringComponent from '../common/YupValidationStringComponent';
import PostService from '../../api/PostService';
import DeleteService from '../../api/DeleteService';
import PutService from '../../api/PutService';
import { FoodGroupPutModel } from '../../api/models/PutModel';
import { FoodGroupPostModel } from '../../api/models/PostModel';
import { GetSanPinGroupAllModel } from '../../api/models/GetModel';
import TabTemplate from './components/sanpin/TabTemplate';
import { Console } from 'console';
import LinkPrimaryButton, { Role } from '../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../common/ModalComponent';

const SanPinGroupView: React.FunctionComponent = () => {
  const [foodGroups, setFoodGroups] = useState<GetSanPinGroupAllModel[]>();
  const [loadingFoodGroupAll, isLoadingFoodGroupAll, error] = useIsLoading(async () => {

    const response = await GetService.GetSanPinGroupAll();
    setFoodGroups(response.data);
  });

  useEffect(() => {

    loadingFoodGroupAll();

  }, []);

  async function AddNewFoodGroup(model: FoodGroupPostModel) {

    const response = await PostService.PostFoodGroupSanPin(model);
    loadingFoodGroupAll();
  }

  async function DeleteFoodGroup(id: string) {

    const response = await DeleteService.DeleteSanPinGroup(id);
    loadingFoodGroupAll();
  }

  async function PutFoodGroup(id: string, value: string) {

    const model: FoodGroupPutModel = {
      Name: value
    };

    const response = await PutService.PutFoodGroupSanpin(id, model);
    loadingFoodGroupAll();
  }

  function GetCardNewGroupView() {

    return <YupValidationStringComponent
    buttonText='Создать'
    placeholder="Укажите наименование вашей группы"
    isTextarea={false}
    initial_value=''
    postAction={(a) => {
      const model: FoodGroupPostModel = {
        Name: a
      };
      AddNewFoodGroup(model);
    }} style={{ margin: '10px', padding: '10px' }} />

  }

  return (
    <React.Fragment> {isLoadingFoodGroupAll
      ? <div>Загрузка</div> :


      <table className="table">
        <thead>
          <tr>
            <th scope="col" >
              <ModalComponent size={Size.lg} bodyModal={GetCardNewGroupView} headerTitle={"Новая группа продуктов"}>
                <LinkPrimaryButton role={Role.add} />
              </ModalComponent>
            </th>
            <th scope="col">Наименование группы СапПин</th>
            <th scope="col">Продукты</th>
            <th scope="col" style={{ width: "100px" }} ></th>
          </tr>
        </thead>
        <tbody>

          {lodash.map(foodGroups?.sort((a, b) => a.StartDate < b.StartDate ? 1 : -1), function (item, index) {
            return <TabTemplate 
            key={item.Id} 
            id={item.Id} 
            index={index} 
            name={item.Name} 
            count={item.Count} 
            startDate={item.StartDate} 
            delete={DeleteFoodGroup} 
            editNameGroup = {PutFoodGroup}  />
          })}

        </tbody>
      </table>
    }
    </React.Fragment>
  );
};

export default SanPinGroupView;