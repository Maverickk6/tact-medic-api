import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Patient } from './entities/patient.entity';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new patient' })
  @ApiResponse({ status: 201, description: 'The patient has been successfully created.', type: Patient })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all patients' })
  @ApiResponse({ status: 200, description: 'Return all patients.', type: [Patient] })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a patient by id' })
  @ApiResponse({ status: 200, description: 'Return the patient.', type: Patient })
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a patient' })
  @ApiResponse({ status: 200, description: 'The patient has been successfully updated.', type: Patient })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a patient' })
  @ApiResponse({ status: 200, description: 'The patient has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
