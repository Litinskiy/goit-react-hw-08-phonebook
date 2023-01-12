import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshCurrentUser } from './redux/authorization/auth-operations';
import { selectRefreshStatus } from './redux/authorization/auth-selectors';
import { Container } from './App.styled';
import { AppBar } from './AppBar/AppBar';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestictedRoute';
import { ContactsPage, LoginPage, RegistryPage, WelcomePage } from './pages';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshStatus);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route
              index
              element={<RestrictedRoute element={<WelcomePage />} />}
            />

            <Route
              path="registry"
              element={<RestrictedRoute element={<RegistryPage />} />}
            />

            <Route
              path="login"
              element={<RestrictedRoute element={<LoginPage />} />}
            />

            <Route
              path="contacts"
              element={<PrivateRoute element={<ContactsPage />} />}
            />
          </Route>
        </Routes>
      </Container>
    )
  );
}
