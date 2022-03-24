import FoodGroupService from "./itemService/food/FoodGroupService";
import SanPinServer from "./itemService/sanpin/SanPinServer";

export default class PutService {

    FoodGroupService: FoodGroupService = new FoodGroupService();
    SanPinServer: SanPinServer = new SanPinServer();
}