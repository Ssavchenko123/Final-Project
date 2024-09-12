import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Posts } from '../../db/models';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }
}
