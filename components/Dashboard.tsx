import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { createOrGetExam, generateAnonToken, generateUserToken, getReportAll } from '../services/exam';
import useTranslation from '../hooks/useTranslation';
import { useRouter } from 'next/router';

const Dashboard: React.FC = ({ }) => {
    const { locale, t } = useTranslation();
    const router = useRouter();
    const [generatedToken, setGeneratedToken] = useState(null);
    const handleGenerateToken = () => {
        generateUserToken().then((data) => {
            setGeneratedToken(data)
        });
    }

    const handleGenerateReport = () => {
        getReportAll()
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `report.xlsx`);
                document.body.appendChild(link);
                link.click();
                link?.parentNode.removeChild(link);
            })
    }

    return (
        <div>
            <div className="formContainer">
                <div className="field">
                    <Button fullWidth variant="contained" color="primary" onClick={handleGenerateToken}>{t('token_generator')}</Button>
                </div>
                <div className="field">
                    <Button fullWidth variant="contained" color="primary" onClick={() => router.push(`/${locale}/admin/groups`)}>{t('groups')}</Button>
                </div>
                <div className="field">
                    <Button fullWidth variant="contained" color="primary" onClick={handleGenerateReport} >{t('reports_generate')}</Button>
                </div>
                {generatedToken && <div className="fieldToken"> {t('generated_token')} <b>{generatedToken}</b>  </div>}
            </div>
            <style jsx>
                {`
            .formContainer {
                flex-flow: column;
                margin-top: 100px;
            }
            .formContainer, .registerButton {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .field {
                flex-flow: column;
                padding: 5px 0 5px 0;
                width: 200px;
            }
            .fieldToken {
                margin-top: 20px;
                flex-flow: column;
                align-items: center;
                justify-content: center;                
            }
            `}
            </style>
        </div>
    )
}

export default Dashboard
