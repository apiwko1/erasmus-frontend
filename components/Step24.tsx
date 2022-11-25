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

const Step24: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [playsNumber, setPlaysNumber] = useState(2);
    const [isBeforeStart, setIsBeforeStart] = useState(true);

    const [round, setRound] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
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


    const [clickedAnswers, setClickedAnswers] = useState<any[]>([]);
    const [correctAnswersRound1, setCorrectAnswersRound1] = useState(['Cat', 'Pigeon']);
    const [correctAnswersRound2, setCorrectAnswersRound2] = useState(['Cow', 'Dog']);
    const [correctAnswersRound3, setCorrectAnswersRound3] = useState(['Chicken', 'Whistle', 'Ship']);
    const [correctAnswersRound4, setCorrectAnswersRound4] = useState(['Horse', 'Seagulls', 'Vehicle']);
    const [correctAnswersRound5, setCorrectAnswersRound5] = useState(['Duck', 'Sheep', 'Snake', 'Cat']);
    const [correctAnswersRound6, setCorrectAnswersRound6] = useState(['Dog', 'Pig', 'Elephant', 'Rain']);
    const [correctAnswersRound7, setCorrectAnswersRound7] = useState(['Bells', 'Snake', 'Vehicle', 'Pigeon', 'Seagulls']);
    const [correctAnswersRound8, setCorrectAnswersRound8] = useState(['Sheep', 'Flute', 'Clock', 'Horse', 'Rain']);
    const [correctAnswersRound9, setCorrectAnswersRound9] = useState(['Cow', 'Elephant', 'Seagulls', 'Chicken', 'Sheep', 'Whistle']);
    const [correctAnswersRound10, setCorrectAnswersRound10] = useState(['Pig', 'Bells', 'Duck', 'Horse', 'Ship', 'Cat']);

    const startGame = () => {
        setRound(round + 1);
    }

    const playButtonStyles = {
        pointerEvents: disableButton ? 'none' : 'auto',
    }

    const gameManagement = (time: number) => {
        setDisableButton(true);
        setTimeout(() => {
            setDisableButton(false);
            setPlaysNumber(playsNumber - 1);
        }, time);
    }

    const playSounds = () => {
        if (playsNumber != 0) {
            if (round === 1) {
                const round1Audio1 = new Audio('/sound-game/cat.mp3')
                const round1Audio2 = new Audio('/sound-game/pigeon.mp3');
                round1Audio1.play();
                round1Audio2.play();
                gameManagement(6200);
            }

            if (round === 2) {
                const round2Audio1 = new Audio('/sound-game/cow.mp3');
                const round2Audio2 = new Audio('/sound-game/dog.mp3');
                round2Audio1.play();
                round2Audio2.play();
                gameManagement(6200);
            }

            if (round === 3) {
                const round3Audio1 = new Audio('/sound-game/chicken.mp3');
                const round3Audio2 = new Audio('/sound-game/whistle.mp3');
                const round3Audio3 = new Audio('/sound-game/ship.mp3');
                round3Audio1.volume = 0.5;
                round3Audio2.volume = 0.5;
                round3Audio3.volume = 0.7;
                round3Audio1.play();
                round3Audio2.play();
                round3Audio3.play();
                gameManagement(6200);
            }

            if (round === 4) {
                const round4Audio1 = new Audio('/sound-game/horse.mp3');
                const round4Audio2 = new Audio('/sound-game/seagulls.mp3');
                const round4Audio3 = new Audio('/sound-game/vehicle.mp3');
                round4Audio1.volume = 0.5;
                round4Audio2.volume = 0.5;
                round4Audio3.volume = 0.7;
                round4Audio1.play();
                round4Audio2.play();
                round4Audio3.play();
                gameManagement(6200);
            }

            if (round === 5) {
                const round5Audio1 = new Audio('/sound-game/duck.mp3');
                const round5Audio2 = new Audio('/sound-game/sheep.mp3');
                const round5Audio3 = new Audio('/sound-game/snake.mp3');
                const round5Audio4 = new Audio('/sound-game/cat.mp3');
                round5Audio1.play();
                round5Audio2.play();
                round5Audio3.play();
                round5Audio4.play();
                gameManagement(6200);
            }

            if (round === 6) {
                const round6Audio1 = new Audio('/sound-game/dog.mp3');
                const round6Audio2 = new Audio('/sound-game/pig.mp3');
                const round6Audio3 = new Audio('/sound-game/elephant.mp3');
                const round6Audio4 = new Audio('/sound-game/rain.mp3');
                round6Audio3.volume = 0.8;
                round6Audio1.volume = 0.9;
                round6Audio4.volume = 0.9;
                round6Audio2.volume = 0.9;
                round6Audio1.play();
                round6Audio2.play();
                round6Audio3.play();
                round6Audio4.play();
                gameManagement(6200);
            }

            if (round === 7) {
                const round7Audio1 = new Audio('/sound-game/bells.mp3');
                const round7Audio2 = new Audio('/sound-game/pigeon.mp3');
                const round7Audio3 = new Audio('/sound-game/vehicle.mp3');
                const round7Audio4 = new Audio('/sound-game/snake.mp3');
                const round7Audio5 = new Audio('/sound-game/seagulls.mp3');
                round7Audio1.play();
                round7Audio2.play();
                setTimeout(() => {
                    round7Audio3.play();
                    round7Audio4.play();
                    round7Audio5.play();
                }, 6000)
                gameManagement(12200);
            }

            if (round === 8) {
                const round8Audio1 = new Audio('/sound-game/sheep.mp3');
                const round8Audio2 = new Audio('/sound-game/flute.mp3');
                const round8Audio3 = new Audio('/sound-game/clock.mp3');
                const round8Audio4 = new Audio('/sound-game/horse.mp3');
                const round8Audio5 = new Audio('/sound-game/rain.mp3');
                round8Audio1.play();
                round8Audio2.play();
                setTimeout(() => {
                    round8Audio3.play();
                    round8Audio4.play();
                    round8Audio5.play();
                }, 6000)
                gameManagement(12200);
            }

            if (round === 9) {
                const round9Audio1 = new Audio('/sound-game/cow.mp3');
                const round9Audio2 = new Audio('/sound-game/elephant.mp3');
                const round9Audio3 = new Audio('/sound-game/seagulls.mp3');
                const round9Audio4 = new Audio('/sound-game/chicken.mp3');
                const round9Audio5 = new Audio('/sound-game/sheep.mp3');
                const round9Audio6 = new Audio('/sound-game/whistle.mp3');
                round9Audio1.play();
                round9Audio2.play();
                round9Audio3.play();
                setTimeout(() => {
                    round9Audio4.play();
                    round9Audio5.play();
                    round9Audio6.play();
                }, 6000)
                gameManagement(12200);
            }

            if (round === 10) {
                const round10Audio1 = new Audio('/sound-game/pig.mp3');
                const round10Audio2 = new Audio('/sound-game/bells.mp3');
                const round10Audio3 = new Audio('/sound-game/duck.mp3');
                const round10Audio4 = new Audio('/sound-game/horse.mp3');
                const round10Audio5 = new Audio('/sound-game/ship.mp3');
                const round10Audio6 = new Audio('/sound-game/cat.mp3');
                round10Audio1.play();
                round10Audio2.play();
                round10Audio3.play();
                setTimeout(() => {
                    round10Audio4.play();
                    round10Audio5.play();
                    round10Audio6.play();
                }, 6000)
                gameManagement(12200);
            }
        }

    }

    const nextRound = () => {
        if (round <= 10) {
            checkGame();
            setRound(round + 1);
            setPlaysNumber(playsNumber + 2);
        }
    }

    const selectAnswer = (e) => {
        const answer = e.target;
        answer.style.border = "1px solid black";
        if (clickedAnswers.includes(answer.textContent)) {
            const deleteElementIndex = clickedAnswers.indexOf(answer.textContent);
            answer.style.border = 'none';
            clickedAnswers.splice(deleteElementIndex, 1);
            return;
        }
        clickedAnswers.push(answer.textContent);
    }

    useEffect(() => {
        if (playsNumber === 0) {
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

    const calculatePoints = (answersArray) => {
        const filteredArray = clickedAnswers.filter(value => answersArray.includes(value));

        return filteredArray.length;
    }

    const calculateMinusPoints = (answersArray) => {
        let negativePoints = 0;
        const filteredArray = clickedAnswers.filter(value => answersArray.includes(value));
        negativePoints = clickedAnswers.length - filteredArray.length;
        return negativePoints;
    }

    const checkGame = () => {
        if (round === 1) {
            setRound1Points(round1Points + calculatePoints(correctAnswersRound1));
            setRound1MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound1));
        }
        if (round === 2) {
            setRound2Points(round2Points + calculatePoints(correctAnswersRound2));
            setRound2MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound2));
        }
        if (round === 3) {
            setRound3Points(round3Points + calculatePoints(correctAnswersRound3));
            setRound3MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound3));
        }
        if (round === 4) {
            setRound4Points(round4Points + calculatePoints(correctAnswersRound4));
            setRound4MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound4));
        }
        if (round === 5) {
            setRound5Points(round5Points + calculatePoints(correctAnswersRound5));
            setRound5MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound5));
        }
        if (round === 6) {
            setRound6Points(round6Points + calculatePoints(correctAnswersRound6));
            setRound6MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound6));
        }
        if (round === 7) {
            setRound7Points(round7Points + calculatePoints(correctAnswersRound7));
            setRound7MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound7));
        }
        if (round === 8) {
            setRound8Points(round8Points + calculatePoints(correctAnswersRound8));
            setRound8MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound8));
        }
        if (round === 9) {
            setRound9Points(round9Points + calculatePoints(correctAnswersRound9));
            setRound9MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound9));
        }
        if (round === 10) {
            setRound10Points(round10Points + calculatePoints(correctAnswersRound10));
            setRound10MinusPoints(round1Points + calculateMinusPoints(correctAnswersRound10));
        }
        setClickedAnswers([]);
    }

    const submit = () => {
        setIsLoading(true);
        const data = {
            soundsGameRound1Points: round1Points,
            soundsGameRound2Points: round2Points,
            soundsGameRound3Points: round3Points,
            soundsGameRound4Points: round4Points,
            soundsGameRound5Points: round5Points,
            soundsGameRound6Points: round6Points,
            soundsGameRound7Points: round7Points,
            soundsGameRound8Points: round8Points,
            soundsGameRound9Points: round9Points,
            soundsGameRound10Points: round10Points,
            soundsGameRound1MinusPoints: round1MinusPoints,
            soundsGameRound2MinusPoints: round2MinusPoints,
            soundsGameRound3MinusPoints: round3MinusPoints,
            soundsGameRound4MinusPoints: round4MinusPoints,
            soundsGameRound5MinusPoints: round5MinusPoints,
            soundsGameRound6MinusPoints: round6MinusPoints,
            soundsGameRound7MinusPoints: round7MinusPoints,
            soundsGameRound8MinusPoints: round8MinusPoints,
            soundsGameRound9MinusPoints: round9MinusPoints,
            soundsGameRound10MinusPoints: round10MinusPoints,
            soundsGameRound1Time: round1Time,
            soundsGameRound2Time: round2Time,
            soundsGameRound3Time: round3Time,
            soundsGameRound4Time: round4Time,
            soundsGameRound5Time: round5Time,
            soundsGameRound6Time: round6Time,
            soundsGameRound7Time: round7Time,
            soundsGameRound8Time: round8Time,
            soundsGameRound9Time: round9Time,
            soundsGameRound10Time: round10Time,
            step: 'step25'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step25`)).then(() => window.scrollTo(0, 0));
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={18} />
            </div>
            {isBeforeStart && <div className="gameDescription">
                <div className="descriptionTitle">{t('sounds_game_before_start')}</div>
            </div>}
            {round === 0 && !isBeforeStart && <div className="gameDescription">
                <div className="descriptionTitle">{t('sounds_game_title')}</div>
                <   div className="description">{t('sounds_game')}</div>
            </div>}
            {round === 11 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            {round > 0 && round < 11 &&
                <div className="center">
                    <div className="gameInstruction">{t('round')} {round}</div>
                    {playsNumber != 0 && <div className="gameRule">{t('sounds_game_rule')}</div>}
                </div>
            }
            <div className="playButton">
                {round > 0 && round < 11 && playsNumber != 0 && <Button style={playButtonStyles} variant="contained" color="secondary" onClick={playSounds}>{t('sounds_game_play')}</Button>}
            </div>
            {playsNumber === 0 &&
                <div className="center">
                    <div className="gameRule">
                        {t('sounds_game_rule_2')}
                    </div>
                </div>
            }
            {round === 1 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_sparrow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_car')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pigeon')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_tiger')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cat')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_seagull')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_owl')}</div>
                    </div>
                </div>
            }
            {round === 2 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_dog')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_bee')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_ship')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_horse')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_owl')}</div>
                    </div>
                </div>
            }
            {round === 3 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_horse')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_car')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_chicken')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_tiger')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_violin')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_whistle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_owl')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cricket')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_flute')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_ship')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                    </div>
                </div>
            }
            {round === 4 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_horse')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_owl')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_violin')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_seagull')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_trumpet')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_lion')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sparrow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_flute')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                    </div>
                </div>
            }
            {round === 5 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_sparrow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_horse')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pigeon')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_dog')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_woodpecker')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_owl')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cat')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sheep')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_tiger')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_trumpet')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_snake')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_saxophone')}</div>
                    </div>
                </div>
            }
            {round === 6 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_bells')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_dog')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_clock')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_woodpecker')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_elephant')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pigeon')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_guitar')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sheep')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_snake')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                    </div>
                </div>
            }
            {round === 7 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_bells')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_tiger')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_snake')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_elephant')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_lion')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pigeon')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_owl')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sheep')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_saxophone')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_whistle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_seagull')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pigeon')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_woodpecker')}</div>
                    </div>
                </div>
            }
            {round === 8 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_dog')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sparrow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_dog')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_flute')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_ship')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_woodpecker')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_clock')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pigeon')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sheep')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cat')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_violin')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_horse')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_chicken')}</div>
                    </div>
                </div>
            }
            {round === 9 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_cow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sparrow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_violin')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_chicken')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_lion')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_woodpecker')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_elephant')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_bee')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sheep')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_seagull')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_ship')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cat')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_snake')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_vehicle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_guitar')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_whistle')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_flute')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_harmonica')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                    </div>
                </div>
            }
            {round === 10 && playsNumber === 0 &&
                <div className="center">
                    <div className="answersBox">
                        <div onClick={selectAnswer} className="answer">{t('sound_snake')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sparrow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_seagull')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_flute')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_trumpet')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_woodpecker')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_ship')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_dog')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_saxophone')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_pig')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cow')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_lion')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_violin')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_train')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_horse')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_duck')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_bells')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_rain')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_drums')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_cat')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_bee')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_sheep')}</div>
                        <div onClick={selectAnswer} className="answer">{t('sound_elephant')}</div>
                    </div>
                </div>
            }
            {isBeforeStart && <div className="button">
                <Button variant="contained" color="secondary" onClick={() => setIsBeforeStart(false)} style={{ marginTop: 20 }}>{t('sounds_game_start')}</Button>
            </div>}
            {!isBeforeStart && <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && playsNumber === 0 && <div><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 11 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>}
            <style jsx>
                {`
                    .answersBox{
                        margin: 20px auto;
                        display: flex;
                        width: 60%;
                        justify-content: center;
                        align-items:center;
                        flex-wrap: wrap;
                    }
                    .answer{
                        font-size: 20px;
                        margin: 20px;
                        padding: 8px 0;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 120px;
                        border-radius: 12px;
                        cursor: pointer;
                    }
                    .playButton{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 30px;
                        margin-bottom: 30px;
                    }
                    .center{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .guest{
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        text-align: center;
                    }
                    .personImg{
                        max-width: 200px;
                        margin: 0 auto 20px auto;
                    }
                    .meals{
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        width: 80%;
                        margin-top: 20px;
                        margin: 0 auto;
                        background: #E6E6E6;
                        border: 1px solid black;
                    }
                    .meal{
                        margin: 5px 5px 0 5px;
                    }
                    .order{
                        display: flex;
                        justify-content: center;
                        text-align: center;
                        width: 70%;
                    }
                    .order img{
                        max-width: 70%;
                        height: auto;
                    }
                    .orders-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .guests-container {
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 90%;
                    }
                    .gameRule{
                        font-size: 20px;
                        max-width: 60%;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .gameInstruction{
                        font-size: 20px;
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
                        font-size: 16px;
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
                        .gameInstruction{
                            font-size: 20px;
                        }
                    }
                    @media screen and (max-width: 600px) {
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
                        .answersBox{
                            margin: 20px auto;
                            display: flex;
                            width: 80%;
                            justify-content: center;
                            align-items:center;
                            flex-wrap: wrap;
                        }
                        .answer{
                            font-size: 20px;
                            margin: 20px;
                            padding: 8px 0;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80px;
                            border-radius: 12px;
                            cursor: pointer;
                        }
                    }
                    @media screen and (max-width: 360px){
                        .gameInstruction{
                            font-size:16px;
                        }
                        
                    }
            `}
            </style>
        </div>
    );
}

export default Step24;
