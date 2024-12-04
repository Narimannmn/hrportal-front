'use server';
import React from 'react';
import { NewsCard } from '../NewsCard/NewsCard';
import { News, JobGroup } from '@/src/entities/entities';
import { api } from '@/src/shared/api/api';
import { NewsFilter } from '../NewsFilter/NewsFilter';

export interface NewsGroupProps {
  title: string;
  news: News[];
  notFoundText?: string;
  type: string;
}

const getJobGroups = async (): Promise<JobGroup[]> => {
  const response = await api.get('api/newsGroups');
  return response.data.docs;
};
export default async function NewsGroup({
  title,
  news,
  notFoundText = 'Новостей нет',
  type,
}: NewsGroupProps) {
  const jobGroups = await getJobGroups();
  return (
    <div className='pb-24 pt-8 space-y-8'>
      <h2 className='text-2xl font-bold mb-6'>{title}</h2>
      <NewsFilter jobGroups={jobGroups} type={type} />

      <div className='grid grid-cols-[repeat(auto-fill,_minmax(405px,_1fr))] gap-x-8 gap-y-12'>
        {news.length === 0 && <p className='text-white'>{notFoundText}</p>}
        {news.length > 0 &&
          news.map((newsItem) => {
            return <NewsCard newItem={newsItem} key={newsItem.id} />;
          })}
      </div>
    </div>
  );
}
