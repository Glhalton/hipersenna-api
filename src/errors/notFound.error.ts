export class NotFound extends Error {
  constructor(message = "Recurso não encontrado") {
    super(message);
    this.name = "NotFound";
  }
}
