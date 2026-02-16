import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  // Enable CORS for frontend access
app.enableCors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5175', // Add this
    'http://127.0.0.1:5173',
    'http://127.0.0.1:5175', // Add this too (matches your browser)
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
});
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on port ${port}`);
}
bootstrap();
