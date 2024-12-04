import { Button } from '@/components/ui/button';
import { News } from '@/src/entities/entities';
import { NewsCard } from '@/src/pages/News/ui/NewsCard/NewsCard';
import { Link } from 'lucide-react';
import React from 'react';
export interface LastNewsProps {
  news: News[];
}
export const LastNews = ({ news }: LastNewsProps) => {
  return (
    <div className='py-24'>
      <div className='flex justify-between mb-16 flex-wrap'>
        <div>
          <h1 className='font-bold text-4xl mb-5'>Последние новости</h1>
          <p className='text-xl'>Новости Евразийского банка на сегодня</p>
        </div>
        <Link href={'/news'}>
          <Button className='bg-[#E1056D] text-white py-3 px-5'>
            Смотреть все новости
          </Button>
        </Link>
      </div>
      <div className='flex flex-wrap justify-between gap-16'>
        <div className='flex-1'>
          <NewsCard newItem={news[0]} />
        </div>
        <div className='flex-1'>
          <NewsCard newItem={news[1]} />
        </div>
        <div className='flex-1'>
          <NewsCard newItem={news[2]} />
        </div>
      </div>
    </div>
  );
};
