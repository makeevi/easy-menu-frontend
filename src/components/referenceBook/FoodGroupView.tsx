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
import { GetFoodGroupAllModel } from '../../api/models/GetModel';
import TabTemplate from './components/foodGroup/TabTemplate';
import { Console } from 'console';
import LinkPrimaryButton, { Role } from '../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../common/ModalComponent';

const FoodGroupView: React.FunctionComponent = () => {
  const [foodGroups, setFoodGroups] = useState<GetFoodGroupAllModel[]>();
  const [loadingFoodGroupAll, isLoadingFoodGroupAll, error] = useIsLoading(async () => {

    const response = await GetService.GetFoodGroupAll();
    setFoodGroups(response.data);
  });

  useEffect(() => {

    loadingFoodGroupAll();

  }, []);

  async function AddNewFoodGroup(model: FoodGroupPostModel) {

    const response = await PostService.PostFoodGroup(model);
    loadingFoodGroupAll();
  }

  async function DeleteFoodGroup(id: string) {

    const response = await DeleteService.DeleteFoodGroup(id);
    loadingFoodGroupAll();
  }

  async function PutFoodGroup(id: string, value: string) {

    const model: FoodGroupPutModel = {
      Name: value
    };

    const response = await PutService.PutFoodGroup(id, model);
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
            <th scope="col">Наименование группы</th>
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



      // <Modal
      //     size={props.contentType == ContentType.Textarea ? "lg" : "sm"}
      //     show={smShow} centered
      //     onHide={() => setSmShow(false)}
      // >
      //     <Modal.Header closeButton>
      //     </Modal.Header>
      //     <Modal.Body>
      //         {lodash.isNumber(props.value) && props.contentType == ContentType.Float &&
      //             <YupValidationNumberComponent initial_value={Number(props.value)} buttonText='Изменить' postAction={PostNewValue} />
      //         }

      //         {lodash.isString(props.value) && props.contentType == ContentType.String &&
      //             <YupValidationStringComponent initial_value={String(props.value)} buttonText='Изменить' isTextarea={false} postAction={PostNewValue} />
      //         }

      //         {lodash.isString(props.value) && props.contentType == ContentType.Textarea &&
      //             <YupValidationStringComponent initial_value={String(props.value)} buttonText='Изменить' isTextarea={true} postAction={PostNewValue} />
      //         }

      //     </Modal.Body>
      // </Modal>







      // : <Row xs={1} md={2} className="g-4">
      //     {lodash.map(foodGroups?.sort((a, b) => a.StartDate < b.StartDate ? 1 : -1), a => (

      //         <Col key={a.Id}>
      //             <Card style={{ margin: '10px' }}>
      //                 <Card.Header className="d-flex justify-content-between align-items-start">
      //                     <EditValueComponent contentType={ContentType.String} value={a.Name} action={(value) => PutFoodGroup(a.Id, String(value))} />
      //                     <Button variant="link outline-primary" size="sm" onClick={() => { DeleteFoodGroup(a.Id) }}>
      //                         <TrashSvg />
      //                     </Button>
      //                 </Card.Header>
      //                 <Card.Body>

      //                     <AccordionComponent topic='Список продуктов' counter={a.Count}>
      //                         <FoodGroupItem idFoodGroup={a.Id} source={RequestSource.FoodGroup} />
      //                     </AccordionComponent>

      //                     <div className="d-flex justify-content-between align-items-start">
      //                         <div></div>
      //                         <small className="text-muted">{format(new Date(a.StartDate), 'yyyy-MM-dd')}</small>
      //                     </div>


      //                 </Card.Body>
      //             </Card>
      //         </Col>
      //     ))}

      //     <Col>
      //         <Card style={{ margin: '10px', padding: '10px' }}>
      //             <YupValidationStringComponent
      //                 buttonText='Создать'
      //                 label='Создайте новую группу в этой форме'
      //                 placeholder="Укажите наименование вашей группы"
      //                 isTextarea={false}
      //                 initial_value=''
      //                 postAction={(a) => {
      //                     const model: FoodGroupPostModel = {
      //                         Name: a
      //                     };
      //                     AddNewFoodGroup(model);
      //                 }} />
      //         </Card>
      //     </Col>


      // </Row>



    }
    </React.Fragment>
  );
};

export default FoodGroupView;