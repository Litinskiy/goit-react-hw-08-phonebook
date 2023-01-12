import { Text, WelcomeLink, Title, WelcomeWrap } from './Weclome.styled';

export function Welcome() {
    return (
        <WelcomeWrap>
            <Title> Unknown!!! You will be known now: welcome in our Contacts App</Title>
            <Text>
                So..., please log in to your account or create new one using the links below:
            </Text>
            <WelcomeLink to={'/login'}>Log IN</WelcomeLink>
            <WelcomeLink to={'/registry'}>Registry</WelcomeLink>
        </WelcomeWrap>
    );
}