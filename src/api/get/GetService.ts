import AgeGroupService from "./itemServices/ageGroup/AgeGroupService";
import FoodGroupService from "./itemServices/food/FoodGroupService";
import FoodService from "./itemServices/food/FoodService";
import SanPinService from "./itemServices/sanPin/SanPinService";
import WeightTypeService from "./itemServices/weightType/WeightTypeService";

export default class GetService {

    FoodGroupService: FoodGroupService = new FoodGroupService();
    AgeGroupService: AgeGroupService = new AgeGroupService();
    WeightTypeService: WeightTypeService = new WeightTypeService();
    SanPinService: SanPinService = new SanPinService();
    FoodService: FoodService = new FoodService();

}