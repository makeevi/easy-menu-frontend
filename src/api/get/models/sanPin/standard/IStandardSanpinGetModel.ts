import { IBaseTypeWhithStartDateIdName } from "../../../../common/models/IBaseTypeWhithStartDateIdName";
import { IAgeGroupGetModel } from "../../ageGroup/IAgeGroupGetModel";
import { IFoodWeightTypeGetModel } from "../../food/weightType/IFoodWeightTypeGetModel";

export interface IStandardSanpinGetModel extends IBaseTypeWhithStartDateIdName {
    Value: string,
    AgeGroup: IAgeGroupGetModel,
    FoodWeightType: IFoodWeightTypeGetModel
}