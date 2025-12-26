export class Conflict extends Error {
  constructor(message = "Conflito com o estato atual do banco de dados") {
    super(message);
    this.name = "Conflict";
  }
}
