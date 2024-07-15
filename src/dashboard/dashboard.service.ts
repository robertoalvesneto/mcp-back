import { Injectable } from '@nestjs/common';

import { ItemQuantity } from './item';

@Injectable()
export class DashboardService {
  async getQuantity(): Promise<ItemQuantity> {
    return;
  }
}
