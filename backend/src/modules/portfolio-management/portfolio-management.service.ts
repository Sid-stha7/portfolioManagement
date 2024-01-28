import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePortFolioDto } from './dto/create-portfolio.dto';
import { Portfolio } from './entities/portfolio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { ApiTags } from '@nestjs/swagger';
import { error } from 'console';

@Injectable()
export class PortfolioManagementService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepository: Repository<Portfolio>,
  ) {}
  async create(createDto: CreatePortFolioDto): Promise<Portfolio> {
    const portfolio = new Portfolio();
    portfolio.name = createDto.name;
    portfolio.totalValue = createDto.totalValue;
    portfolio.dayGain = createDto.dayGain;
    portfolio.unrealisedGain = createDto.unrealisedGain;
    portfolio.realisedGain = createDto.realisedGain;
    portfolio.famValue = createDto.famValue;
    portfolio.meroValue = createDto.meroValue;
    return this.portfolioRepository.save(portfolio);
  }

  async findAll(): Promise<Portfolio[]> {
    const data = await this.portfolioRepository.find();
    return data;
  }

  async getById(id: number): Promise<Portfolio> {
    const portfolio = await this.portfolioRepository.findOne({
      where: { id: id },
    });

    if (!portfolio) {
      throw new NotFoundException('Portfolio not found');
    }

    return portfolio;
  }
  async update(
    id: number,
    updateBrandDto: UpdatePortfolioDto,
  ): Promise<Portfolio> {
    const portfolio = await this.portfolioRepository.findOne({
      where: { id: id },
    });

    if (!portfolio) {
      throw new NotFoundException('Portfolio not found');
    }

    // Update only the provided fields
    if (updateBrandDto.totalValue !== undefined) {
      portfolio.totalValue = updateBrandDto.totalValue;
    }
    if (updateBrandDto.dayGain !== undefined) {
      portfolio.dayGain = updateBrandDto.dayGain;
    }
    if (updateBrandDto.unrealisedGain !== undefined) {
      portfolio.unrealisedGain = updateBrandDto.unrealisedGain;
    }
    if (updateBrandDto.realisedGain !== undefined) {
      portfolio.realisedGain = updateBrandDto.realisedGain;
    }
    if (updateBrandDto.famValue !== undefined) {
      portfolio.famValue = updateBrandDto.famValue;
    }
    if (updateBrandDto.meroValue !== undefined) {
      portfolio.meroValue = updateBrandDto.meroValue;
    }

    return this.portfolioRepository.save(portfolio);
  }

  async delete(id: number): Promise<void> {
    // Check if the ID is in the list of protected IDs
    const protectedIds = [1, 2, 3];

    let flag = 0;
    if (protectedIds.includes(id)) {
      console.log('here');
      flag = flag + 1;
    }

    if (flag <= 0) {
      throw new BadRequestException(
        'Dont delete this porfolio make new one an try to delete because 1,2 ,3 are connected in a way that frontend fetch dynamically',
      );
    }
    const portfolio = await this.portfolioRepository.findOne({
      where: { id: id },
    });

    if (!portfolio) {
      throw new NotFoundException('Portfolio not found');
    }

    await this.portfolioRepository.remove(portfolio);
  }
}
