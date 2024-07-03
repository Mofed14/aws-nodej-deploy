class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

class ValidationError extends Error {
  public warn: boolean;

  constructor({ message, warn }: { message?: string, warn?: boolean }) {
    super(message);
    this.name = 'ValidationError';
    this.warn = warn || false;
  }
}

export { CustomError, ValidationError };
