import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NewsFilterContextType {
  groupId: string;
  sort: string;
  setGroupId: (groupId: string) => void;
  setSort: (sort: string) => void;
}

const NewsFilterContext = createContext<NewsFilterContextType | undefined>(undefined);

interface NewsFilterProviderProps {
  children: ReactNode;
}

export const NewsFilterProvider = ({ children }: NewsFilterProviderProps) => {
  const [groupId, setGroupId] = useState<string>('');
  const [sort, setSort] = useState<string>('');

  return (
    <NewsFilterContext.Provider value={{ groupId, sort, setGroupId, setSort }}>
      {children}
    </NewsFilterContext.Provider>
  );
};

export const useNewsFilter = () => {
  const context = useContext(NewsFilterContext);
  if (!context) {
    throw new Error('useNewsFilter must be used within a NewsFilterProvider');
  }
  return context;
};
