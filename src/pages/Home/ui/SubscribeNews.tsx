'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { api } from '@/src/shared/api/api';

export const SubscribeNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<{ email: string }>();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: { email: string }) => {
    try {
      setMessage(null);
      const response = await api.post('/api/news-responses', {
        email: JSON.stringify(data),
      });
      if (response.status == 200) reset();
    } catch (error) {
      setMessage('Не удалось отправить данные. Попробуйте позже.');
    }
  };

  return (
    <div className='py-24 flex gap-8'>
      <div className='w-8/12'>
        <h1 className='mb-5 text-4xl font-bold'>Будьте в курсе последних новостей</h1>
        <p className='text-[#D4D4D4] text-xl font-medium'>
          Оформляя подписку, вы будете одними из первых, кто получит информацию по
          последним новостям.
        </p>
      </div>
      <div className='flex-1'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col items-start space-y-2'
        >
          <div className='flex w-full gap-4'>
            <Input
              type='email'
              placeholder='Укажите вашу почту'
              className='rounded-l-md flex-1 text-black bg-[#EDEEEF]'
              {...register('email', {
                required: 'Пожалуйста, укажите ваш email.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Некорректный формат email.',
                },
              })}
              disabled={isSubmitting}
            />
            <Button
              type='submit'
              className='bg-[#E1056D] text-white rounded-r-md hover:bg-pink-600'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Подписка...' : 'Подписаться'}
            </Button>
          </div>
          {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
          {message && (
            <p
              className={`text-sm ${message.includes('успешно') ? 'text-green-500' : 'text-red-500'}`}
            >
              {message}
            </p>
          )}
          <p className='text-sm text-gray-300'>
            Отправляя данные вы соглашаетесь с{' '}
            <a href='/privacy-policy' className='text-[#E1056D] hover:underline'>
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
