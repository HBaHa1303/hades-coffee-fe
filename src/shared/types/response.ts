import { Paging } from "./paging";

export interface ApiResponse<T> {
    message: string;
    data: T;
    paging?: Paging;
}