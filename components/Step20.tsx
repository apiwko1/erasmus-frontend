import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import ButtonWithLoader from './ButtonWithLoader';
import { answersRound1, answersRound2, answersRound3, answersRound4, answersRound5, answersRound6, answersRound7, answersRound8, answersRound9, answersRound10 } from '../helpers/constants/missingPartsGameImages';

interface Props {
    exam: any;
}

const Step20: React.FC<Props> = ({ exam }) => {
    const [round, setRound] = useState(0);

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerClicked, setIsAnswerClicked] = useState(false);

    const [round1Points, setRound1Points] = useState(0);
    const [round2Points, setRound2Points] = useState(0);
    const [round3Points, setRound3Points] = useState(0);
    const [round4Points, setRound4Points] = useState(0);
    const [round5Points, setRound5Points] = useState(0);
    const [round6Points, setRound6Points] = useState(0);
    const [round7Points, setRound7Points] = useState(0);
    const [round8Points, setRound8Points] = useState(0);
    const [round9Points, setRound9Points] = useState(0);
    const [round10Points, setRound10Points] = useState(0);

    const [round1MinusPoints, setRound1MinusPoints] = useState(0);
    const [round2MinusPoints, setRound2MinusPoints] = useState(0);
    const [round3MinusPoints, setRound3MinusPoints] = useState(0);
    const [round4MinusPoints, setRound4MinusPoints] = useState(0);
    const [round5MinusPoints, setRound5MinusPoints] = useState(0);
    const [round6MinusPoints, setRound6MinusPoints] = useState(0);
    const [round7MinusPoints, setRound7MinusPoints] = useState(0);
    const [round8MinusPoints, setRound8MinusPoints] = useState(0);
    const [round9MinusPoints, setRound9MinusPoints] = useState(0);
    const [round10MinusPoints, setRound10MinusPoints] = useState(0);

    const [round1Time, setRound1Time] = useState(0);
    const [round2Time, setRound2Time] = useState(0);
    const [round3Time, setRound3Time] = useState(0);
    const [round4Time, setRound4Time] = useState(0);
    const [round5Time, setRound5Time] = useState(0);
    const [round6Time, setRound6Time] = useState(0);
    const [round7Time, setRound7Time] = useState(0);
    const [round8Time, setRound8Time] = useState(0);
    const [round9Time, setRound9Time] = useState(0);
    const [round10Time, setRound10Time] = useState(0);

    useEffect(() => {
        if (round === 1) {
            setTimeout(() => {
                setRound1Time(round1Time + 1);
            }, 1000)
        }
        if (round === 2) {
            setTimeout(() => {
                setRound2Time(round2Time + 1);
            }, 1000)
        }
        if (round === 3) {
            setTimeout(() => {
                setRound3Time(round3Time + 1);
            }, 1000)
        }
        if (round === 4) {
            setTimeout(() => {
                setRound4Time(round4Time + 1);
            }, 1000)
        }
        if (round === 5) {
            setTimeout(() => {
                setRound5Time(round5Time + 1);
            }, 1000)
        }
        if (round === 6) {
            setTimeout(() => {
                setRound6Time(round6Time + 1);
            }, 1000)
        }
        if (round === 7) {
            setTimeout(() => {
                setRound7Time(round7Time + 1);
            }, 1000)
        }
        if (round === 8) {
            setTimeout(() => {
                setRound8Time(round8Time + 1);
            }, 1000)
        }
        if (round === 9) {
            setTimeout(() => {
                setRound9Time(round9Time + 1);
            }, 1000)
        }
        if (round === 10) {
            setTimeout(() => {
                setRound10Time(round10Time + 1);
            }, 1000)
        }
    })

    const submit = () => {
        setIsLoading(true);
        const data = {
            missingPartsGameRound1Points: round1Points,
            missingPartsGameRound2Points: round2Points,
            missingPartsGameRound3Points: round3Points,
            missingPartsGameRound4Points: round4Points,
            missingPartsGameRound5Points: round5Points,
            missingPartsGameRound6Points: round6Points,
            missingPartsGameRound7Points: round7Points,
            missingPartsGameRound8Points: round8Points,
            missingPartsGameRound9Points: round9Points,
            missingPartsGameRound10Points: round10Points,
            missingPartsGameRound1MinusPoints: round1MinusPoints,
            missingPartsGameRound2MinusPoints: round2MinusPoints,
            missingPartsGameRound3MinusPoints: round3MinusPoints,
            missingPartsGameRound4MinusPoints: round4MinusPoints,
            missingPartsGameRound5MinusPoints: round5MinusPoints,
            missingPartsGameRound6MinusPoints: round6MinusPoints,
            missingPartsGameRound7MinusPoints: round7MinusPoints,
            missingPartsGameRound8MinusPoints: round8MinusPoints,
            missingPartsGameRound9MinusPoints: round9MinusPoints,
            missingPartsGameRound10MinusPoints: round10MinusPoints,
            missingPartsGameRound1Time: round1Time,
            missingPartsGameRound2Time: round2Time,
            missingPartsGameRound3Time: round3Time,
            missingPartsGameRound4Time: round4Time,
            missingPartsGameRound5Time: round5Time,
            missingPartsGameRound6Time: round6Time,
            missingPartsGameRound7Time: round7Time,
            missingPartsGameRound8Time: round8Time,
            missingPartsGameRound9Time: round9Time,
            missingPartsGameRound10Time: round10Time,
            step: 'step21'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step21`)).then(() => window.scrollTo(0, 0));
    }
    const startGame = () => {
        setRound(1);
    }
    const nextRound = () => {
        setIsAnswerClicked(false);
        checkGame();
        setSelectedAnswer(null);
        setRound(round + 1);
    }
    const checkGame = () => {
        if (selectedAnswer === null) {
            if (round === 1) setRound1MinusPoints(round1Points + 1);
            if (round === 2) setRound2MinusPoints(round2Points + 1);
            if (round === 3) setRound3MinusPoints(round3Points + 1);
            if (round === 4) setRound4MinusPoints(round4Points + 1);
            if (round === 5) setRound5MinusPoints(round5Points + 1);
            if (round === 6) setRound6MinusPoints(round6Points + 1);
            if (round === 7) setRound7MinusPoints(round7Points + 1);
            if (round === 8) setRound8MinusPoints(round8Points + 1);
            if (round === 9) setRound9MinusPoints(round9Points + 1);
            if (round === 10) setRound10MinusPoints(round10Points + 1);
            return
        };

        const answer = selectedAnswer;

        if (!answer.getAttribute('src').includes('correct')) {
            if (round === 1) setRound1MinusPoints(round1Points + 1);
            if (round === 2) setRound2MinusPoints(round2Points + 1);
            if (round === 3) setRound3MinusPoints(round3Points + 1);
            if (round === 4) setRound4MinusPoints(round4Points + 1);
            if (round === 5) setRound5MinusPoints(round5Points + 1);
            if (round === 6) setRound6MinusPoints(round6Points + 1);
            if (round === 7) setRound7MinusPoints(round7Points + 1);
            if (round === 8) setRound8MinusPoints(round8Points + 1);
            if (round === 9) setRound9MinusPoints(round9Points + 1);
            if (round === 10) setRound10MinusPoints(round10Points + 1);
            return
        };

        if (round === 1) setRound1Points(round1Points + 1);
        if (round === 2) setRound2Points(round2Points + 1);
        if (round === 3) setRound3Points(round3Points + 1);
        if (round === 4) setRound4Points(round4Points + 1);
        if (round === 5) setRound5Points(round5Points + 1);
        if (round === 6) setRound6Points(round6Points + 1);
        if (round === 7) setRound7Points(round7Points + 1);
        if (round === 8) setRound8Points(round8Points + 1);
        if (round === 9) setRound9Points(round9Points + 1);
        if (round === 10) setRound10Points(round10Points + 1);
    }

    const selectAnswer = (e) => {
        setIsAnswerClicked(true);
        if (selectedAnswer != null) selectedAnswer.style.boxShadow = 'none';
        const answer = e.target;
        answer.style.boxShadow = '0px 0px 2px 4px #C51162';
        setSelectedAnswer(answer);
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={14} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('missing_objects_game_title')}</div>
                <div className="description">{t('missing_objects_game')}</div>
            </div>}
            {round > 0 && round < 11 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    <div className="description">{t('missing_objects_rule_2')}</div>
                </div>
            }
            {round === 11 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            <div className="center">
                {round === 1 && <img height="360" src="/missing-parts-game/1/1.png" />}
                {round === 2 && <img height="360" src="/missing-parts-game/2/2.png" />}
                {round === 3 && <img height="360" src="/missing-parts-game/3/3.png" />}
                {round === 4 && <img height="360" src="/missing-parts-game/4/4.png" />}
                {round === 5 && <img height="360" src="/missing-parts-game/5/5.png" />}
                {round === 6 && <img height="360" src="/missing-parts-game/6/6.png" />}
                {round === 7 && <img height="360" src="/missing-parts-game/7/7.png" />}
                {round === 8 && <img height="360" src="/missing-parts-game/8/8.png" />}
                {round === 9 && <img height="360" src="/missing-parts-game/9/9.png" />}
                {round === 10 && <img height="360" src="/missing-parts-game/10/10.png" />}
            </div>
            {round > 0 && round < 11 && <div className="answersBox">
                {round === 1 && answersRound1.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 2 && answersRound2.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 3 && answersRound3.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 4 && answersRound4.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 5 && answersRound5.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 6 && answersRound6.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 7 && answersRound7.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 8 && answersRound8.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 9 && answersRound9.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
                {round === 10 && answersRound10.map((answer, index) => {
                    return (<div key={index} className="answer"><img onClick={selectAnswer} height="80" key={index} src={answer} /></div>);
                })}
            </div>}
            {isAnswerClicked && <div className="center">
                <div className="gameRule">{t('missing_objects_rule')}</div>
            </div>}
            <div className="button">
                {round === 0 && <Button variant="contained" style={{ marginTop: 20 }} color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`  
                    .gameRule{
                        margin-top: 20px;
                        font-size: 18px;
                        text-align: center;
                    }
                    .answersBox{
                        margin: 10px auto;
                        margin-top: 40px;
                        margin-bottom: 50px;
                        display: flex;
                        justify-content: center;
                        align-items:center;
                    }
                    .answer{
                        margin: 20px 15px;
                        cursor: pointer;
                    }
                    .round{
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center; 
                    }
                    .roundNumber{
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 50%;
                    }
                    .center{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .gameBox{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .column{
                        border: 2px solid black;
                        width: 200px;
                        height: 460px;
                        margin: 30px 40px;
                        display: flex;
                    }

                    .roundNumber{
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 50%;
                    }
                    .gameEndText{
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 80%;
                    }
                    .card {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex: 1 0 21%; /* explanation below */
                        margin: 10px 0;
                    }
                    .box-container{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 120px;
                        width: 100%;
                    }
                    .box-container .box{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        height: 220px;
                        width: 100px;
                        border solid 2px;
                        margin: 0 5px;
                    }
                    .button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 40px;
                    }
                    .progressContainer {
                        padding: 30px 10% 15px 10%;
                    }
                    .answer {
                        height: 20px;
                    }
                    .query {
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        font-size: 40px;
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
                        font-size: 17px;
                        padding: 15px 10% 15px 10%;
                        white-space: pre-wrap;
                        margin-bottom: 20px;
                    }
                    .game-end-text{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        font-size: 30px;
                        padding: 15px 10% 15px 10%;
                        white-space: pre-wrap;
                        margin-bottom: 20px;
                        font-weight: bold;
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
                        padding-top: 70px;
                    }
                    .stories {
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: center;
                        align-items: center;
                        border: solid 1px black;
                        padding-bottom: 145px;
                    }
                    .stories img {
                        cursor: pointer;
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
                    .handle {
                        width: 120px;
                    }
                    @media screen and (max-width: 1130px){
                        .guests-container {
                            display: flex;
                            flex-direction: column;
                        }
                        .guest{
                            margin: 20px;
                        }
                    }
                    @media screen and (max-width: 800px){
                        .order{
                            width: 90%;
                        }
                        .order img{
                            max-width: 100%;
                        }
                        .roundNumber{
                            font-size: 20px;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        .gameRule{
                            font-size: 14px;
                        }
                        .answersBox{
                            margin-top: 30px;
                            margin-bottom: 40px;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items:center;
                            flex-wrap: wrap;
                            text-align: center;
                        }
                        .answer{
                            margin: 10px 10px;
                        }
                        .answer img {
                            height: 60px;
                            margin:
                        }
                        .center{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                        .gameBox{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            font-size: 20px;
                            font-weight: bold;
                        }
                        .column{
                            border: 2px solid black;
                            width: 340px;
                            height: 200px;
                            margin: 20px;
                            display: flex;
                        }
                        .meals{
                            width: 100%;
                        }
                        .meal img{
                            height: 50px;
                        }
                        .personImg{
                            width: 150px;
                            height: 150px;
                        }
                        .box-container .box{
                            width: 60px;
                            height: 140px;
                        }
                        .buttonContainer {
                            padding: 0;
                            margin-bottom: 5px;
                        }
                        .handle {
                            width: 60px;
                        }
                    }
                    @media screen and (max-width: 360px) {
                        .answer img{
                            width: 50px;
                            height: 50px;
                        }
                        img{
                            width: 320px;
                            height: 320px;
                        }
                    }
            `}
            </style>
        </div>
    )
}

export default Step20;
