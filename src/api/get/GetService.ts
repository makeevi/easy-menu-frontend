import AgeGroupService from "./itemServices/ageGroup/AgeGroupService";
import FoodGroupService from "./itemServices/food/FoodGroupService";
import WeightTypeService from "./itemServices/weightType/WeightTypeService";

export default class GetService {

    FoodGroupService: FoodGroupService = new FoodGroupService();
    AgeGroupService: AgeGroupService = new AgeGroupService();
    WeightTypeService: WeightTypeService = new WeightTypeService();

}