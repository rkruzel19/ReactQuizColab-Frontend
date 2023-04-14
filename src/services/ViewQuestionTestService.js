import axios from "axios"

const BASE_URL = "http://localhost:8080/question/getAll";

class ViewQuestionTestService {

    async getAllQuestion(){
        return axios.get(BASE_URL);
    }

}

export default new ViewQuestionTestService()