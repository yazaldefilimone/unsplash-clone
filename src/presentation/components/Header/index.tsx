import React, { FunctionComponent } from 'react';

import { HeaderContainer, HeaderNav, HeaderLogo, HeaderContent } from './styles';
import logo from '@/shared/assets/images/logo.svg';
import { InputForm } from '@/presentation/components/Input';
import { Button } from '@/presentation/components/Button';
import { Modal } from '@/presentation/components/Modal';
import { CreateImage } from '@/presentation/components/CreateImage';
import { useAuth } from '@/presentation/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ICreateImageUseCase, IGetNameImageUseCase } from '@/domain/usecases/image';
interface HeaderProps {
  createImageUseCase: ICreateImageUseCase;
  getNameImageUseCase: IGetNameImageUseCase;
}

export const Header: FunctionComponent<HeaderProps> = ({ createImageUseCase, getNameImageUseCase }) => {
  const [search, SetSearch] = React.useState('');
  const [modalAdd, SetModalAdd] = React.useState(true);
  const { currentUser } = useAuth();
  const navegante = useNavigate();
  React.useEffect(() => {
    if (modalAdd === false) {
      if (!currentUser) {
        navegante('/user/login');
        return;
      }
    }
  }, [modalAdd]);

  React.useEffect(() => {
    if (search.length > 2) {
    }
  }, [search]);

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
        <CreateImage createImageUseCase={createImageUseCase} SetActive={SetModalAdd} />
      </Modal>
    </HeaderContainer>
  );
};
