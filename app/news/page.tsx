'use server';
import React from 'react';
import { api } from '@/src/shared/api/api';
import { CustomBreadcrumb } from '@/src/widgets/CustomBreadcrumb/CustomBreadcrumb';
import { News } from '@/src/entities/entities';
import NewsGroup from '@/src/pages/News/ui/NewsGroup/NewsGroup';
import { LastThreeNews } from '@/src/pages/News/ui/LastThreeNews/LastThreeNews';

const getFilteredNews = async (isArchive: boolean): Promise<News[]> => {
  const response = await api.get('api/news', {
    params: { where: { isArchive: { equals: isArchive } } },
  });
  return response.data.docs;
};

export const getLastNews = async (): Promise<News[]> => {
  const response = await api.get('api/news', {
    params: { limit: 3, sort: '-createdAt' },
  });
  return response.data.docs;
};

type Props = {
  searchParams: SearchParams;
};

export type Filters = {
  sort?: 'asc' | 'desc';
  group?: number | null;
};

type SearchParams = {
  active?: Filters;
  archive?: Filters;
};

const applyFilters = (
  news: News[],
  filters: SearchParams,
  type: 'active' | 'archive',
): News[] => {
  let filteredNews: News[] = news;
  if (!filters) return news;
  const groupFilter = filters[`${type}[group]`];
  if (groupFilter) {
    filteredNews = filteredNews.filter((item) => item.newsGroups?.id == groupFilter);
  }
  const sortFilter = filters[`${type}[sort]`];

  if (sortFilter) {
    filteredNews = filteredNews.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortFilter === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }
  return filteredNews;
};

const Page = async ({ searchParams }: Props) => {
  const query = await searchParams;
  const [activeNews, archiveNews, lastNews] = await Promise.all([
    getFilteredNews(false),
    getFilteredNews(true),
    getLastNews(),
  ]);
  const filteredActiveNews = applyFilters(activeNews, query, 'active');
  const filteredArchiveNews = applyFilters(archiveNews, query, 'archive');
  return (
    <div className='px-20 flex flex-col'>
      <div className='py-6 mt-6'>
        <CustomBreadcrumb />
      </div>
      <LastThreeNews news={lastNews} />
      <NewsGroup type='active' title='Все новости' news={filteredActiveNews} />
      <NewsGroup type='archive' title='Все архивные новости' news={filteredArchiveNews} />
    </div>
  );
};

export default Page;
