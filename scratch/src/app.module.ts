import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// Wrap all controllers, Nest will create an instances for all our controllers classes
@Module({
  controllers: [AppController],
})
export class AppModule {}
