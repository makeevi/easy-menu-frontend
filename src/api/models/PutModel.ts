
export type FoodGroupPutModel = {
    Name: string,
    ParentGroupId?: string
};

export type FoodGroupSanpoinPutModel = {
    Name?: string,
    ParentGroupId?: string
    Description?: string,
    StandardSanpin?: StandardSanpinPutModel[]
};

export type StandardSanpinPutModel = {

    Value: number,
    FoodWeightType: string,
    AgeGroup: string,
    Id: string
};