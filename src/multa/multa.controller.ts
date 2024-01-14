import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { MultaService } from './multa.service';
import { CreateMultaDto } from './dto/create-multa.dto';
import { UpdateMultaDto } from './dto/update-multa.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('multa')
@ApiTags('Multa')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class MultaController {
  constructor(private readonly multaService: MultaService) {}

  @Post()
  create(@Body() createMultaDto: CreateMultaDto) {
    return this.multaService.create(createMultaDto);
  }

  @Get()
  findAll() {
    return this.multaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMultaDto: UpdateMultaDto) {
    return this.multaService.update(+id, updateMultaDto);
  }
}
