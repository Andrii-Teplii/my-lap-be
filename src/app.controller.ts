import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MocDataItem } from './mocData/typeDataItem';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): MocDataItem[] {
    return this.appService.getHello();
  }
}
