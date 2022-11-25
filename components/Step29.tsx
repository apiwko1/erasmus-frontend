import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import ButtonWithLoader from './ButtonWithLoader';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { imagesRound1, imagesRound2, imagesRound3, imagesRound4, imagesRound5 } from '../helpers/constants/actionResultGameImages';

interface Props {
    exam: any;
}

const Step29: React.FC<Props> = ({ exam }) => {
    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [cardsRound1, setCardsRound1] = useState(imagesRound1);
    const [cardsRound2, setCardsRound2] = useState(imagesRound2);
    const [cardsRound3, setCardsRound3] = useState(imagesRound3);
    const [cardsRound4, setCardsRound4] = useState(imagesRound4);
    const [cardsRound5, setCardsRound5] = useState(imagesRound5);
    const [draggedElement, setDraggedElement] = useState(null);

    const [Round1DropZone1, setRound1DropZone1] = useState(null);
    const [Round1DropZone2, setRound1DropZone2] = useState(null);

    const [Round2DropZone1, setRound2DropZone1] = useState(null);
    const [Round2DropZone2, setRound2DropZone2] = useState(null);
    const [Round2DropZone3, setRound2DropZone3] = useState(null);

    const [Round3DropZone1, setRound3DropZone1] = useState(null);
    const [Round3DropZone2, setRound3DropZone2] = useState(null);
    const [Round3DropZone3, setRound3DropZone3] = useState(null);
    const [Round3DropZone4, setRound3DropZone4] = useState(null);

    const [Round4DropZone1, setRound4DropZone1] = useState(null);
    const [Round4DropZone2, setRound4DropZone2] = useState(null);
    const [Round4DropZone3, setRound4DropZone3] = useState(null);
    const [Round4DropZone4, setRound4DropZone4] = useState(null);
    const [Round4DropZone5, setRound4DropZone5] = useState(null);

    const [Round5DropZone1, setRound5DropZone1] = useState(null);
    const [Round5DropZone2, setRound5DropZone2] = useState(null);
    const [Round5DropZone3, setRound5DropZone3] = useState(null);
    const [Round5DropZone4, setRound5DropZone4] = useState(null);
    const [Round5DropZone5, setRound5DropZone5] = useState(null);
    const [Round5DropZone6, setRound5DropZone6] = useState(null);

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

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [round, setRound] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

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
        if (e.currentTarget.children[0].classList.contains('cards-container')) {
            if (!draggedElement.parentNode.classList.contains("cards-container")) {
                const dropzone = e.currentTarget.firstChild;
                dropzone.appendChild(draggedElement);
                return;
            }
        }
        if (e.currentTarget.firstChild.children.length < 2) {
            const dropzone = e.currentTarget.firstChild;
            dropzone.appendChild(draggedElement);
        }
    }

    useEffect(() => {
        if (round === 1) {
            const dropzone1 = document.getElementById("Round1DropZone1")!;
            const dropzone2 = document.getElementById("Round1DropZone2")!;
            setRound1DropZone1(dropzone1);
            setRound1DropZone2(dropzone2);
        }

        if (round === 2) {
            const dropzone1 = document.getElementById("Round2DropZone1");
            const dropzone2 = document.getElementById("Round2DropZone2");
            const dropzone3 = document.getElementById("Round2DropZone3");
            setRound2DropZone1(dropzone1);
            setRound2DropZone2(dropzone2);
            setRound2DropZone3(dropzone3);
        }

        if (round === 3) {
            const dropzone1 = document.getElementById("Round3DropZone1");
            const dropzone2 = document.getElementById("Round3DropZone2");
            const dropzone3 = document.getElementById("Round3DropZone3");
            const dropzone4 = document.getElementById("Round3DropZone4");
            setRound3DropZone1(dropzone1);
            setRound3DropZone2(dropzone2);
            setRound3DropZone3(dropzone3);
            setRound3DropZone4(dropzone4);
        }

        if (round === 4) {
            const dropzone1 = document.getElementById("Round4DropZone1");
            const dropzone2 = document.getElementById("Round4DropZone2");
            const dropzone3 = document.getElementById("Round4DropZone3");
            const dropzone4 = document.getElementById("Round4DropZone4");
            const dropzone5 = document.getElementById("Round4DropZone5");
            setRound4DropZone1(dropzone1);
            setRound4DropZone2(dropzone2);
            setRound4DropZone3(dropzone3);
            setRound4DropZone4(dropzone4);
            setRound4DropZone5(dropzone5);
        }

        if (round === 5) {
            const dropzone1 = document.getElementById("Round5DropZone1");
            const dropzone2 = document.getElementById("Round5DropZone2");
            const dropzone3 = document.getElementById("Round5DropZone3");
            const dropzone4 = document.getElementById("Round5DropZone4");
            const dropzone5 = document.getElementById("Round5DropZone5");
            const dropzone6 = document.getElementById("Round5DropZone6");
            setRound5DropZone1(dropzone1);
            setRound5DropZone2(dropzone2);
            setRound5DropZone3(dropzone3);
            setRound5DropZone4(dropzone4);
            setRound5DropZone5(dropzone5);
            setRound5DropZone6(dropzone6);
        }
    }, [round])

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
    })

    const goToNextRound = () => {
        if (round < 5) {
            setRound(round + 1);
            return;
        }
        if (round === 5) {
            setRound(round + 1);
            checkGame();
        }
    }
    const startGame = () => {
        setRound(round + 1);
    }

    const submit = () => {
        setIsLoading(true);
        const data = {
            actionResultGameRound1Points: round1Points,
            actionResultGameRound2Points: round2Points,
            actionResultGameRound3Points: round3Points,
            actionResultGameRound4Points: round4Points,
            actionResultGameRound5Points: round5Points,
            actionResultGameRound1MinusPoints: round1MinusPoints,
            actionResultGameRound2MinusPoints: round2MinusPoints,
            actionResultGameRound3MinusPoints: round3MinusPoints,
            actionResultGameRound4MinusPoints: round4MinusPoints,
            actionResultGameRound5MinusPoints: round5MinusPoints,
            actionResultGameRound1Time: round1Time,
            actionResultGameRound2Time: round2Time,
            actionResultGameRound3Time: round3Time,
            actionResultGameRound4Time: round4Time,
            actionResultGameRound5Time: round5Time,
            step: 'done'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/done`)).then(() => window.scrollTo(0, 0));
    }

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

        if (Round1DropZone1.children[0]?.getAttribute('type') === Round1DropZone1.children[1]?.getAttribute('type')) {
            if (Round1DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound1++;
        } else minusPointsRound1++;

        if (Round1DropZone2.children[0]?.getAttribute('type') === Round1DropZone2.children[1]?.getAttribute('type')) {
            if (Round1DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound1++;
        } else minusPointsRound1++;

        setRound1Points(pointsRound1);
        setRound1MinusPoints(minusPointsRound1);

        if (Round2DropZone1.children[0]?.getAttribute('type') === Round2DropZone1.children[1]?.getAttribute('type')) {
            if (Round2DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound2++;
        } else minusPointsRound2++;

        if (Round2DropZone2.children[0]?.getAttribute('type') === Round2DropZone2.children[1]?.getAttribute('type')) {
            if (Round2DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound2++;
        } else minusPointsRound2++;

        if (Round2DropZone3.children[0]?.getAttribute('type') === Round2DropZone3.children[1]?.getAttribute('type')) {
            if (Round2DropZone3.children[0]?.getAttribute('type') != undefined) pointsRound2++;
        } else minusPointsRound2++;

        setRound2Points(pointsRound2);
        setRound2MinusPoints(minusPointsRound2);

        if (Round3DropZone1.children[0]?.getAttribute('type') === Round3DropZone1.children[1]?.getAttribute('type')) {
            if (Round3DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        } else minusPointsRound3++;

        if (Round3DropZone2.children[0]?.getAttribute('type') === Round3DropZone2.children[1]?.getAttribute('type')) {
            if (Round3DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        } else minusPointsRound3++;

        if (Round3DropZone3.children[0]?.getAttribute('type') === Round3DropZone3.children[1]?.getAttribute('type')) {
            if (Round3DropZone3.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        } else minusPointsRound3++;

        if (Round3DropZone4.children[0]?.getAttribute('type') === Round3DropZone4.children[1]?.getAttribute('type')) {
            if (Round3DropZone4.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        } else minusPointsRound3++;

        setRound3Points(pointsRound3);
        setRound3MinusPoints(minusPointsRound3);

        if (Round4DropZone1.children[0]?.getAttribute('type') === Round4DropZone1.children[1]?.getAttribute('type')) {
            if (Round4DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        } else minusPointsRound4++;

        if (Round4DropZone2.children[0]?.getAttribute('type') === Round4DropZone2.children[1]?.getAttribute('type')) {
            if (Round4DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        } else minusPointsRound4++;

        if (Round4DropZone3.children[0]?.getAttribute('type') === Round4DropZone3.children[1]?.getAttribute('type')) {
            if (Round4DropZone3.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        } else minusPointsRound4++;

        if (Round4DropZone4.children[0]?.getAttribute('type') === Round4DropZone4.children[1]?.getAttribute('type')) {
            if (Round4DropZone4.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        } else minusPointsRound4++;

        if (Round4DropZone5.children[0]?.getAttribute('type') === Round4DropZone5.children[1]?.getAttribute('type')) {
            if (Round4DropZone5.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        } else minusPointsRound4++;

        setRound4Points(pointsRound4);
        setRound4MinusPoints(minusPointsRound4);

        if (Round5DropZone1.children[0]?.getAttribute('type') === Round5DropZone1.children[1]?.getAttribute('type')) {
            if (Round5DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        } else minusPointsRound5++;

        if (Round5DropZone2.children[0]?.getAttribute('type') === Round5DropZone2.children[1]?.getAttribute('type')) {
            if (Round5DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        } else minusPointsRound5++;

        if (Round5DropZone3.children[0]?.getAttribute('type') === Round5DropZone3.children[1]?.getAttribute('type')) {
            if (Round5DropZone3.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        } else minusPointsRound5++;

        if (Round5DropZone4.children[0]?.getAttribute('type') === Round5DropZone4.children[1]?.getAttribute('type')) {
            if (Round5DropZone4.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        } else minusPointsRound5++;

        if (Round5DropZone5.children[0]?.getAttribute('type') === Round5DropZone5.children[1]?.getAttribute('type')) {
            if (Round5DropZone5.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        } else minusPointsRound5++;

        if (Round5DropZone6.children[0]?.getAttribute('type') === Round5DropZone6.children[1]?.getAttribute('type')) {
            if (Round5DropZone6.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        } else minusPointsRound5++;

        setRound5Points(pointsRound5);
        setRound5MinusPoints(minusPointsRound5);

    }
    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={23} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('consequences_game_title')}</div>
                <div className="description">{t('consequences_game')}</div>
            </div>}
            {round > 0 && round < 6 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    <div className="gameRule">{t('consequences_game_rule')}</div>
                </div>
            }
            {round === 6 && <div className="gameEndText">{t('end_all_tasks_text')}</div>}
            {round > 0 && <div className="formContainer">
                {round === 1 &&
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div className="cards-container">
                            {cardsRound1.map((card, index) => {
                                return (
                                    <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                    ><img src={card.image} height="80" />
                                    </DragDropContainer>
                                );
                            })}
                        </div>
                    </DropTarget>
                }
                {round === 2 &&
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div className="cards-container">
                            {cardsRound2.map((card, index) => {
                                return (
                                    <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                    ><img src={card.image} height="80" />
                                    </DragDropContainer>
                                );
                            })}
                        </div>
                    </DropTarget>}
                {round === 3 &&
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div className="cards-container">
                            {cardsRound3.map((card, index) => {
                                return (
                                    <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                    ><img src={card.image} height="80" />
                                    </DragDropContainer>
                                );
                            })}
                        </div>
                    </DropTarget>}
                {round === 4 &&
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div className="cards-container">
                            {cardsRound4.map((card, index) => {
                                return (
                                    <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                    ><img src={card.image} height="80" />
                                    </DragDropContainer>
                                );
                            })}
                        </div>
                    </DropTarget>}
                {round === 5 &&
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div className="cards-container">
                            {cardsRound5.map((card, index) => {
                                return (
                                    <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                    ><img src={card.image} height="80" />
                                    </DragDropContainer>
                                );
                            })}
                        </div>
                    </DropTarget>}
            </div>}
            {round === 1 && <div className="box-container">
                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round1DropZone1" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 1</div>
                    </DropTarget>

                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round1DropZone2" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 2</div>
                    </DropTarget>
                </div>
            </div>}
            {round === 2 && <div className="box-container">
                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round2DropZone1" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 1</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round2DropZone2" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 2</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round2DropZone3" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 3</div>
                    </DropTarget>
                </div>
            </div>}
            {round === 3 && <div className="box-container">
                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round3DropZone1" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 1</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round3DropZone2" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 2</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round3DropZone3" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 3</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round3DropZone4" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')}  4</div>
                    </DropTarget>
                </div>
            </div>}
            {round === 4 && <div className="box-container">
                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round4DropZone1" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 1</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round4DropZone2" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 2</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round4DropZone3" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 3</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round4DropZone4" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 4</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round4DropZone5" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 5</div>
                    </DropTarget>
                </div>
            </div>}

            {round === 5 && <div className="box-container">
                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round5DropZone1" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 1</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round5DropZone2" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 2</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round5DropZone3" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 3</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round5DropZone4" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 4</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round5DropZone5" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 5</div>
                    </DropTarget>
                </div>

                <div className="dropTargetBox">
                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round5DropZone6" className="box"></div>
                        <div className="dropTargetCaption">{t('pair')} 6</div>
                    </DropTarget>
                </div>
            </div>}
            <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round === 6 ? <ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader> : round < 6 && round > 0 ? <Button variant="contained" color="secondary" onClick={goToNextRound}>{t('next')}</Button> : <></>
                }
            </div>
            <style jsx>
                {
                    `
                img{
                    margin: 10px;
                    cursor: pointer;
                }
                .cards-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: start;
                    width: 100vw;
                    margin: 0 auto;
                    min-width:320px;
                    margin-top: 60px;
                    padding-bottom: 60px;
                }
                .round{
                    text-align: center;
                    font-size: 22px;
                }
                .roundNumber{
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    margin: 10px;
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
                    width: 100%;
                }

                .dropTargetBox{
                    text-align: center;
                }

                .dropTargetCaption{
                    font-weight: bold;
                    font-size: 18px;
                    margin-top: 5px;
                }


                .box-container .box{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    height: 220px;
                    width: 100px;
                    border solid 2px;
                    margin: 0 5px;
                }
                .dropZone{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .dropZone img{
                    margin-top: 20px;
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
                    font-weight: bold;
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
                @media screen and (max-width: 600px) {
                    img{
                        height: 50px;
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
                    .box-container .box img{
                        display: block;
                        text-align: center;
                        width: 40px;
                        height: 40px;
                    }
                    .cards-container{
                        padding-bottom: 40px;
                    }
                }
                @media screen and (max-width: 360px) {
                    img{
                        width: 40px;
                        height: 40px;
                    }
                    .box-container{
                        margin: 0 2px;
                    }
                    .box-container .box img{
                        display: block;
                        text-align: center;
                        width: 25px;
                        height: 25px;
                        box-sizing: border-box;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .box-container .box{
                        width: 40px;
                        height: 100px;
                    }
                }    
                 `
                }
            </style>
        </div>
    );

}


export default Step29;