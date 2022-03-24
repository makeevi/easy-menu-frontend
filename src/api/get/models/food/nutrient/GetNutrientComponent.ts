import { GetFoodBasicInfoModel } from "../../../../common/models/GetFoodBasicInfoModel";

export interface GetNutrientComponent extends GetFoodBasicInfoModel {

    NutrientUnit : string,
    Value : number | undefined
}