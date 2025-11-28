import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    image?: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    contact: {
        phone: string;
        email: string;
    };

    @ApiProperty({ required: false })
    lastAppointment?: string;

    @ApiProperty({ required: false })
    upcomingAppointment?: string;

    @ApiProperty({ required: false })
    consultationNotes?: {
        title: string;
        description: string;
        date: string;
    }[];
}
