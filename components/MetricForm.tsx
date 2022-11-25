import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import LinearProgressBar from './LinearProgressBar';
import ButtonWithLoader from './ButtonWithLoader';
import Modal from 'react-modal';

interface Props {
    exam: any;
}

const MetricForm: React.FC<Props> = ({ exam }) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [time, setTime] = useState(0);

    const [country, setCountry] = useState(exam?.metricCountry);
    const [countryError, setCountryError] = useState(false);
    const handleCountry = (event) => {
        setCountryError(false);
        setCountry(event.target.value);
    };

    const [schoolCode, setSchoolCode] = useState(exam?.metricSchoolCode);
    const handleSchoolCode = (event) => {
        setSchoolCode(event.target.value);
    };

    const [age, setAge] = useState(exam?.metricAge);
    const [ageError, setAgeError] = useState(false);
    const handleAge = (event) => {
        setAgeError(false);
        setAge(event.target.value);
    };

    const [gender, setGender] = useState(exam?.metricGender);
    const [genderError, setGenderError] = useState(false);
    const handleGender = (event) => {
        setGenderError(false);
        setGender(event.target.value);
    };

    const [residence, setResidence] = useState(exam?.metricPlace);
    const [residenceError, setResidenceError] = useState(false);
    const handleResidence = (event) => {
        setResidenceError(false);
        setResidence(event.target.value);
    };

    const [educationStage, setEducationStage] = useState(exam?.metricStage);
    const [educationStageError, setEducationStageError] = useState(false);
    const handleEducationStage = (event) => {
        setEducationStageError(false);
        setEducationStage(event.target.value);
    };

    const [kindStudent, setKindStudent] = useState(exam?.metricKindStudent);
    const [kindStudentError, setKindStudentError] = useState(false);
    const handleKindStudent = (event) => {
        setKindStudentError(false);
        setKindStudent(event.target.value);
    };

    const [grade, setGrade] = useState(exam?.metricGrade);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleGrade = (event) => {

        setGrade(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);

    });

    useEffect(() => {
        if(age === 10 || age === 15) {
            openModal();
        }
    }, [age])

    const updateMetric = (step: string) => {
        const data = {
            country: country,
            age: age,
            gender: gender,
            residence: residence,
            step1Time: time,
            step
        }

        updateStep(token, data);
    }

    const isValidate = () => {

        let error = false;
        if (!country) {
            setCountryError(true);
            error = true;
        }
        if (!age) {
            setAgeError(true)
            error = true;
        }
        if (!gender) {
            setGenderError(true)
            error = true;
        }
        if (!residence) {
            setResidenceError(true);
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
        updateMetric('step1');
    }, [country,
        schoolCode,
        age,
        gender,
        residence,
        educationStage,
        kindStudent,
        grade,])

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="subtitle">
                    {t('modal_age')}
                </div>
                <div className="button">
                <Button variant="contained" color="primary" onClick={closeModal} style={{ marginRight: 10 }}>{t('yes')}</Button>
                <ButtonWithLoader label={t('no')} onClick={() => router.push(`/`)}  isLoading={isLoading}></ButtonWithLoader>
            </div>
            </Modal>
            <div className="progressContainer">
                <LinearProgressBar step={1} />
            </div>
            <div className="formContainer">
                <div className="subtitle">
                    {t('metric_text_4')}
                </div>
                <div className="field">
                    <InputLabel id="demo-simple-select-outlined-label">{t('metric_age')}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleAge}
                        label={t('metric_age')}
                        placeholder={t('metric_age')}
                        fullWidth
                    >
                        <MenuItem value={10}>{t('under_age')}</MenuItem>
                        <MenuItem value={11}>11 {t('age')}</MenuItem>
                        <MenuItem value={12}>12 {t('age')}</MenuItem>
                        <MenuItem value={13}>13 {t('age')}</MenuItem>
                        <MenuItem value={14}>14 {t('age')}</MenuItem>
                        <MenuItem value={15}>{t('over_age')}</MenuItem>
                    </Select>
                </div>
                {ageError && <div className="error">{t('error_field')}</div>}
                <div className="field">
                    <InputLabel id="demo-simple-select-outlined-label">{t('metric_gender')}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gender}
                        onChange={handleGender}
                        label={t('metric_gender')}
                        fullWidth
                    >
                        <MenuItem value={'female'}>{t('metric_gender_female')}</MenuItem>
                        <MenuItem value={'male'}>{t('metric_gender_male')}</MenuItem>
                    </Select>
                </div>
                {genderError && <div className="error">{t('error_field')}</div>}
                <div className="field">
                    <InputLabel id="demo-simple-select-outlined-label">{t('metric_residence')}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={residence}
                        onChange={handleResidence}
                        label={t('metric_residence')}
                        fullWidth
                    >
                        <MenuItem value={'village'}>{t('metric_residence_village')}</MenuItem>
                        <MenuItem value={'city'}>{t('metric_residence_city')}</MenuItem>
                    </Select>
                </div>
                {residenceError && <div className="error">{t('error_field')}</div>}
                <div className="field">
                    <InputLabel id="demo-simple-select-outlined-label">{t('country')}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={country}
                        onChange={handleCountry}
                        label={t('country')}
                        placeholder={t('country')}
                        fullWidth
                    >
                        <MenuItem value={'cyprus'}>{t('country_cyprus')}</MenuItem>
                        <MenuItem value={'greece'}>{t('country_greece')}</MenuItem>
                        <MenuItem value={'italy'}>{t('country_italy')}</MenuItem>
                        <MenuItem value={'poland'}>{t('country_poland')}</MenuItem>
                        <MenuItem value={'romania'}>{t('country_romania')}</MenuItem>
                        <MenuItem value={'rest'}>{t('country_rest')}</MenuItem>
                    </Select>
                </div>
                {country === 'rest' && <div className="error">{t('error_country')}</div>}
                {countryError && <div className="error">{t('error_field')}</div>}
            </div>
            <div className="button">
                <Button variant="contained" color="primary" onClick={() => router.push(`/${locale}`)} style={{ marginRight: 10 }}>{t('back')}</Button>
                <ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader>
            </div>
            <style jsx>
                {`
            .progressContainer {
                padding: 30px 10% 15px 10%;
            }
            .title {
                display: flex;
                padding: 15px 10% 15px 10%;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                font-weight: bold;
            }
            .subtitle {
                display: flex;
                padding: 15px 10% 15px 10%;
                margin-bottom: 40px;
                align-items: center;
                text-align: center;
                justify-content: center;
                font-size: 20px;
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
                width: 50%;
                flex-flow: column;
                padding: 25px 0 5px 10%;
            }
            .error {
                width: 50%;
                color: red;
                font-weight: bold;
                padding: 10px 0 5px 10%;
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

export default MetricForm
