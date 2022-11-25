import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import LinearProgressBar from './LinearProgressBar';
import ButtonWithLoader from './ButtonWithLoader';

interface Props {
    exam: any;
}

const Step11: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;

    const [isLoading, setIsLoading] = useState(false);
    const timeForSetNextRound = 3000;
    const [cursors, setCursors] = useState([]);
    const clearCursors = [];
    const [startGame, setStartGame] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showBackButton, setShowBackButton] = useState(true);
    const [displayGameEndText, setDisplayGameEndText] = useState(false);

    const round1 = [2, 6, 7];
    const [round1Points, setRound1Points] = useState(0);
    const round1SignDisappearTime = 2000 + timeForSetNextRound;
    const round2 = [2, 8, 9, 11];
    const [round2Points, setRound2Points] = useState(0);
    const round2SignDisappearTime = 3000 + timeForSetNextRound;
    const round3 = [1, 4, 6, 12, 13];
    const [round3Points, setRound3Points] = useState(0);
    const round3SignDisappearTime = 4000 + timeForSetNextRound;
    const round4 = [2, 5, 7, 14, 16, 18];
    const [round4Points, setRound4Points] = useState(0);
    const round4SignDisappearTime = 5000 + timeForSetNextRound;
    const round5 = [2, 3, 10, 13, 19, 21, 22];
    const [round5Points, setRound5Points] = useState(0);
    const round5SignDisappearTime = 6000 + timeForSetNextRound;
    const round6 = [1, 4, 11, 18, 20, 23, 26, 29];
    const [round6Points, setRound6Points] = useState(0);
    const round6SignDisappearTime = 7000 + timeForSetNextRound;
    const round7 = [4, 8, 11, 13, 24, 26, 27, 31, 35];
    const [round7Points, setRound7Points] = useState(0);
    const round7SignDisappearTime = 8000 + timeForSetNextRound;
    const round8 = [1, 3, 15, 23, 25, 26, 34, 37, 39, 42];
    const [round8Points, setRound8Points] = useState(0);
    const round8SignDisappearTime = 9000 + timeForSetNextRound;
    const round9 = [6, 8, 12, 16, 20, 25, 30, 37, 39, 46, 47];
    const [round9Points, setRound9Points] = useState(0);
    const round9SignDisappearTime = 10000 + timeForSetNextRound;
    const round10 = [3, 11, 13, 18, 26, 29, 37, 40, 44, 47, 51];
    const [round10Points, setRound10Points] = useState(0);
    const round10SignDisappearTime = 11000 + timeForSetNextRound;

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
    const [round, setRound] = useState(1);
    const [startTiming, setStartTiming] = useState(false);

    const boardCursorStyle = {
        cursor: startGame ? startTiming ? 'pointer' : 'none' : 'default',
    }

    const submit = () => {
        setIsLoading(true);
        const data = {
            triangleGameRound1Time: round1Time,
            triangleGameRound2Time: round2Time,
            triangleGameRound3Time: round3Time,
            triangleGameRound4Time: round4Time,
            triangleGameRound5Time: round5Time,
            triangleGameRound6Time: round6Time,
            triangleGameRound7Time: round7Time,
            triangleGameRound8Time: round8Time,
            triangleGameRound9Time: round9Time,
            triangleGameRound10Time: round10Time,
            triangleGameRound1Points: round1Points,
            triangleGameRound2Points: round2Points,
            triangleGameRound3Points: round3Points,
            triangleGameRound4Points: round4Points,
            triangleGameRound5Points: round5Points,
            triangleGameRound6Points: round6Points,
            triangleGameRound7Points: round7Points,
            triangleGameRound8Points: round8Points,
            triangleGameRound9Points: round9Points,
            triangleGameRound10Points: round10Points,
            triangleGameRound1MinusPoints: round1MinusPoints,
            triangleGameRound2MinusPoints: round2MinusPoints,
            triangleGameRound3MinusPoints: round3MinusPoints,
            triangleGameRound4MinusPoints: round4MinusPoints,
            triangleGameRound5MinusPoints: round5MinusPoints,
            triangleGameRound6MinusPoints: round6MinusPoints,
            triangleGameRound7MinusPoints: round7MinusPoints,
            triangleGameRound8MinusPoints: round8MinusPoints,
            triangleGameRound9MinusPoints: round9MinusPoints,
            triangleGameRound10MinusPoints: round10MinusPoints,
            step: 'step12'
        }

        updateStep(token, data).then(() => {
            router.push(`/${locale}/${token}/step12`).then(() => window.scrollTo(0, 0));
        });
    }

    const displayCursor = () => {
        document.body.style.cursor = 'default';
    }

    const setSettingsForGame = () => {
        setCursors(clearCursors);
        setStartTiming(true);
        setShowNextButton(true);
        setShowBackButton(true);
        displayCursor();
    }

    useEffect(() => {
        if (startGame) {
            document.body.style.cursor = 'none';
            setShowBackButton(false);
            if (round === 1) {
                setCursors(round1);
                setTimeout(() => {
                    setSettingsForGame();
                }, round1SignDisappearTime);
            }

            if (round === 2) {
                setCursors(round2);
                setTimeout(() => {
                    setSettingsForGame();
                }, round2SignDisappearTime);
            }

            if (round === 3) {
                setCursors(round3);
                setTimeout(() => {
                    setSettingsForGame();
                }, round3SignDisappearTime);
            }

            if (round === 4) {
                setCursors(round4);
                setTimeout(() => {
                    setSettingsForGame();
                }, round4SignDisappearTime);
            }

            if (round === 5) {
                setCursors(round5);
                setTimeout(() => {
                    setSettingsForGame();
                }, round5SignDisappearTime);
            }

            if (round === 6) {
                setCursors(round6);
                setTimeout(() => {
                    setSettingsForGame();
                }, round6SignDisappearTime);
            }

            if (round === 7) {
                setCursors(round7);
                setTimeout(() => {
                    setSettingsForGame();
                }, round7SignDisappearTime);
            }

            if (round === 8) {
                setCursors(round8);
                setTimeout(() => {
                    setSettingsForGame();
                }, round8SignDisappearTime);
            }

            if (round === 9) {
                setCursors(round9);
                setTimeout(() => {
                    setSettingsForGame();
                }, round9SignDisappearTime);
            }

            if (round === 10) {
                setCursors(round10);
                setTimeout(() => {
                    setSettingsForGame();
                }, round10SignDisappearTime);
            }

        }
    }, [startGame]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (startTiming) {
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

    const nextRound = () => {
        setStartTiming(false);
        setShowNextButton(false);

        if (round === 1) {
            const filteredArray = round1.filter(value => cursors.includes(value));
            setRound1Points(round1Points + filteredArray.length);
            setRound1MinusPoints(round1MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 2) {
            const filteredArray = round2.filter(value => cursors.includes(value));
            setRound2Points(round2Points + filteredArray.length);
            setRound2MinusPoints(round2MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 3) {
            const filteredArray = round3.filter(value => cursors.includes(value));
            setRound3Points(round3Points + filteredArray.length);
            setRound3MinusPoints(round3MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 4) {
            const filteredArray = round4.filter(value => cursors.includes(value));
            setRound4Points(round4Points + filteredArray.length);
            setRound4MinusPoints(round4MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 5) {
            const filteredArray = round5.filter(value => cursors.includes(value));
            setRound5Points(round5Points + filteredArray.length);
            setRound5MinusPoints(round5MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 6) {
            const filteredArray = round6.filter(value => cursors.includes(value));
            setRound6Points(round6Points + filteredArray.length);
            setRound6MinusPoints(round6MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 7) {
            const filteredArray = round7.filter(value => cursors.includes(value));
            setRound7Points(round7Points + filteredArray.length);
            setRound7MinusPoints(round7MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 8) {
            const filteredArray = round8.filter(value => cursors.includes(value));
            setRound8Points(round8Points + filteredArray.length);
            setRound8MinusPoints(round8MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 9) {
            const filteredArray = round9.filter(value => cursors.includes(value));
            setRound9Points(round9Points + filteredArray.length);
            setRound9MinusPoints(round9MinusPoints + (cursors.length - filteredArray.length));
        }

        if (round === 10) {
            const filteredArray = round10.filter(value => cursors.includes(value));
            setRound10Points(round10Points + filteredArray.length);
            setRound10MinusPoints(round10MinusPoints + (cursors.length - filteredArray.length));
            setDisplayGameEndText(true);
        }

        setStartGame(false);
        setCursors(clearCursors);
        setRound(round + 1);
    }

    const [helper, setHelper] = useState(false);

    const onClickHandler = (e) => {
        if (startGame) {
            if (helper === false) setHelper(true);
            if (helper === true) setHelper(false);
            const id = Number(e.target.id);

            if (!cursors.includes(id)) {
                cursors.push(id);
            } else {
                const clickedCursorIndex = cursors.findIndex(element => element === id);
                cursors.splice(clickedCursorIndex, 1);
            }
        }
    }

    const [isGameTime, setIsGameTime] = useState(true);

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={6} />
            </div>
            {isGameTime ?
                <div className="formContainer">
                    <div className="gamesTitle">{t('game_time')}</div>
                    <div className="subtitle">
                        {t('before_start_games')}
                    </div>
                    <div className="button">
                        <Button variant="contained" color="primary" style={{ marginRight: 5 }} onClick={() => router.push(`/${locale}/${token}/step7`)}>{t('back')}</Button>
                        <Button variant="contained" color="secondary" style={{ marginLeft: 5 }} onClick={() => setIsGameTime(false)}>{t('play')}</Button>
                    </div>

                </div>
                :
                <>
                    {round < 2 && <div className="formContainer">
                        <div className="descriptionTitle">{t('squares_game_title')}</div>
                        <div className="description">{t('squares_game')}</div>
                    </div>}
                    {round < 11 && <div className="formContainer">
                        <div className="gameInformations">{t('round')} {round}</div>
                        {locale !== 'pl' && <div className="gameRule">{t('squares_game_rule')}</div>}
                        {locale === 'pl' && !showNextButton && <div className="gameRule">{t('squares_game_rule')}</div>}
                        {locale === 'pl' && showNextButton && <div className="gameRule">{t('squares_game_rule_2')}</div>}
                    </div>}
                    {round === 1 &&
                        <div className="formContainer">
                            <div className="row row3elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row3elements">
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row3elements">
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 2 &&
                        <div className="formContainer">
                            <div className="row row4elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row4elements">
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row4elements">
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 3 &&
                        <div className="formContainer">
                            <div className="row row4elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row4elements">
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row4elements">
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row4elements">
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 4 &&
                        <div className="formContainer">
                            <div className="row row5elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 5 &&
                        <div className="formContainer">
                            <div className="row row5elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(31) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="21" onClick={onClickHandler}>
                                    {cursors.includes(21) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="22" onClick={onClickHandler}>
                                    {cursors.includes(22) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="23" onClick={onClickHandler}>
                                    {cursors.includes(23) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="24" onClick={onClickHandler}>
                                    {cursors.includes(24) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="25" onClick={onClickHandler}>
                                    {cursors.includes(25) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 6 &&
                        <div className="formContainer">
                            <div className="row row5elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="21" onClick={onClickHandler}>
                                    {cursors.includes(21) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="22" onClick={onClickHandler}>
                                    {cursors.includes(22) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="23" onClick={onClickHandler}>
                                    {cursors.includes(23) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="24" onClick={onClickHandler}>
                                    {cursors.includes(24) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="25" onClick={onClickHandler}>
                                    {cursors.includes(25) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row5elements">
                                <div className="element" style={boardCursorStyle} id="26" onClick={onClickHandler}>
                                    {cursors.includes(26) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="27" onClick={onClickHandler}>
                                    {cursors.includes(27) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="28" onClick={onClickHandler}>
                                    {cursors.includes(28) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="29" onClick={onClickHandler}>
                                    {cursors.includes(29) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="30" onClick={onClickHandler}>
                                    {cursors.includes(30) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 7 &&
                        <div className="formContainer">
                            <div className="row row6elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="21" onClick={onClickHandler}>
                                    {cursors.includes(21) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="22" onClick={onClickHandler}>
                                    {cursors.includes(22) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="23" onClick={onClickHandler}>
                                    {cursors.includes(23) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="24" onClick={onClickHandler}>
                                    {cursors.includes(24) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="25" onClick={onClickHandler}>
                                    {cursors.includes(25) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="26" onClick={onClickHandler}>
                                    {cursors.includes(26) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="27" onClick={onClickHandler}>
                                    {cursors.includes(27) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="28" onClick={onClickHandler}>
                                    {cursors.includes(28) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="29" onClick={onClickHandler}>
                                    {cursors.includes(29) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="30" onClick={onClickHandler}>
                                    {cursors.includes(30) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="31" onClick={onClickHandler}>
                                    {cursors.includes(31) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="32" onClick={onClickHandler}>
                                    {cursors.includes(32) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="33" onClick={onClickHandler}>
                                    {cursors.includes(33) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="34" onClick={onClickHandler}>
                                    {cursors.includes(34) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="35" onClick={onClickHandler}>
                                    {cursors.includes(35) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="36" onClick={onClickHandler}>
                                    {cursors.includes(36) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 8 &&
                        <div className="formContainer">
                            <div className="row row6elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="21" onClick={onClickHandler}>
                                    {cursors.includes(21) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="22" onClick={onClickHandler}>
                                    {cursors.includes(22) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="23" onClick={onClickHandler}>
                                    {cursors.includes(23) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="24" onClick={onClickHandler}>
                                    {cursors.includes(24) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="25" onClick={onClickHandler}>
                                    {cursors.includes(25) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="26" onClick={onClickHandler}>
                                    {cursors.includes(26) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="27" onClick={onClickHandler}>
                                    {cursors.includes(27) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="28" onClick={onClickHandler}>
                                    {cursors.includes(28) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="29" onClick={onClickHandler}>
                                    {cursors.includes(29) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="30" onClick={onClickHandler}>
                                    {cursors.includes(30) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="31" onClick={onClickHandler}>
                                    {cursors.includes(31) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="32" onClick={onClickHandler}>
                                    {cursors.includes(32) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="33" onClick={onClickHandler}>
                                    {cursors.includes(33) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="34" onClick={onClickHandler}>
                                    {cursors.includes(34) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="35" onClick={onClickHandler}>
                                    {cursors.includes(35) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="36" onClick={onClickHandler}>
                                    {cursors.includes(36) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="37" onClick={onClickHandler}>
                                    {cursors.includes(37) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="38" onClick={onClickHandler}>
                                    {cursors.includes(38) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="39" onClick={onClickHandler}>
                                    {cursors.includes(39) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="40" onClick={onClickHandler}>
                                    {cursors.includes(40) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="41" onClick={onClickHandler}>
                                    {cursors.includes(41) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="42" onClick={onClickHandler}>
                                    {cursors.includes(42) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 9 &&
                        <div className="formContainer">
                            <div className="row row6elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="21" onClick={onClickHandler}>
                                    {cursors.includes(21) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="22" onClick={onClickHandler}>
                                    {cursors.includes(22) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="23" onClick={onClickHandler}>
                                    {cursors.includes(23) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="24" onClick={onClickHandler}>
                                    {cursors.includes(24) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="25" onClick={onClickHandler}>
                                    {cursors.includes(25) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="26" onClick={onClickHandler}>
                                    {cursors.includes(26) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="27" onClick={onClickHandler}>
                                    {cursors.includes(27) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="28" onClick={onClickHandler}>
                                    {cursors.includes(28) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="29" onClick={onClickHandler}>
                                    {cursors.includes(29) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="30" onClick={onClickHandler}>
                                    {cursors.includes(30) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="31" onClick={onClickHandler}>
                                    {cursors.includes(31) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="32" onClick={onClickHandler}>
                                    {cursors.includes(32) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="33" onClick={onClickHandler}>
                                    {cursors.includes(33) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="34" onClick={onClickHandler}>
                                    {cursors.includes(34) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="35" onClick={onClickHandler}>
                                    {cursors.includes(35) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="36" onClick={onClickHandler}>
                                    {cursors.includes(36) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="37" onClick={onClickHandler}>
                                    {cursors.includes(37) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="38" onClick={onClickHandler}>
                                    {cursors.includes(38) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="39" onClick={onClickHandler}>
                                    {cursors.includes(39) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="40" onClick={onClickHandler}>
                                    {cursors.includes(40) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="41" onClick={onClickHandler}>
                                    {cursors.includes(41) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="42" onClick={onClickHandler}>
                                    {cursors.includes(42) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="43" onClick={onClickHandler}>
                                    {cursors.includes(43) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="44" onClick={onClickHandler}>
                                    {cursors.includes(44) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="45" onClick={onClickHandler}>
                                    {cursors.includes(45) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="46" onClick={onClickHandler}>
                                    {cursors.includes(46) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="47" onClick={onClickHandler}>
                                    {cursors.includes(47) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="48" onClick={onClickHandler}>
                                    {cursors.includes(48) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {round === 10 &&
                        <div className="formContainer">
                            <div className="row row6elements" >
                                <div className="element" style={boardCursorStyle} id="1" onClick={onClickHandler}>
                                    {cursors.includes(1) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="2" onClick={onClickHandler}>
                                    {cursors.includes(2) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="3" onClick={onClickHandler}>
                                    {cursors.includes(3) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="4" onClick={onClickHandler}>
                                    {cursors.includes(4) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="5" onClick={onClickHandler}>
                                    {cursors.includes(5) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="6" onClick={onClickHandler}>
                                    {cursors.includes(6) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="7" onClick={onClickHandler}>
                                    {cursors.includes(7) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="8" onClick={onClickHandler}>
                                    {cursors.includes(8) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="9" onClick={onClickHandler}>
                                    {cursors.includes(9) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="10" onClick={onClickHandler}>
                                    {cursors.includes(10) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="11" onClick={onClickHandler}>
                                    {cursors.includes(11) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="12" onClick={onClickHandler}>
                                    {cursors.includes(12) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="13" onClick={onClickHandler}>
                                    {cursors.includes(13) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="14" onClick={onClickHandler}>
                                    {cursors.includes(14) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="15" onClick={onClickHandler}>
                                    {cursors.includes(15) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="16" onClick={onClickHandler}>
                                    {cursors.includes(16) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="17" onClick={onClickHandler}>
                                    {cursors.includes(17) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="18" onClick={onClickHandler}>
                                    {cursors.includes(18) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="19" onClick={onClickHandler}>
                                    {cursors.includes(19) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="20" onClick={onClickHandler}>
                                    {cursors.includes(20) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="21" onClick={onClickHandler}>
                                    {cursors.includes(21) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="22" onClick={onClickHandler}>
                                    {cursors.includes(22) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="23" onClick={onClickHandler}>
                                    {cursors.includes(23) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="24" onClick={onClickHandler}>
                                    {cursors.includes(24) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="25" onClick={onClickHandler}>
                                    {cursors.includes(25) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="26" onClick={onClickHandler}>
                                    {cursors.includes(26) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="27" onClick={onClickHandler}>
                                    {cursors.includes(27) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="28" onClick={onClickHandler}>
                                    {cursors.includes(28) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="29" onClick={onClickHandler}>
                                    {cursors.includes(29) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="30" onClick={onClickHandler}>
                                    {cursors.includes(30) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="31" onClick={onClickHandler}>
                                    {cursors.includes(31) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="32" onClick={onClickHandler}>
                                    {cursors.includes(32) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="33" onClick={onClickHandler}>
                                    {cursors.includes(33) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="34" onClick={onClickHandler}>
                                    {cursors.includes(34) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="35" onClick={onClickHandler}>
                                    {cursors.includes(35) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="36" onClick={onClickHandler}>
                                    {cursors.includes(36) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="37" onClick={onClickHandler}>
                                    {cursors.includes(37) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="38" onClick={onClickHandler}>
                                    {cursors.includes(38) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="39" onClick={onClickHandler}>
                                    {cursors.includes(39) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="40" onClick={onClickHandler}>
                                    {cursors.includes(40) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="41" onClick={onClickHandler}>
                                    {cursors.includes(41) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="42" onClick={onClickHandler}>
                                    {cursors.includes(42) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="43" onClick={onClickHandler}>
                                    {cursors.includes(43) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="44" onClick={onClickHandler}>
                                    {cursors.includes(44) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="45" onClick={onClickHandler}>
                                    {cursors.includes(45) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="46" onClick={onClickHandler}>
                                    {cursors.includes(46) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="47" onClick={onClickHandler}>
                                    {cursors.includes(47) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="48" onClick={onClickHandler}>
                                    {cursors.includes(48) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                            <div className="row row6elements">
                                <div className="element" style={boardCursorStyle} id="49" onClick={onClickHandler}>
                                    {cursors.includes(49) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="50" onClick={onClickHandler}>
                                    {cursors.includes(50) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="51" onClick={onClickHandler}>
                                    {cursors.includes(51) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="52" onClick={onClickHandler}>
                                    {cursors.includes(52) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="53" onClick={onClickHandler}>
                                    {cursors.includes(53) && <img src="/triangle.png" height="30" />}
                                </div>
                                <div className="element" style={boardCursorStyle} id="54" onClick={onClickHandler}>
                                    {cursors.includes(54) && <img src="/triangle.png" height="30" />}
                                </div>
                            </div>
                        </div>
                    }
                    {displayGameEndText &&
                        <div className="formContainer">
                            <div className="gameEndText">
                                {t('squares_game_end_text')}
                            </div>
                        </div>
                    }
                    <div className="button">
                        {!startGame && round < 11 && <Button variant="contained" color="secondary" onClick={() => setStartGame(true)}>{t('start_game')}</Button>}
                        {showNextButton && <Button variant="contained" color="secondary" onClick={nextRound}>{t('next')}</Button>}
                        {round === 11 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
                    </div>
                </>
            }

            <style jsx>
                {`
                .gameEndText{
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
                img{
                    pointer-events: none;
                }
                .progressContainer {
                    padding: 30px 10% 15px 10%;
                }
                .descriptionTitle{
                    font-size: 20px;
                    font-weight: bold;
                }
                .description {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 16px;
                    padding: 15px 10% 15px 10%;
                    white-space: pre-wrap;
                }
                .gameInformations{
                    padding-top: 5px;
                    font-weight: bold;
                    font-size: 18px;
                }
                .gameRule{
                    font-size: 16px;
                    margin-top: 10px;
                }
                .row {
                    display: flex;
                    flex-flow: row;
                    border: solid 1px black;
                    border-bottom: none;
                    border-top: none;
                }
                .row3elements{
                    width: 180px;
                    height: 60px
                }
                .row4elements{
                    width: 240px;
                    height: 60px
                }
                .row5elements{
                    width: 300px;
                    height: 60px;
                }
                .row6elements{
                    width: 360px;
                    height: 60px;
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
                    transition: 0.3s;
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
                .gamesTitle {
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    font-weight: bold;
                    padding: 15px 10% 15px 10%;
                    text-align: center;
                }
                .subtitle {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 16px;
                    text-align: center;
                    padding: 15px 10% 15px 10%;
                    white-space: pre-wrap;
                    margin-bottom: 10px;
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
                .formContainer, .registerButton {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: column;
                }
                .button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 40px;
                    padding: 20px;
                }
                @media screen and (max-width: 360px){
                    .row6elements{
                        width: 300px;
                        height: 50px;
                    }
                }
                `}
            </style>
        </div >
    )
}

export default Step11
