import { hsvalidity_requests_status } from "../../generated/prisma"
import {prisma} from "../../lib/prisma"

export async function createValidityRequest(data: {
    branch_id: number,
    analyst_id: number,
    conferee_id: number,
    status: hsvalidity_requests_status
}) {
    const validityRequest = await prisma.hsvalidity_requests.create({
        data
    })
    return validityRequest;
}