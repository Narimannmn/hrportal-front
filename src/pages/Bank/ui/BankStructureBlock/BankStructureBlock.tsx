'use client';
import React, { useState, useMemo } from 'react';
import { BankStructureFilters } from '../BankStructureFilters/BankStructureFilters';
import { Department } from '@/src/entities/entities';
import { TeamCard } from '../TeamCard/TeamCard';

export interface BankStructureBlockProps {
  departaments: Department[];
}

export const BankStructureBlock = ({ departaments }: BankStructureBlockProps) => {
  const [selectedDep, setSelectedDep] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const filteredDepartments = useMemo(() => {
    return departaments
      .map((dep) => ({
        ...dep,
        teams: dep.teams?.filter((team) =>
          team.teamName.toLowerCase().includes(searchInput.toLowerCase()),
        ),
      }))
      .filter(
        (dep) =>
          dep.name.toLowerCase().includes(searchInput.toLowerCase()) || dep.teams?.length,
      );
  }, [departaments, searchInput]);

  const displayedTeams = useMemo(() => {
    if (selectedDep.endsWith('-dep')) {
      const departmentId = parseInt(selectedDep.split('-')[0], 10);
      const department = departaments.find((dep) => dep.id === departmentId);
      return department?.teams || [];
    } else if (selectedDep.endsWith('-team')) {
      const teamId = selectedDep.split('-')[0];
      return departaments
        .flatMap((dep) => dep.teams || [])
        .filter((team) => team.id === teamId);
    }
    return [];
  }, [selectedDep, departaments]);

  return (
    <div className='grid grid-cols-[280px_1fr] gap-6'>
      <BankStructureFilters
        setSearchInput={setSearchInput}
        setSelectedDep={setSelectedDep}
        departaments={filteredDepartments}
        selectedDep={selectedDep}
      />
      <div className='flex flex-col gap-8'>
        {displayedTeams.map((team) => (
          <div key={team.id}>
            <TeamCard team={team} />
          </div>
        ))}
      </div>
    </div>
  );
};
