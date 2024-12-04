import { Button } from '@/components/ui/button';
import { Employee } from '@/src/entities/entities';
import { EmployeeCard } from '@/src/pages/Bank/ui/EmployeeCard/EmployeeCard';
import Link from 'next/link';
import React from 'react';

export interface EmployeeBlockProps {
  employees: Employee[];
}
export const EmployeeBlock = ({ employees }: EmployeeBlockProps) => {
  return (
    <div className='py-24 space-y-16'>
      <div className='text-center flex flex-col justify-center'>
        <div className='flex justify-center'>
          <div className='w-1/2'>
            <h1 className='font-bold text-4xl mb-5'>
              Команды и структурные подразделения
            </h1>
            <p className='text-xl mb-8'>
              АО «Евразийский банк» — социально важный коммерческий банк Казахстана,
              который 26 декабря 2024 года отметит своё 30-летие.
            </p>
          </div>
        </div>
        <Link href={'/bank'}>
          <Button className='bg-[#E1056D] text-white py-3 px-5'>
            Смотреть все подразделения
          </Button>
        </Link>
      </div>
      <div className='grid grid-cols-6 gap-10 justify-between'>
        {employees.map((member: Employee) => (
          <EmployeeCard employee={member} key={member.id} />
        ))}
      </div>
    </div>
  );
};
