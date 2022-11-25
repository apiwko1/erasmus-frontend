import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import LinearProgressBar from './LinearProgressBar';
import jsPDF from 'jspdf';
import {
    getCYvisualStens,
    getCYauditoryStens,
    getCYkinestheticStens,
    getCYreadingStens
} from '../helpers/functions/funcCY';
import {
    getPLvisualStens,
    getPLauditoryStens,
    getPLkinestheticStens,
    getPLreadingStens
} from '../helpers/functions/funcPL';

import {
    getITvisualStens,
    getITauditoryStens,
    getITkinestheticStens,
    getITreadingStens
} from '../helpers/functions/funcIT';

import {
    getAuditoryTestDescription,
    getKinestheticTestDescription,
    getReadingTestDescription,
    getVisualTestDescription,
    getGameSummaries,
} from '../helpers/functions/funcAll';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
    exam: any;
}

const Done: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const getTestSums = () => {
       const visualSum = exam?.visual1 + exam?.visual4 + exam?.visual5 + exam?.visual7 + exam?.visual8 + exam?.visual9;
       const auditorySum = exam?.auditory1 + exam?.auditory2 + exam?.auditory3 + exam?.auditory5 + exam?.auditory6 + exam?.auditory7;
       const readingSum = exam?.reading1 + exam?.reading2 + exam?.reading4 + exam?.reading5 + exam?.reading8 + exam?.reading9;
       const kinestheticSum = exam?.kinesthetic1 + exam?.kinesthetic2 + exam?.kinesthetic4 + exam?.kinesthetic5 + exam?.kinesthetic7 + exam?.kinesthetic10; 
    
        return {
            visualSum,
            auditorySum,
            readingSum,
            kinestheticSum
        }
    }

    const getStens = (sums, country, sex) => {
        
        if(country === 'cyprus') {
            return {
                visualSten: getCYvisualStens(sums.visualSum, sex),
                auditorySten: getCYauditoryStens(sums.auditorySum, sex),
                readingSten: getCYreadingStens(sums.readingSum, sex),
                kinestheticSten: getCYkinestheticStens(sums.kinestheticSum, sex),
            }
        }

        if(country === 'italy') {
            return {
                visualSten: getITvisualStens(sums.visualSum, sex),
                auditorySten: getITauditoryStens(sums.auditorySum, sex),
                readingSten: getITreadingStens(sums.readingSum, sex),
                kinestheticSten: getITkinestheticStens(sums.kinestheticSum, sex),
            }
        }
        
        if(country === 'poland') {
            return {
                visualSten: getPLvisualStens(sums.visualSum, sex),
                auditorySten: getPLauditoryStens(sums.auditorySum, sex),
                readingSten: getPLreadingStens(sums.readingSum, sex),
                kinestheticSten: getPLkinestheticStens(sums.kinestheticSum, sex),
            }
        }

        if(country === 'romania') {
            return {
                visualSten: getPLvisualStens(sums.visualSum, sex),
                auditorySten: getPLvisualStens(sums.auditorySum, sex),
                readingSten: getPLvisualStens(sums.readingSum, sex),
                kinestheticSten: getPLvisualStens(sums.kinestheticSum, sex),
            }
        }

        return {
            visualSten: getPLvisualStens(sums.visualSum, sex),
            auditorySten: getPLvisualStens(sums.auditorySum, sex),
            readingSten: getPLvisualStens(sums.readingSum, sex),
            kinestheticSten: getPLvisualStens(sums.kinestheticSum, sex),
        }
    }

    const getGamesReport = (country) => {

       
        if(country === 'cy') {
            return {
            }
        }

        if(country === 'it') {
            return {
            }
        }
        
        if(country === 'pl') {
            return {
            }
        }

        if(country === 'ro') {
            return {
            }
        }

        return {
        }

    }


    const getHeader = (doc) => {
      doc.addImage("/report/const/header.png", "png", 15, 10, 180, 30);
    }

    const generatePdf = async () => {
        setIsLoading(true);

        return new Promise(resolve => {
            setIsLoading(true);
        const testStens =  getStens(getTestSums(), exam?.country, exam?.gender);
        const visualDescription =  getVisualTestDescription(testStens.visualSten);
        const readingDescription =  getReadingTestDescription(testStens.readingSten);
        const auditoryDescription =  getAuditoryTestDescription(testStens.auditorySten);
        const kinestheticDescription =  getKinestheticTestDescription(testStens.kinestheticSten);
        
        var sum = getGameSummaries(exam);
        let entries = Object.entries(sum);
        // [["you",100],["me",75],["foo",116],["bar",15]]

        let sorted = entries.sort((a, b) => a[1] - b[1]);

        const first = sorted[0][0];
        const second  =  sorted[1][0];
        const three =  sorted[2][0];
        const four =  sorted[3][0];

        var doc = new jsPDF();
        doc.addFont("/OpenSans-Regular.ttf", "Cant", 'normal')
        doc.setFont('Cant')
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p0.png", "png", 15, 125, 180, 40);
        doc.text(exam?.createdAt.toString(), 90, 235);
        doc.text(exam?.token.toString(), 83, 255);
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p1.png", "png", 15, 40, 180, 220);
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p2.png", "png", 15, 40, 180, 220);
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p3.png", "png", 15, 40, 180, 220);
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p4.png", "png", 15, 40, 180, 190);
        doc.setFillColor(255, 0, 0)
        doc.rect(60, 230, testStens.visualSten * 10, 5, 'F')
        doc.setFillColor(1, 176, 80)
        doc.rect(60, 240, testStens.readingSten * 10, 5, 'F')
        doc.setFillColor(255, 192, 1)
        doc.rect(60, 250, testStens.auditorySten * 10, 5, 'F')
        doc.setFillColor(68, 114, 196)
        doc.rect(60, 260, testStens.kinestheticSten * 10, 5, 'F')
        doc.setFontSize(11)
        doc.text(t('reading_title'), 20, 235);
        doc.text(testStens.visualSten.toString(), 70, 234);
        doc.text(t('visual_title'), 20, 245);
        doc.text(testStens.readingSten.toString(), 70, 244);
        doc.text(t('auditory_title'), 20, 255);
        doc.text(testStens.auditorySten.toString(), 70, 254);
        doc.text(t('kinesthetic_title'), 20, 265);
        doc.text(testStens.kinestheticSten.toString(), 70, 264);
        doc.addPage("a4");
        doc.setFontSize(7.5)
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p5.png", "png", 15, 40, 180, 200);
        doc.text(t(readingDescription), 62, 75,{ maxWidth: 120 });
        doc.text(t(visualDescription), 62, 120,{ maxWidth: 120 });
        doc.text(t(auditoryDescription), 62, 160,{ maxWidth: 120 });
        doc.text(t(kinestheticDescription), 62, 200,{ maxWidth: 120 });
        doc.addPage("a4");
        getHeader(doc);
        // doc.addImage("/report/"+locale + "/p6.png", "png", 15, 40, 180, 180);
        doc.setFontSize(12)
        doc.addImage("/report/"+locale + `/k1.png`, "png", 15, 40, 180, 30);
        doc.addImage("/report/"+locale + `/${first}.png`, "png", 15, 80, 180, 30);
        doc.addImage("/report/"+locale + `/k2.png`, "png", 15, 115, 180, 15);
        doc.addImage("/report/"+locale + `/${second}.png`, "png", 15, 130, 180, 30);
        doc.addImage("/report/"+locale + "/p7.png", "png", 15, 175, 180, 30);
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p8.png", "png", 15, 40, 180, 100);
        doc.addImage("/report/"+locale + `/${three}-1.png`, "png", 15, 145, 180, 65);
        doc.addImage("/report/"+locale + `/${four}-1.png`, "png", 15, 220, 180, 65);
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + `/learn.png`, "png", 15, 40, 60, 8);
        doc.addImage("/report/"+locale + `/${first}-2.png`, "png", 15, 50, 180, 40);
        doc.addImage("/report/"+locale + `/${second}-2.png`, "png", 15, 100, 180, 40);
        doc.setFontSize(12)
        doc.text(t('ex_link') + ": https://exercises.prolearn-project.eu/", 15, 200,{ maxWidth: 150 });
        doc.addPage("a4");
        getHeader(doc);
        doc.addImage("/report/"+locale + "/p9.png", "png", 15, 40, 180, 150);
        //LAST PAGE
         doc.addPage("a4");
         getHeader(doc);
         doc.addImage("/report/const/logo6.png", "png", 145, 40, 60, 15);
         doc.setFontSize(14)
         doc.text("OIC Poland Foundation - Coordinator", 15, 45);
         doc.setFontSize(12)
         doc.text("https://www.oic.lublin.pl/", 15, 55);
         doc.addImage("/report/const/logo3.jpg", "png", 160, 80, 45, 20);
         doc.setFontSize(14)
         doc.text("Eurosuccess Consulting - Cyprus", 15, 85);
         doc.setFontSize(12)
         doc.text("https://www.eurosc.eu/en", 15, 95);
         doc.addImage("/report/const/logo5.png", "png", 180, 120, 20, 20);
         doc.setFontSize(14)
         doc.text("P-Consulting - Greece", 15, 125);
         doc.setFontSize(12)
         doc.text("https://www.p-consulting.gr/", 15, 135);
         doc.addImage("/report/const/logo1.png", "png", 175, 160, 30, 20);
         doc.setFontSize(14)
         doc.text("Patrizio Paoletti Foundation- Italy", 15, 165);
         doc.setFontSize(12)
         doc.text("https://fondazionepatriziopaoletti.org/", 15, 175);
         doc.addImage("/report/const/logo4.jpg", "png", 175, 200, 30, 20);
         doc.setFontSize(14)
         doc.text("Elena Doamna - Romania", 15, 205);
         doc.setFontSize(12)
         doc.text("http://www.edschool.ro/", 15, 215);
         doc.addImage("/report/const/logo2.png", "png", 180, 240, 20, 20);
         doc.setFontSize(14)
         doc.text("Dimotiko Scholeio Agias Napas - Antoni Tsokkou - Cyprus", 15, 245);
         doc.setFontSize(12)
         doc.text("http://dim-ag-napa-amm.schools.ac.cy/", 15, 255);
         doc.text("https://prolearn-project.eu/pl/", 140, 290);

        setTimeout(function(){
            doc.save('report.pdf', {returnPromise: true});
            resolve('resolved'); // resolve is also postponed
            setIsLoading(false);

        }, 8000);
        },)
        

    }

    const submit = () => {
        router.push(`/${locale}/`)
    }
    
    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={24} />
            </div>
            <div className="formContainer">
                <div className="subtitle">
                    {t('done_title')}
                </div>
                <div className="title">
                    {isLoading ? <CircularProgress color='inherit' size={22} />  : <img  height="80" onClick={async () => {generatePdf()}} src="/report-icon.png"/>}
                </div>
            </div>
            <style jsx>
                {`
            .progressContainer {
                padding: 30px 10% 15px 10%;
            }
            img {
                cursor: pointer;
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
                margin-top: 100px;
            }
            .formContainer, .registerButton {
                display: flex;
                flex-flow: column;
            }
            .field {
                width: 50%;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                padding: 25px 0 5px 10%;
            }
            .fieldLabel {
                margin-left: 5px;
                margin-bottom: 10px;
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

export default Done
