import React, { useEffect, useState } from 'react';
import { GetFoodDetailModel } from '../../../../../api/get/models/food/food/GetFoodDetailModel';
import lodash from 'lodash';
import ModalComponent, { Size } from '../../../../common/ModalComponent';
import LinkPrimaryButton, { Role } from '../../../../common/button/LinkPrimaryButton';
import { GetNutrientComponent } from '../../../../../api/get/models/food/nutrient/GetNutrientComponent';

type Props = {
    model: GetFoodDetailModel;
    loadingFood?: () => void;
}

const ChemicalComItem: React.FC<Props> = (props) => {


    function ApprovalView(unitName: string, action: () => void) {

        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{`Вы действительно хотите удалить нутриент?`}</h5>
                <p className="card-text">{unitName}</p>
                <div className='d-flex justify-content-between align-items-start'>
                    <div></div>
                    <a className="btn btn-primary" onClick={() => action()}>Да, хочу</a>
                </div>
            </div>
        </div>
    }

    function EditChemical(model: GetNutrientComponent) {

        return (
            <div></div>
        )
    }



    function GetView() {
        return (

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Ед изм</th>
                        <th scope="col">Показатель</th>
                        <th scope="col" style={{ width: "100px" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {lodash.map(props.model.Nutrient, (item, index) => (

                        <tr key={item.Id}>
                            <th scope="row">{index}</th>
                            <td>{item.Name}</td>
                            <td>{item.NutrientUnit}</td>
                            <td>{item.Value}</td>
                            <td>
                                <div className="hstack gap-3">
                                    <ModalComponent size={Size.lg} headerTitle={"Изменение нутриента"} bodyModal={() => EditChemical(item)}>
                                        <LinkPrimaryButton role={Role.edit} />
                                    </ModalComponent>

                                    <div className="vr" />

                                    <ModalComponent size={Size.lg} headerTitle={"Удаление нутриента"} bodyModal={() => ApprovalView(item.Name, () => { })}>
                                        <LinkPrimaryButton role={Role.delete} />
                                    </ModalComponent>
                                </div>

                            </td>
                        </tr>

                    )
                    )}
                </tbody>
            </table>

        )

    }

    return GetView()

};

export default ChemicalComItem;