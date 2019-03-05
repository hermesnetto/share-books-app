import * as React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Icon } from 'pipestyle';
import { Header, Container, Logo, Menu } from '../styled';
import { Store } from '../Store';
import { showBooksForm } from '../store/actions';
import { getToken } from '../utils/userToken';

interface Props {}

const PageHeader: React.FC<Props> = () => {
  const { dispatch } = React.useContext(Store);
  const userToken = getToken();

  const handleClickNewBook = (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    dispatch(showBooksForm());
  };

  return (
    <Header>
      <Container>
        <Logo>Books</Logo>
        <Menu>
          {userToken && (
            <li>
              <a href="#" onClick={handleClickNewBook}>
                New Book
              </a>
            </li>
          )}
          <li>
            <Link to="/" activeStyle={{ color: '#FFA61E' }}>
              Books
            </Link>
          </li>
          <li>
            <Link to={userToken ? '/logout' : '/login'} activeStyle={{ color: '#FFA61E' }}>
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
