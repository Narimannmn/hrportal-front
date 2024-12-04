import { JobGroup } from '@/src/entities/entities';
import { imageSource } from '@/src/shared/utils/imageSource';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/src/shared/static/icons/arrow-right.svg';

export interface JobGroupBlockProps {
  jobGroups: JobGroup[];
}
export const JobGroupBlock = ({ jobGroups }: JobGroupBlockProps) => {
  return (
    <div className='py-24'>
      <div className='text-center flex flex-col justify-center gap-16'>
        <div className='flex justify-center'>
          <div className='w-1/2'>
            <h1 className='font-bold text-4xl mb-5'>Вакансии</h1>
            <p className='text-xl'>
              АО «Евразийский банк» — социально важный коммерческий банк Казахстана,
              который 26 декабря 2024 года отметит своё 30-летие.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-16'>
          {jobGroups.map((group) => (
            <div className='flex flex-col justify-center' key={group.id}>
              <div className='flex justify-center align-middle'>
                <Image
                  src={imageSource(group.icon?.url || '')}
                  width={64}
                  height={64}
                  className='mb-4'
                  alt={'icon'}
                />
              </div>
              <div className='text-center'>
                <h3>{group.name}</h3>
                <p className='text-[#D4D4D4] mb-5'>{group.description}</p>
                <div className='flex align-middle justify-center'>
                  <Link href={'/jobs'} className='text-[#E1056D]'>
                    Смотреть вакансии
                  </Link>
                  <Image src={arrow} alt={'icon right'} className='ml-2' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
