import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { News } from '@/src/entities/entities';
import { imageSource } from '@/src/shared/utils/imageSource';
import Image from 'next/image';
import arrow from './../../../../shared/static/icons/arrow-right-top.svg';
import Link from 'next/link';
import dayjs from 'dayjs';

import 'dayjs/locale/ru';

export interface NewsCardProps {
  newItem: News;
}
export async function NewsCard({ newItem }: NewsCardProps) {
  return (
    <Card className='bg-transparent border-none w-full'>
      <CardContent className='p-0 mb-8'>
        <div className='relative w-full h-[240px]'>
          <Image
            src={imageSource(newItem.preview.url)}
            alt={newItem.preview.url}
            layout='fill'
            objectFit='cover'
            className='rounded-xl'
          />
        </div>
      </CardContent>
      <CardHeader className='p-0 space-y-3 mb-6'>
        <CardTitle className='text-sm text-[#E1056D]'>
          {newItem.newsGroups.name}
        </CardTitle>
        <CardDescription className='space-y-2'>
          <div>
            <Link
              href={`/news/${newItem.id}`}
              className='grid grid-cols-[1fr_10px] h-8 gap-2 items-center'
            >
              <h1 className='text-2xl font-bold text-white leading-8 overflow-hidden whitespace-nowrap text-ellipsis'>
                {newItem.title}
              </h1>
              <Image src={arrow} alt='asd' height={10} width={10} />
            </Link>
          </div>
          <p className='text-[#D4D4D4] text-lg leading-6'>{newItem.description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className='p-0 space-x-3 text-white'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='ShadCN Avatar'
            className='w-10 h-10 rounded-full'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='text-sm'>
          <div className='text-[#84898F]'>
            {dayjs(newItem.createdAt).locale('ru').format('DD MMMM YYYY')}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
