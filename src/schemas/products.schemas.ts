import { z } from "zod";

export const getProductSchema = z.object({
  codprod: z.coerce.number().optional(),
  descricao: z.coerce.string().optional(),
  codauxiliar: z.coerce.number().optional(),
  codfilial: z.coerce.number().optional(),
});

export const productResponseSchema = z.object({
  codAuxiliar: z.string(),
  codProd: z.number(),
  codFornec: z.number(),
  codDepto: z.number(),
  descricao: z.string(),
  precoTabela: z.number(),
  precoVenda: z.number(),
  precoTabelaAtac: z.number(),
  precoVendaAtac: z.number(),
  fatorConversao: z.number(),
  unidade: z.string(),
  embalagem: z.string(),
  dtInativo: z.string(),
  qtEstGer: z.number(),
  qtReserv: z.number(),
  qtBloqueada: z.number(),
  qtEstGerDp6: z.number(),
  qtReservDp6: z.number(),
  qtBloqueadaDp6: z.number(),
});
