import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import GetService from '../../../../api/GetService';
import { GetSanPinGroupModel, IBaseTypeWhithStartDateIdName } from '../../../../api/models/GetModel';
import { useIsLoading } from '../../../../hook/useIsLoading';
import FoodsTabItem from './tabItems/FoodsTabItem';
import NormTabItem from './tabItems/NormTabItem';
import { format } from 'date-fns';
import DescriptionTabItem from './tabItems/DescriptionTabItem';
import Service from '../../../../api/Service';



type Props = {
    id: string;
}

const DetailTemplate: React.FunctionComponent<Props> = (props) => {

    const [group, setGroup] = useState<GetSanPinGroupModel>();

    const [loadingGroup, isLoadingGroup, error] = useIsLoading(async () => {

        const responseFoodGroups = await GetService.GetSanPinGroup(props.id);
        setGroup(responseFoodGroups.data);
    });

    useEffect(() => {

        loadingGroup();
        // Service.DeleteService

    }, []);


    function GetView(group: GetSanPinGroupModel) {
        return (
            <Tabs defaultActiveKey="products" className="mb-3">
                <Tab eventKey="products" title="Продукты">
                    <FoodsTabItem idFoodGroup={props.id} />
                </Tab>
                <Tab eventKey="norm" title="Нормы">
                    <NormTabItem model={group} loadingGroup={loadingGroup} />
                </Tab>
                <Tab eventKey="description" title="Описание">
                    <DescriptionTabItem model={group} loadingGroup={loadingGroup} />
                </Tab>
            </Tabs>

        )
    }

    return <div>
        {isLoadingGroup ? <div>Загрузка</div> : group && GetView(group)}
    </div>
};

export default DetailTemplate;