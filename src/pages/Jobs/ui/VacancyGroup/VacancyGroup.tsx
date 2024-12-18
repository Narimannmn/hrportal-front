'use server';
import { Job, JobGroup } from '@/src/entities/entities';
import { api } from '@/src/shared/api/api';
import React from 'react';
import { VacancyCard } from '../VacancyCard/VacancyCard';

export interface VacancyGroupProps {
  jobGroup: JobGroup;
  location?: string;
}

const getJobByGroup = async (jobGroupId: number): Promise<Job[]> => {
  const response = await api.get<Job[]>(`api/jobsByGroup?jobGroupId=${jobGroupId}`);
  return response.data;
};

export const VacancyGroup = async ({ jobGroup, location }: VacancyGroupProps) => {
  const jobs = await getJobByGroup(jobGroup.id);
  const filteredJobs = location ? jobs.filter((job) => job.location == location) : jobs;
  if (jobs.length == 0) return;
  return (
    <div className='flex flex-col gap-16'>
      <div>
        <h1 className='text-[#E1056D] font-bold text-2xl'>{jobGroup.name}</h1>
        <h3 className='text-lg'>{jobGroup.description}</h3>
      </div>
      <div className='flex flex-col gap-6'>
        {filteredJobs && filteredJobs.length === 0 ? (
          <p>Нет вакансии по данному отделу.</p>
        ) : (
          filteredJobs?.map((job) => <VacancyCard vacancy={job} key={job.id} />)
        )}
      </div>
    </div>
  );
};
