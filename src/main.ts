import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { PostModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(PostModule);
  app.enableCors({ origin: '*' });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
