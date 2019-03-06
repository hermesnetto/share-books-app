import styled from '@emotion/styled';

interface Props {
  center?: boolean;
}

const Box = styled.div`
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  background: #fff;
  text-align: ${(props: Props) => (props.center ? 'center' : 'left')};
`;

export default Box;
