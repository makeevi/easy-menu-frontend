import FoodGroupService from "./itemServices/food/FoodGroupService";
import SanPinService from "./itemServices/sanPin/SanPinService";

export default class DeleteService {
    FoodGroupService: FoodGroupService = new FoodGroupService();
    SanPinService: SanPinService = new SanPinService();
}