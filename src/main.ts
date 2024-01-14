import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as dotenv from "dotenv";
// import { SeedService } from './seeds/seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();

  app.enableCors();
  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle("API REST CEPOS")
    .setDescription(
      `
       API REST para cepos
      `,
    )
    .setVersion("1.0")
    .addBearerAuth(
      { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      "jwt",
    )
    .setExternalDoc("api-json", "api-json")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document, {
    jsonDocumentUrl: "api/api-json",
  });

  // const seedService = app.get(SeedService);
  // await seedService.seedEmpresas();

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
