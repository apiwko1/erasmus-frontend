import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { createOrGetExam, generateAnonToken } from '../services/exam';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';
import CircularProgress from '@material-ui/core/CircularProgress';


const StartStudy: React.FC = ({ }) => {
    const { locale, t } = useTranslation();
    const router = useRouter();
    const [generatedToken, setGeneratedToken] = useState(null);
    const [isLoadingStart, setIsLoadingStart] = useState(false);
    const [isLoadingLogin, setIsLoadingLogin] = useState(false);

    const handleStart = () => {
        setIsLoadingStart(true);
        startExam();
    }

    const handleLogin = () => {
        setIsLoadingLogin(true);
        startExam();
    }

    const startExam = () => {
        if (!generatedToken || generatedToken.length < 0) {

            generateAnonToken().then((token) => {

                if (token) {
                    createOrGetExam(token).then((data) => {
                        router.push(`/${locale}/${token}/${data}`);

                    });

                }
            });
        } else {
            createOrGetExam(generatedToken).then((data) => {

                if (data) {
                    router.push(`/${locale}/${generatedToken}/${data}`);
                }


            });

        }
    }

    const handleChange = (event) => {
        setGeneratedToken(event.target.value);
    };

    return (
        <div>
            <div className="formContainer">
                <div className="subtitle">
                    {t('exam_description')}
                </div>
                <div className="formContainer" onClick={handleStart}
                >
                    <div className="submitButton">
                        <Button variant="contained" color="primary" fullWidth>
                            {isLoadingStart ? <CircularProgress color="inherit" size={22} /> : <span>{t('click_to_start')}</span>}
                        </Button>
                    </div>




                </div>

                <div className="formContainer">
                    {t('exam_description_5')}
                </div>

                <div className="field">
                    <TextField
                        value={generatedToken}
                        onChange={handleChange}
                        id="token"
                        name="token"
                        placeholder=""
                        type="text"
                        label={t('your_token')}
                    />
                </div>
                <div className="button" onClick={handleLogin}>
                    <Button variant="contained" color="secondary">
                        {isLoadingLogin ? <CircularProgress color='inherit' size={22} /> : <span>{t('admin_login')}</span>}
                    </Button>
                </div>
                <div className="subtitle">
                    {t('exam_description_6')}
                </div>
            </div>
            <style jsx>
                {`

            .submitButton{
                display: flex;
                width: 100%;
                min-width: 150px;
            }
            .formContainer {
                flex-flow: column;
                margin-top: 20px;
            }
            
            .formContainer, .registerButton {
                display: flex;
                align-items: center;
                justify-content: center;
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
            .subtitle {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 16px;
                padding: 50px 10% 0px 10%;
                white-space: pre-wrap;
            }
            `}
            </style>
        </div>
    )
}

export default StartStudy
