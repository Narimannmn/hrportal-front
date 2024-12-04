import { api } from '@/src/shared/api/api';
import banner from '@/src/shared/static/img/banner.svg';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLastNews } from './news/page';
import { Home } from '@/src/entities/entities';
import { EmployeeBlock } from '@/src/pages/Home/ui/EmployeeBlock/EmployeeBlock';
import { JobGroupBlock } from '@/src/pages/Home/ui/JobGroupBlock/JobGroupBlock';
import { SubscribeNews } from '@/src/pages/Home/ui/SubscribeNews';
import { LastNews } from '@/src/pages/Home/ui/LastNews/LastNews';

export const getHomeSettings = async (): Promise<Home> => {
  const response = await api.get('api/home');
  return response.data.docs[0];
};

export default async function HomePage() {
  const home = await getHomeSettings();
  const lastNews = await getLastNews();
  if (!home) notFound();
  return (
    <div className='px-20'>
      <div className='mt-8 mb-24'>
        <Image src={banner} className='rounded-xl w-full' alt={'banner'} />
      </div>
      <LastNews news={lastNews} />
      <EmployeeBlock employees={home.team} />
      <JobGroupBlock jobGroups={home.jobgroups} />
      <SubscribeNews />
    </div>
  );
}
