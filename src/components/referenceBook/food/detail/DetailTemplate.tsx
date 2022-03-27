import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { GetFoodDetailModel } from '../../../../api/get/models/food/food/GetFoodDetailModel';
import { useGlobalContext } from '../../../../hook/GlobalContext';
import { useIsLoading } from '../../../../hook/useIsLoading';
import ChemicalComItem from './tabItems/ChemicalComItem';
import DataSourceItem from './tabItems/DataSourceItem';
import GroupsItem from './tabItems/GroupsItem';
import PricingItem from './tabItems/PricingItem';
import UnitsItem from './tabItems/UnitsItem';

type Props = {
    id: string;
}

const DetailTemplate: React.FunctionComponent<Props> = (props) => {

    const { service } = useGlobalContext();

    const [food, setFood] = useState<GetFoodDetailModel>();

    const [loadingFood, isLoadingFood, error] = useIsLoading(async () => {

        const response = await service?.GetService.FoodService.GetFoodDetail(props.id);
        setFood(response);
    });

    useEffect(() => {

        loadingFood();
        // Service.DeleteService

    }, []);


    function GetView(model: GetFoodDetailModel) {
        return (
            <Tabs defaultActiveKey="chemicalСomposition" className="mb-3">
                <Tab eventKey="chemicalСomposition" title="Химический состав">
                    <ChemicalComItem model={model} />
                </Tab>

                <Tab eventKey="groups" title="Группы">
                    <GroupsItem model={model} />
                </Tab>

                <Tab eventKey="units" title="Единицы измерения">
                    <UnitsItem model={model} />
                </Tab>

                <Tab eventKey="dataSource" title="Источник данных">
                    <DataSourceItem model={model} />
                </Tab>

                <Tab eventKey="pricing" title="Ценообразование">
                    <PricingItem model={model} />
                </Tab>
            </Tabs>

        )
    }

    return <div>
        {isLoadingFood ? <div>Загрузка</div> : food && GetView(food)}
    </div>

}

export default DetailTemplate;