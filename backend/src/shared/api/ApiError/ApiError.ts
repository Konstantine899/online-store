class ApiError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
  // не правильный запрос со стороны клиента
  static badRequest(message: string) {
    return new ApiError(404, message);
  }
  // не предвиденная ошибка
  static internal(message: string) {
    return new ApiError(500, message);
  }

  //доступ запрещен
  static forbidden(message: string) {
    return new ApiError(403, message);
  }
}

export default ApiError;
