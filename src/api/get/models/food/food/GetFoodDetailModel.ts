import { GetFoodBasicInfoModel } from "../../../../common/models/GetFoodBasicInfoModel";
import { GetNutrientComponent } from "../nutrient/GetNutrientComponent";

export interface GetFoodDetailModel extends GetFoodBasicInfoModel {
    Source: GetFoodBasicInfoModel,
    FoodUnit: GetFoodBasicInfoModel[],
    FoodGroup: GetFoodBasicInfoModel,
    FoodGroupSanpin: GetFoodBasicInfoModel,
    Nutrient: GetNutrientComponent[]
};