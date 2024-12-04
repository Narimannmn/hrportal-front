'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Team } from '@/src/entities/entities';
import React from 'react';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

export interface TeamCardProps {
  team: Team;
}
export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='space-y-5'>
        <h1 className='font-semibold text-4xl'>{team.teamName}</h1>
        <p>{team.description}</p>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            {team.members.map((member) => (
              <CarouselItem key={member.id} className='basis-1/5'>
                <EmployeeCard employee={member.member} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
