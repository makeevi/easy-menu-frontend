import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import { ListGroup } from 'react-bootstrap';
import { GetFoodDetailModel } from '../../../../../api/get/models/food/food/GetFoodDetailModel';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../../../common/ModalComponent';
type Props = {
    model: GetFoodDetailModel;
    loadingFood?: () => void;
    test?: any
}

const GroupsItem: React.FC<Props> = (props) => {

    useEffect(() => {

    }, []);





    function ApprovalView(nameGroup: string, action: () => void) {

        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{`Вы действительно хотите удалить продукт ${props.model.Name} из группы?`}</h5>
                <p className="card-text">{nameGroup}</p>
                <div className='d-flex justify-content-between align-items-start'>
                    <div></div>
                    <a className="btn btn-primary" onClick={() => action()}>Да, хочу</a>
                </div>
            </div>
        </div>
    }


    function AddGroupView(nameGroup: string, action: () => void) {

        return <div className="card">
            <div className="card-body">

            </div>
        </div>
    }



    function GetView() {
        const groups = [
            { desc: "Группа продуктов", model: props.model.FoodGroupSanpin },
            { desc: "СанПин", model: props.model.FoodGroup }
        ];

        return (

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <ModalComponent size={Size.lg} headerTitle={"Добавление продукта в группу"}
                                bodyModal={() => AddGroupView(props.model.FoodGroup?.Name, () => { })}>
                                <LinkPrimaryButton role={Role.add} />
                            </ModalComponent>
                        </th>
                        <th scope="col">Раздел</th>
                        <th scope="col">Наименование группы</th>
                        <th scope="col" style={{ width: "100px" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {lodash.map(groups, (item, index) => (
                        <tr key={item.model.Id}>
                            <th scope="row">
                                <div style={{ marginLeft: "13px" }}>{index}</div>
                            </th>
                            <td>{item.desc}</td>
                            <td>{item.model.Name}</td>
                            <td>
                                <ModalComponent size={Size.lg} headerTitle={"Удаление продукта из группы"}
                                    bodyModal={() => ApprovalView(props.model.FoodGroup?.Name, () => { })}>
                                    <LinkPrimaryButton role={Role.delete} />
                                </ModalComponent>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        )
    }

    return (
        <React.Fragment>{GetView()}</React.Fragment>
    )

};

export default GroupsItem;