import { Form, Formik } from 'formik';
import {
  FormWrap,
  Button,
  ErrorMsg,
  Label,
  StyledField,
} from '../RegistryForm/RegistryForm.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from 'components/redux/authorization/auth-operations';
import { LoginText } from './LoginForm.styled';

export function LoginForm() {
  const dispatch = useDispatch();

  return (
    <FormWrap>
      <h2>Sign IN with your account please</h2>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Please enter valid e-mail')
            .required('E-mail is required'),
          password: Yup.string()
            .required('Password is forgotten. How do you live dude?')
            .min(6, 'Password must be at least 6 characters long'),
        })}
        onSubmit={({ email, password }, { resetForm }) => {
          dispatch(login({ email, password }));
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <Label htmlFor="email" error={touched.email && errors.email}>
              Email
            </Label>
            <StyledField
              type="email"
              name="email"
              id="email"
              value={values.email}
            />
            <ErrorMsg name="email" component="div" />
            <Label
              htmlFor="password"
              error={touched.password && errors.password}
            >
              Password
                      </Label>
                      <StyledField
                          type='password'
                          name='password'
                          id='password'
                      />
                      <ErrorMsg name='password' component='div' />
                      
                      <Button type="submit" disabled={isSubmitting}>
              Sign IN
            </Button>
          </Form>
        )}
          </Formik>
          
          <LoginText>
              Wau-wau-wau!!! Do not have an account yet?!!!{''}
              <NavLink to={'/registry'} style={{color: 'black', fontWeight:'600'}}>
                  Click here!
              </NavLink>
            </LoginText>
    </FormWrap>
  );
}
