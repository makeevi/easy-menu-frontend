import { GetFoodBasicInfoModel } from "../../../../common/models/GetFoodBasicInfoModel";
import { IStandardSanpinGetModel } from "../standard/IStandardSanpinGetModel";

export interface GetSanPinGroupModel {
    StartDate: Date,
    Name: string,
    Id: string,
    Description: string,
    StandardSanpinGetModels: IStandardSanpinGetModel[]
    Food: GetFoodBasicInfoModel[]
};