import React, { useEffect, useState } from 'react';
import { GetFoodDetailModel } from '../../../../../api/get/models/food/food/GetFoodDetailModel';
type Props = {
    model: GetFoodDetailModel;
    loadingFood?: () => void;
}

const DataSourceItem: React.FC<Props> = (props) => {

    return (
        <div></div>
    )

};

export default DataSourceItem;