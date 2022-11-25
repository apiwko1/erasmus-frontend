import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useTranslation from '../hooks/useTranslation';
import { updateStep } from '../services/exam';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import ButtonWithLoader from './ButtonWithLoader';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const imagesRound1 = [
    { type: '2', image: '/story1/card5_2.png' },
    { type: '4', image: '/story1/card5_4.png' },
    { type: '1', image: '/story1/card5_1.png' },
    { type: '5', image: '/story1/card5_5.png' },
    { type: '3', image: '/story1/card5_3.png' },
];

const imagesRound2 = [
    { type: '1', image: '/story2/card6_1.png' },
    { type: '6', image: '/story2/card6_6.png' },
    { type: '2', image: '/story2/card6_2.png' },
    { type: '5', image: '/story2/card6_5.png' },
    { type: '3', image: '/story2/card6_3.png' },
    { type: '4', image: '/story2/card6_4.png' },
];

const imagesRound5 = [
    { type: '7', image: '/story3/card7_7.png' },
    { type: '1', image: '/story3/card7_1.png' },
    { type: '5', image: '/story3/card7_5.png' },
    { type: '4', image: '/story3/card7_4.png' },
    { type: '3', image: '/story3/card7_3.png' },
    { type: '2', image: '/story3/card7_2.png' },
    { type: '6', image: '/story3/card7_6.png' },
];

const imagesRound3 = [
    { type: '4', image: '/story4/4.png' },
    { type: '2', image: '/story4/2.png' },
    { type: '1', image: '/story4/1.png' },
    { type: '6', image: '/story4/6.png' },
    { type: '3', image: '/story4/3.png' },
    { type: '5', image: '/story4/5.png' },
];

const imagesRound4 = [
    { type: '2', image: '/story5/2.png' },
    { type: '5', image: '/story5/5.png' },
    { type: '3', image: '/story5/3.png' },
    { type: '6', image: '/story5/7.png' },
    { type: '4', image: '/story5/4.png' },
    { type: '1', image: '/story5/1.png' },
];

interface Props {
    exam: any;
}

