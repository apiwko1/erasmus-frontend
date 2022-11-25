import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import RatingField from './RatingField';
import LinearProgressBar from './LinearProgressBar';
import ButtonWithLoader from './ButtonWithLoader';


interface Props {
    exam: any;
}

const Step8: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    const [query1, setQuery1] = useState(Number(exam?.hope1 || '0'));
    const [query1Error, setQuery1Error] = useState(false);

    const [query2, setQuery2] = useState(Number(exam?.hope2 || '0'));
    const [query2Error, setQuery2Error] = useState(false);

    const [query3, setQuery3] = useState(Number(exam?.hope3 || '0'));
    const [query3Error, setQuery3Error] = useState(false);

    const [query4, setQuery4] = useState(Number(exam?.hope4 || '0'));
    const [query4Error, setQuery4Error] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);
    });

    const updateMetric = (step: string) => {

        const data = {
            hope1: query1,
            hope2: query2,
            hope3: query3,
            hope4: query4,
            step8Time: time,
            step
        }

        updateStep(token, data);
    }

    const isValidate = () => {

        let error = false;

        if(query1 < 1) {
            setQuery1Error(true);
            error = true;
        }

        if(query2 < 1) {
            setQuery2Error(true);
            error = true;
        }

        if(query3 < 1) {
            setQuery3Error(true);
            error = true;
        }

        if(query4 < 1) {
            setQuery4Error(true);
            error = true;
        }

        return !error;
    }

    const submit = () => {

        if (isValidate()) {
            setIsLoading(true);
            updateMetric('step9');
            router.push(`/${locale}/${token}/step9`).then(() => window.scrollTo(0,0));
        }
    }

    useEffect(() => {
        updateMetric('step8');
    }, [query1, query2, query3, query4])

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={8} />
            </div>
            <div className="formContainer">
                <div className="title">
                    {t('step8_title')}
                </div>
                <div className="subtitle">
                    {t('hope_description')}
                </div>
                <div className="subtitle">
                    {t('step3_subtitle')}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('hope1')}</div>
                    <RatingField
                        name="hover-hope1"
                        value={query1}
                        onChange={(event, newValue) => {
                            setQuery1Error(false);
                            setQuery1(Number(newValue));
                        }}
                    />
                {query1Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('hope2')}</div>
                    <RatingField
                        name="hover-hope2"
                        value={query2}
                        onChange={(event, newValue) => {
                            setQuery2Error(false);
                            setQuery2(Number(newValue));
                        }}
                    />
                {query2Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('hope3')}</div>
                    <RatingField
                        name="hover-hope3"
                        value={query3}
                        onChange={(event, newValue) => {
                            setQuery3Error(false);
                            setQuery3(Number(newValue));
                        }}
                    />
                {query3Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('hope4')}</div>
                    <RatingField
                        name="hover-hope4"
                        value={query4}
                        onChange={(event, newValue) => {
                            setQuery4Error(false);
                            setQuery4(Number(newValue));
                        }}
                    />
                {query4Error && <div className="error">{t('error_field')}</div>}

                </div>
            </div>
            <div className="button" >
            <Button variant="contained" color="primary" onClick={() => router.push(`/${locale}/${token}/step7`)} style={{marginRight: 10}}>{t('back')}</Button>
            <ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader>

            </div>
            <style jsx>
                {`
            .progressContainer {
                padding: 30px 10% 15px 10%;
            }
            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                padding: 15px 10% 15px 10%;
                text-align: center;
            }
            .subtitle {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 15px;
                padding: 15px 10% 15px 10%;
                white-space: pre-wrap;
            }
            .text {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-size: 16px;
                padding: 15px 10% 15px 10%;
            }
            .formContainer {
                margin-top: 30px;
            }
            .formContainer, .registerButton {
                display: flex;
                flex-flow: column;
            }
            .field {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 30px;
            }
            .fieldLabel {
                text-align: center;
                margin-left: 5px;
                margin-bottom: 10px;
                font-weight: 600;
            }
            .error {
                display: flex;
                align-items: center;
                justify-content: center;
                color: red;
                font-weight: bold;
            }
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 40px;
                padding: 20px;
            }
            `}
            </style>
        </div>
    )
}

export default Step8
