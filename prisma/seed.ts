import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma.js";

async function main() {
  await prisma.hsbranches.createMany({
    data: [
      { description: "Matriz" },
      { description: "Faruk" },
      { description: "Carajás" },
      { description: "VS10" },
      { description: "Xinguara" },
      { description: "DP06" },
      { description: "Cidade Jardim" },
      { description: "Canaã dos Carajás" },
    ],
  });

  await prisma.hspermissions.createMany({
    data: [
      {
        name: "Consultar usuários",
        description:
          "Consultar todos os usuários existentes ou um usuário pelo id",
      },
      { name: "Cadastrar usuários", description: "Cadastrar novos usuários" },
      { name: "Excluir usuários", description: "Exclui usuários existentes" },
      {
        name: "Atualizar usuários",
        description: "Atualizar dados de um usuário existente",
      },
      {
        name: "Consultar permissões",
        description:
          "Consulta todas as permissões existentes ou uma permissão pelo id",
      },
      {
        name: "Cadastrar permissões",
        description: "Cadastra novas permissões",
      },
      {
        name: "Excluir permissões",
        description: "Exclui permissões existentes",
      },
      {
        name: "Atualizar permissões",
        description: "Atualiza dados de uma permissão existente",
      },
      {
        name: "Consultar cargos",
        description: "Consultar todos os cargos existentes ou um pelo id",
      },
      { name: "Criar cargos", description: "Criar novos cargos" },
      { name: "Excluir cargos", description: "Excluir cargos existentes" },
      {
        name: "Atualizar cargos",
        description: "Atualizar dados de cargos existentes",
      },
      {
        name: "Conceder cargo a usuários",
        description: "Conceder cargos a usuários existentes",
      },
      {
        name: "Conceder permissões a cargos",
        description: "Conceder permissões a cargos existentes",
      },
      {
        name: "Conceder permissões a usuários",
        description: "Conceder permissões a usuários existentes",
      },
      {
        name: "Consultar todas as solicitações de validade",
        description: "Consultar todas as solicitações de validades",
      },
      {
        name: "Consultar solicitações de validade por usuários",
        description:
          "Consultar solicitações de validades vinculadas a um usuário",
      },
      {
        name: "Cadastrar solicitações de validade",
        description: "Cadastrar solicitações de validade",
      },
      {
        name: "Atualizar solicitações de validade",
        description: "Atualizar solicitações de validade",
      },
      {
        name: "Consultar validades",
        description: "Consultar todas as solicitações de validade",
      },
      {
        name: "Consultar validades por usuários",
        description: "Consultar validades de um conferente",
      },
      { name: "Cadastrar validades", description: "Cadastrar novas validades" },
      { name: "Consultar produtos", description: "Consultar produtos" },
      { name: "Consultar bônus", description: "Consultar bônus" },
      {
        name: "Remover cargo de usuários",
        description: "Remover cargo de usuários existentes",
      },
      {
        name: "Remover permissões de usuários",
        description: "Remover permissões de usuários",
      },
      {
        name: "Remover permissões de cargos",
        description: "Remover permissões de cargos existentes",
      },
    ],
  });

  await prisma.hsroles.create({
    data: { name: "admin", description: "Administração" },
  });

  await prisma.hspermissions_roles.createMany({
    data: [
      { permission_id: 1, role_id: 1 },
      { permission_id: 2, role_id: 1 },
      { permission_id: 3, role_id: 1 },
      { permission_id: 4, role_id: 1 },
      { permission_id: 5, role_id: 1 },
      { permission_id: 6, role_id: 1 },
      { permission_id: 7, role_id: 1 },
      { permission_id: 8, role_id: 1 },
      { permission_id: 9, role_id: 1 },
      { permission_id: 10, role_id: 1 },
      { permission_id: 11, role_id: 1 },
      { permission_id: 12, role_id: 1 },
      { permission_id: 13, role_id: 1 },
      { permission_id: 14, role_id: 1 },
      { permission_id: 15, role_id: 1 },
      { permission_id: 16, role_id: 1 },
      { permission_id: 17, role_id: 1 },
      { permission_id: 18, role_id: 1 },
      { permission_id: 19, role_id: 1 },
      { permission_id: 20, role_id: 1 },
      { permission_id: 21, role_id: 1 },
      { permission_id: 22, role_id: 1 },
      { permission_id: 23, role_id: 1 },
      { permission_id: 24, role_id: 1 },
      { permission_id: 25, role_id: 1 },
      { permission_id: 26, role_id: 1 },
      { permission_id: 27, role_id: 1 },
    ],
  });

  const password = process.env.ADMIN_PASSWORD
  if(!password){
    throw new Error("Senha de admin padrão não configurada")
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.hsemployees.create({
    data: {
      username: "admin",
      name: "Admin",
      branch_id: 1,
      winthor_id: 1,
      password: hashedPassword,
    },
  });

  await prisma.hsusers_roles.create({
    data: {
      role_id: 1,
      user_id: 1,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
