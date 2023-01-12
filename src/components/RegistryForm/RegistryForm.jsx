import { Form, Formik } from 'formik';
import { Title } from 'components/Welcome/Weclome.styled';
import {
  FormWrap,
  Button,
  ErrorMsg,
  Label,
  StyledField,
} from '../RegistryForm/RegistryForm.styled';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { registry } from 'components/redux/authorization/auth-operations';

export function RegirtyForm() {
  const dispatch = useDispatch();

  return (
    <FormWrap>
      <Title>Regisrty Form</Title>
      <Formik
        initialValues={{ name:'', email: '', password: '', confirm: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('*Required'),
          email: Yup.string().email().required('*Required'),
          password: Yup.string()
            .required('*Required')
            .min(7, 'Password must be at least 7 characters long'),
          confirm: Yup.string()
            .required('*Required')
            .oneOf(
              [Yup.ref('password'), null],
              'Your passwords are different, try harder!'
            ),
        })}
        onSubmit={({ name, email, password }, { resetForm }) => {
          dispatch(registry({ name, email, password }));
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
                  <Form onSubmit={handleSubmit}>
                      
            <Label htmlFor="name" error={touched.name && errors.email}>
              Name
            </Label>
                      <StyledField
                          required
              type="text"
              name="name"
              id="name"
              value={values.name}
            />
            <ErrorMsg name="name" component="div" />
                
                      
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
                          value={ values.password}
                      />
                      <ErrorMsg name='password' component='div' />

                      <Label
              htmlFor="confirm"
              error={touched.password && errors.password}
            >
              Password again please!
                      </Label>
                      <StyledField
                          type='password'
                          name='confirm'
                          id='confirm'
                          value={ values.confirm}
                      />
                      <ErrorMsg name='confirm' component='div' />
                      
                      <Button type="submit" disabled={isSubmitting}>
              Registry
            </Button>
          </Form>
        )}
          </Formik>
    </FormWrap>
  );
}