import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // THIS IS THE FIX: It adds "/api" to all your backend routes
  // so the frontend can find them again.
  app.setGlobalPrefix('api'); 

  // Enable CORS for frontend access
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5175', 
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5175', 
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on port ${port}`);
}
bootstrap();