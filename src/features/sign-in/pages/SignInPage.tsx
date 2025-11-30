"use client"

import { Paper } from "@mui/material";
import SignInForm from "../components/SignInForm";
import { useSignInMutation } from "../hooks/useSignInMutation";
import { useRouter } from "next/navigation";

export default function SignInPage () {
    const useSignIn = useSignInMutation();
    const router = useRouter();

    const handleSubmit = async (email: string, password: string) => {
        useSignIn.mutateAsync({email, password});
        router.push("/admin");
    }

    return (
        <Paper sx={{borderRadius: 8, width: 500, height: 500}}>
            <SignInForm onSubmit={handleSubmit}/>
        </Paper>
    );
}