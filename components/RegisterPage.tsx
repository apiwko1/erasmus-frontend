import React, { useState } from 'react';
import Router from 'next/router';
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { register } from '../services/user';
import useTranslation from '../hooks/useTranslation';
import CircularProgress from '@material-ui/core/CircularProgress';


interface Values {
    email: string;
    password: string;
}

interface Props {
    setIsLoginPage(value: boolean): void;
}

const RegisterPage: React.FC<Props> = ({ setIsLoginPage }) => {

    const { locale, t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [isRegisterError, setIsRegisterError] = useState(false);

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
                        setIsRegisterError(false);
                        setTimeout(() => {
                            register(values).then((data) => {
                                if (data === true) {
                                    Router.push(`/${locale}/admin/dashboard`);
                                    setIsLoading(false);
                                } else {
                                    setIsRegisterError(true);
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
                        <div className="registerError">
                            {isRegisterError && <div>{t('admin_register_error')}</div>}
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" type="submit">
                                {isLoading ? <CircularProgress color='inherit' size={22} /> : <span>{t('admin_register')}</span>}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="button">
                <Button variant="contained" color="secondary" onClick={() => setIsLoginPage(true)}>{t('admin_have_account')}</Button>
            </div>
            <style jsx>
                {`
            .formContainer {
                margin-top: 100px;
            }
            .formContainer, .registerButton {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .registerError{
                text-align: center;
                line-height: 30px;
                color: red;
                height: 30px;
            }
            .field {
                flex-flow: column;
                padding: 5px 0 5px 0;
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

export default RegisterPage
