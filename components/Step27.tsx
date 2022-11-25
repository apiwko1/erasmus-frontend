import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import ButtonWithLoader from './ButtonWithLoader';



interface Props {
    exam: any;
}

const Step27: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);

    const [round, setRound] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [userAnswer, setUserAnswer] = useState([]);

    const [round1Points, setRound1Points] = useState(0);
    const [round2Points, setRound2Points] = useState(0);
    const [round3Points, setRound3Points] = useState(0);
    const [round4Points, setRound4Points] = useState(0);
    const [round5Points, setRound5Points] = useState(0);

    const [round1MinusPoints, setRound1MinusPoints] = useState(0);
    const [round2MinusPoints, setRound2MinusPoints] = useState(0);
    const [round3MinusPoints, setRound3MinusPoints] = useState(0);
    const [round4MinusPoints, setRound4MinusPoints] = useState(0);
    const [round5MinusPoints, setRound5MinusPoints] = useState(0);

    const [round1Time, setRound1Time] = useState(0);
    const [round2Time, setRound2Time] = useState(0);
    const [round3Time, setRound3Time] = useState(0);
    const [round4Time, setRound4Time] = useState(0);
    const [round5Time, setRound5Time] = useState(0);

    const submit = () => {
        setIsLoading(true);
        const data = {
            scalesGameRound1Points: round1Points,
            scalesGameRound2Points: round2Points,
            scalesGameRound3Points: round3Points,
            scalesGameRound4Points: round4Points,
            scalesGameRound5Points: round5Points,
            scalesGameRound1MinusPoints: round1MinusPoints,
            scalesGameRound2MinusPoints: round2MinusPoints,
            scalesGameRound3MinusPoints: round3MinusPoints,
            scalesGameRound4MinusPoints: round4MinusPoints,
            scalesGameRound5MinusPoints: round5MinusPoints,
            scalesGameRound1Time: round1Time,
            scalesGameRound2Time: round2Time,
            scalesGameRound3Time: round3Time,
            scalesGameRound4Time: round4Time,
            scalesGameRound5Time: round5Time,
            step: 'step28'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step28`)).then(() => window.scrollTo(0, 0));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (round === 1) {
                setRound1Time(round1Time + 1);
            }

            if (round === 2) {
                setRound2Time(round2Time + 1);
            }

            if (round === 3) {
                setRound3Time(round3Time + 1);
            }

            if (round === 4) {
                setRound4Time(round4Time + 1);
            }

            if (round === 5) {
                setRound5Time(round5Time + 1);
            }
        }, 1000);
    });


    const handleAnswer = (isGood = false) => {
        setRound(round + 1);
        if (isGood) {
            if (round === 1) setRound1Points(round1Points + 1);
            if (round === 2) setRound2Points(round2Points + 1);
            if (round === 3) setRound3Points(round3Points + 1);
            if (round === 4) setRound4Points(round4Points + 1);
            if (round === 5) setRound5Points(round5Points + 1);
        } else {
            if (round === 1) setRound1MinusPoints(round1MinusPoints + 1);
            if (round === 2) setRound2MinusPoints(round2MinusPoints + 1);
            if (round === 3) setRound3MinusPoints(round3MinusPoints + 1);
            if (round === 4) setRound4MinusPoints(round4MinusPoints + 1);
            if (round === 5) setRound5MinusPoints(round5MinusPoints + 1);
        }

        if (round > 4) {
            setRound(round + 1)
        }
    }


    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={21} />
            </div>

            {round === 6 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }

            <div className="formContainer">
                {round === 0 && <div className="gameDescription">
                    <div className="descriptionTitle">{t('scales_game_title')}</div>
                    <div className="description">{t('scales_game')}</div>
                </div>}
                {round < 6 && round > 0 && <div className="gameInformations">{t('round')} {round}</div>}
                {round === 1 && <div className="query"><img src="/scales/1/1r.png" /></div>}
                {round === 2 && <div className="query"><img src="/scales/2/2r.png" /></div>}
                {round === 3 && <div className="query"><img src="/scales/3/3r.png" /></div>}
                {round === 4 && <div className="query"><img src="/scales/4/4r.png" /></div>}
                {round === 5 && <div className="query"><img src="/scales/5/5r.png" /></div>}

                {round === 1 && <div className="query"><img src="/scales/1/1.png" /></div>}
                {round === 2 && <div className="query"><img src="/scales/2/2.png" /></div>}
                {round === 3 && <div className="query"><img src="/scales/3/3.png" /></div>}
                {round === 4 && <div className="query"><img src="/scales/4/4.png" /></div>}
                {round === 5 && <div className="query"><img src="/scales/5/5.png" /></div>}
            </div>

            {round < 6 && round > 0 &&
                <div className="selectPartContainer">
                    {t('scales_game_rule')}
                </div>
            }

            {round === 1 &&
                <div className="answerButton">
                    <div className="resolveButton" onClick={() => handleAnswer(true)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/1/1t.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/1/1f1.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/1/1f2.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/1/1f3.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/1/1f4.png" /></div>
                </div>
            }

            {round === 2 &&
                <div className="answerButton">
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/2/2f1.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/2/2f2.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(true)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/2/2t.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/2/2f3.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/2/2f4.png" /></div>
                </div>
            }

            {
                round === 3 &&
                <div className="answerButton">
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/3/3f1.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/3/3f2.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(true)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/3/3t.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/3/3f3.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/3/3f4.png" /></div>

                </div>
            }

            {
                round === 4 &&
                <div className="answerButton">
                    <div className="resolveButton" onClick={() => handleAnswer(true)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/4/4t.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/4/4f1.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/4/4f2.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/4/4f3.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/4/4f4.png" /></div>
                </div>
            }

            {
                round === 5 &&
                <div className="answerButton">
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/5/5f1.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/5/5f2.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/5/5f3.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(false)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/5/5f4.png" /></div>
                    <div className="resolveButton" onClick={() => handleAnswer(true)} style={{ marginRight: 10, marginTop: 10 }}><img src="/scales/5/5t.png" /></div>
                </div>
            }
            <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={() => setRound(round + 1)}>{t('start_game')}</Button>}
                {round === 6 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
            .gameInformations{
                margin-bottom: 30px;
                font-weight: bold;
                font-size: 18px;
            }
            .selectPartContainer{
                margin: 20px auto;
                text-align: center;
            }
            .query img{
                width: 400px;
            }
            .progressContainer {
                padding: 30px 10% 15px 10%;
            }
            .answer {
                height: 20px;
            }
            .answerButton{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .resolveButton {
                cursor: pointer;
                margin: 20px 50px;

            }
            .resolveButton img{
                width: 160px;
            }
            .query {
                display: flex;
                justify-content: center;
                text-align: center;
                margin-bottom: 20px;
            }
            .gameDescription{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
            .descriptionTitle{
                font-size: 20px;
                font-weight: bold;
            }
            .description {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-size: 16px;
                padding: 15px 10% 15px 10%;
                white-space: pre-wrap;
                margin-bottom: 20px;
            }
            .center{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .gameEndText{
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                margin: 10px;
                max-width: 80%;
            }
            .correct {
                display: flex;
                margin-top: 20px;
                justify-content: center;
                font-size: 18px;
                font-weight: 800;
                color: green;
                padding: 15px 10% 15px 10%;
            }
            .fail {
                display: flex;
                margin-top: 20px;
                justify-content: center;
                font-size: 18px;
                font-weight: 800;
                color: red;
                padding: 15px 10% 15px 10%;
            }
            .roundTitle {
                margin-bottom: 0; 
                margin-top: 20px;
            }
            .row {
                display: flex;
                flex-flow: row;
                width: 300px;
                height: 60px;
                border: solid 1px black;
                border-bottom: none;
                border-top: none;
            }
            .row + .row {
                border-top: solid 1px black;
            }
            .row:last-child {
                border-bottom: solid 1px black;
            }
            .row:first-child {
                border-top: solid 1px black;
            }
            .element {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
                cursor: pointer;
                transition: 0.3s;
            }
            .element:hover {
               background-color: #e6e6e6;
            }
            .element + .element {
                border-left: solid 1px black;
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
                display: flex;
                padding-top: 20px;
            }
            .formContainer, .registerButton {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column;
            }
            .field {
                width: 50%;
                flex-flow: column;
                align-items: center;
                justify-content: center;
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
                margin-top: 20px;
            }
            .buttonContainer {
                padding: 10px;
            }
            @media screen and (max-width: 600px) {
                .buttonContainer {
                    padding: 0;
                    margin-bottom: 5px;
                }
            }
            @media screen and (max-width: 360px) {
                .query img{
                    width: 320px;
                }
                .resolveButton img{
                    width: 100px;
                }
            }
            `}
            </style>
        </div >
    )
}

export default Step27;
