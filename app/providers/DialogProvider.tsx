'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type DialogContextType = {
  isOpen: boolean;
  openDialog: (vacationNumber: number) => void;
  closeDialog: () => void;
  selectedVacation: number | null;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

type DialogProviderProps = {
  children: ReactNode;
};

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState<number | null>(null);

  const openDialog = (vacationNumber: number) => {
    setSelectedVacation(vacationNumber);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedVacation(null);
  };

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog, selectedVacation }}>
      {children}
    </DialogContext.Provider>
  );
};
