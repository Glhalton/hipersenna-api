import { z } from "zod";

export const getProductSchema = z.object({
  codprod: z.coerce.number().optional(),
  descricao: z.string().optional(),
  codauxiliar: z.coerce.number().optional(),
  codfilial: z.coerce.number().optional(),
});

export const productResponseSchema = z.object({
  codAuxiliar: z.string().nullable(),
  codProd: z.coerce.number().nullable(),
  codFornec: z.coerce.number().nullable(),
  codDepto: z.coerce.number().nullable(),
  descricao: z.string().nullable(),
  precoTabela: z.coerce.number().nullable(),
  precoVenda: z.coerce.number().nullable(),
  precoTabelaAtac: z.coerce.number().nullable(),
  precoVendaAtac: z.coerce.number().nullable(),
  fatorConversao: z.coerce.number().nullable(),
  unidade: z.string().nullable(),
  embalagem: z.string().nullable(),
  dtInativo: z.string().nullable(),
  qtEstGer: z.coerce.number().nullable(),
  qtReserv: z.coerce.number().nullable(),
  qtBloqueada: z.coerce.number().nullable(),
  qtEstGerDp6: z.coerce.number().nullable(),
  qtReservDp6: z.coerce.number().nullable(),
  qtBloqueadaDp6: z.coerce.number().nullable(),
  vlOferta: z.coerce.number().nullable(),
  dtUltimaEntrada: z.string(),
  dtUltimoFaturamento: z.string(),
});
