enum LOG_LEVELS {
  "info" = "info",
  "error" = "error",
  "debug" = "debug",
}

class Logger {
  private readonly logLevel: string;

  constructor() {
    if (process.env.LOG_LEVEL && Object.keys(LOG_LEVELS).includes(process.env.LOG_LEVEL)) {
      this.logLevel = process.env.LOG_LEVEL ?? LOG_LEVELS.info;
    } else {
      this.logLevel = LOG_LEVELS.info;
    }
  }

  private log(level: "info" | "error" | "debug", ...args: any[]): void {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      const message = args
        .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : arg))
        .join(" ");
      console.log(`[${timestamp}] [${level.toUpperCase()}]:`, message);
    }
  }

  private shouldLog(level: "info" | "error" | "debug"):boolean {
    const levels: Record<string, number> = {
      info: 1,
      error: 2,
      debug: 3,
    };

    return levels[this.logLevel] >= levels[level];
  }

  public info(...args: any[]):void {
    this.log("info", ...args);
  }

  public error(...args: any[]):void {
    this.log("error", ...args);
  }

  public debug(...args: any[]):void {
    this.log("debug", ...args);
  }
}

export const log = new Logger();
