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

const Step5: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    const [query1, setQuery1] = useState(Number(exam?.reading2 || '0'));
    const [query1Error, setQuery1Error] = useState(false);

    const [query2, setQuery2] = useState(Number(exam?.kinesthetic2 || '0'));
    const [query2Error, setQuery2Error] = useState(false);

    const [query3, setQuery3] = useState(Number(exam?.visual5 || '0'));
    const [query3Error, setQuery3Error] = useState(false);

    const [query4, setQuery4] = useState(Number(exam?.auditory3 || '0'));
    const [query4Error, setQuery4Error] = useState(false);

    const [query5, setQuery5] = useState(Number(exam?.reading4 || '0'));
    const [query5Error, setQuery5Error] = useState(false);

    const [query6, setQuery6] = useState(Number(exam?.kinesthetic4 || '0'));
    const [query6Error, setQuery6Error] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);

    });

    const updateMetric = (step: string) => {

        const data = {
            reading2: query1,
            kinesthetic2: query2,
            visual5: query3,
            auditory3: query4,
            reading4: query5,
            kinesthetic4: query6,
            step5Time: time,
            step
        }

        updateStep(token, data);
    }

    const isValidate = () => {

        let error = false;

       
        if (query1 < 1) {
            setQuery1Error(true);
            error = true;
        }

        if (query2 < 1) {
            setQuery2Error(true);
            error = true;
        }

        if (query3 < 1) {
            setQuery3Error(true);
            error = true;
        }

        if (query4 < 1) {
            setQuery4Error(true);
            error = true;
        }

        if (query5 < 1) {
            setQuery5Error(true);
            error = true;
        }


        if (query6 < 1) {
            setQuery6Error(true);
            error = true;
        }

        return !error;
    }

    const submit = () => {

        if (isValidate()) {
            setIsLoading(true);
            updateMetric('step6');
            router.push(`/${locale}/${token}/step6`).then(() => window.scrollTo(0, 0));
        }
    }

    useEffect(() => {
        updateMetric('step5');
    }, [query1, query2, query3, query4, query5, query6])

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={3} />
            </div>
            <div className="formContainer">
                <div className="title">
                    {t('diagnose_description')}
                </div>
                <div className="subtitle">
                    {t('step3_subtitle')}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('reading2')}</div>
                    <RatingField
                        name="hover-reading2"
                        value={query1}
                        onChange={(event, newValue) => {
                            setQuery1Error(false);
                            setQuery1(Number(newValue));
                        }}
                    />
                    {query1Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('kinesthetic2')}</div>
                    <RatingField
                        name="hover-kinesthetic2"
                        value={query2}
                        onChange={(event, newValue) => {
                            setQuery2Error(false);
                            setQuery2(Number(newValue));
                        }}
                    />
                    {query2Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('visual5')}</div>
                    <RatingField
                        name="hover-visual5"
                        value={query3}
                        onChange={(event, newValue) => {
                            setQuery3Error(false);
                            setQuery3(Number(newValue));
                        }}
                    />
                    {query3Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('auditory3')}</div>
                    <RatingField
                        name="hover-auditory3"
                        value={query4}
                        onChange={(event, newValue) => {
                            setQuery4Error(false);
                            setQuery4(Number(newValue));
                        }}
                    />
                    {query4Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('reading4')}</div>
                    <RatingField
                        name="hover-reading4"
                        value={query5}
                        onChange={(event, newValue) => {
                            setQuery5Error(false);
                            setQuery5(Number(newValue));
                        }}
                    />
                    {query5Error && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('kinesthetic4')}</div>
                    <RatingField
                        name="hover-kinesthetic4"
                        value={query6}
                        onChange={(event, newValue) => {
                            setQuery6Error(false);
                            setQuery6(Number(newValue));
                        }}
                    />
                    {query6Error && <div className="error">{t('error_field')}</div>}

                </div>
            </div>
            <div className="button">
                <Button variant="contained" color="primary" onClick={() => router.push(`/${locale}/${token}/step4`)} style={{ marginRight: 10 }}>{t('back')}</Button>
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

export default Step5
