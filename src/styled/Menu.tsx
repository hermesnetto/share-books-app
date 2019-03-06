import styled from '@emotion/styled';

const Menu = styled.ul`
  color: #fff;

  li {
    display: inline-block;
  }

  li + li {
    margin-left: 30px;
  }

  a {
    color: #fff;

    &:hover {
      color: #ffa61e;
    }
  }
`;

export default Menu;
