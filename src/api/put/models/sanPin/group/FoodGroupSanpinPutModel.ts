import { StandardSanpinPutModel } from "../standard/StandardSanpinPutModel";

export type FoodGroupSanpinPutModel = {
    Name?: string,
    ParentGroupId?: string
    Description?: string,
    StandardSanpin?: StandardSanpinPutModel[]
};