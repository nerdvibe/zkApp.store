import { log } from "@modules/logger";

export class Benchmark {
  private startTime: Date | null = null;
  name: string | null = null;
  isCronjob: boolean = false;

  constructor(name: string, isCronjob: boolean=false) {
    this.name = name;
    this.isCronjob = isCronjob;
  }

  start(): void {
    this.startTime = new Date();
  }

  end(): void {
    if (!this.startTime) {
      log.error(`Cannot end the timer ${this.name} without starting it.`);
      return;
    }

    const endTime = new Date();
    const executionTimeInSeconds =
      (endTime.getTime() - this.startTime.getTime()) / 1000;

    log.info(`${this.name} ${this.isCronjob ? `Cronjob` : ''} took ${executionTimeInSeconds} seconds to execute.`);
    this.startTime = null;
  }
}
