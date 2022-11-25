import React, { useState } from 'react';
import Router from 'next/router';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { login } from '../services/user';
import useTranslation from '../hooks/useTranslation';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Values {
    email: string;
    password: string;
}

interface Props {
    setIsLoginPage(value: boolean): void;
}

const LoginPage: React.FC<Props> = ({ setIsLoginPage }) => {

    const { locale, t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);

    return (
        <div>
            <div className="formContainer">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        setIsLoading(true);
                        setIsLoginError(false);
                        setTimeout(() => {
                            login(values).then((data) => {
                                if (data === true) {
                                    Router.push(`/${locale}/admin/dashboard`);
                                    setIsLoading(false);
                                } else {
                                    setIsLoginError(true);
                                    setIsLoading(false);
                                }
                            });
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <div className="field">
                            <div className="field">
                                <Field
                                    component={TextField}
                                    id="email"
                                    name="email"
                                    placeholder="john@acme.com"
                                    type="email"
                                    label={t('admin_email')}
                                />
                            </div>

                        </div>
                        <div className="field">
                            <div className="field">
                                <Field component={TextField} id="password" name="password" type="password" label={t('admin_password')} />
                            </div>
                        </div>
                        <div className="loginError">
                            {isLoginError && <div>{t('admin_login_error')}</div>}
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" type="submit">
                                {isLoading ? <CircularProgress color='inherit' size={22} /> : <span>{t('admin_login')}</span>}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="button">
                <Button variant="contained" color="secondary" onClick={() => setIsLoginPage(false)}>{t('admin_not_have_account')}</Button>
            </div>
            <style jsx>
                {`
            .formContainer {
                margin-top: 100px;
            }
            .formContainer, .registerButton {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .field {
                flex-flow: column;
                padding: 5px 0 5px 0;
            }
            .loginError{
                text-align: center;
                line-height: 30px;
                color: red;
                height: 30px;
            }
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px;
            }
            `}
            </style>
        </div>
    )
}

export default LoginPage
