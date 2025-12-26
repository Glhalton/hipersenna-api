import { permission } from "process";
import z from "zod";

export const signInSchema = z.object({
  username: z.string({ error: "Usuário ou senha inválidos" }),
  password: z.string({ error: "Usuário ou senha inválidos" }),
});

export type signInInput = z.infer<typeof signInSchema>;

export const signInResponseSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.number(),
    branch_id: z.number(),
    winthor_id: z.number(),
    name: z.string(),
    username: z.string(),
    created_at: z.date(),
    modified_at: z.date(),
    role: z.object({
      role_id: z.number(),
      description: z.string(),
      permissions: z.number().array(),
    }),
    userPermissions: z.number().array(),
    allPermissions: z.number().array(),
  }),
});

export const userSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  winthor_id: z.number(),
  role_id: z.number(),
  password: z.string(),
  name: z.string(),
  username: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
  hsusers_permissions: z.array(
    z.object({
      permission_id: z.number(),
      hspermissions: z.object({
        description: z.string(),
      }),
    })
  ),
  role: z.object({
    id: z.number(),
    description: z.string(),
    hsroles_permissions: z.array(z.object({ permission_id: z.number() })),
  }),
});

export type User = z.infer<typeof userSchema>;

export const mappedUserSchema = {
  id: z.number(),
  branch_id: z.number(),
  winthor_id: z.number(),
  name: z.string(),
  username: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
  role: z.object({
    role_id: z.number(),
    description: z.string(),
    permissions: z.number().array(),
  }),
  userPermissions: z.number().array(),
  allPermissions: z.number().array(),
};

export type MappedUser = z.infer<typeof mappedUserSchema>;
