import { News } from '@/src/entities/entities';
import { api } from '@/src/shared/api/api';
import RichTextParser from '@/src/shared/utils/RichTextParser';
import { CustomBreadcrumb } from '@/src/widgets/CustomBreadcrumb/CustomBreadcrumb';
import { notFound } from 'next/navigation';

export const getBlog = async (slug: number): Promise<News> => {
  const response = await api.get(`api/news/${slug}`);
  return response.data;
};
export default async function BlogPage({ params }: { params: { slug: number } }) {
  const query = await params;
  const news = await getBlog(query.slug);
  if (!news) notFound();
  return (
    <div className='px-20 '>
      <div className='py-6'>
        <CustomBreadcrumb />
      </div>
      <div className='mt-16 bg-[#1D161B] p-5 rounded-xl'>
        <RichTextParser content={news.content} color={''} />
      </div>
    </div>
  );
}
