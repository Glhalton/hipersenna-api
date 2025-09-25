import { betterAuth } from "better-auth";
import { prisma } from "./prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    plugins: [
        username({
            schema: {
                user: {
                    fields: {
                        displayUsername: "display_username",
                    }
                }
            }
        })
    ],
    user: {
        modelName: "hsemployees",
        fields: {
            createdAt: "created_at",
            updatedAt: "modified_at",
            emailVerified: "email_verified"
        },
        additionalFields: {
            access_level: {
                type: "number",
                required: true,
                defaultValue: "user",
            },
            branch_id: {
                type: "number",
                required: true,
            },
            winthor_id: {
                type: "number",
                required: true,
            }
        }
    },
    session: {
        modelName: "hssessions",
        fields: {
            createdAt: "created_at",
            expiresAt: "expires_at",
            ipAddress: "ip_address",
            updatedAt: "modified_at",
            userAgent: "user_agent",
            userId: "user_id",
        }
    },
    account: {
        modelName: "hsaccounts",
        fields: {
            accessToken: "access_token",
            accessTokenExpiresAt: "access_token_expires_at",
            accountId: "account_id",
            createdAt: "created_at",
            idToken: "id_token",
            providerId: "provider_id",
            refreshToken: "refresh_token",
            refreshTokenExpiresAt: "refresh_token_expires_at",
            updatedAt: "modified_at",
            userId: "user_id",
        }
    },
    verification: {
        modelName: "hsverifications",
        fields: {
            createdAt: "created_at",
            expiresAt: "expires_at",
            updatedAt: "modified_at",
        }
    }
})