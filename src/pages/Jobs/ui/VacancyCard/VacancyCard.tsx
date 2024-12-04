'use server';
import { Job } from '@/src/entities/entities';
import Image from 'next/image';
import time from '@/src/shared/static/icons/time.svg';
import salary from '@/src/shared/static/icons/salary.svg';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import RichTextParser from '@/src/shared/utils/RichTextParser';
import { DialogOpenButton } from '../DialogOpenButton/DialogOpenButton';
import { VacancyCardButton } from './VacancyCardButton';
export interface VacancyCardProps {
  vacancy: Job;
}

export const VacancyCard = async ({ vacancy }: VacancyCardProps) => {
  return (
    <>
      <Collapsible className='border border-[#7B7B7B] p-6 pb-7 rounded-2xl flex flex-col gap-8'>
        <article className='flex flex-col gap-2'>
          <header className='flex justify-between'>
            <div className='flex gap-2'>
              <h2 className='text-lg font-medium'>{vacancy.jobTitle}</h2>
              <Badge
                className={`${
                  vacancy.jobGroup?.groupTagColor ?? 'bg-orange-400'
                } text-xs rounded-xl px-2 py-1 ml-2`}
                role='status'
                aria-label='Job Category'
              >
                {vacancy.jobGroup.name}
              </Badge>
            </div>
            <Badge className='text-xs bg-[#EDEEEF] text-[#425F9E] hover:bg-[#EDEEEF]'>
              {vacancy.location}
            </Badge>
          </header>
          <p>{vacancy.jobDescription}</p>
        </article>
        <footer className='flex flex-col'>
          <div className='flex justify-between'>
            <div className='flex gap-6'>
              <div className='flex items-center'>
                <Image src={time} alt='Time Icon' width={20} height={20} />
                <span className='ml-2'>{vacancy.workSchedule}</span>
              </div>
              <div className='flex items-center'>
                <Image src={salary} alt='Salary Icon' width={20} height={20} />
                <span className='ml-2'>
                  {vacancy.priceRange.minPrice}K - {vacancy.priceRange.maxPrice}K
                </span>
              </div>
            </div>
            <VacancyCardButton />
          </div>
        </footer>
        <CollapsibleContent className='space-y-8'>
          <RichTextParser content={vacancy.content} color={'#ffffff'} />
          <div>
            <DialogOpenButton vacancyId={vacancy.id} />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};
