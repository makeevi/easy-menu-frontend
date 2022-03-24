import { GetFoodBasicInfoModel } from "../../../../common/models/GetFoodBasicInfoModel";

export interface GetFoodGroupModel {
    StartDate: Date,
    Name: string,
    Id: string,
    Food: GetFoodBasicInfoModel[]
};