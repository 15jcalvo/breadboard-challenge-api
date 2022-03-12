import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import 'dotenv/config';

const port = process.env.PORT || 9000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(port);
  const config =  new DocumentBuilder()
  .setTitle('Summation Api')
  .setDescription('This endpoint will take two numbers, sum them, and then store and return their summation')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/', app, document)
  
}
bootstrap();
