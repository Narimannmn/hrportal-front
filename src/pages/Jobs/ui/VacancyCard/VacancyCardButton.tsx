'use client';
import { Button } from '@/components/ui/button';
import { CollapsibleTrigger } from '@/components/ui/collapsible';
import React, { useState } from 'react';
import Image from 'next/image';
import chevronRight from '@/src/shared/static/icons/chevron-right.svg';

export const VacancyCardButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <CollapsibleTrigger asChild>
      <Button variant='ghost' onClick={handleToggle}>
        <Image
          src={chevronRight}
          alt='Chevron Right'
          className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          width={20}
          height={20}
        />
      </Button>
    </CollapsibleTrigger>
  );
};
