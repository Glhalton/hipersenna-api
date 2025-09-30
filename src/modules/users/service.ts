import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export async function signUpService(dataUser: any) {

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

export async function signInService(data: any) {
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

export async function findUser(winthor_id: number, username: string) {
    return await prisma.hsemployees.findFirst({
        where: {
            OR: [
                { username: username },
                { winthor_id: winthor_id },
            ],
        },
    });
}

