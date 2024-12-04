'use client';
import { Button } from '@/components/ui/button';
import { JobGroup } from '@/src/entities/entities';
import { CITY_LOCALIZED } from '@/src/shared/consts/consts';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';

type JobFilterProps = {
  jobGroups: JobGroup[];
};
export const JobFilter = ({ jobGroups }: JobFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParamsObj = useSearchParams();
  const selectedGroup = searchParamsObj?.get(`group`);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParamsObj?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParamsObj],
  );

  const handleGroupChange = (group: string) => {
    const newQueryString = createQueryString('group', group);
    router.push(pathname + '?' + newQueryString);
  };

  const handleCityChange = (city: string) => {
    const newQueryString = createQueryString('city', city);
    router.push(pathname + '?' + newQueryString);
  };

  return (
    <div className='flex justify-between items-center flex-wrap gap-4'>
      <div className='flex gap-2 flex-wrap'>
        <Button
          variant='outline'
          className={!selectedGroup ? 'bg-white text-black' : 'bg-black text-white'}
          onClick={() => handleGroupChange('')}
        >
          Все вакансии
        </Button>

        {jobGroups.map((group) => (
          <Button
            key={group.id}
            variant='outline'
            className={
              selectedGroup == `${group.id}`
                ? 'bg-white text-black'
                : 'bg-black text-white'
            }
            onClick={() => handleGroupChange(`${group.id}`)}
          >
            {group.name}
          </Button>
        ))}
      </div>
      <div className='flex items-center gap-4 flex-wrap'>
        <span className='text-white font-medium'>Местоположение</span>
        <select
          className='w-80 bg-[#1D161B] text-white rounded-lg px-4 py-2'
          onChange={(e) => handleCityChange(e.target.value)}
        >
          {CITY_LOCALIZED.map((city) => (
            <option key={city.labelRu} value={city.labelRu}>
              {city.labelRu}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
