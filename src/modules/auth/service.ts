import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { signInBodySchema } from "./schema";
import z from "zod";

type signInInput = z.infer<typeof signInBodySchema>

export const signInService = async (data: signInInput) => {
    const responseSignIn = await prisma.hsemployees.findFirst({
        where: {
            username: data.username,
        },
    });

    if (!responseSignIn) {
        return false;
    }

    const isCorrectPassword = await bcrypt.compare(data.password, responseSignIn.password);

    if (!isCorrectPassword) {
        return false;
    }

    return responseSignIn;
}

export const saveSession = async (user_id: number, token: string, expires_at?: any) => {
    return await prisma.hssessions.create({
        data: {
            user_id,
            token,
            expires_at
        }
    })
}

export const checkSessions = async (user_id: number) => {
    return await prisma.hssessions.findMany({
        where: { user_id }
    })
}

export const deleteSessions = async (user_id: number) => {
    return await prisma.hssessions.deleteMany({
        where: { user_id }
    });
}

