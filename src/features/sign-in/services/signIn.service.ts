import { ApiResponse } from "@/shared/types/response";
import { SignInRequest, SignInResponse } from "../api/signIn.dto";
import { signInApi } from "../api/signIn.api";
import { useAuthStore } from "@/libs/stores/authStore";

export const signInService = {
    async signIn(request: SignInRequest) : Promise<ApiResponse<SignInResponse>> {
        const response = await signInApi.signIn(request);

        if (response.data?.accessToken) {
            useAuthStore.getState().setToken(response.data.accessToken);
        }

        return {
            message: response.message,
            data: response.data
        }
    }
}   