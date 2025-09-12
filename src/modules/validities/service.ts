import { hsvalidities_status } from "../../generated/prisma"
import { prisma } from "../../lib/prisma"

export async function createValidity(data: {
    branch_id: number
    employee_id:number
    status: hsvalidities_status
    request_id?: number
}) {
    const validity = await prisma.hsvalidities.create({
        data
    })
    return validity
}