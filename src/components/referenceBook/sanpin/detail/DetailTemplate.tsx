import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useIsLoading } from '../../../../hook/useIsLoading';
import FoodsTabItem from './tabItems/FoodsTabItem';
import NormTabItem from './tabItems/NormTabItem';
import DescriptionTabItem from './tabItems/DescriptionTabItem';
import { useGlobalContext } from '../../../../hook/GlobalContext';
import { GetSanPinGroupModel } from '../../../../api/get/models/sanPin/group/GetSanPinGroupModel';



type Props = {
    id: string;
}

const DetailTemplate: React.FunctionComponent<Props> = (props) => {

    const [group, setGroup] = useState<GetSanPinGroupModel>();
    const { service } = useGlobalContext();

    const [loadingGroup, isLoadingGroup, error] = useIsLoading(async () => {

        const responseFoodGroups = await service?.GetService.SanPinService.GetSanPinGroup(props.id);
        setGroup(responseFoodGroups);
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