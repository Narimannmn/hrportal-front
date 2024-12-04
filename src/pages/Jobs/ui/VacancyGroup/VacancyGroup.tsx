'use server';
import { Job, JobGroup } from '@/src/entities/entities';
import { api } from '@/src/shared/api/api';
import React from 'react';
import { VacancyCard } from '../VacancyCard/VacancyCard';

export interface VacancyGroupProps {
  jobGroup: JobGroup;
}

const getJobByGroup = async (jobGroupId: number): Promise<Job[]> => {
  const response = await api.get<Job[]>(`api/jobsByGroup?jobGroupId=${jobGroupId}`);
  return response.data;
};

export const VacancyGroup = async ({ jobGroup }: VacancyGroupProps) => {
  const jobs = await getJobByGroup(jobGroup.id);
  if (jobs.length == 0) return;
  return (
    <div className='flex flex-col gap-16'>
      <div>
        <h1 className='text-[#E1056D] font-bold text-2xl'>{jobGroup.name}</h1>
        <h3 className='text-lg'>{jobGroup.description}</h3>
      </div>
      <div className='flex flex-col gap-6'>
        {jobs && jobs.length === 0 ? (
          <p>No jobs available for this group.</p>
        ) : (
          jobs?.map((job) => <VacancyCard vacancy={job} key={job.id} />)
        )}
      </div>
    </div>
  );
};
