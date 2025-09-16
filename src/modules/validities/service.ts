import { hsvalidities_status } from "../../generated/prisma/client.js"
import { prisma } from "../../lib/prisma.js"

export async function createValidity(data: {
    branch_id: number
    employee_id: number
    status: hsvalidities_status
    request_id?: number
}) {
    const validity = await prisma.hsvalidities.create({
        data
    })
    return validity
}

export async function getValidityById(validityId: number){
    return await prisma.hsvalidities.findUnique({
        where: {
            id : validityId
        }
    })
}