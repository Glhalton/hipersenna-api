import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export const signUpService = async (dataUser: any) => {

    const hashedPassword = await bcrypt.hash(dataUser.password, 10)
    const responseSignUp = await prisma.hsemployees.create({
        data: {
            name: dataUser.name,
            username: dataUser.username,
            access_level: dataUser.access_level,
            branch_id: dataUser.branch_id,
            password: hashedPassword,
            winthor_id: dataUser.winthor_id,
        },
    });

    return responseSignUp;
}

export const signInService = async (data: any) => {
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

export const findUser = async (winthor_id: number, username: string) => {
    return await prisma.hsemployees.findFirst({
        where: {
            OR: [
                { username: username },
                { winthor_id: winthor_id },
            ],
        },
    });
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

export const deleteSession = async (token: string) => {
    return await prisma.hssessions.deleteMany({
        where: {
            token
        }
    });
}
