import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

export async function signUpService(data: any) {
    const responseSignUp = await auth.api.signUpEmail({
        body: {
            email: data.email,
            name: data.name,
            username: data.username,
            password: data.password,
            displayUsername: data.username,
            branch_id: data.branch_id,
            access_level: data.access_level,
            winthor_id: data.winthor_id
        },
    });

    const responseUser = await prisma.hsemployees.findUnique({
        where: {
            id: responseSignUp.user.id
        }
    })

    return {
        token: responseSignUp.token,
        id: responseUser?.id,
        email: responseUser?.email,
        name: responseUser?.name,
        username: responseUser?.username,
        branchId: responseUser?.branch_id,
        accessLevel: responseUser?.access_level,
        winthor_id: responseUser?.winthor_id,
        createdAt: responseUser?.created_at,
        modifiedAt: responseUser?.modified_at
    }
}

export async function signInService(data: any) {
    const responseSignIn = await auth.api.signInUsername({
        body: {
            username: data.username,
            password: data.password
        },
    });

    const responseUser = await prisma.hsemployees.findUnique({
        where: {
            id: responseSignIn?.user.id
        }
    });

    return {
        token: responseSignIn?.token,
        id: responseUser?.id,
        email: responseUser?.email,
        name: responseUser?.name,
        username: responseUser?.username,
        branchId: responseUser?.branch_id,
        accessLevel: responseUser?.access_level,
        createdAt: responseUser?.created_at,
        modifiedAt: responseUser?.modified_at
    }
}

