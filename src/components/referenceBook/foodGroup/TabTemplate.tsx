import React, { useState } from 'react';
import { format } from 'date-fns';
import { Stack, Tab, Tabs } from 'react-bootstrap';
import FoodsTabItem from './detail/tabItems/FoodsTabItem';
import LinkPrimaryButton, { Role } from '../../common/button/LinkPrimaryButton';
import ModalComponent, { Size } from '../../common/ModalComponent';
import YupValidationStringComponent from '../../common/YupValidationStringComponent';
import { useGlobalContext } from '../../../hook/GlobalContext';
import { FoodGroupPutModel } from '../../../api/put/models/food/group/FoodGroupPutModel';
import DetailTemplate from './detail/DetailTemplate';

type Props = {
    index: number;
    id: string;
    name: string;
    count: number;
    startDate: Date;
    delete?: (id: string) => void;
    editNameGroup?: (id: string, name: string) => void
}

const TabTemplate: React.FunctionComponent<Props> = (props) => {



    const [isSelect, setSelect] = useState<boolean>();
    const [isShowCard, setShowCard] = useState<boolean>(false);


    // вью на подтверждение удаления группы продуктов 
    function ApprovalView(nameGroup: string) {

        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">Вы действительно хотите удалить группу?</h5>
                <p className="card-text">{nameGroup}</p>
                <div className='d-flex justify-content-between align-items-start'>
                    <div></div>
                    <a className="btn btn-primary" onClick={() => props.delete && props.delete(props.id)}>Да, хочу</a>
                </div>
            </div>
        </div>
    }

    function EditNameGroup(nameGroup: string) {
        return <YupValidationStringComponent
            initial_value={nameGroup}
            buttonText='Изменить' isTextarea={false}
            postAction={(arg) => props.editNameGroup && props.editNameGroup(props.id, arg)} />
    }

    function GetShortComponent() {
        return <tr style={{ cursor: "pointer", background: isSelect ? "#d3d2d2" : "#fff" }}
            onMouseLeave={() => setSelect(false)}
            onMouseEnter={() => setSelect(true)}
            onClick={() => { isSelect && setShowCard(true); }}>

            <th scope="row">{props.index}</th>
            <td>{props.name}</td>

            <td>{props.count}</td>
            <td >
                <Stack direction="horizontal" gap={3}
                    onMouseEnter={() => setSelect(false)} onMouseLeave={() => setSelect(true)}>

                    <ModalComponent size={Size.lg} headerTitle={"Изменение наименования группы"} bodyModal={() => EditNameGroup(props.name)}>
                        <LinkPrimaryButton role={Role.edit} />
                    </ModalComponent>

                    <div className="vr" />

                    <ModalComponent size={Size.lg} headerTitle={"Удаление группы"} bodyModal={() => ApprovalView(props.name)}>
                        <LinkPrimaryButton role={Role.delete} />
                    </ModalComponent>

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
                            <button type="button" className="btn-close" onClick={() => { setShowCard(false); setSelect(false); }} ></button>
                        </div>

                        <div style={{ marginTop: "10px" }}>
                            <DetailTemplate id={props.id} />

                            <div className="d-flex justify-content-between align-items-start" style={{ marginTop: "5px" }}>
                                <div></div>
                                <small className="text-muted">{format(new Date(props.startDate), 'yyyy-MM-dd')}</small>
                            </div>

                        </div>
                    </div>
                </div>
            </td>
        </tr>

    }

    return isShowCard ? GetFullComponent() : GetShortComponent();
};

export default TabTemplate;