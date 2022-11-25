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

const Step19: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isStartTiming, setIsStartTiming] = useState(false);

    const [wordToPoint, setWordToPoints] = useState(t('surprising_colours_red'));

    const [round2WordToPoint, setRound2WordToPoint] = useState(t('surprising_colours_blue'));
    const [round3WordToPoint, setRound3WordToPoint] = useState(t('surprising_colours_green'));
    const [round4WordToPoint, setRound4WordToPoint] = useState(t('surprising_colours_yellow'));
    const [round5WordToPoint, setRound5WordToPoint] = useState(t('surprising_colours_red'));
    const [round6WordToPoint, setRound6WordToPoint] = useState(t('surprising_colours_orange'));
    const [round7WordToPoint, setRound7WordToPoint] = useState(t('surprising_colours_brown'));
    const [round8WordToPoint, setRound8WordToPoint] = useState(t('surprising_colours_green'));
    const [round9WordToPoint, setRound9WordToPoint] = useState(t('surprising_colours_violet'));
    const [round10WordToPoint, setRound10WordToPoint] = useState(t('surprising_colours_blue'));

    const [round, setRound] = useState(0);

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

    const [clickedAnswerColumnLeft, setClickedAnswerColumnLeft] = useState('');
    const [clickedAnswerColumnRight, setClickedAnswerColumnRight] = useState('');

    useEffect(() => {
        if (isStartTiming) {
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
        }
    })

    useEffect(() => {
        const word = document.getElementById('wordToPoint');
        if (round === 1) {
            word?.classList.add('red');
        }
        if (round === 2) {
            word?.classList.remove('red');
            word?.classList.add('yellow');
        }
        if (round === 3) {
            word?.classList.remove('yellow');
            word?.classList.add('blue');
        }
        if (round === 4) {
            word?.classList.remove('blue');
            word?.classList.add('red');
        }
        if (round === 5) {
            word?.classList.remove('red');
            word?.classList.add('pink');
        }
        if (round === 6) {
            word?.classList.remove('pink');
            word?.classList.add('green');
        }
        if (round === 7) {
            word?.classList.remove('green');
            word?.classList.add('orange');
        }
        if (round === 8) {
            word?.classList.remove('orange');
            word?.classList.add('blue');
        }
        if (round === 9) {
            word?.classList.remove('blue');
            word?.classList.add('brown');
        }
        if (round === 10) {
            word?.classList.remove('brown');
            word?.classList.add('red');

        }
    }, [round])

    const submit = () => {
        setIsLoading(true);
        const data = {
            colorsGameRound1Points: round1Points,
            colorsGameRound2Points: round2Points,
            colorsGameRound3Points: round3Points,
            colorsGameRound4Points: round4Points,
            colorsGameRound5Points: round5Points,
            colorsGameRound6Points: round6Points,
            colorsGameRound7Points: round7Points,
            colorsGameRound8Points: round8Points,
            colorsGameRound9Points: round9Points,
            colorsGameRound10Points: round10Points,
            colorsGameRound1MinusPoints: round1MinusPoints,
            colorsGameRound2MinusPoints: round2MinusPoints,
            colorsGameRound3MinusPoints: round3MinusPoints,
            colorsGameRound4MinusPoints: round4MinusPoints,
            colorsGameRound5MinusPoints: round5MinusPoints,
            colorsGameRound6MinusPoints: round6MinusPoints,
            colorsGameRound7MinusPoints: round7MinusPoints,
            colorsGameRound8MinusPoints: round8MinusPoints,
            colorsGameRound9MinusPoints: round9MinusPoints,
            colorsGameRound10MinusPoints: round10MinusPoints,
            colorsGameRound1Time: round1Time,
            colorsGameRound2Time: round2Time,
            colorsGameRound3Time: round3Time,
            colorsGameRound4Time: round4Time,
            colorsGameRound5Time: round5Time,
            colorsGameRound6Time: round6Time,
            colorsGameRound7Time: round7Time,
            colorsGameRound8Time: round8Time,
            colorsGameRound9Time: round9Time,
            colorsGameRound10Time: round10Time,
            step: 'step20'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step20`)).then(() => window.scrollTo(0, 0));
    }

    const startGame = () => {
        setRound(round + 1);
        setIsGameStarted(true);
        setIsStartTiming(true);
    }

    const nextRound = () => {
        checkGame();
        if (round === 1) setWordToPoints(round2WordToPoint);
        if (round === 2) setWordToPoints(round3WordToPoint);
        if (round === 3) setWordToPoints(round4WordToPoint);
        if (round === 4) setWordToPoints(round5WordToPoint);
        if (round === 5) setWordToPoints(round6WordToPoint);
        if (round === 6) setWordToPoints(round7WordToPoint);
        if (round === 7) setWordToPoints(round8WordToPoint);
        if (round === 8) setWordToPoints(round9WordToPoint);
        if (round === 9) setWordToPoints(round10WordToPoint);
        setRound(round + 1);
    }

    const checkGame = () => {
        let points = 0;
        let minusPoints = 0;
        if (clickedAnswerColumnLeft === wordToPoint) {
            points++;
        } else minusPoints++;

        if (clickedAnswerColumnRight === wordToPoint) {
            points++;
        } else minusPoints++;

        if (round === 1) {
            setRound1Points(round1Points + points);
            setRound1MinusPoints(round1MinusPoints + minusPoints);
        }
        if (round === 2) {
            setRound2Points(round2Points + points);
            setRound2MinusPoints(round2MinusPoints + minusPoints);
        }
        if (round === 3) {
            setRound3Points(round3Points + points);
            setRound3MinusPoints(round3MinusPoints + minusPoints);
        }
        if (round === 4) {
            setRound4Points(round4Points + points);
            setRound4MinusPoints(round4MinusPoints + minusPoints);
        }
        if (round === 5) {
            setRound5Points(round5Points + points);
            setRound5MinusPoints(round5MinusPoints + minusPoints);
        }
        if (round === 6) {
            setRound6Points(round6Points + points);
            setRound6MinusPoints(round6MinusPoints + minusPoints);
        }
        if (round === 7) {
            setRound7Points(round7Points + points);
            setRound7MinusPoints(round7MinusPoints + minusPoints);
        }
        if (round === 8) {
            setRound8Points(round8Points + points);
            setRound8MinusPoints(round8MinusPoints + minusPoints);
        }
        if (round === 9) {
            setRound9Points(round9Points + points);
            setRound9MinusPoints(round9MinusPoints + minusPoints);
        }
        if (round === 10) {
            setRound10Points(round10Points + points);
            setRound10MinusPoints(round10MinusPoints + minusPoints);
        }

        setClickedAnswerColumnLeft('');
        setClickedAnswerColumnRight('');
    }

    const selectAnswerColumnLeft = (e) => {
        if (clickedAnswerColumnLeft === '') {
            e.target.style.border = '1px solid black';
            setClickedAnswerColumnLeft(e.target.textContent);
        }
    }

    const selectAnswerColumnRight = (e) => {
        if (clickedAnswerColumnRight === '') {
            e.target.style.border = '1px solid black';
            setClickedAnswerColumnRight(e.target.textContent);
        }
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={13} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('surprising_colours_game_title')}</div>
                <div className="description">{t('surprising_colours_game')}</div>
            </div>}
            {round > 0 && round < 11 &&
                <div className="round"><div className="roundNumber">{t('round')} {round}</div></div>
            }
            {round === 11 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            {isGameStarted && round < 11 &&
                <div className="gameBox">
                    <div className="center"><p>{t('surprising_colours_game_rule')}&nbsp;<span id="wordToPoint"> {wordToPoint}</span>&nbsp; {t('surprising_colours_game_rule_2')}</p></div>
                    <div className="center">
                        <div className="column">
                            {round === 1 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('black')}</div>
                            </div>
                            }
                            {round === 2 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('orange')}</div>
                            </div>
                            }
                            {round === 3 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('green')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('brown')}</div>
                            </div>
                            }
                            {round === 4 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('black')}</div>
                            </div>
                            }
                            {round === 5 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('orange')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('grey')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('green')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                            </div>
                            }
                            {round === 6 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('orange')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('pink')}</div>
                            </div>
                            }
                            {round === 7 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('brown')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('green')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('pink')}</div>
                            </div>
                            }
                            {round === 8 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('orange')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('grey')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('green')}</div>
                            </div>
                            }
                            {round === 9 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('violet')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('green')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('orange')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('brown')}</div>
                            </div>
                            }
                            {round === 10 && <div className="answersBox">
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('green')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('red')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('blue')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('brown')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('orange')}</div>
                                <div onClick={selectAnswerColumnLeft} className="answer">{t('brown')}</div>
                            </div>
                            }
                        </div>
                        <div className="column">
                            {round === 1 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('green')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('white')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('red')}</div>
                            </div>
                            }
                            {round === 2 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('blue')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('brown')}</div>
                            </div>
                            }
                            {round === 3 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('pink')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('red')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('green')}</div>
                            </div>
                            }
                            {round === 4 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer brown">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('red')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('brown')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('pink')}</div>
                            </div>
                            }
                            {round === 5 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('orange')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('red')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('blue')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('violet')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer pink">{t('green')}</div>
                            </div>
                            }
                            {round === 6 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('red')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer pink">{t('orange')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer orange">{t('green')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('violet')}</div>
                            </div>
                            }
                            {round === 7 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('green')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer brown">{t('red')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer orange">{t('violet')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('brown')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('blue')}</div>
                            </div>
                            }
                            {round === 8 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('blue')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('grey')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('green')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('pink')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer pink">{t('orange')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer orange">{t('blue')}</div>
                            </div>
                            }
                            {round === 9 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer pink">{t('orange')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer orange">{t('pink')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('violet')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('blue')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer violet">{t('brown')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('green')}</div>
                            </div>
                            }
                            {round === 10 && <div className="answersBox">
                                <div onClick={selectAnswerColumnRight} className="answer brown">{t('red')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer pink">{t('green')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer yellow">{t('orange')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer blue">{t('yellow')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer orange">{t('pink')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer red">{t('brown')}</div>
                                <div onClick={selectAnswerColumnRight} className="answer green">{t('blue')}</div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            }
            <div className="button">
                {round === 0 && <Button variant="contained" style={{ marginTop: 20 }} color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                    .yellow{
                       color: #ffe438;
                    }
                    .green{
                        color: green;
                    }
                    .blue{
                        color: blue;
                    }
                    .red{
                        color: red;
                   }
                    .violet{
                        color: violet;
                    }
                    .orange{
                        color: orange;
                    }
                    .brown{
                        color: brown;
                    }
                    .grey{
                        color: grey;
                    }
                    .pink{
                        color: pink;
                    }
                    .round{
                        display: flex;
                        justify-content: center;
                        align-items: center; 
                        margin-bottom: 30px;
                    }
                    .answersBox{
                        margin: 20px auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items:center;
                    }
                    .answer{
                        font-size: 20px;
                        margin: 15px;
                        padding: 8px 10px;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 12px;
                        cursor: pointer;
                    }
                    .center{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
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
                        font-size: 15px;
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
                            height: 170px;
                            margin: 20px auto;
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

    );
}

export default Step19;
