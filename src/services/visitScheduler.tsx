import axios, { AxiosResponse } from "axios";
import { VisitDateType } from "../interfaces/visitScheduler";

const url = "asd";

export interface GetVisitSchedulePayload {
    userId: String
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: (
        payload: GetVisitSchedulePayload
    ):Promise<AxiosResponse<number[]>> => {
        return axios.get(url, {params: payload});
    }
}