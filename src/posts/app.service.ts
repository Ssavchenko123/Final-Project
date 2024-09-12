import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Users, Tags, Posts } from 'db/models';

@Injectable()
export class AppService {
  constructor(@InjectModel(Posts) private readonly postModel: typeof Posts) {}

  getPosts(): Promise<Posts[]> {
    return this.postModel.findAll({
      order: [['created_at', 'ASC']],
      include: [
        {
          model: Users,
          attributes: ['id', 'name', 'email', 'image'],
        },
        {
          model: Tags,
          attributes: ['id', 'title'],
          through: {
            attributes: [],
          },
        },
      ],
    });
  }
}
