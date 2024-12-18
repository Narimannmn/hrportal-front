'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { JobGroup } from '@/src/entities/entities';
import { CITY_LOCALIZED } from '@/src/shared/consts/consts';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

type JobFilterProps = {
  jobGroups: JobGroup[];
};

export const JobFilter = ({ jobGroups }: JobFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParamsObj = useSearchParams();
  const selectedGroup = searchParamsObj?.get('group');
  const selectedCity = searchParamsObj?.get('city');

  const [city, setCity] = useState<string | undefined>(selectedCity || undefined);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParamsObj?.toString());
      if (value === 'clear') {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParamsObj],
  );

  const handleGroupChange = (group: string) => {
    const newQueryString = createQueryString('group', group);
    router.push(pathname + '?' + newQueryString, { scroll: false });
  };

  const handleCityChange = (value: string) => {
    const newCity = value === 'clear' ? undefined : value;
    setCity(newCity);
    const newQueryString = createQueryString('city', value);
    router.push(pathname + '?' + newQueryString, { scroll: false });
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
        <Select value={city || 'clear'} onValueChange={handleCityChange}>
          <SelectTrigger className='w-80 bg-[#1D161B] text-white rounded-lg px-4 py-2'>
            <SelectValue placeholder='Выберите город' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='clear'>Без фильтра</SelectItem>
              {CITY_LOCALIZED.map((city) => (
                <SelectItem key={city.labelRu} value={city.labelRu}>
                  {city.labelRu}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
