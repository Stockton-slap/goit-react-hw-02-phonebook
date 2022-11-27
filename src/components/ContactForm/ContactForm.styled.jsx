import styled from '@emotion/styled';

export const AddContactBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #dedede;
  font-size: 12px;

  background-color: ${props => (props.isPressed ? '#10cfff' : 'inherit')};
  color: ${props => (props.isPressed ? '#fff' : 'inherit')};
`;
