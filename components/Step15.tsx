import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import Card from './Card';
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import ButtonWithLoader from './ButtonWithLoader';
import { mealsRound1Person1, mealsRound1Person2, mealsRound2Person1, mealsRound2Person2, mealsRound3Person1, mealsRound3Person2, mealsRound4Person1, mealsRound4Person2, mealsRound5Person1, mealsRound5Person2 } from '../helpers/constants/waiterGameImages';

interface Props {
    exam: any;
}



const Step15: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);

    const [round, setRound] = useState(0);

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

    const [mealsPerson1, setMealsPerosn1] = useState(mealsRound1Person1);
    const [mealsPerson2, setMealsPerosn2] = useState(mealsRound1Person2);
    const [mealsPerson3, setMealsPerosn3] = useState(mealsRound2Person1);
    const [mealsPerson4, setMealsPerosn4] = useState(mealsRound2Person2);
    const [mealsPerson5, setMealsPerosn5] = useState(mealsRound3Person1);
    const [mealsPerson6, setMealsPerosn6] = useState(mealsRound3Person2);
    const [mealsPerson7, setMealsPerosn7] = useState(mealsRound4Person1);
    const [mealsPerson8, setMealsPerosn8] = useState(mealsRound4Person2);
    const [mealsPerson9, setMealsPerosn9] = useState(mealsRound5Person1);
    const [mealsPerson10, setMealsPerosn10] = useState(mealsRound5Person2);

    const [isShowGuestsOrders, setIsShowGuestsOrders] = useState(false);
    const [isShowGuests, setIsShowGuests] = useState(false);
    const [showText, setShowText] = useState(false);
    const [isStartTiming, setIsStartTiming] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const [countTime, setCountTime] = useState(false);
    const [time, setTime] = useState(6);

    const [clickedImagesArrayPerson1, setClickedImagesArrayPerson1] = useState<any[]>([]);
    const [clickedImagesArrayPerson2, setClickedImagesArrayPerson2] = useState<any[]>([]);

    const startGame = () => {
        setRound(round + 1);
        setIsShowGuestsOrders(true);
        setIsGameStarted(true);
    }

    const gameManagement = (displayOrdersTime: number) => {
        setTimeout(() => {
            setIsShowGuestsOrders(false);
            setShowText(true);
            setCountTime(true);
            setTimeout(() => {
                setIsShowGuests(true);
                setCountTime(false);
                setShowText(false);
                setIsGameStarted(false);
                setIsStartTiming(true);
            }, time * 1000)
        }, displayOrdersTime);
    }

    useEffect(() => {
        if (isGameStarted) {
            if (round === 1) {
                gameManagement(6000);
            }
            if (round === 2) {
                gameManagement(8000);
            }
            if (round === 3) {
                gameManagement(10000);
            }
            if (round === 4) {
                gameManagement(12000);
            }
            if (round === 5) {
                gameManagement(14000);
            }
        }
    }, [round])

    useEffect(() => {
        if (countTime) {
            if (round === 1) {
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
            }
            if (round === 2) {
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
            }
            if (round === 3) {
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
            }
            if (round === 4) {
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
            }
            if (round === 5) {
                setTimeout(() => {
                    setTime(time - 1);
                }, 1000)
            }
        }
    })

    const nextRound = () => {
        checkGame();
        setTime(6);
        setRound(round + 1);
        setIsShowGuestsOrders(true);
        setIsShowGuests(false);
        setIsGameStarted(true);
        setIsStartTiming(false);
    }

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
                    setRound4Time(round3Time + 1);
                }, 1000)
            }
            if (round === 5) {
                setTimeout(() => {
                    setRound5Time(round3Time + 1);
                }, 1000)
            }
        }
    })

    const deleteLastClickedImagePerson1 = (clickedImage, index) => {
        clickedImagesArrayPerson1[0].element.style.border = "none";
        clickedImagesArrayPerson1.push({ element: clickedImage, elementIndex: index });
        clickedImagesArrayPerson1.shift();
    }

    const deleteLastClickedImagePerson2 = (clickedImage, index) => {
        clickedImagesArrayPerson2[0].element.style.border = "none";
        clickedImagesArrayPerson2.push({ element: clickedImage, elementIndex: index });
        clickedImagesArrayPerson2.shift();
    }

    const selectImagePerson1 = (e, index) => {
        const clickedImage = e.target;
        clickedImage.style.border = "1px solid black";

        if (clickedImagesArrayPerson1.some(value => { return value.elementIndex === index })) {
            const deleteElementIndex = clickedImagesArrayPerson1.findIndex(obj => obj.elementIndex === index);
            clickedImagesArrayPerson1[deleteElementIndex].element.style.border = "none";
            clickedImagesArrayPerson1.splice(deleteElementIndex, 1);
            return;
        }

        if (round === 1) {
            clickedImage.setAttribute('answer', mealsRound1Person1[index].answer);

            if (clickedImagesArrayPerson1.length < 2) {
                clickedImagesArrayPerson1.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson1.length === 2) {
                deleteLastClickedImagePerson1(clickedImage, index);
                return;
            }
        }

        if (round === 2) {
            clickedImage.setAttribute('answer', mealsRound2Person1[index].answer);
            if (clickedImagesArrayPerson1.length < 4) {
                clickedImagesArrayPerson1.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson1.length === 4) {
                deleteLastClickedImagePerson1(clickedImage, index);
                return;
            }
        }

        if (round === 3) {
            clickedImage.setAttribute('answer', mealsRound3Person1[index].answer);
            if (clickedImagesArrayPerson1.length < 6) {
                clickedImagesArrayPerson1.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson1.length === 6) {
                deleteLastClickedImagePerson1(clickedImage, index);
                return;
            }
        }

        if (round === 4) {
            clickedImage.setAttribute('answer', mealsRound4Person1[index].answer);
            if (clickedImagesArrayPerson1.length < 8) {
                clickedImagesArrayPerson1.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson1.length === 8) {
                deleteLastClickedImagePerson1(clickedImage, index);
                return;
            }
        }

        if (round === 5) {
            clickedImage.setAttribute('answer', mealsRound5Person1[index].answer);
            if (clickedImagesArrayPerson1.length < 10) {
                clickedImagesArrayPerson1.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson1.length === 10) {
                deleteLastClickedImagePerson1(clickedImage, index);
                return;
            }
        }

    }

    const selectImagePerson2 = (e, index) => {
        const clickedImage = e.target;
        clickedImage.style.border = "1px solid black";

        if (clickedImagesArrayPerson2.some(value => { return value.elementIndex === index })) {
            const deleteElementIndex = clickedImagesArrayPerson2.findIndex(obj => obj.elementIndex === index);
            clickedImagesArrayPerson2[deleteElementIndex].element.style.border = "none";
            clickedImagesArrayPerson2.splice(deleteElementIndex, 1);
            return;
        }

        if (round === 1) {
            clickedImage.setAttribute('answer', mealsRound1Person2[index].answer);
            if (clickedImagesArrayPerson2.length < 2) {
                clickedImagesArrayPerson2.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson2.length === 2) {
                deleteLastClickedImagePerson2(clickedImage, index);
                return;
            }
        }

        if (round === 2) {
            clickedImage.setAttribute('answer', mealsRound2Person2[index].answer);

            if (clickedImagesArrayPerson2.length < 4) {
                clickedImagesArrayPerson2.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson2.length === 4) {
                deleteLastClickedImagePerson2(clickedImage, index);
                return;
            }
        }

        if (round === 3) {
            clickedImage.setAttribute('answer', mealsRound3Person2[index].answer);
            if (clickedImagesArrayPerson2.length < 6) {
                clickedImagesArrayPerson2.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson2.length === 6) {
                deleteLastClickedImagePerson2(clickedImage, index);
                return;
            }
        }

        if (round === 4) {
            clickedImage.setAttribute('answer', mealsRound4Person2[index].answer);
            if (clickedImagesArrayPerson2.length < 8) {
                clickedImagesArrayPerson2.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson2.length === 8) {
                deleteLastClickedImagePerson2(clickedImage, index);
                return;
            }
        }

        if (round === 5) {
            clickedImage.setAttribute('answer', mealsRound5Person2[index].answer);
            if (clickedImagesArrayPerson2.length < 10) {
                clickedImagesArrayPerson2.push({ element: clickedImage, elementIndex: index });
                return;
            }
            if (clickedImagesArrayPerson2.length === 10) {
                deleteLastClickedImagePerson2(clickedImage, index);
                return;
            }
        }

    }

    const checkGame = () => {
        let points = 0;
        let minusPoints = 0;

        for (let i = 0; i < clickedImagesArrayPerson1.length; i++) {
            if (clickedImagesArrayPerson1[i].element.getAttribute('answer') === 'correct') {
                points++;
            }
        }

        minusPoints += (clickedImagesArrayPerson1.length - points);

        for (let i = 0; i < clickedImagesArrayPerson2.length; i++) {
            if (clickedImagesArrayPerson2[i].element.getAttribute('answer') === 'correct') points++;
        }

        minusPoints += (clickedImagesArrayPerson2.length - points);

        setClickedImagesArrayPerson1([]);
        setClickedImagesArrayPerson2([]);
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
    }

    const submit = () => {
        setIsLoading(true);
        const data = {
            waiterGameRound1Points: round1Points,
            waiterGameRound2Points: round2Points,
            waiterGameRound3Points: round3Points,
            waiterGameRound4Points: round4Points,
            waiterGameRound5Points: round5Points,
            waiterGameRound1MinusPoints: round1MinusPoints,
            waiterGameRound2MinusPoints: round2MinusPoints,
            waiterGameRound3MinusPoints: round3MinusPoints,
            waiterGameRound4MinusPoints: round4MinusPoints,
            waiterGameRound5MinusPoints: round5MinusPoints,
            waiterGameRound1Time: round1Time,
            waiterGameRound2Time: round2Time,
            waiterGameRound3Time: round3Time,
            waiterGameRound4Time: round4Time,
            waiterGameRound5Time: round5Time,
            step: 'step16'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step16`)).then(() => window.scrollTo(0, 0));
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={15} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('waiter_game_title')}</div>
                <   div className="description">{t('waiter_game')}</div>
            </div>}
            {round < 6 && round > 0 && <div className="gameInformations">{t('round')} {round}</div>}
            {isShowGuestsOrders && round < 4 &&

                <div className="isShowGuestsOrders">{t('waiter_game_rule_2')}</div>
            }
            {
                round === 6 && <div className="isShowGuestsOrders">{t('game_end_text_2')}</div>
            }

            {isShowGuests && <div className="isShowGuestsOrders">{t('waiter_game_rule_3')}</div>
            }
            {showText && <div className="isShowGuestsOrders">{t('waiter_game_rule')} {time} {t('waiter_game_rule_part2')}</div>
            }
            {round === 1 && isShowGuestsOrders && <div className="orders-container">
                <div className="order">
                    <img height="500" src='/waiter-game/orders1.png' />
                </div>
            </div>
            }
            {round === 2 && isShowGuestsOrders && <div className="orders-container">
                <div className="order">
                    <img height="500" src='/waiter-game/orders2.png' />
                </div>
            </div>
            }
            {round === 3 && isShowGuestsOrders && <div className="orders-container">
                <div className="order">
                    <img height="500" src='/waiter-game/orders3.png' />
                </div>
            </div>
            }
            {round === 4 && isShowGuestsOrders && <div className="orders-container">
                <div className="order">
                    <img height="500" src='/waiter-game/orders4.png' />
                </div>
            </div>
            }
            {round === 5 && isShowGuestsOrders && <div className="orders-container">
                <div className="order">
                    <img height="500" src='/waiter-game/orders5.png' />
                </div>
            </div>
            }
            {round === 1 && isShowGuests &&
                <div className="guests-container">
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order1-person1.png' />
                        <div className="meals">
                            {mealsPerson2.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson1" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson1(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order1-person2.png' />
                        <div className="meals">
                            {mealsPerson1.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson2" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson2(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            }

            {round === 2 && isShowGuests &&
                <div className="guests-container">
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order2-person2.png' />
                        <div className="meals">
                            {mealsPerson3.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson1" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson1(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order2-person1.png' />
                        <div className="meals">
                            {mealsPerson4.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson2" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson2(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            }

            {round === 3 && isShowGuests &&
                <div className="guests-container">
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order3-person1.png' />
                        <div className="meals">
                            {mealsPerson5.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson1" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson1(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order3-person2.png' />
                        <div className="meals">
                            {mealsPerson6.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson2" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson2(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            }

            {round === 4 && isShowGuests &&
                <div className="guests-container">
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order3-person2.png' />
                        <div className="meals">
                            {mealsPerson7.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson1" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson1(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order2-person1.png' />
                        <div className="meals">
                            {mealsPerson8.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson2" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson2(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            }

            {round === 5 && isShowGuests &&
                <div className="guests-container">
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order3-person1.png' />
                        <div className="meals">
                            {mealsPerson9.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson1" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson1(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="guest">
                        <img className="personImg" height="200" src='/waiter-game/order2-person1.png' />
                        <div className="meals">
                            {mealsPerson10.map((meal, index) => {
                                return (
                                    <div className="meal mealPerson2" key={index}><img height="80" src={meal.image} alt="" onClick={(e) => selectImagePerson2(e, index)} /></div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            }
            <div className="button">
                {round === 0 && <Button variant="contained" style={{ marginTop: 20 }} color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {isShowGuests && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 6 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                    .gameInformations{
                        margin-bottom: 30px;
                        font-weight: bold;
                        font-size: 22px;
                        text-align: center;
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
                        width: 60%;
                        margin-top: 20px;
                        margin: 0 auto;
                        background: #E6E6E6;
                        border: 1px solid black;
                    }
                    .meal{
                        margin: 5px 10px 0;
                        width: 80px;
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
                    .isShowGuestsOrders{
                        font-size: 18px;
                        text-align: center;
                        margin: 40px;
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
                        .isShowGuestsOrders{
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
                    }
                    @media screen and (max-width: 360px) {
                        .meals{
                            width: 100%;
                        }
                        .meal {
                            width: 
                            60px;
                        }
                    }
            `}
            </style>
        </div>

    )
}


export default Step15;
