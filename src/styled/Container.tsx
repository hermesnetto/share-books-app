import styled from '@emotion/styled';

interface Props {
  size?: 'small' | 'medium';
}

const Container = styled.div`
  width: 100%;
  max-width: ${(props: Props) => (props.size === 'small' ? 560 : 800)}px;
  margin: 0 auto;
`;

export default Container;
