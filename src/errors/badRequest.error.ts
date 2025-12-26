export class BadRequest extends Error {
  constructor(message = "Erro na requisição") {
    super(message);
    this.name = "Bad Request";
  }
}
