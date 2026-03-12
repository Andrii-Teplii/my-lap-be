import { Injectable } from '@nestjs/common';
import { arrayProducts } from './mocData/mocData';
import { MocDataItem } from './mocData/typeDataItem';

@Injectable()
export class AppService {
  getHello(): MocDataItem[] {
    return arrayProducts;
  }
}
