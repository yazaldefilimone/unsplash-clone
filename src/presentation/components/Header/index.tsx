import React, { FunctionComponent, ReactNode } from 'react';

import { HeaderContainer, HeaderNav, HeaderLogo, HeaderContent } from './styles';
import logo from '@/shared/assets/images/logo.svg';
import { InputForm } from '../Input';
import { Button } from '../Button';

interface HeaderProps {
  children?: ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = () => {
  const [search, SetSearch] = React.useState('');
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderContent>
          <HeaderLogo>
            <img src={logo} alt="logo" />
          </HeaderLogo>
          <InputForm
            value={search}
            SetValue={SetSearch}
            type="search"
            name="search"
            placeholder="search by name"
          >
            <i className="ri-search-line"></i>
          </InputForm>
        </HeaderContent>
        <Button text="Add a photo" />
        {/* <i className="ri-image-add-line"></i>
        </Button> */}
      </HeaderNav>
    </HeaderContainer>
  );
};
