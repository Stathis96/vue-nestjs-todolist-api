import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // for allowing  access-control-allow-origin
  await app.listen(8000);
}
bootstrap();
