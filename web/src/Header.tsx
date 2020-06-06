import React from 'react';

interface HeaderProps {
  // title?: string
  // Se quiser que seja uma props obrigatoria
  title: string;
}

// FC = Function component
// Component escrito em formato de função
// (props) = ter acesso a todas as propriedades
const Header:React.FC<HeaderProps> = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;