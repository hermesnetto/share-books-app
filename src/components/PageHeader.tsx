import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Icon } from 'pipestyle';
import { Header, Container, Logo, Menu } from '../styled';
import { Store } from '../Store';
import { openModal } from '../store/actions';
import { getToken } from '../utils/userToken';

interface Props {}

const PageHeader: React.FC<Props> = () => {
  const { dispatch } = React.useContext(Store);
  const userToken = getToken();

  const handleClickNewBook = (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    dispatch(openModal('book'));
  };

  const handleClickNewCategory = (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    dispatch(openModal('category'));
  };

  return (
    <Header>
      <Container>
        <Logo>
          <Link to="/">Books</Link>
        </Logo>
        <Menu>
          {userToken && (
            <li>
              <a href="#" onClick={handleClickNewBook}>
                New Book
              </a>
            </li>
          )}
          {userToken && (
            <li>
              <a href="#" onClick={handleClickNewCategory}>
                New Category
              </a>
            </li>
          )}
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to={userToken ? '/logout' : '/login'}>
              {userToken ? (
                <>
                  <Icon className="pp-ico-leave" /> Logout
                </>
              ) : (
                'Login'
              )}
            </Link>
          </li>
        </Menu>
      </Container>
    </Header>
  );
};

export default PageHeader;
