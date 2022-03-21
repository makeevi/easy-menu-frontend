import React, { useState } from 'react';
import { format } from 'date-fns';
import { Stack, Tab, Tabs } from 'react-bootstrap';
import ListFoodInGroupComponent, { RequestSource } from './ListFoodInGroupComponent';
import DeleteButton from '../../common/button/DeleteButton';
import LinkPrimaryButton, { Role } from '../../common/button/LinkPrimaryButton';
import TrashSvg from '../../common/svg/TrashSvg';
import PencilSvg from '../../common/svg/PencilSvg';

type Props = {
    index: number;
    id: string;
    name: string;
    count: number;
    start_date: Date;
    delete?: (id: string) => void
}

const FoodGroupTabTemplate: React.FunctionComponent<Props> = (props) => {

    const [isSelect, setSelect] = useState<boolean>();
    const [isShowCard, setShowCard] = useState<boolean>(false);

    function DeleteFoodGroup() {

        if (props.delete !== undefined) {
            console.log("delete")
        }
        //props.delete(props.id);
    }

    function GetShortComponent() {
        return <tr style={{ cursor: "pointer", background: isSelect ? "#d3d2d2" : "#fff" }}
            onMouseLeave={() => setSelect(false)}
            onMouseEnter={() => setSelect(true)}
            onClick={() => isSelect && setShowCard(true)}>

            <th scope="row">{props.index}</th>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td >
                <Stack direction="horizontal" gap={3}
                    onMouseEnter={() => setSelect(false)} onMouseLeave={() => setSelect(true)}>

                    <LinkPrimaryButton onClick={DeleteFoodGroup} role={Role.edit} />
                    <div className="vr" />
                    <LinkPrimaryButton onClick={DeleteFoodGroup} role={Role.delete} />
                </Stack></td>
        </tr>
    }
    //{format(new Date(props.start_date), 'yyyy-MM-dd')}

    function GetFullComponent() {

        return <tr>
            <td colSpan={4}>
                <div className="card" style={{ margin: "20px" }} >
                    <div className="card-body">

                        <div className="title d-flex justify-content-between align-items-start">
                            <h5 className="card-title">{props.name}</h5>
                            <button type="button" className="btn-close" onClick={() => setShowCard(false)} ></button>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <Tabs defaultActiveKey="products" className="mb-3">
                                <Tab eventKey="products" title="Продукты">
                                    <ListFoodInGroupComponent idFoodGroup={props.id} source={RequestSource.FoodGroup} />

                                </Tab>
                                <Tab eventKey="description" title="Описание">

                                </Tab>
                            </Tabs>

                                <div className="d-flex justify-content-between align-items-start" style={{ marginTop: "5px" }}>
                                <div></div>
                                <small className="text-muted">{format(new Date(props.start_date), 'yyyy-MM-dd')}</small>
                                </div>

                        </div>
                    </div>
                </div>
            </td>
        </tr>

    }








    return isShowCard ? GetFullComponent() : GetShortComponent();
};

export default FoodGroupTabTemplate;