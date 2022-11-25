import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import LinearProgressBar from './LinearProgressBar';
import RatingField from './RatingField';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
    exam: any;
}

const Step2: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    const [reading, setReading] = useState(Number(exam?.metricReading || '0'));
    const [readingError, setReadingError] = useState(false);


    const [listening, setListening] = useState(Number(exam?.metricListing || '0'));
    const [listeningError, setListeningError] = useState(false);


    const [playing, setPlaying] = useState(Number(exam?.metricPlaying || '0'));
    const [playingError, setPlayingError] = useState(false);


    const [watching, setWatching] = useState(Number(exam?.metricWatching || '0'));
    const [watchingError, setWatchingError] = useState(false);

    const updateMetric = (step: string) => {
        const data = {
            metricReading: reading,
            metricListing: listening,
            metricPlaying: playing,
            metricWatching: watching,
            step2Time: time,
            step
        }

        updateStep(token, data);
    }

    const isValidate = () => {

        let error = false;

        if (reading < 1) {
            setReadingError(true);
            error = true;
        }

        if (listening < 1) {
            setListeningError(true);
            error = true;
        }

        if (playing < 1) {
            setPlayingError(true);
            error = true;
        }

        if (watching < 1) {
            setWatchingError(true);
            error = true;
        }

        return !error;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);

    });

    const submit = () => {

        if (isValidate()) {
            setIsLoading(true);
            updateMetric('step3');
            router.push(`/${locale}/${token}/step3`).then(() => window.scrollTo(0, 0));
        }
    }

    useEffect(() => {
        updateMetric('step2');
    }, [])

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={2} />
            </div>
            <div className="formContainer">
                <div className="title">
                    {t('step2_title')}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step2_reading')}</div>
                    <div className="fieldContent">
                        <span>{t('survey_dont_like')}</span>
                        <RatingField
                            isShowLegend={false}
                            max={6}
                            name="hover-reading"
                            value={reading}
                            isHover={false}
                            onChange={(event, newValue) => {
                                setReadingError(false);
                                setReading(Number(newValue));
                            }}
                        />
                        <span>{t('survey_like')}</span>
                    </div>
                    {readingError && <div className="error">{t('error_field')}</div>}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step2_listening')}</div>
                    <div className="fieldContent">
                        <span>{t('survey_dont_like')}</span>
                        <RatingField
                            isShowLegend={false}
                            max={6}
                            name="hover-listening"
                            value={listening}
                            isHover={false}
                            onChange={(event, newValue) => {
                                setListeningError(false);
                                setListening(Number(newValue));
                            }}
                        />
                        <span>{t('survey_like')}</span>
                    </div>
                    {listeningError && <div className="error">{t('error_field')}</div>}
                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step2_playing')}</div>
                    <div className="fieldContent">
                        <span>{t('survey_dont_like')}</span>
                        <RatingField
                            isShowLegend={false}    
                            max={6}
                            name="hover-playing"
                            value={playing}
                            isHover={false}
                            onChange={(event, newValue) => {
                                setPlayingError(false);
                                setPlaying(Number(newValue));
                            }}
                        /> <span>{t('survey_like')}</span>
                    </div>
                    {playingError && <div className="error">{t('error_field')}</div>}

                </div>
                <div className="field">
                    <div className="fieldLabel">{t('step2_watching')}</div>
                    <div className="fieldContent">
                        <span>{t('survey_dont_like')}</span>
                        <RatingField
                            isShowLegend={false}
                            max={6}
                            name="hover-watching"
                            value={watching}
                            isHover={false}
                            onChange={(event, newValue) => {
                                setWatchingError(false);
                                setWatching(Number(newValue));
                            }}
                        />
                        <span>{t('survey_like')}</span>
                    </div>
                    {watchingError && <div className="error">{t('error_field')}</div>}

                </div>
            </div>
            <div className="button">
                <Button variant="contained" color="primary" onClick={() => router.push(`/${locale}/${token}/step1`)} style={{ marginRight: 10 }}>{t('back')}</Button>
                <ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader>
            </div>
            <style jsx>
                {`
            .progressContainer {
                padding: 30px 10% 15px 10%;
            }
            span {
                height: 62px;
                line-height: 44px;
                display: inline-block;
                vertical-align: middle;
                padding: 10px;
            }
            .title {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                padding: 15px 10% 15px 10%;
                text-align: center;
                margin-bottom: 30px;
            }
            .subtitle {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                text-align: center;
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
            .fieldContent {
                display: flex;
                flex-flow: row;
            }
            .error {
                display: flex;
                align-items: center;
                justify-content: center;
                color: red;
                font-weight: bold;
                margin-left: 45px;
            }
            .button {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 40px;
                padding: 20px;
            }
            @media only screen and (max-width: 500px) {
               span {
                line-height: 20px;
               }
            }
            `}
            </style>
        </div>
    )
}

export default Step2
