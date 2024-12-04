export class InvalidTypeError extends Error {
  message: string = 'Invalid data type';

  constructor(message?: string) {
    super();
    if (message) {
      this.message = message;
    }
  }
}
