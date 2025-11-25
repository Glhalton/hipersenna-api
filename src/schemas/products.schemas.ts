import { z } from "zod";

export const getProductSchema = z.object({
  codprod: z.coerce.number().optional(),
  descricao: z.coerce.string().optional(),
  codauxiliar: z.coerce.number().optional(),
  codfilial: z.coerce.number().optional(),
});

export const productResponseSchema = z.object({
  codAuxiliar: z.string(),
  codProd: z.coerce.number(),
  codFornec: z.coerce.number(),
  codDepto: z.coerce.number(),
  descricao: z.string(),
  precoTabela: z.coerce.number(),
  precoVenda: z.coerce.number(),
  precoTabelaAtac: z.coerce.number(),
  precoVendaAtac: z.coerce.number(),
  fatorConversao: z.coerce.number(),
  unidade: z.string(),
  embalagem: z.string(),
  dtInativo: z.string().nullable(),
  qtEstGer: z.coerce.number(),
  qtReserv: z.coerce.number(),
  qtBloqueada: z.coerce.number(),
  qtEstGerDp6: z.coerce.number(),
  qtReservDp6: z.coerce.number(),
  qtBloqueadaDp6: z.coerce.number(),
});
