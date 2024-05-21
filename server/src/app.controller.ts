import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/data')
  getHello() {
    return { data: 'hello from api' };
  }
}
