import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { News } from '@/src/entities/entities';
import React from 'react';
import Image from 'next/image';
import { imageSource } from '@/src/shared/utils/imageSource';

export interface LastThreeNewsProps {
  news: News[];
}
export const LastThreeNews = ({ news }: LastThreeNewsProps) => {
  return (
    news.length > 2 && (
      <div className='pt-8 pb-24'>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:h-[432px] h-full'>
          <div className='lg:min-h-full flex flex-col'>
            <Card className='bg-transparent border-none h-full space-y-8'>
              <CardContent className='p-0'>
                <div className='relative lg:h-[280px] h-[240px]'>
                  <Image
                    src={imageSource(news[0].preview.url)}
                    alt={news[0].preview.alt}
                    objectFit='cover'
                    className='rounded-xl'
                    fill
                  />
                </div>
              </CardContent>
              <CardHeader className='p-0 space-y-3 mb-6'>
                <CardTitle className='text-sm text-[#E1056D]'>
                  {news[0].newsGroups.name}
                </CardTitle>
                <CardDescription className='space-y-2'>
                  <div className='flex h-8 overflow-hidden whitespace-nowrap text-ellipsis'>
                    <h1 className='text-2xl font-bold text-white leading-8'>
                      {news[0].title}
                    </h1>
                  </div>
                  <p className='text-[#D4D4D4] text-lg leading-6'>
                    {news[0].description}
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className='lg:min-h-full grid grid-rows-2 gap-y-8'>
            <Card className='bg-transparent grid grid-cols-2 gap-6 border-none'>
              <CardContent className='p-0'>
                <div className='relative h-full'>
                  <Image
                    src={imageSource(news[1].preview.url)}
                    alt={news[1].preview.alt}
                    objectFit='cover'
                    className='rounded-xl'
                    fill
                  />
                </div>
              </CardContent>
              <CardHeader className='p-0 space-y-3 h-full'>
                <CardTitle className='text-sm text-[#E1056D]'>
                  {news[1].newsGroups.name}
                </CardTitle>
                <CardDescription className='space-y-2'>
                  <div className='flex'>
                    <h1 className='text-2xl font-bold text-white leading-8'>
                      {news[1].title}
                    </h1>
                  </div>
                  <p className='text-[#D4D4D4] text-lg leading-6 overflow-hidden whitespace-nowrap text-ellipsis'>
                    {news[1].description}
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className='bg-transparent grid grid-cols-2 gap-6 border-none'>
              <CardContent className='p-0'>
                <div className='relative h-full'>
                  <Image
                    src={imageSource(news[0].preview.url)}
                    alt={news[2].preview.alt}
                    objectFit='cover'
                    className='rounded-xl'
                    fill
                  />
                </div>
              </CardContent>
              <CardHeader className='p-0 space-y-3 h-full'>
                <CardTitle className='text-sm text-[#E1056D]'>Фин-тех</CardTitle>
                <CardDescription className='space-y-2'>
                  <div className='flex'>
                    <h1 className='text-2xl font-bold text-white leading-8'>
                      {news[2].title}
                    </h1>
                  </div>
                  <p className='text-[#D4D4D4] text-lg leading-6 overflow-hidden whitespace-nowrap text-ellipsis'>
                    {news[2].description}
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    )
  );
};
