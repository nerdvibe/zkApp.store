import cron from "node-cron";
import { log } from "@modules/logger";
import { countZkAppsCategory } from "@modules/zkApp/lib/countZkAppsCategory";
import { Benchmark } from "@modules/benchmark";
import { zkAppCategoriesPickTopIcons } from "@modules/zkAppCategories/zkAppCategoriesPickTopIcons";

// Schedule a job to run every 15 seconds
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const zkAppCategoryCount = cron.schedule("*/15 * * * * *", async () => {
  const timer = new Benchmark("zkAppCategoryCount", true);
  timer.start();
  try {
    await countZkAppsCategory();
  } catch (e) {
    log.error("zkAppCategoryCount cronjob failed");
  } finally {
    timer.end();
  }
});

// Schedule a job to run every 60 seconds
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const zkAppCategoryTopIcons = cron.schedule("* * * * *", async () => {
  const timer = new Benchmark("zkAppCategoryTopIcons", true);
  timer.start();
  try {
    await zkAppCategoriesPickTopIcons();
  } catch (e) {
    log.error("zkAppCategoryTopIcons cronjob failed");
  } finally {
    timer.end();
  }
});

export const startCronTasks = (): void => {
  zkAppCategoryCount.start();
  zkAppCategoryTopIcons.start();
};
