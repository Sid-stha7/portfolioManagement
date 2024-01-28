import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { PortfolioManagementService } from './portfolio-management.service';
import { CreatePortFolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/is-public.decorator';

@Public()
@ApiTags('Portfolio')
@Controller('portfolio-management')
export class PortfolioManagementController {
  constructor(private readonly portfolioService: PortfolioManagementService) {}

  @Public()
  @Post()
  async create(
    @Req() request: Request,
    @Body() createPortfolioDto: CreatePortFolioDto,
  ) {
    const result = await this.portfolioService.create(createPortfolioDto);

    return {
      data: result,
      message: 'created succesfully',
    };
  }

  @Public()
  @Get()
  async findAll(@Req() request: Request) {
    const result = await this.portfolioService.findAll();

    return {
      data: result,
      message: 'fetched succesfully',
    };
  }

  @Public()
  @Get('/:id')
  async findOne(@Param('id') id: number) {
    const result = await this.portfolioService.getById(id);

    return {
      data: result,
      message: 'created succesfully',
    };
  }

  @Public()
  @Patch('/:id')
  async update(
    @Param('id') id: number,
    @Req() req: Request,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    const result = await this.portfolioService.update(id, updatePortfolioDto);

    return {
      data: result,
      message: 'updated succesfully',
    };
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: number, @Req() req: Request) {
    const result = await this.portfolioService.delete(id);

    return {
      data: result,
      message: 'deleted succesfully',
    };
  }
}
