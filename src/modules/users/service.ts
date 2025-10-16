import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { updateUserBodySchema } from "./schema";
import z from "zod";

type UpdateUserInput = z.infer<typeof updateUserBodySchema>;

export const signUpService = async (dataUser: any) => {

    const hashedPassword = await bcrypt.hash(dataUser.password, 10)
    const responseSignUp = await prisma.hsemployees.create({
        data: {
            name: dataUser.name,
            username: dataUser.username,
            branch_id: dataUser.branch_id,
            password: hashedPassword,
            winthor_id: dataUser.winthor_id,
        },
    });

    return responseSignUp;
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


export const deleteSession = async (token: string) => {
    return await prisma.hssessions.delete({
        where: {
            token
        }
    });
}

export const deleteUser = async (userId: number) => {
    return await prisma.hsemployees.delete({
        where: {
            id: userId
        }
    });
}

export const updateUser = async (id: number, data: UpdateUserInput) => {

    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10)
    }


    return await prisma.hsemployees.update({
        where: { id },
        data,

    });
}

export const getUser = async (id: number) => {
    return await prisma.hsemployees.findFirst({
        where: { id },
        include:{
            hsusers_roles:{
                include: {
                    hsroles: true
                }
            }}
    });
}