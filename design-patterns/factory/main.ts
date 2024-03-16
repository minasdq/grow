interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

class ProductionLogger implements ILogger {
  info(message: string): void {}
  warn(message: string): void {
    console.warn(message);
  }
  debug(message: string): void {}
  error(message: string): void {
    console.error(message);
  }
}

class DevelopmentLogger implements ILogger {
  info(message: string): void {
    console.info(message);
  }
  warn(message: string): void {
    console.warn(message);
  }
  debug(message: string): void {
    console.debug(message);
  }
  error(message: string): void {
    console.error(message);
  }
}

class LoggerFactor {
  public static createLogger() {
    if (process.env.Node_ENV === "production") {
      return new ProductionLogger();
    }
    return new DevelopmentLogger();
  }
}

const logger = LoggerFactor.createLogger();
logger.warn("Hi");
