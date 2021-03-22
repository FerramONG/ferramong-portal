import { Tool } from "../interfaces/Tools";
import axios, {AxiosResponse} from 'axios';

const url = "asd";

export default {
    get: ():Promise<AxiosResponse<Tool[]>> => {
        return axios.get(url);
    }
}