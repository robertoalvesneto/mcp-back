import { Injectable } from '@nestjs/common';

import { Item, ItemQuantity } from './item';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DashboardService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async getQuantity(): Promise<ItemQuantity> {
    const total_count = await this.itemModel.countDocuments().exec();

    const allowed_count = await this.itemModel
      .countDocuments({ type: 'A' })
      .exec();

    return {
      total_allowed: allowed_count,
      total_denied: total_count - allowed_count,
    };
  }
}
