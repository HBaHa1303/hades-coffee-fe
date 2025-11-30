import { axiosPublic } from "@/libs/axios/axios-instance"
import { SignInRequest, SignInResponse } from "./signIn.dto"
import { ApiResponse } from "@/shared/types/response";

const BASE_URL = "/public/api/v1/auth"

export const signInApi = {
    signIn: async(request: SignInRequest) => {
        const response = await axiosPublic.post<ApiResponse<SignInResponse>>(`${BASE_URL}/sign-in`, request);
        return response.data;
    }
}