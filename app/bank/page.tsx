import { Department } from '@/src/entities/entities';
import { BankStructureBlock } from '@/src/pages/Bank/ui/BankStructureBlock/BankStructureBlock';
import { api } from '@/src/shared/api/api';
import { CustomBreadcrumb } from '@/src/widgets/CustomBreadcrumb/CustomBreadcrumb';

export const getDepartaments = async (): Promise<Department[]> => {
  const response = await api.get('api/departments');
  return response.data.docs;
};

export default async function Page() {
  const departaments = await getDepartaments();
  return (
    <div className='px-20'>
      <div className='py-6'>
        <CustomBreadcrumb />
      </div>
      <BankStructureBlock departaments={departaments} />
    </div>
  );
}
