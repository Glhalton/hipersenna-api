import { auth } from "../../lib/auth";

export async function signUpService(data: any) {
    return await auth.api.signUpEmail({
        body: {
            email: data.email,
            name: data.name,
            username: data.username,
            password: data.password,
            displayUsername: data.username,
            branch_id: data.branch_id,
            access_level: data.access_level
        },
    });
}

export async function signInService(data: any) {
    return await auth.api.signInUsername({
        body: {
            username: data.username,
            password: data.password
        },
    });
}