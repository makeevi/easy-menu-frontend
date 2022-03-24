import DeleteService from "./delete/DeleteService";
import GetService from "./get/GetService";
import PostService from "./post/PostService";
import PutService from "./put/PutService";

export default class Service {

    DeleteService: DeleteService = new DeleteService();
    GetService: GetService = new GetService();
    PutService: PutService = new PutService();
    PostService: PostService = new PostService();

}