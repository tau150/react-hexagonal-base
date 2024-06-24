

import { PropsWithChildren, createContext, useContext } from 'react';
import { createPostUseCase, getPostsUseCase } from '../config/dependencyInjection';

const UseCaseContext = createContext({
  createPostUseCase,
  getPostsUseCase
});

export const useUseCases = () => {
  const context = useContext(UseCaseContext);

  if(!context){
    throw new Error('useUseCases must be used within a UseCaseProvider');
  }

  return context
};

export const UseCaseProvider = ({ children }: PropsWithChildren) => {
  return (
    <UseCaseContext.Provider value={{ createPostUseCase, getPostsUseCase }}>
      {children}
    </UseCaseContext.Provider>
  );
};
