export interface IBaseTypeWhithStartDateIdName {    
    Id: string,
    Name: string,
    StartDate: Date,
}

export type GetFoodGroupAllModel = {
    StartDate: Date,
    Count: number,
    Name: string,
    Id: string
};

export interface IFoodWeightTypeGetModel extends IBaseTypeWhithStartDateIdName{

}

export interface IAgeGroupGetModel extends IBaseTypeWhithStartDateIdName{
    
}

export interface IStandardSanpinGetModel extends IBaseTypeWhithStartDateIdName {
    Value: string,
    AgeGroup: IAgeGroupGetModel,
    FoodWeightType: IFoodWeightTypeGetModel
}

export interface GetSanPinGroupAllModel extends IBaseTypeWhithStartDateIdName  {
    Count: number,
    Description : string,
    StandardSanpinGetModels : IStandardSanpinGetModel[]
};

export type GetFoodGroupModel = {
    StartDate: Date,
    Name: string,
    Id: string,
    Food: GetFoodBasicInfoModel[]
};

export type GetSanPinGroupModel = {
    StartDate: Date,
    Name: string,
    Id: string,
    Description: string
};

export interface GetFoodBasicInfoModel {
    StartDate: Date,
    Name: string,
    Id: string
};

export interface GetFoodModel extends GetFoodBasicInfoModel {
    Source : GetFoodBasicInfoModel,
    FoodUnit : GetFoodBasicInfoModel[],
    FoodGroup :  GetFoodBasicInfoModel,
    FoodGroupSanpin :  GetFoodBasicInfoModel,
    Nutrient: GetNutrientComponent[]
};

export interface GetNutrientComponent extends GetFoodBasicInfoModel {

    NutrientUnit : string,
    Value : number | undefined
}
