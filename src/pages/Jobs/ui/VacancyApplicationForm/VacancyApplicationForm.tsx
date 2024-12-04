'use client';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDialog } from '@/app/providers/DialogProvider';
import { api } from '@/src/shared/api/api';
import { toast } from 'sonner';
import { toBase64 } from '@/src/shared/utils/convertToBase64';

type FormData = {
  lastName: string;
  firstName: string;
  phone: string;
  resume: File;
};

export function VacancyApplicationForm() {
  const { closeDialog: onClose, isOpen, selectedVacation } = useDialog();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const body = {
        lastName: data.lastName,
        firstName: data.firstName,
        phone: data.phone,
        resume: 'AnsarUtenov2.webp',
        job: selectedVacation, // Pass the selected vacation ID
      };
      console.log(body);

      const response = await api.post('/api/job-responses', body);
      if (response.status === 201) {
        toast.success('Заявка успешно отправлена');
        onClose();
      } else {
        toast.error('Не удалось отправить заявку');
      }
    } catch (error) {
      toast.error('Ошибка при отправке заявки');
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[430px] bg-[#171717] text-white border-none p-4'>
        <DialogHeader>
          <DialogTitle className='text-lg'>Отклик на вакансию</DialogTitle>
          <p className='text-sm text-[#84898F]'>
            Оставьте пожалуйста свои данные, чтобы мы могли с Вами связаться.
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <Controller
              name='lastName'
              control={control}
              rules={{ required: 'Фамилия обязательна' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id='lastName'
                  className='bg-[#21262B6B]'
                  placeholder='Фамилия'
                />
              )}
            />
            {errors.lastName && (
              <span className='text-red-500 text-sm'>{errors.lastName.message}</span>
            )}
          </div>

          <div>
            <Controller
              name='firstName'
              control={control}
              rules={{ required: 'Имя обязательно' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id='firstName'
                  className='bg-[#21262B6B]'
                  placeholder='Имя'
                />
              )}
            />
            {errors.firstName && (
              <span className='text-red-500 text-sm'>{errors.firstName.message}</span>
            )}
          </div>

          <div>
            <Controller
              name='phone'
              control={control}
              rules={{ required: 'Номер телефона обязателен' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id='phone'
                  type='tel'
                  className='bg-[#21262B6B]'
                  placeholder='Номер телефона'
                />
              )}
            />
            {errors.phone && (
              <span className='text-red-500 text-sm'>{errors.phone.message}</span>
            )}
          </div>

          <div>
            <Controller
              name='resume'
              control={control}
              rules={{ required: 'Резюме обязательно' }}
              render={({ field }) => (
                <div className='relative py-7 border-2 text-center border-gray-300 border-dashed rounded-lg cursor-pointer'>
                  <span className='mb-2 text-small w-full text-center'>
                    📎 Прикрепить резюме
                  </span>
                  <input
                    type='file'
                    accept='.pdf,.doc,.docx'
                    className='absolute top-0 left-0 w-full py-7 opacity-0'
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file); // Pass the single file
                    }}
                  />
                </div>
              )}
            />
            {errors.resume && (
              <span className='text-red-500 text-sm'>{errors.resume.message}</span>
            )}
          </div>

          <div className='flex justify-between'>
            <DialogTrigger asChild>
              <Button type='button' onClick={onClose} className='w-1/2 mr-2'>
                Отмена
              </Button>
            </DialogTrigger>

            <Button
              type='submit'
              variant='outline'
              className='w-1/2 bg-[#DBDDDF] text-[#B8BBBF] rounded-xl'
            >
              Отправить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
