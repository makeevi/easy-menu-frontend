import { GetFoodBasicInfoModel } from "../../../../common/models/GetFoodBasicInfoModel";
import { GetNutrientComponent } from "../nutrient/GetNutrientComponent";

export interface GetFoodModel extends GetFoodBasicInfoModel {
    Source : GetFoodBasicInfoModel,
    FoodUnit : GetFoodBasicInfoModel[],
    FoodGroup :  GetFoodBasicInfoModel,
    FoodGroupSanpin :  GetFoodBasicInfoModel,
    Nutrient: GetNutrientComponent[]
};