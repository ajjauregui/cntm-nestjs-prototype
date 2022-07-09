import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { generateTypeormConfigFile } from './scripts';
import { ConfigService } from '@nestjs/config';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  initSwagger(app);

  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = process.env.PORT || 5432;
  generateTypeormConfigFile(config);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
