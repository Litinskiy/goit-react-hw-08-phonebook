import { useDispatch, useSelector } from "react-redux";
import { logout } from "components/redux/authorization/auth-operations";
import { selectUserName } from "components/redux/authorization/auth-selectors";
import { Button, LogoutIcon, UserBox } from './UserMeny.styled';

export function UserMeny() {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    function onLogout() {
        dispatch(logout());
    }

    return (
        <UserBox>
            {userName && (
                <p>
                    You signed in as <b>{ userName}</b>
                </p>
            )}
            <Button type="button" onClick={onLogout}>
                Logout <LogoutIcon/>
            </Button>
      </UserBox>  
    );
}