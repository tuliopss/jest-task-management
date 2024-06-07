import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Run on root router
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "hi there!";
  }
}

// Wrap all controllers, Nest will create an instances for all our controllers classes
@Module({
  controllers: [AppController],
})
class AppModule {}

// Func runs everytime anytime we start our application
async function bootstrap() {
  // create a new Nest Applocation
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
