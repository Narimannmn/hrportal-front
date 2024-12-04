import React from 'react';
import style from './not-found.module.css';
import notfound from './../public/404.svg';
import Image from 'next/image';
const notFound = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <div>
          <div className={style.error}>404 ошибка</div>
          <div className={style.heading}>Старница не найдена</div>
        </div>
        <div>Извините страница не найдена</div>
      </div>
      <Image src={notfound} alt='404Error' width={480} height={366.55} />
    </div>
  );
};
export default notFound;
