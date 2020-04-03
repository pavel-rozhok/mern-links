import React from 'react';

export const LinkCard = ({ link }) => 
  <>
    <h2>Ссылка</h2>

    <p>Ваша ссылка: <a href={link.to} rel="noopener noreferrer" target="_blank">{link.to}</a></p>
    <p>Откуда: <a href={link.from} rel="noopener noreferrer" target="_blank">{link.from}</a></p>
    <p>Количество кликов по ссылке: <strong>{link.cliks}</strong></p>
    <p>Дата создание <strong>{ new Date(link.date).toLocaleDateString()}</strong></p>
  </>