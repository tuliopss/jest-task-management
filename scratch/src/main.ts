import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// Func runs everytime anytime we start our application
async function bootstrap() {
  // create a new Nest Applocation
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
