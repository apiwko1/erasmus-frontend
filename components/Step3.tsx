import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import RatingField from './RatingField';
import LinearProgressBar from './LinearProgressBar';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
    exam: any;
}

const Step3: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    const [attentive, setAttentive] = useState(Number(exam?.metricAttentive || '0'));
    const [attentiveError, setAttentiveError] = useState(false);


    const [remembers, setRemembers] = useState(Number(exam?.metricEasliy || '0'));
    const [remembersError, setRemembersError] = useState(false);


    const [perceptive, setPerceptive] = useState(Number(exam?.metricPerceptive || '0'));
    const [perceptiveError, setPerceptiveError] = useState(false);


    const [smart, setSmart] = useState(Number(exam?.metricSmart || '0'));
    const [smartError, setSmartError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);

    });

    const updateMetric = (step: string) => {

        const data = {
            metricAttentive: attentive,
            metricPerceptive: perceptive,
            metricEasliy: remembers,
            metricSmart: smart,
            step3Time: time,
            step
        }

        updateStep(token, data);
    }

    const isValidate = () => {

        let error = false;

        if (attentive < 1) {
            setAttentiveError(true);
            error = true;
        }

        if (remembers < 1) {
            setRemembersError(true);
            error = true;
        }

        if (perceptive < 1) {
            setPerceptiveError(true);
            error = true;
        }

        if (smart < 1) {
            setSmartError(true);
            error = true;
        }

        return !error;
    }

    const submit = () => {

        if (isValidate()) {
            setIsLoading(true);
            updateMetric('step4');
            router.push(`/${locale}/${token}/step4`).then(() => window.scrollTo(0, 0));
        }
    }

    useEffect(() => {
        updateMetric('step3');
    }, [])

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={3} />
            </div>
            <div className="formContainer">
                <div className="title">
                    {t('step3_title')}
                </div>
                <div className="subtitle">
                    {t('step3_subtitle')}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step3_attentive')}</div>
                    <RatingField
                        name="hover-attentive"
                        value={attentive}
                        onChange={(event, newValue) => {
                            setAttentiveError(false);
                            setAttentive(Number(newValue));
                        }}
                    />
                    {attentiveError && <div className="error">{t('error_field')}</div>}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step3_remembers')}</div>
                    <RatingField
                        name="hover-remembers"
                        value={remembers}
                        onChange={(event, newValue) => {
                            setRemembersError(false);
                            setRemembers(Number(newValue));
                        }}
                    />
                    {remembersError && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step3_perceptive')}</div>
                    <RatingField
                        name="hover-perceptive"
                        value={perceptive}
                        onChange={(event, newValue) => {
                            setPerceptiveError(false);
                            setPerceptive(Number(newValue));
                        }}
                    />
                    {perceptiveError && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step3_smart')}</div>
                    <RatingField
                        name="hover-smart"
                        value={smart}
                        onChange={(event, newValue) => {
                            setSmartError(false);
                            setSmart(Number(newValue));
                        }}
                    />
                    {smartError && <div className="error">{t('error_field')}</div>}

                </div>
            </div>
            <div className="button">
                <Button variant="contained" color="primary" onClick={() => router.push(`/${locale}/${token}/step2`)} style={{ marginRight: 10 }}>{t('back')}</Button>
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
            .fieldContent {
                display: flex;
                flex-flow: row;
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

export default Step3
