import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import AnswersBoxStep13 from './AnswersBoxStep13';
import * as randomStringsGame from '../helpers/constants/randomStringsGame';
import ButtonWithLoader from './ButtonWithLoader';


interface Props {
    exam: any;
}

const Step21: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;

    const [round, setRound] = useState(0);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [round1Point, setRound1Point] = useState(0);
    const [round2Point, setRound2Point] = useState(0);
    const [round3Point, setRound3Point] = useState(0);
    const [round4Point, setRound4Point] = useState(0);
    const [round5Point, setRound5Point] = useState(0);
    const [round6Point, setRound6Point] = useState(0);
    const [round7Point, setRound7Point] = useState(0);
    const [round8Point, setRound8Point] = useState(0);
    const [round9Point, setRound9Point] = useState(0);
    const [round10Point, setRound10Point] = useState(0);

    const [round1MinusPoint, setRound1MinusPoint] = useState(0);
    const [round2MinusPoint, setRound2MinusPoint] = useState(0);
    const [round3MinusPoint, setRound3MinusPoint] = useState(0);
    const [round4MinusPoint, setRound4MinusPoint] = useState(0);
    const [round5MinusPoint, setRound5MinusPoint] = useState(0);
    const [round6MinusPoint, setRound6MinusPoint] = useState(0);
    const [round7MinusPoint, setRound7MinusPoint] = useState(0);
    const [round8MinusPoint, setRound8MinusPoint] = useState(0);
    const [round9MinusPoint, setRound9MinusPoint] = useState(0);
    const [round10MinusPoint, setRound10MinusPoint] = useState(0);

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

    const submit = () => {
        setIsLoading(true);
        const data = {
            stringsGameRound1Points: round1Point,
            stringsGameRound2Points: round2Point,
            stringsGameRound3Points: round3Point,
            stringsGameRound4Points: round4Point,
            stringsGameRound5Points: round5Point,
            stringsGameRound6Points: round6Point,
            stringsGameRound7Points: round7Point,
            stringsGameRound8Points: round8Point,
            stringsGameRound9Points: round9Point,
            stringsGameRound10Points: round10Point,
            stringsGameRound1MinusPoints: round1MinusPoint,
            stringsGameRound2MinusPoints: round2MinusPoint,
            stringsGameRound3MinusPoints: round3MinusPoint,
            stringsGameRound4MinusPoints: round4MinusPoint,
            stringsGameRound5MinusPoints: round5MinusPoint,
            stringsGameRound6MinusPoints: round6MinusPoint,
            stringsGameRound7MinusPoints: round7MinusPoint,
            stringsGameRound8MinusPoints: round8MinusPoint,
            stringsGameRound9MinusPoints: round9MinusPoint,
            stringsGameRound10MinusPoints: round10MinusPoint,
            stringsGameRound1Time: round1Time,
            stringsGameRound2Time: round2Time,
            stringsGameRound3Time: round3Time,
            stringsGameRound4Time: round4Time,
            stringsGameRound5Time: round5Time,
            stringsGameRound6Time: round6Time,
            stringsGameRound7Time: round7Time,
            stringsGameRound8Time: round8Time,
            stringsGameRound9Time: round9Time,
            stringsGameRound10Time: round10Time,
            step: 'step22'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step22`)).then(() => window.scrollTo(0, 0));
    }

    const checkAnswer = (event) => {
        let answer = event.target.textContent.substring(3);
        if (round <= 10) {
            if (answer === correctAnswer) {
                if (round === 1) {
                    setRound1Point(round1Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_2_STRING_2);
                }

                if (round === 2) {
                    setRound2Point(round2Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_3_STRING_3);
                }

                if (round === 3) {
                    setRound3Point(round3Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_4_STRING_4);
                }

                if (round === 4) {
                    setRound4Point(round4Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_5_STRING_5);
                }

                if (round === 5) {
                    setRound5Point(round5Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_6_STRING_6);
                }

                if (round === 6) {
                    setRound6Point(round6Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_7_STRING_7);
                }

                if (round === 7) {
                    setRound7Point(round7Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_8_STRING_8);
                }

                if (round === 8) {
                    setRound8Point(round8Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_9_STRING_9);
                }

                if (round === 9) {
                    setRound9Point(round9Point + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_10_STRING_10);
                }

                if (round === 10) {
                    setRound10Point(round10Point + 1);
                }

            } else {
                if (round === 1) {
                    setRound1MinusPoint(round1MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_2_STRING_2);
                }
                if (round === 2) {
                    setRound2MinusPoint(round2MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_3_STRING_3);
                }
                if (round === 3) {
                    setRound3MinusPoint(round3MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_4_STRING_4);
                }
                if (round === 4) {
                    setRound4MinusPoint(round4MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_5_STRING_5);
                }
                if (round === 5) {
                    setRound5MinusPoint(round5MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_6_STRING_6);
                }
                if (round === 6) {
                    setRound6MinusPoint(round6MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_7_STRING_7);
                }
                if (round === 7) {
                    setRound7MinusPoint(round7MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_8_STRING_8);
                }
                if (round === 8) {
                    setRound8MinusPoint(round8MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_9_STRING_9);
                }
                if (round === 9) {
                    setRound9MinusPoint(round9MinusPoint + 1);
                    setCorrectAnswer(randomStringsGame.ROUND_10_STRING_10);
                }
                if (round === 10) {
                    setRound10MinusPoint(round10MinusPoint + 1);
                }
            }

            setRound(round + 1);
        }
        if (round === 10) {
            setRound(round + 1);
            setIsGameEnd(true);
        }
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

            if (round === 6) {
                setRound6Time(round6Time + 1);
            }

            if (round === 7) {
                setRound7Time(round7Time + 1);
            }

            if (round === 8) {
                setRound8Time(round8Time + 1);
            }

            if (round === 9) {
                setRound9Time(round9Time + 1);
            }

            if (round === 10) {
                setRound10Time(round10Time + 1);
            }
        }, 1000);
    });

    const startGame = () => {
        setRound(1)
        setCorrectAnswer(randomStringsGame.ROUND_1_STRING_1);
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={15} />
            </div>
            {round === 0 && <div className="formContainer">
                <div className="descriptionTitle">{t('string_of_characters_game_title')}</div>
                <div className="description">{t('string_of_characters_game')}</div>
            </div>}
            {round < 11 && round > 0 && <div className="round">
                <div className="gameInformations">{t('round')} {round}</div>
                <div className="description">{t('string_of_characters_rule')}</div>
            </div>}
            <div className="queryContainer">
                {round === 1 && <div className="query"><b>{randomStringsGame.ROUND_1_STRING_1}</b></div>}
                {round === 2 && <div className="query"><b>{randomStringsGame.ROUND_2_STRING_2}</b></div>}
                {round === 3 && <div className="query"><b>{randomStringsGame.ROUND_3_STRING_3}</b></div>}
                {round === 4 && <div className="query"><b>{randomStringsGame.ROUND_4_STRING_4}</b></div>}
                {round === 5 && <div className="query"><b>{randomStringsGame.ROUND_5_STRING_5}</b></div>}
                {round === 6 && <div className="query"><b>{randomStringsGame.ROUND_6_STRING_6}</b></div>}
                {round === 7 && <div className="query"><b>{randomStringsGame.ROUND_7_STRING_7}</b></div>}
                {round === 8 && <div className="query"><b>{randomStringsGame.ROUND_8_STRING_8}</b></div>}
                {round === 9 && <div className="query"><b>{randomStringsGame.ROUND_9_STRING_9}</b></div>}
                {round === 10 && <div className="query"><b>{randomStringsGame.ROUND_10_STRING_10}</b></div>}
            </div>
            <div className="answerContainer">
                <div className="field">
                    {round === 1 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_1_ANSWER_1} answer2={randomStringsGame.ROUND_1_ANSWER_2} answer3={randomStringsGame.ROUND_1_ANSWER_3} answer4={randomStringsGame.ROUND_1_ANSWER_4}></AnswersBoxStep13>}
                    {round === 2 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_2_ANSWER_1} answer2={randomStringsGame.ROUND_2_ANSWER_2} answer3={randomStringsGame.ROUND_2_ANSWER_3} answer4={randomStringsGame.ROUND_2_ANSWER_4}></AnswersBoxStep13>}
                    {round === 3 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_3_ANSWER_1} answer2={randomStringsGame.ROUND_3_ANSWER_2} answer3={randomStringsGame.ROUND_3_ANSWER_3} answer4={randomStringsGame.ROUND_3_ANSWER_4}></AnswersBoxStep13>}
                    {round === 4 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_4_ANSWER_1} answer2={randomStringsGame.ROUND_4_ANSWER_2} answer3={randomStringsGame.ROUND_4_ANSWER_3} answer4={randomStringsGame.ROUND_4_ANSWER_4}></AnswersBoxStep13>}
                    {round === 5 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_5_ANSWER_1} answer2={randomStringsGame.ROUND_5_ANSWER_2} answer3={randomStringsGame.ROUND_5_ANSWER_3} answer4={randomStringsGame.ROUND_5_ANSWER_4}></AnswersBoxStep13>}
                    {round === 6 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_6_ANSWER_1} answer2={randomStringsGame.ROUND_6_ANSWER_2} answer3={randomStringsGame.ROUND_6_ANSWER_3} answer4={randomStringsGame.ROUND_6_ANSWER_4}></AnswersBoxStep13>}
                    {round === 7 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_7_ANSWER_1} answer2={randomStringsGame.ROUND_7_ANSWER_2} answer3={randomStringsGame.ROUND_7_ANSWER_3} answer4={randomStringsGame.ROUND_7_ANSWER_4}></AnswersBoxStep13>}
                    {round === 8 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_8_ANSWER_1} answer2={randomStringsGame.ROUND_8_ANSWER_2} answer3={randomStringsGame.ROUND_8_ANSWER_3} answer4={randomStringsGame.ROUND_8_ANSWER_4}></AnswersBoxStep13>}
                    {round === 9 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_9_ANSWER_1} answer2={randomStringsGame.ROUND_9_ANSWER_2} answer3={randomStringsGame.ROUND_9_ANSWER_3} answer4={randomStringsGame.ROUND_9_ANSWER_4}></AnswersBoxStep13>}
                    {round === 10 && <AnswersBoxStep13 onClick={checkAnswer} answer1={randomStringsGame.ROUND_10_ANSWER_1} answer2={randomStringsGame.ROUND_10_ANSWER_2} answer3={randomStringsGame.ROUND_10_ANSWER_3} answer4={randomStringsGame.ROUND_10_ANSWER_4}></AnswersBoxStep13>}
                    {isGameEnd && <div className="center">
                        <div className="game-end-text">{t('game_end_text_2')}</div>
                    </div>}
                </div>
            </div>
            <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round === 11 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                .round{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center; 
                }
                .gameInformations{
                    text-align: center;
                    margin-bottom: 15px;
                    font-weight: bold;
                    font-size: 18px;
                }
                .center{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .game-end-text{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 20px;
                    padding: 15px 10% 15px 10%;
                    white-space: pre-wrap;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                .gameEndText{
                    font-size: 24px;
                font-weight: bold;
                text-align: center;
                margin: 10px;
                max-width: 80%;
                }
                .progressContainer {
                    padding: 30px 10% 15px 10%;
                }
                .answer {
                    height: 20px;
                }
                .answerContainer{
                    margin: 0 auto;
                }
                .query {
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    font-size: 40px;
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
                    margin: 0 auto;
                    align-items: center;
                    justify-content: center;
                }
                .fieldLabel {
                    margin-left: 5px;
                    margin-bottom: 10px;
                }
                .error {
                    width: 60%;
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
                @media screen and (max-width: 800px){
                    .field{
                        width: 80%;
                    }
                }
                @media screen and (max-width: 600px) {
                    .query{
                        font-size: 30px;
                    }
                    .buttonContainer {
                        padding: 0;
                        margin-bottom: 5px;
                    }
                }
                @media screen and (max-width: 360px) {
                    .field{
                        margin-top: 20px;
                        width: 95%;
                    }
                    .query {
                        font-size: 18px;
                    }
                }
            `}
            </style>
        </div >
    )
}

export default Step21;
