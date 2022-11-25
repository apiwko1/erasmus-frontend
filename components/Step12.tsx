import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
    exam: any;
}

const Step12: React.FC<Props> = ({ exam }) => {
    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [isStartDrawing, setIsStartDrawing] = useState(false);
    const [isShowImageBoard, setIsShowImageBoard] = useState(false);
    const [timeToShowBoard, setTimeToShowBoard] = useState(4000);

    const [round, setRound] = useState(0);
    const round1Squares = [8, 9, 10, 11, 14, 17, 20, 23, 26, 27, 28, 29];
    const round2Squares = [1, 2, 5, 6, 7, 8, 11, 12, 15, 16, 21, 22, 25, 26, 29, 30, 31, 32, 35, 36];
    const round3Squares = [1, 11, 15, 16, 21, 22, 29, 31];
    const round4Squares = [6, 9, 11, 15, 16, 21, 22, 24, 27, 29];
    const round5Squares = [1, 6, 14, 15, 16, 21, 22, 27, 29, 31, 33];

    const [squares, setSquares] = useState<any[]>([]);
    const clearSquares = [];

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

    useEffect(() => {
        if (isStartDrawing) {
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
        }
    })

    const startGame = () => {
        setIsShowImageBoard(true);
        if (round === 0) setRound(round + 1);
    }

    const submit = () => {
        setIsLoading(true);
        const data = {
            schemesGameRound1Points: round1Points,
            schemesGameRound2Points: round2Points,
            schemesGameRound3Points: round3Points,
            schemesGameRound4Points: round4Points,
            schemesGameRound5Points: round5Points,
            schemesGameRound1MinusPoints: round1MinusPoints,
            schemesGameRound2MinusPoints: round2MinusPoints,
            schemesGameRound3MinusPoints: round3MinusPoints,
            schemesGameRound4MinusPoints: round4MinusPoints,
            schemesGameRound5MinusPoints: round5MinusPoints,
            schemesGameRound1Time: round1Time,
            schemesGameRound2Time: round2Time,
            schemesGameRound3Time: round3Time,
            schemesGameRound4Time: round4Time,
            schemesGameRound5Time: round5Time,
            step: 'step13'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step13`)).then(() => window.scrollTo(0, 0));
    }

    useEffect(() => {
        if (isShowImageBoard) {
            document.body.style.cursor = 'none';
            setTimeout(() => {
                setIsShowImageBoard(false);
                document.body.style.cursor = 'default';
                setIsStartDrawing(true);
                setTimeToShowBoard(timeToShowBoard + 2000);
            }, timeToShowBoard)
        }
    })

    const onClickHandler = (e) => {
        const squareId = e.target.id;
        if (squares.includes(squareId)) {
            const deleteElement = document.getElementById(squareId.toString());
            const clickedSquareIndex = squares.findIndex(element => element === squareId);
            deleteElement.style.background = 'none';
            squares.splice(clickedSquareIndex, 1);
            return;
        }
        e.target.style.background = "#1B1464";
        squares.push(squareId);
    }

    const nextRound = () => {
        checkGame();
        setIsStartDrawing(false);
        setRound(round + 1);
    }

    const checkGame = () => {
        let points;
        let minusPoints;
        if (round === 1) {
            const filteredArray = round1Squares.filter(value => squares.includes(value.toString()));
            points = filteredArray.length;
            minusPoints = squares.length - filteredArray.length;
            setRound1Points(round1Points + points);
            setRound1MinusPoints(round1MinusPoints + minusPoints);
        }
        if (round === 2) {
            const filteredArray = round2Squares.filter(value => squares.includes(value.toString()));
            points = filteredArray.length;
            minusPoints = squares.length - filteredArray.length;
            setRound2Points(round2Points + points);
            setRound2MinusPoints(round2MinusPoints + minusPoints);
        }
        if (round === 3) {
            const filteredArray = round3Squares.filter(value => squares.includes(value.toString()));
            points = filteredArray.length;
            minusPoints = squares.length - filteredArray.length;
            setRound3Points(round3Points + points);
            setRound3MinusPoints(round3MinusPoints + minusPoints);
        }
        if (round === 4) {
            const filteredArray = round4Squares.filter(value => squares.includes(value.toString()));
            points = filteredArray.length;
            minusPoints = squares.length - filteredArray.length;
            setRound4Points(round4Points + points);
            setRound4MinusPoints(round4MinusPoints + minusPoints);
        }
        if (round === 5) {
            const filteredArray = round5Squares.filter(value => squares.includes(value.toString()));
            points = filteredArray.length;
            minusPoints = squares.length - filteredArray.length;
            setRound5Points(round5Points + points);
            setRound5MinusPoints(round5MinusPoints + minusPoints);
        }
        setSquares(clearSquares);
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={7} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('schemes_game_title')}</div>
                <div className="description">{t('schemes_game')}</div>
            </div>}
            {round > 0 && round < 6 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    {locale !== 'pl' && <div className="gameRule">{t('schemes_game_rule')}</div>}
                    {locale === 'pl' && !isStartDrawing && <div className="gameRule">{t('schemes_game_rule')}</div>}
                    {locale === 'pl' && isStartDrawing && <div className="gameRule">{t('schemes_game_rule_2')}</div>}
                </div>
            }
            {round === 6 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            <div className="center">
                {round === 1 && isShowImageBoard && <img height="360" src="/schemes-game/1.png" />}
                {round === 2 && isShowImageBoard && <img height="360" src="/schemes-game/2.png" />}
                {round === 3 && isShowImageBoard && <img height="360" src="/schemes-game/3.png" />}
                {round === 4 && isShowImageBoard && <img height="360" src="/schemes-game/4.png" />}
                {round === 5 && isShowImageBoard && <img height="360" src="/schemes-game/5.png" />}
            </div>
            {isStartDrawing && <div className="center">
                <div className="board">
                    <div className="row">
                        <div id='1' className="row1 rowElement" onClick={onClickHandler}></div>
                        <div id='2' className="row1 rowElement" onClick={onClickHandler}></div>
                        <div id='3' className="row1 rowElement" onClick={onClickHandler}></div>
                        <div id='4' className="row1 rowElement" onClick={onClickHandler}></div>
                        <div id='5' className="row1 rowElement" onClick={onClickHandler}></div>
                        <div id='6' className="row1 rowElement" onClick={onClickHandler}></div>
                    </div>
                    <div className="row">
                        <div id='7' className="rowElement" onClick={onClickHandler}></div>
                        <div id='8' className="rowElement" onClick={onClickHandler}></div>
                        <div id='9' className="rowElement" onClick={onClickHandler}></div>
                        <div id='10' className="rowElement" onClick={onClickHandler}></div>
                        <div id='11' className="rowElement" onClick={onClickHandler}></div>
                        <div id='12' className="rowElement" onClick={onClickHandler}></div>
                    </div>
                    <div className="row">
                        <div id='13' className="rowElement" onClick={onClickHandler}></div>
                        <div id='14' className="rowElement" onClick={onClickHandler}></div>
                        <div id='15' className="rowElement" onClick={onClickHandler}></div>
                        <div id='16' className="rowElement" onClick={onClickHandler}></div>
                        <div id='17' className="rowElement" onClick={onClickHandler}></div>
                        <div id='18' className="rowElement" onClick={onClickHandler}></div>
                    </div>
                    <div className="row">
                        <div id='19' className="rowElement" onClick={onClickHandler}></div>
                        <div id='20' className="rowElement" onClick={onClickHandler}></div>
                        <div id='21' className="rowElement" onClick={onClickHandler}></div>
                        <div id='22' className="rowElement" onClick={onClickHandler}></div>
                        <div id='23' className="rowElement" onClick={onClickHandler}></div>
                        <div id='24' className="rowElement" onClick={onClickHandler}></div>
                    </div>
                    <div className="row">
                        <div id='25' className="rowElement" onClick={onClickHandler}></div>
                        <div id='26' className="rowElement" onClick={onClickHandler}></div>
                        <div id='27' className="rowElement" onClick={onClickHandler}></div>
                        <div id='28' className="rowElement" onClick={onClickHandler}></div>
                        <div id='29' className="rowElement" onClick={onClickHandler}></div>
                        <div id='30' className="rowElement" onClick={onClickHandler}></div>
                    </div>
                    <div className="row">
                        <div id='31' className="rowElement" onClick={onClickHandler}></div>
                        <div id='32' className="rowElement" onClick={onClickHandler}></div>
                        <div id='33' className="rowElement" onClick={onClickHandler}></div>
                        <div id='34' className="rowElement" onClick={onClickHandler}></div>
                        <div id='35' className="rowElement" onClick={onClickHandler}></div>
                        <div id='36' className="rowElement" onClick={onClickHandler}></div>
                    </div>
                </div>
            </div>}
            <div className="button">

            </div>
            <div className="button">
                {!isShowImageBoard && !isStartDrawing && round < 6 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 6 && isStartDrawing && <div><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 6 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                    .round{
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center; 
                        margin-bottom: 30px;
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
                    .board{
                        margin-top: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column;

                    }
                    .row {
                        display: flex;
                        flex-flow: row;
                        width: 360px;
                        height: 60px;
                    }
                    .row .rowElement:nth-child(1){
                        border-left: solid 4px #1B1464;
                    }
                    .row .rowElement:nth-child(6){
                        border-right: solid 4px #1B1464;
                    }
                    .row:nth-child(1) .rowElement{
                        border-top: solid 4px #1B1464;
                    }
                    .row:nth-child(6) .rowElement{
                        border-bottom: solid 4px #1B1464;
                    }
                    .rowElement {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 100%;
                        cursor: pointer;
                        transition: 0.2s;
                        box-sizing: border-box;
                        border: solid 2px #1B1464;
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
                    @media screen and (max-width: 360px){
                        .row{
                            width: 240px;
                            height: 40px;
                        }
                        .center img{
                            height: 240px;
                        }
                    }
                    @media screen and (max-width: 600px) {
                        .answersBox{
                            margin: 20px auto;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items:center;
                            flex-wrap: wrap;
                        }
                        .answer{
                            font-size: 18px;
                            margin: 5px;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80px;
                            border-radius: 12px;
                            cursor: pointer;
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
            `}
            </style>
        </div>
    )
}

export default Step12;