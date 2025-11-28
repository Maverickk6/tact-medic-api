import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    contact: {
        phone: string;
        email: string;
    };

    @ApiProperty()
    lastAppointment: string;

    @ApiProperty()
    upcomingAppointment: string;

    @ApiProperty()
    consultationNotes: {
        title: string;
        description: string;
        date: string;
    }[];
}
