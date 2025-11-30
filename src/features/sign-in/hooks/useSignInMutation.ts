import { useMutation } from "@tanstack/react-query";
import { SignInRequest } from "../api/signIn.dto";
import { signInService } from "../services/signIn.service";

export function useSignInMutation() {
    return useMutation({
        mutationFn: (request: SignInRequest) => signInService.signIn(request)
    })
}