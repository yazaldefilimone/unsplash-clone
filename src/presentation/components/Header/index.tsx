import React, { FunctionComponent, ReactNode } from 'react';

import { HeaderContainer, HeaderNav, HeaderLogo, HeaderContent } from './styles';
import logo from '@/shared/assets/images/logo.svg';
import { InputForm } from '@/presentation/components/Input';
import { Button } from '@/presentation/components/Button';
import { Modal } from '@/presentation/components/Modal';
import { CreateImage } from '@/presentation/components/CreateImage';
interface HeaderProps {
  children?: ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = () => {
  const [search, SetSearch] = React.useState('');
  const [modalAdd, SetModalAdd] = React.useState(false);

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
        <Button text="Add a photo" SetActive={SetModalAdd} />
        {/* <i className="ri-image-add-line"></i>
        </Button> */}
      </HeaderNav>
      <Modal active={modalAdd} SetActive={SetModalAdd}>
        <CreateImage SetActive={SetModalAdd} />
      </Modal>
    </HeaderContainer>
  );
};
