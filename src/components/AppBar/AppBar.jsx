import { UserMeny } from "components/UserMeny/UserMenu";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectUserStatus } from "components/redux/authorization/auth-selectors";
import { Header, Nav, StyledLink } from "./AppBar.styled";

export function AppBar() {
    const isLoggedIn = useSelector(selectUserStatus);

    return (
        <>
            <Header>
                <Nav>
                    <div>
                        {isLoggedIn ? (
                            <StyledLink to={'contacts'}>Your Contacts</StyledLink>
                        ) : (
                            <StyledLink to={'/'}>Welcome Page</StyledLink>
                        )}
                    </div>
                    {isLoggedIn ? (
                        <UserMeny />
                    ) : (
                        <div>
                            <StyledLink to={'registry'}>Registry</StyledLink>
                            <StyledLink to={'login'}>Sign In</StyledLink>
                        </div>
                    )}
                </Nav>
            </Header>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
}