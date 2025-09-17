import { hsvalidity_requests_status } from "../../generated/prisma/client.js"
import { prisma } from "../../lib/prisma.js"

export async function createValidityRequest(data: {
    branch_id: number,
    analyst_id: string,
    conferee_id: string,
    status: hsvalidity_requests_status
}) {
    const validityRequest = await prisma.hsvalidity_requests.create({
        data
    })
    return validityRequest;
}