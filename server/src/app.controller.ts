import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/data')
  getCurrentDate() {
    const date = new Date().toLocaleDateString('ru-RU');
    return { data: date };
  }
}
