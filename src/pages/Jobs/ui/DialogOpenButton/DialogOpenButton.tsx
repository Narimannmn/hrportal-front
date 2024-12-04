'use client';
import { useDialog } from '@/app/providers/DialogProvider';
import { Button } from '@/components/ui/button';
import React from 'react';

export interface DialogOpenButtonProps {
  vacancyId: number;
}
export const DialogOpenButton = ({ vacancyId }: DialogOpenButtonProps) => {
  const { openDialog } = useDialog();

  const handleApplyClick = () => {
    openDialog(vacancyId);
  };
  return (
    <Button variant={'default'} className='bg-[#E1056D]' onClick={handleApplyClick}>
      Откликнуться
    </Button>
  );
};
