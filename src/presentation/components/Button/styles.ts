import styled from 'styled-components';

type ButtonContainerProps = { isDisable?: boolean };
export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: var(--green-color);
  padding: .8rem .5rem;
  max-width: 10rem;
  border-radius: .5rem;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  transition: .5s;
  &:hover {
    opacity: .8;
  }
`;
type SpinnerProps = { active?: boolean };

export const Spinner = styled.span<SpinnerProps>`
  display: ${({ active }) => (active ? 'inline-block' : 'none')};
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0,0,0, .5);
  border-radius: 50%;
  border-left-color: #fff;
  animation: spinner .3s linear infinite;

  @keyframes spinner {
    to{
      transform: rotate(360deg);
    };
  }
`;
