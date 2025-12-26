export class Unauthorized extends Error {
  constructor(message = "Não autorizado") {
    super(message);
    this.name = "Unauthorized";
  }
}
