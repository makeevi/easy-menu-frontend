import React, { useEffect, useState } from 'react';
import { GetFoodDetailModel } from '../../../../../api/get/models/food/food/GetFoodDetailModel';
import lodash from 'lodash';
import ModalComponent, { Size } from '../../../../common/ModalComponent';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
type Props = {
    model: GetFoodDetailModel;
    loadingFood?: () => void;
}

const UnitsItem: React.FC<Props> = (props) => {


    function ApprovalView(unitName: string, action: () => void) {

        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{`Вы действительно хотите удалить единицу измерения?`}</h5>
                <p className="card-text">{unitName}</p>
                <div className='d-flex justify-content-between align-items-start'>
                    <div></div>
                    <a className="btn btn-primary" onClick={() => action()}>Да, хочу</a>
                </div>
            </div>
        </div>
    }

    function GetView() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <ModalComponent size={Size.lg} headerTitle={"Добавление единицы измерения"}
                                bodyModal={() => ApprovalView("item.Name", () => { })}>
                                <LinkPrimaryButton role={Role.add} />
                            </ModalComponent></th>
                        <th scope="col">{`Наименование`}</th>
                        <th scope="col" style={{ width: "100px" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {lodash.map(props.model.FoodUnit, (item, index) =>
                    (<tr key={item.Id}>
                        <th scope="row" >
                            <div style={{ marginLeft: "13px" }}>{index}</div>
                        </th>
                        <td>{item.Name}</td>
                        <td>
                            <ModalComponent size={Size.lg} headerTitle={"Удаление единицы измерения"}
                                bodyModal={() => ApprovalView(item.Name, () => { })}>
                                <LinkPrimaryButton role={Role.delete} />
                            </ModalComponent>
                        </td>
                    </tr>)


                    )}

                </tbody>
            </table>
        )
    }

    return GetView()

};

export default UnitsItem;