import { GetFoodBasicInfoModel } from "../../../../common/models/GetFoodBasicInfoModel";
import { IBaseTypeWhithStartDateIdName } from "../../../../common/models/IBaseTypeWhithStartDateIdName";

export interface GetFoodShortModel extends IBaseTypeWhithStartDateIdName {
    Source: GetFoodBasicInfoModel,
};