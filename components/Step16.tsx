import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
import ButtonWithLoader from './ButtonWithLoader';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })

interface Props {
    exam: any;
}

const Step16: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);

    const [point, setPoint] = useState(0);
    const [round, setRound] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);
    const [showStartGameButton, setShowStartGameButton] = useState(false);
    const [showBackButton, setShowBackButton] = useState(true);

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


    const submit = () => {
        setIsLoading(true);
        const data = {
            cupGameRound1Points: round1Points,
            cupGameRound2Points: round2Points,
            cupGameRound3Points: round3Points,
            cupGameRound4Points: round4Points,
            cupGameRound5Points: round5Points,
            cupGameRound6Points: round6Points,
            cupGameRound7Points: round7Points,
            cupGameRound8Points: round8Points,
            cupGameRound9Points: round9Points,
            cupGameRound10Points: round10Points,
            cupGameRound1MinusPoints: round1MinusPoints,
            cupGameRound2MinusPoints: round2MinusPoints,
            cupGameRound3MinusPoints: round3MinusPoints,
            cupGameRound4MinusPoints: round4MinusPoints,
            cupGameRound5MinusPoints: round5MinusPoints,
            cupGameRound6MinusPoints: round6MinusPoints,
            cupGameRound7MinusPoints: round7MinusPoints,
            cupGameRound8MinusPoints: round8MinusPoints,
            cupGameRound9MinusPoints: round9MinusPoints,
            cupGameRound10MinusPoints: round10MinusPoints,
            cupGameRound1Time: round1Time,
            cupGameRound2Time: round2Time,
            cupGameRound3Time: round3Time,
            cupGameRound4Time: round4Time,
            cupGameRound5Time: round5Time,
            cupGameRound6Time: round6Time,
            cupGameRound7Time: round7Time,
            cupGameRound8Time: round8Time,
            cupGameRound9Time: round9Time,
            cupGameRound10Time: round10Time,
            step: 'step17'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step17`)).then(() => window.scrollTo(0, 0));
    }

    const displayCursor = () => {
        document.body.style.cursor = 'default';
    }

    const startGame = () => {
        document.body.style.cursor = 'none';
        setPlayVideo(true);
        setShowStartGameButton(false);
        setShowBackButton(false);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (showAnswers) {
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
            }
        }, 1000);
    });

    const onCheckCup = (cup: number) => {
        setPlayVideo(false);
        setShowAnswers(false);
        setShowStartGameButton(true);
        if (round === 1) {
            if (cup === 2) {
                setRound1Points(round1Points + 1);
            } else {
                setRound1MinusPoints(round1MinusPoints + 1);
            }
        }

        if (round === 2) {
            if (cup === 3) {
                setRound2Points(round2Points + 1);
            } else {
                setRound2MinusPoints(round2MinusPoints + 1);
            }
        }

        if (round === 3) {
            if (cup === 3) {
                setRound3Points(round3Points + 1);
            } else {
                setRound3MinusPoints(round3MinusPoints + 1);
            }
        }

        if (round === 4) {
            if (cup === 4) {
                setRound4Points(round4Points + 1);
            } else {
                setRound4MinusPoints(round4MinusPoints + 1);
            }
        }

        if (round === 5) {
            if (cup === 1) {
                setRound5Points(round5Points + 1);
            } else {
                setRound5MinusPoints(round5MinusPoints + 1);
            }
        }

        if (round === 6) {
            if (cup === 3) {
                setRound6Points(round6Points + 1);
            } else {
                setRound6MinusPoints(round6MinusPoints + 1);
            }
        }

        if (round === 7) {
            if (cup === 4) {
                setRound7Points(round7Points + 1);
            } else {
                setRound7MinusPoints(round7MinusPoints + 1);
            }
        }

        if (round === 8) {
            if (cup === 5) {
                setRound8Points(round8Points + 1);
            } else {
                setRound8MinusPoints(round8MinusPoints + 1);
            }
        }

        if (round === 9) {
            if (cup === 3) {
                setRound9Points(round9Points + 1);
            } else {
                setRound9MinusPoints(round9MinusPoints + 1);
            }
        }

        if (round === 10) {
            if (cup === 5) {
                setRound10Points(round10Points + 1);
            } else {
                setRound10MinusPoints(round10MinusPoints + 1);
            }
        }

        setRound(round + 1);
    }

    const [videoWidth, setVideoWidth] = useState(0);

    const getWindowWidth = () => {

        if (window.innerWidth < 700) {
            setVideoWidth(360);
        } else setVideoWidth(640);

    }

    useEffect(() => {
        if (window.innerWidth < 361) {
            setVideoWidth(320);
        }
        if (window.innerWidth >= 700) {
            setVideoWidth(640);
        }

        window.addEventListener('resize', getWindowWidth);
    })

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={10} />
            </div>
            <div className="formContainer">
                {round === 11 && <div className="center">
                    <div className="game-end-text">{t('game_end_text_2')}</div>
                </div>
                }
                {round === 0 && <div className="gameDescription">
                    <div className="descriptionTitle">{t('cups_game_title')}</div>
                    <div className="description">{t('cups_game')}</div>
                </div>}
                {round < 11 && round > 0 && <div className="gameInformations">{t('round')} {round}</div>}
                {round === 1 && <ReactPlayer width={videoWidth} url='/cupgame/easy/3/3e.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 2 && <ReactPlayer width={videoWidth} url='/cupgame/hard/3/3h.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 3 && <ReactPlayer width={videoWidth} url='/cupgame/easy/4/4e.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 4 && <ReactPlayer width={videoWidth} url='/cupgame/hard/4/4h.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 5 && <ReactPlayer width={videoWidth} url='/cupgame/easy/5/5e.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 6 && <ReactPlayer width={videoWidth} url='/cupgame/hard/5/5h.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 7 && <ReactPlayer width={videoWidth} url='/cupgame/easy/6/6e.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 8 && <ReactPlayer width={videoWidth} url='/cupgame/hard/6/6h.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 9 && <ReactPlayer width={videoWidth} url='/cupgame/easy/7/7e.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
                {round === 10 && <ReactPlayer width={videoWidth} url='/cupgame/hard/7/7h.mp4' playing={playVideo} onEnded={() => { setShowAnswers(true); displayCursor(); setShowBackButton(true) }} />}
            </div>
            {showAnswers && <div className="formContainer">{t('cups_game_rule')}</div>}
            {round === 0 && <div className="button">
                <Button variant="contained" color="secondary" style={{ marginBottom: 10 }} onClick={() => { setRound(1); setShowStartGameButton(true) }}>{t('play')}</Button>
            </div>}
            {showAnswers &&
                <div className="buttonAnswers">
                    {round > 0 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(1)}>1</Button></div>}
                    {round > 0 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(2)}>2</Button></div>}
                    {round > 0 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(3)}>3</Button></div>}
                    {round > 2 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(4)}>4</Button></div>}
                    {round > 4 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(5)}>5</Button></div>}
                    {round > 6 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(6)}>6</Button></div>}
                    {round > 8 && <div className="buttonContainer"><Button variant="contained" color="secondary" onClick={() => onCheckCup(7)}>7</Button></div>}
                </div>
            }
            <div className="button">
                {showStartGameButton && round < 11 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round === 11 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
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
                .gameInformations{
                    margin-bottom: 30px;
                    font-weight: bold;
                    font-size: 18px;
                }
                .progressContainer {
                    padding: 30px 10% 15px 10%;
                }
                .answer {
                    height: 20px;
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
                    font-size: 16px;
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
                    padding-top: 30px;
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
                    margin-top: 30px;
                }
                .buttonAnswers {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 10px;
                }
                .buttonContainer {
                    padding: 10px;
                }
                @media screen and (max-width: 600px) {
                    .button {
                        display: flex;
                    }
                    .buttonAnswers{
                        flex-wrap: wrap;
                    }
                    .buttonContainer {
                    padding: 5px;
                    margin-bottom: 5px;
                    
                }
            }
            `}
            </style>
        </div >
    )
}

export default Step16;
