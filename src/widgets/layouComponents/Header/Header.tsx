import Link from 'next/link';
import Image from 'next/image';
import logo from './../../../../public/logo.png';

const Header = () => {
  return (
    <div className='border-b border-[#747474] px-20'>
      <header className='flex justify-between items-center h-20'>
        <Image src={logo} alt='Logo' width={128} height={44} />
        <nav className='flex gap-8 font-semibold leading-6'>
          <Link href='/' className='hover:opacity-80'>
            Главная
          </Link>
          <Link href='/news' className='hover:opacity-80'>
            Новости
          </Link>
          <Link href='/bank' className='hover:opacity-80'>
            Структурные подразделения
          </Link>
          <Link href='/jobs' className='hover:opacity-80'>
            Вакансии
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
