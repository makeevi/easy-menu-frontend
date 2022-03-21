export type FoodGroupPostModel = {
    Name: string,
    ParentGroupId?: string
};

export type StandardSanpinPostModel = {

    Value: number,
    FoodWeightType: string,
    AgeGroup: string
};