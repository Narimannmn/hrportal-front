'use server';
import { JobGroup } from '@/src/entities/entities';
import { VacancyGroup } from '@/src/pages/Jobs/ui/VacancyGroup/VacancyGroup';
import { api } from '@/src/shared/api/api';
import { DialogProvider } from '../providers/DialogProvider';
import { CustomBreadcrumb } from '@/src/widgets/CustomBreadcrumb/CustomBreadcrumb';
import { JobFilter } from '@/src/pages/Jobs/ui/JobFilter/JobFilter';
import { VacancyApplicationForm } from '@/src/pages/Jobs/ui/VacancyApplicationForm/VacancyApplicationForm';

type Props = {
  searchParams: SearchParams;
};
type SearchParams = {
  group: string | null;
  city: string;
};
const getJobGroups = async (): Promise<JobGroup[]> => {
  const response = await api.get('api/jobGroups');
  return response.data.docs;
};

export default async function Page({ searchParams }: Props) {
  const jobGroups = await getJobGroups();
  const query = await searchParams;
  const filteredJobGroups = query.group
    ? jobGroups.filter((group) => group.id === Number(query.group))
    : jobGroups;
  return (
    <DialogProvider>
      <div className='px-20 flex flex-col gap-16'>
        <div className='py-6 mt-6'>
          <CustomBreadcrumb />
        </div>
        <div>
          <h1 className='pb-5 text-4xl'>Вакансии</h1>
          <p className='text-lg'>
            АО «Евразийский банк» — социально важный коммерческий банк Казахстана, который
            26 декабря 2024 года отметит своё 30-летие.
          </p>
        </div>
        <JobFilter jobGroups={jobGroups} />
        {filteredJobGroups?.map((group) => {
          return <VacancyGroup key={group.id} jobGroup={group} />;
        })}
      </div>
      <VacancyApplicationForm />
    </DialogProvider>
  );
}
