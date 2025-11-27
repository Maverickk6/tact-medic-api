import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [
    {
      id: 1,
      name: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      gender: 'Male',
      age: 35,
      contact: {
        phone: '+1 (555) 123-4567',
        email: 'sarah.j@example.com',
      },
      lastAppointment: '2023-10-15',
      upcomingAppointment: '2023-11-20',
      consultationNotes: [
        {
          title: 'Getting better',
          description: 'Patient reports improved glucose control. A1C decreased from 7.2 to 6.8. Maintaining current medication regimen. Encouraged continued dietary compliance and regular exercise.',
          date: '26-11-2024',
        },
        {
          title: 'Routine Checkup',
          description: 'Regular quarterly checkup. Blood pressure is stable at 120/80. Weight has remained constant. No new complaints reported.',
          date: '15-08-2024',
        }
      ]
    },
    {
      id: 2,
      name: 'Leslie Alexander',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      gender: 'Male',
      age: 45,
      contact: {
        phone: '+1 (555) 987-6543',
        email: 'm.chen@example.com',
      },
      lastAppointment: '2023-09-20',
      upcomingAppointment: '2023-11-22',
      consultationNotes: [
        {
          title: 'Initial Consultation',
          description: 'Patient presented with complaints of fatigue and joint pain. Ordered blood work and X-rays. Prescribed anti-inflammatory medication.',
          date: '20-09-2023',
        },
        {
          title: 'Follow-up Visit',
          description: 'Joint pain has subsided. Patient reports increased energy levels. Blood work results within normal range. advised to continue current medication.',
          date: '10-10-2023',
        }
      ]
    },
    {
      id: 3,
      name: 'Emily Davis',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      gender: 'Female',
      age: 34,
      contact: {
        phone: '+1 (555) 456-7890',
        email: 'emily.d@example.com',
      },
      lastAppointment: '2023-11-01',
      upcomingAppointment: '2023-12-05',
      consultationNotes: [
        {
          title: 'Annual Physical',
          description: 'Overall health is excellent. Discussed family history of heart disease. Recommended maintaining a heart-healthy diet and regular cardio exercise.',
          date: '01-11-2023',
        },
        {
          title: 'Vaccination Update',
          description: 'Administered seasonal flu vaccine. Patient tolerated the injection well. No immediate adverse reactions observed.',
          date: '15-10-2023',
        }
      ]
    },
    {
      id: 4,
      name: 'James Wilson',
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
      gender: 'Male',
      age: 52,
      contact: {
        phone: '+1 (555) 234-5678',
        email: 'j.wilson@example.com',
      },
      lastAppointment: '2023-10-30',
      upcomingAppointment: '2023-11-25',
      consultationNotes: [
        {
          title: 'Hypertension Management',
          description: 'Blood pressure reading 145/90. Discussed stress management techniques and salt reduction. Increased dosage of Lisinopril.',
          date: '30-10-2023',
        },
        {
          title: 'Medication Review',
          description: 'Reviewed all current medications. Patient reports no side effects. Compliance is good. Scheduled follow-up in one month.',
          date: '15-09-2023',
        }
      ]
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      gender: 'Female',
      age: 24,
      contact: {
        phone: '+1 (555) 876-5432',
        email: 'jess.t@example.com',
      },
      lastAppointment: '2023-11-10',
      upcomingAppointment: '2023-11-28',
      consultationNotes: [
        {
          title: 'Dermatology Consult',
          description: 'Patient concerned about a rash on the arm. Diagnosed as contact dermatitis. Prescribed topical corticosteroid cream.',
          date: '10-11-2023',
        },
        {
          title: 'Allergy Testing',
          description: 'Performed skin prick test. Positive for dust mites and pollen. Discussed environmental control measures and antihistamines.',
          date: '25-10-2023',
        }
      ]
    },
  ];

  create(createPatientDto: CreatePatientDto) {
    return 'This call adds a new patient';
  }

  findAll() {
    return this.patients;
  }

  findOne(id: number) {
    return `This call returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This call updates a #${id} patient`;
  }

  remove(id: number) {
    return `This call removes a #${id} patient`;
  }
}
