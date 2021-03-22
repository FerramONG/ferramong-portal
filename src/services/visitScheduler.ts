import axios, { AxiosResponse } from "axios";
import { VisitDateType } from "../interfaces/visitScheduler";

const url = "asd";

interface GetVisitSchedulePayload {
    visitDateType: VisitDateType
}

export default {
    get: (
        payload: GetVisitSchedulePayload
    ):Promise<AxiosResponse<number[]>> => {
        return axios.get(url, {params: payload});
    }
}