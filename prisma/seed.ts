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
        name: "Consultar bônus",
        description: "Visualizar dados de bônus registrados no sistema",
      },

      {
        name: "Consultar concorrentes",
        description:
          "Visualizar dados de empresas concorrentes registradas no sistema",
      },

      {
        name: "Consultar permissões",
        description: "Visualizar dados de permissões registradas no sistema",
      },
      {
        name: "Cadastrar permissões",
        description: "Registrar novas permissões no sistema",
      },
      {
        name: "Atualizar permissões",
        description: "Editar informações de permissões do sistema",
      },
      {
        name: "Excluir permissões",
        description: "Deletar permissões do sistema",
      },

      {
        name: "Consultar produtos",
        description: "Visualizar dados de produtos registrados no sistema",
      },

      {
        name: "Consultar cargos",
        description: "Visualizar dados de cargos registrados no sistema",
      },
      {
        name: "Cadastrar cargos",
        description: "Registrar novos cargos no sistema",
      },
      {
        name: "Atualizar cargos",
        description: "Editar informações de cargos do sistema",
      },
      { name: "Excluir cargos", description: "Deletar cargos do sistema" },

      {
        name: "Consultar permissões de cargos",
        description: "Visualizar permissões vinculadas a cargos",
      },
      {
        name: "Adicionar permissões em cargos",
        description: "Registrar permissões em cargos do sistema",
      },
      {
        name: "Remover permissões de cargos",
        description: "Retirar permissões de cargos do sistema",
      },

      {
        name: "Consultar sessões",
        description: "Visualizar dados de sessões ativas no sistema",
      },
      {
        name: "Excluir sessões",
        description: "Deletar sessões ativas no sistema",
      },
      {
        name: "Excluir todas as sessões",
        description: "Deletar todas as sessões ativas no sistema",
      },

      {
        name: "Consultar permissões de usuários",
        description: "Visualizar permissões vinculadas a usuários",
      },
      {
        name: "Adicionar permissões em usuários",
        description: "Registrar permissões em usuários do sistema",
      },
      {
        name: "Remover permissões de usuários",
        description: "Retirar permissões de usuários do sistema",
      },

      {
        name: "Consultar usuários",
        description: "Visualizar dados de usuários registrados no sistema",
      },
      {
        name: "Cadastrar usuários",
        description: "Registrar novos usuários no sistema",
      },
      {
        name: "Atualizar usuários",
        description: "Editar informações de usuários do sistema",
      },
      { name: "Excluir usuários", description: "Deletar usuários do sistema" },

      {
        name: "Consultar cargos de usuários",
        description: "Visualizar cargos vinculados a usuários",
      },
      {
        name: "Adicionar cargos em usuários",
        description: "Registrar cargos em usuários do sistema",
      },
      {
        name: "Remover cargos de usuários",
        description: "Retirar cargos de usuários do sistema",
      },

      {
        name: "Consultar validades",
        description:
          "Visualizar dados de vistorias de validades registradas no sistema",
      },
      {
        name: "Cadastrar validades",
        description: "Registrar novas vistorias de validades no sistema",
      },
      {
        name: "Atualizar validades",
        description: "Editar informações de vistorias de validades do sistema",
      },

      {
        name: "Consultar solicitações de validade",
        description:
          "Visualizar dados de solicitações de vistoria de validades registradas no sistema",
      },
      {
        name: "Cadastrar solicitações de validade",
        description:
          "Registrar novas solicitações de vistoria de validades no sistema",
      },
      {
        name: "Atualizar solicitações de validade",
        description:
          "Editar informações de solicitações de vistoria de validades do sistema",
      },
    ],
  });

  await prisma.hsroles.create({
    data: { name: "admin", description: "Administração" },
  });

  await prisma.hsroles_permissions.createMany({
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
      { permission_id: 28, role_id: 1 },
      { permission_id: 29, role_id: 1 },
      { permission_id: 30, role_id: 1 },
      { permission_id: 31, role_id: 1 },
      { permission_id: 32, role_id: 1 },
      { permission_id: 33, role_id: 1 },
    ],
  });

  await prisma.hsvalidity_treatments.createMany({
    data: [
      { description: "Pendente" },
      { description: "Colocar em promoção" },
      { description: "Troca com o fornecedor" },
      { description: "Tranferência interna" },
      { description: "Bloqueio para venda" },
      { description: "Doação" },
      { description: "Vencido" },
      { description: "Produto vendável dentro do prazo" },
      { description: "Inserção tardia" },
    ],
  });

  await prisma.hsconsumption_groups.createMany({
    data: [
      {description: "Copa"}
    ]
  })

  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("Senha de admin padrão não configurada");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.hsemployees.create({
    data: {
      username: "admin",
      name: "Admin",
      branch_id: 1,
      winthor_id: 1,
      role_id: 1,
      password: hashedPassword,
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
