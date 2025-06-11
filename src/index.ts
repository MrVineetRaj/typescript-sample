import env from "./env";
import http from "http";
import logger from "./logger";
import { createApp } from "./app";

async function main() {
  try {
    const PORT: number = +(env.PORT ?? 3000);
    const server = http.createServer(createApp());
    server.listen(PORT, () => {
      logger.info(`Server is starting on port ${PORT}...`);
    });
  } catch (error) {
    logger.error("Error starting the server:", error);
  }
}

main();
