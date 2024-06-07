import { Controller, Get } from "@nestjs/common";

// Run on root router
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "hi there!";
  }
}
