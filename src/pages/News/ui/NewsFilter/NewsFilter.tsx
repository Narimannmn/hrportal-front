'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { JobGroup } from '@/src/entities/entities';

export interface NewsFilterProps {
  jobGroups: JobGroup[];
  type: string;
}

export const NewsFilter = ({ jobGroups, type }: NewsFilterProps) => {
  const handleGroupChange = (value: string) => {
    const newQueryString = createQueryString(`${type}[group]`, value);
    router.push(pathname + '?' + newQueryString, { scroll: false });
  };

  const handleSort = (value: string) => {
    const newQueryString = createQueryString(`${type}[sort]`, value);
    router.push(pathname + '?' + newQueryString, { scroll: false });
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParamsObj = useSearchParams();
  const selectedGroup = searchParamsObj?.get(`${type}[group]`);
  const sorting = searchParamsObj?.get(`${type}[sort]`);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParamsObj?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParamsObj],
  );

  return (
    <div className='flex justify-between items-center flex-wrap gap-y-4'>
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
      <select
        className='w-80 bg-[#1D161B] text-white rounded-lg px-4 py-2'
        value={sorting ?? 'asc'}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value={'asc'}>Сначала новые</option>
        <option value={'desc'}>Сначала старые</option>
      </select>
    </div>
  );
};