const Step28: React.FC<Props> = ({ exam }) => {

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [draggedElement, setDraggedElement] = useState(null);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [cardsRound1, setCardsRound1] = useState(imagesRound1);
    const [cardsRound2, setCardsRound2] = useState(imagesRound2);
    const [cardsRound3, setCardsRound3] = useState(imagesRound3);
    const [cardsRound4, setCardsRound4] = useState(imagesRound4);
    const [cardsRound5, setCardsRound5] = useState(imagesRound5);

    const [story1Points, setStory1Points] = useState(0);
    const [story2Points, setStory2Points] = useState(0);
    const [story3Points, setStory3Points] = useState(0);
    const [story4Points, setStory4Points] = useState(0);
    const [story5Points, setStory5Points] = useState(0);

    const [story1MinusPoints, setStory1MinusPoints] = useState(0);
    const [story2MinusPoints, setStory2MinusPoints] = useState(0);
    const [story3MinusPoints, setStory3MinusPoints] = useState(0);
    const [story4MinusPoints, setStory4MinusPoints] = useState(0);
    const [story5MinusPoints, setStory5MinusPoints] = useState(0);

    const [round1Time, setRound1Time] = useState(0);
    const [round2Time, setRound2Time] = useState(0);
    const [round3Time, setRound3Time] = useState(0);
    const [round4Time, setRound4Time] = useState(0);
    const [round5Time, setRound5Time] = useState(0);

    const [Round1DropZone1, setRound1DropZone1] = useState(null);
    const [Round1DropZone2, setRound1DropZone2] = useState(null);
    const [Round1DropZone3, setRound1DropZone3] = useState(null);
    const [Round1DropZone4, setRound1DropZone4] = useState(null);
    const [Round1DropZone5, setRound1DropZone5] = useState(null);

    const [Round2DropZone1, setRound2DropZone1] = useState(null);
    const [Round2DropZone2, setRound2DropZone2] = useState(null);
    const [Round2DropZone3, setRound2DropZone3] = useState(null);
    const [Round2DropZone4, setRound2DropZone4] = useState(null);
    const [Round2DropZone5, setRound2DropZone5] = useState(null);
    const [Round2DropZone6, setRound2DropZone6] = useState(null);

    const [Round3DropZone1, setRound3DropZone1] = useState(null);
    const [Round3DropZone2, setRound3DropZone2] = useState(null);
    const [Round3DropZone3, setRound3DropZone3] = useState(null);
    const [Round3DropZone4, setRound3DropZone4] = useState(null);
    const [Round3DropZone5, setRound3DropZone5] = useState(null);
    const [Round3DropZone6, setRound3DropZone6] = useState(null);

    const [Round4DropZone1, setRound4DropZone1] = useState(null);
    const [Round4DropZone2, setRound4DropZone2] = useState(null);
    const [Round4DropZone3, setRound4DropZone3] = useState(null);
    const [Round4DropZone4, setRound4DropZone4] = useState(null);
    const [Round4DropZone5, setRound4DropZone5] = useState(null);
    const [Round4DropZone6, setRound4DropZone6] = useState(null);

    const [Round5DropZone1, setRound5DropZone1] = useState(null);
    const [Round5DropZone2, setRound5DropZone2] = useState(null);
    const [Round5DropZone3, setRound5DropZone3] = useState(null);
    const [Round5DropZone4, setRound5DropZone4] = useState(null);
    const [Round5DropZone5, setRound5DropZone5] = useState(null);
    const [Round5DropZone6, setRound5DropZone6] = useState(null);
    const [Round5DropZone7, setRound5DropZone7] = useState(null);

    const [round, setRound] = useState(0);


    const cardIsDropped = (e, index) => {
        if (round === 1) {
            e.target.setAttribute('type', cardsRound1[index].type);
            e.target.setAttribute('index', index);
            setDraggedElement(e.target);
        }
        if (round === 2) {
            e.target.setAttribute('type', cardsRound2[index].type);
            e.target.setAttribute('index', index);
            setDraggedElement(e.target);
        }
        if (round === 3) {
            e.target.setAttribute('type', cardsRound3[index].type);
            e.target.setAttribute('index', index);
            setDraggedElement(e.target);
        }
        if (round === 4) {
            e.target.setAttribute('type', cardsRound4[index].type);
            e.target.setAttribute('index', index);
            setDraggedElement(e.target);
        }
        if (round === 5) {
            e.target.setAttribute('type', cardsRound5[index].type);
            e.target.setAttribute('index', index);
            setDraggedElement(e.target);
        }
    }

    const dropped = (e) => {
        if (e.currentTarget.children[0].classList.contains('storiesBox')) {
            if (!draggedElement.parentNode.classList.contains("storiesBox")) {
                const dropzone = e.currentTarget.firstChild;
                dropzone.appendChild(draggedElement);
            }
        } else {
            const dropzone = e.currentTarget.firstChild;
            if (e.currentTarget.firstChild.children.length < 2) {
                dropzone.appendChild(draggedElement);
            }
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
                setRound4Time(round3Time + 1);
            }

            if (round === 5) {
                setRound5Time(round3Time + 1);
            }
        }, 1000);
    });

    useEffect(() => {
        if (round === 1) {
            const dropzone1 = document.getElementById("Round1DropZone1")!;
            const dropzone2 = document.getElementById("Round1DropZone2")!;
            const dropzone3 = document.getElementById("Round1DropZone3")!;
            const dropzone4 = document.getElementById("Round1DropZone4")!;
            const dropzone5 = document.getElementById("Round1DropZone5")!;
            setRound1DropZone1(dropzone1);
            setRound1DropZone2(dropzone2);
            setRound1DropZone3(dropzone3);
            setRound1DropZone4(dropzone4);
            setRound1DropZone5(dropzone5);
        }

        if (round === 2) {
            const dropzone1 = document.getElementById("Round2DropZone1");
            const dropzone2 = document.getElementById("Round2DropZone2");
            const dropzone3 = document.getElementById("Round2DropZone3");
            const dropzone4 = document.getElementById("Round2DropZone4");
            const dropzone5 = document.getElementById("Round2DropZone5");
            const dropzone6 = document.getElementById("Round2DropZone6");
            setRound2DropZone1(dropzone1);
            setRound2DropZone2(dropzone2);
            setRound2DropZone3(dropzone3);
            setRound2DropZone4(dropzone4);
            setRound2DropZone5(dropzone5);
            setRound2DropZone6(dropzone6);
        }

        if (round === 3) {
            const dropzone1 = document.getElementById("Round3DropZone1");
            const dropzone2 = document.getElementById("Round3DropZone2");
            const dropzone3 = document.getElementById("Round3DropZone3");
            const dropzone4 = document.getElementById("Round3DropZone4");
            const dropzone5 = document.getElementById("Round3DropZone5");
            const dropzone6 = document.getElementById("Round3DropZone6");
            setRound3DropZone1(dropzone1);
            setRound3DropZone2(dropzone2);
            setRound3DropZone3(dropzone3);
            setRound3DropZone4(dropzone4);
            setRound3DropZone5(dropzone5);
            setRound3DropZone6(dropzone6);
        }

        if (round === 4) {
            const dropzone1 = document.getElementById("Round4DropZone1");
            const dropzone2 = document.getElementById("Round4DropZone2");
            const dropzone3 = document.getElementById("Round4DropZone3");
            const dropzone4 = document.getElementById("Round4DropZone4");
            const dropzone5 = document.getElementById("Round4DropZone5");
            const dropzone6 = document.getElementById("Round4DropZone6");
            setRound4DropZone1(dropzone1);
            setRound4DropZone2(dropzone2);
            setRound4DropZone3(dropzone3);
            setRound4DropZone4(dropzone4);
            setRound4DropZone5(dropzone5);
            setRound4DropZone6(dropzone6);
        }

        if (round === 5) {
            const dropzone1 = document.getElementById("Round5DropZone1");
            const dropzone2 = document.getElementById("Round5DropZone2");
            const dropzone3 = document.getElementById("Round5DropZone3");
            const dropzone4 = document.getElementById("Round5DropZone4");
            const dropzone5 = document.getElementById("Round5DropZone5");
            const dropzone6 = document.getElementById("Round5DropZone6");
            const dropzone7 = document.getElementById("Round5DropZone7");
            setRound5DropZone1(dropzone1);
            setRound5DropZone2(dropzone2);
            setRound5DropZone3(dropzone3);
            setRound5DropZone4(dropzone4);
            setRound5DropZone5(dropzone5);
            setRound5DropZone6(dropzone6);
            setRound5DropZone7(dropzone7);
        }
    }, [round])

    const submit = () => {
        if (round === 1) {
            setRound(round + 1);
        }
        if (round === 2) {
            setRound(round + 1);
        }
        if (round === 3) {
            setRound(round + 1);
        }
        if (round === 4) {
            setRound(round + 1);
        }
        if (round === 5) {
            setRound(round + 1);
            setIsGameEnd(true);
        }

        if (round === 6) {
            setIsLoading(true);
            const data = {
                storyGameRound1Points: story1Points,
                storyGameRound2Points: story2Points,
                storyGameRound3Points: story3Points,
                storyGameRound4Points: story4Points,
                storyGameRound5Points: story5Points,
                storyGameRound1MinusPoints: story1MinusPoints,
                storyGameRound2MinusPoints: story2MinusPoints,
                storyGameRound3MinusPoints: story3MinusPoints,
                storyGameRound4MinusPoints: story4MinusPoints,
                storyGameRound5MinusPoints: story5MinusPoints,
                storyGameRound1Time: round1Time,
                storyGameRound2Time: round2Time,
                storyGameRound3Time: round3Time,
                storyGameRound4Time: round4Time,
                storyGameRound5Time: round5Time,
                step: 'step29'
            }

            updateStep(token, data).then(() => router.push(`/${locale}/${token}/step29`)).then(() => window.scrollTo(0, 0));
        }

    }

    useEffect(() => {
        if (round === 6) {
            checkGame();
        }
    }, [isGameEnd]);

    const checkGame = () => {
        let pointsRound1 = 0;
        let pointsRound2 = 0;
        let pointsRound3 = 0;
        let pointsRound4 = 0;
        let pointsRound5 = 0;
        let minusPointsRound1 = 0;
        let minusPointsRound2 = 0;
        let minusPointsRound3 = 0;
        let minusPointsRound4 = 0;
        let minusPointsRound5 = 0;

        if (Round1DropZone1.children[1]?.getAttribute('type') === '1') pointsRound1++; else minusPointsRound1++;

        if (Round1DropZone2.children[1]?.getAttribute('type') === '2') pointsRound1++; else minusPointsRound1++;

        if (Round1DropZone3.children[1]?.getAttribute('type') === '3') pointsRound1++; else minusPointsRound1++;

        if (Round1DropZone4.children[1]?.getAttribute('type') === '4') pointsRound1++; else minusPointsRound1++;

        if (Round1DropZone5.children[1]?.getAttribute('type') === '5') pointsRound1++; else minusPointsRound1++;

        setStory1Points(pointsRound1);
        setStory1MinusPoints(minusPointsRound1);

        if (Round2DropZone1.children[1]?.getAttribute('type') === '1') pointsRound2++; else minusPointsRound2++;

        if (Round2DropZone2.children[1]?.getAttribute('type') === '2') pointsRound2++; else minusPointsRound2++;

        if (Round2DropZone3.children[1]?.getAttribute('type') === '3') pointsRound2++; else minusPointsRound2++;

        if (Round2DropZone4.children[1]?.getAttribute('type') === '4') pointsRound2++; else minusPointsRound2++;

        if (Round2DropZone5.children[1]?.getAttribute('type') === '5') pointsRound2++; else minusPointsRound2++;

        if (Round2DropZone6.children[1]?.getAttribute('type') === '6') pointsRound2++; else minusPointsRound2++;

        setStory2Points(pointsRound2);
        setStory2MinusPoints(minusPointsRound2);

        if (Round3DropZone1.children[1]?.getAttribute('type') === '1') pointsRound3++; else minusPointsRound3++;

        if (Round3DropZone2.children[1]?.getAttribute('type') === '2') pointsRound3++; else minusPointsRound3++;

        if (Round3DropZone3.children[1]?.getAttribute('type') === '3') pointsRound3++; else minusPointsRound3++;

        if (Round3DropZone4.children[1]?.getAttribute('type') === '4') pointsRound3++; else minusPointsRound3++;

        if (Round3DropZone5.children[1]?.getAttribute('type') === '5') pointsRound3++; else minusPointsRound3++;

        if (Round3DropZone6.children[1]?.getAttribute('type') === '6') pointsRound3++; else minusPointsRound3++;

        setStory3Points(pointsRound3);
        setStory3MinusPoints(minusPointsRound3);

        if (Round4DropZone1.children[1]?.getAttribute('type') === '1') pointsRound4++; else minusPointsRound4++;

        if (Round4DropZone2.children[1]?.getAttribute('type') === '2') pointsRound4++; else minusPointsRound4++;

        if (Round4DropZone3.children[1]?.getAttribute('type') === '3') pointsRound4++; else minusPointsRound4++;

        if (Round4DropZone4.children[1]?.getAttribute('type') === '4') pointsRound4++; else minusPointsRound4++;

        if (Round4DropZone5.children[1]?.getAttribute('type') === '5') pointsRound4++; else minusPointsRound4++;

        if (Round4DropZone6.children[1]?.getAttribute('type') === '6') pointsRound4++; else minusPointsRound4++;

        setStory4Points(pointsRound4);
        setStory4MinusPoints(minusPointsRound4);

        if (Round5DropZone1.children[1]?.getAttribute('type') === '1') pointsRound5++; else minusPointsRound5++;

        if (Round5DropZone2.children[1]?.getAttribute('type') === '2') pointsRound5++; else minusPointsRound5++;

        if (Round5DropZone3.children[1]?.getAttribute('type') === '3') pointsRound5++; else minusPointsRound5++;

        if (Round5DropZone4.children[1]?.getAttribute('type') === '4') pointsRound5++; else minusPointsRound5++;

        if (Round5DropZone5.children[1]?.getAttribute('type') === '5') pointsRound5++; else minusPointsRound5++;

        if (Round5DropZone6.children[1]?.getAttribute('type') === '6') pointsRound5++; else minusPointsRound5++;

        if (Round5DropZone7.children[1]?.getAttribute('type') === '7') pointsRound5++; else minusPointsRound5++;

        setStory5Points(pointsRound5);
        setStory5MinusPoints(minusPointsRound5);
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={22} />
            </div>

            <div className="formContainer">

                {round === 0 && <div className="gameDescription">
                    <div className="descriptionTitle">{t('stories_game_title')}</div>
                    <div className="description">{t('stories_game')}</div>
                </div>}
                {round === 6 && <div className="gameEndText">{t('game_end_text_2')}</div>}
                {round < 6 && round > 0 && <div className="gameInformations">{t('round')} {round}</div>}
                {round === 1 &&
                    <div className="stories">

                        <DropTarget onHit={dropped} targetKey='card'>
                            <div className="storiesBox">
                                {cardsRound1.map((card, index) => {
                                    return (
                                        <DragDropContainer key={index} targetKey='card' onDrop={(e) => cardIsDropped(e, index)}>
                                            <div>
                                                <img className="handle" src={card.image} width="120" />
                                            </div>
                                        </DragDropContainer>
                                    )
                                })}
                            </div>
                        </DropTarget>

                        <div className="gameRule">{t('stories_game_rule')}</div>
                        <div className="items">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round1DropZone1" className="pickItem">
                                    <p>{t('step_1')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round1DropZone2" className="pickItem">
                                    <p>{t('step_2')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round1DropZone3" className="pickItem">
                                    <p>{t('step_3')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round1DropZone4" className="pickItem">
                                    <p>{t('step_4')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round1DropZone5" className="pickItem">
                                    <p>{t('step_5')}</p>
                                </div>
                            </DropTarget>
                        </div>
                    </div>
                }
                {round === 2 &&
                    <div className="stories">
                        <DropTarget onHit={dropped} targetKey='card'>
                            <div className="storiesBox">
                                {cardsRound2.map((card, index) => {
                                    return (
                                        <DragDropContainer key={index} targetKey='card' onDrop={(e) => cardIsDropped(e, index)}>
                                            <div>
                                                <img className="handle" src={card.image} width="120" />
                                            </div>
                                        </DragDropContainer>
                                    )
                                })}
                            </div>
                        </DropTarget>
                        <div className="gameRule">{t('stories_game_rule')}</div>
                        <div className="items">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round2DropZone1" className="pickItem">
                                    <p>{t('step_1')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round2DropZone2" className="pickItem">
                                    <p>{t('step_2')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round2DropZone3" className="pickItem">
                                    <p>{t('step_3')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round2DropZone4" className="pickItem">
                                    <p>{t('step_4')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round2DropZone5" className="pickItem">
                                    <p>{t('step_5')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round2DropZone6" className="pickItem">
                                    <p>{t('step_6')}</p>
                                </div>
                            </DropTarget>
                        </div>
                    </div>
                }
                {round === 3 &&
                    <div className="stories">
                        <DropTarget onHit={dropped} targetKey='card'>
                            <div className="storiesBox">
                                {cardsRound3.map((card, index) => {
                                    return (
                                        <DragDropContainer key={index} targetKey='card' onDrop={(e) => cardIsDropped(e, index)}>
                                            <div>
                                                <img className="handle" src={card.image} width="120" />
                                            </div>
                                        </DragDropContainer>
                                    )
                                })}
                            </div>
                        </DropTarget>
                        <div className="gameRule">{t('stories_game_rule')}</div>
                        <div className="items">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round3DropZone1" className="pickItem">
                                    <p>{t('step_1')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round3DropZone2" className="pickItem">
                                    <p>{t('step_2')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round3DropZone3" className="pickItem">
                                    <p>{t('step_3')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round3DropZone4" className="pickItem">
                                    <p>{t('step_4')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round3DropZone5" className="pickItem">
                                    <p>{t('step_5')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round3DropZone6" className="pickItem">
                                    <p>{t('step_6')}</p>
                                </div>
                            </DropTarget>
                        </div>
                    </div>
                }
                {round === 4 &&
                    <div className="stories">
                        <DropTarget onHit={dropped} targetKey='card'>
                            <div className="storiesBox">
                                {cardsRound4.map((card, index) => {
                                    return (
                                        <DragDropContainer key={index} targetKey='card' onDrop={(e) => cardIsDropped(e, index)}>
                                            <div>
                                                <img className="handle" src={card.image} width="120" />
                                            </div>
                                        </DragDropContainer>
                                    )
                                })}
                            </div>
                        </DropTarget>
                        <div className="gameRule">{t('stories_game_rule')}</div>
                        <div className="items">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round4DropZone1" className="pickItem">
                                    <p>{t('step_1')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round4DropZone2" className="pickItem">
                                    <p>{t('step_2')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round4DropZone3" className="pickItem">
                                    <p>{t('step_3')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round4DropZone4" className="pickItem">
                                    <p>{t('step_4')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round4DropZone5" className="pickItem">
                                    <p>{t('step_5')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round4DropZone6" className="pickItem">
                                    <p>{t('step_6')}</p>
                                </div>
                            </DropTarget>
                        </div>
                    </div>
                }
                {round === 5 &&
                    <div className="stories">
                        <DropTarget onHit={dropped} targetKey='card'>
                            <div className="storiesBox">
                                {cardsRound5.map((card, index) => {
                                    return (
                                        <DragDropContainer key={index} targetKey='card' onDrop={(e) => cardIsDropped(e, index)}>
                                            <div>
                                                <img className="handle" src={card.image} width="120" />
                                            </div>
                                        </DragDropContainer>
                                    )
                                })}
                            </div>
                        </DropTarget>
                        <div className="gameRule">{t('stories_game_rule')}</div>
                        <div className="items">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone1" className="pickItem">
                                    <p>{t('step_1')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone2" className="pickItem">
                                    <p>{t('step_2')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone3" className="pickItem">
                                    <p>{t('step_3')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone4" className="pickItem">
                                    <p>{t('step_4')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone5" className="pickItem">
                                    <p>{t('step_5')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone6" className="pickItem">
                                    <p>{t('step_6')}</p>
                                </div>
                            </DropTarget>
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div id="Round5DropZone7" className="pickItem">
                                    <p>{t('step_7')}</p>
                                </div>
                            </DropTarget>
                        </div>
                    </div>
                }
            </div>
            {round <= 6 &&
                <div className="button">
                    {round === 0 && <Button variant="contained" color="secondary" onClick={() => setRound(round + 1)}>{t('start_game')}</Button>}
                    {round > 0 && round <= 6 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
                </div>
            }
            <style jsx>
                {`
            .gameRule{
                margin-bottom: 20px;
                font-size: 20px;
                text-align: center;
            }
            .gameInformations{
                margin-bottom: 30px;
                font-weight: bold;
                font-size: 18px;
            }
            .gameEndText{
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                margin: 10px;
                max-width: 80%;
            }
            .progressContainer {
                padding: 30px 10% 15px 10%;
            }
            .items {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            .handle {
                border: 3px solid black;
                margin: 5px;
            }
            .pickItem {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 200px;
                width: 150px;
                border solid 2px;
            }
            .pickItem p {
                pointer-events: none;
                position: absolute;
            }
            .imgBox{
                margin: 5px;
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
                flex-direction: column;
            }
            .stories img {
                cursor: pointer;
            }
            .storiesBox{
                display: flex;
                width: 100vw;
                justify-content: center;
                align-items: center;
                flex-flow: row wrap;
                height:200px;
                padding-bottom: 80px;
            }
            .droptarget{
                display: flex;
                border: 1px solid red;
                width: 100%;
                justify-content: center;
                align-items: center;
                flex-flow: row wrap;
                height: 150px;
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
                margin-top: 40px;
            }
            .buttonContainer {
                padding: 10px;
            }
            .handle {
                width: 120px;
            }
            @media screen and (max-width: 1200px){
                .pickItem{
                    width: 80px;
                    height: 80px;
                }
                .handle{
                    width: 78px;
                }
            }
            @media screen and (max-width: 800px) {
                .pickItem {
                    width: 60px;
                    height: 60px;
                }
                .handle {
                    width: 60px;
                }
            }
            @media screen and (max-width: 600px) {
                .gameRule{
                    font-size: 18px;
                }
                .buttonContainer {
                    padding: 0;
                    margin-bottom: 5px;
                }
                .handle {
                    width: 60px;
                }
                .storiesBox{
                    padding-bottom: 50px;
                }
            }
            @media screen and (max-width: 400px){
                .items{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    width: 100%;
                }
                .items .pickItem{
                    margin: 5px;
                }
            }
            `}
            </style>
        </div >
    )
}

export default Step28;
