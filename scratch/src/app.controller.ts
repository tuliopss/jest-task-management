import { Controller, Get } from "@nestjs/common";

// Run on root router
@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "hi there!";
  }

  @Get("bye")
  getByeRoute() {
    return "by there!";
  }
}
