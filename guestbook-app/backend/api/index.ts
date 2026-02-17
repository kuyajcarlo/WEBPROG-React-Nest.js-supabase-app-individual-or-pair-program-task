import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import express from 'express';

const server = express();
let app;

async function createApp() {
  if (!app) {
    app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );

    // This ensures your Vercel routes match your local http://localhost:3000/api
    app.setGlobalPrefix('api'); 

    // Enable CORS so your frontend can talk to this API
    app.enableCors({
      origin: '*', 
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    await app.init();
  }
  return app;
}

export default async (req, res) => {
  await createApp();
  return server(req, res);
};