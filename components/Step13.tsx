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
import { imagesRound1, imagesRound2, imagesRound3, imagesRound4, imagesRound5 } from '../helpers/constants/elementsInOrderGameImages';

interface Props {
    exam: any;
}

const Step13: React.FC<Props> = ({ exam }) => {
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

    const [isShowSortedItems, setIsShowSortedItems] = useState(false);
    const [isShowComplexImages, setIsShowComplexImages] = useState(false);

    const [Round1DropZone1, setRound1DropZone1] = useState(null);
    const [Round1DropZone2, setRound1DropZone2] = useState(null);
    const [Round1DropZone3, setRound1DropZone3] = useState(null);

    const [Round2DropZone1, setRound2DropZone1] = useState(null);
    const [Round2DropZone2, setRound2DropZone2] = useState(null);
    const [Round2DropZone3, setRound2DropZone3] = useState(null);
    const [Round2DropZone4, setRound2DropZone4] = useState(null);

    const [Round3DropZone1, setRound3DropZone1] = useState(null);
    const [Round3DropZone2, setRound3DropZone2] = useState(null);
    const [Round3DropZone3, setRound3DropZone3] = useState(null);
    const [Round3DropZone4, setRound3DropZone4] = useState(null);
    const [Round3DropZone5, setRound3DropZone5] = useState(null);

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

    const [round, setRound] = useState(0);

    const submit = () => {
        setIsLoading(true);
        const data = {
            sortImagesGameRound1Points: round1Points,
            sortImagesGameRound2Points: round2Points,
            sortImagesGameRound3Points: round3Points,
            sortImagesGameRound4Points: round4Points,
            sortImagesGameRound5Points: round5Points,
            sortImagesGameRound1MinusPoints: round1MinusPoints,
            sortImagesGameRound2MinusPoints: round2MinusPoints,
            sortImagesGameRound3MinusPoints: round3MinusPoints,
            sortImagesGameRound4MinusPoints: round4MinusPoints,
            sortImagesGameRound5MinusPoints: round5MinusPoints,
            sortImagesGameRound1Time: round1Time,
            sortImagesGameRound2Time: round2Time,
            sortImagesGameRound3Time: round3Time,
            sortImagesGameRound4Time: round4Time,
            sortImagesGameRound5Time: round5Time,
            step: 'step14'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step14`)).then(() => window.scrollTo(0,0));
    }

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
        if (e.currentTarget.children[0].classList.contains('dropContainerBox')) {
            if (!draggedElement.parentNode.classList.contains("dropContainerBox")) {
                const dropzone = e.currentTarget.firstChild;
                dropzone.appendChild(draggedElement);
            }
        }
        const dropzone = e.currentTarget.firstChild;
        if (e.currentTarget.firstChild.children.length < 2) {
            dropzone.appendChild(draggedElement);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isShowComplexImages) {
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
            }
        }, 1000);

    });

    useEffect(() => {
        if (isShowComplexImages) {
            if (round === 1) {
                const dropzone1 = document.getElementById("Round1DropZone1");
                const dropzone2 = document.getElementById("Round1DropZone2");
                const dropzone3 = document.getElementById("Round1DropZone3");
                setRound1DropZone1(dropzone1);
                setRound1DropZone2(dropzone2);
                setRound1DropZone3(dropzone3);
            }

            if (round === 2) {
                const dropzone1 = document.getElementById("Round2DropZone1");
                const dropzone2 = document.getElementById("Round2DropZone2");
                const dropzone3 = document.getElementById("Round2DropZone3");
                const dropzone4 = document.getElementById("Round2DropZone4");
                setRound2DropZone1(dropzone1);
                setRound2DropZone2(dropzone2);
                setRound2DropZone3(dropzone3);
                setRound2DropZone4(dropzone4);
            }

            if (round === 3) {
                const dropzone1 = document.getElementById("Round3DropZone1");
                const dropzone2 = document.getElementById("Round3DropZone2");
                const dropzone3 = document.getElementById("Round3DropZone3");
                const dropzone4 = document.getElementById("Round3DropZone4");
                const dropzone5 = document.getElementById("Round3DropZone5");
                setRound3DropZone1(dropzone1);
                setRound3DropZone2(dropzone2);
                setRound3DropZone3(dropzone3);
                setRound3DropZone4(dropzone4);
                setRound3DropZone5(dropzone5);
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
        }
    }, [round, isShowComplexImages])

    useEffect(() => {
        if (isShowSortedItems) {
            if (round === 1) {
                setTimeout(() => {
                    setIsShowSortedItems(false);
                    setIsShowComplexImages(true);
                }, 6000)
            }

            if (round === 2) {
                setTimeout(() => {
                    setIsShowSortedItems(false);
                    setIsShowComplexImages(true);
                }, 8000)
            }

            if (round === 3) {
                setTimeout(() => {
                    setIsShowSortedItems(false);
                    setIsShowComplexImages(true);
                }, 10000)
            }

            if (round === 4) {
                setTimeout(() => {
                    setIsShowSortedItems(false);
                    setIsShowComplexImages(true);
                }, 12000)
            }

            if (round === 5) {
                setTimeout(() => {
                    setIsShowSortedItems(false);
                    setIsShowComplexImages(true);
                }, 14000)
            }
        }
    })

    const nextRound = () => {
        if (round < 5) {
            setRound(round + 1);
            setIsShowComplexImages(false);
            setIsShowSortedItems(true);
        } else {
            checkGame();
            setRound(round + 1);
        }
    }

    const startGame = () => {
        setRound(round + 1);
        setIsShowSortedItems(true);
    }

    const checkGame = () => {
        let pointsRound1 = 0;
        let pointsRound2 = 0;
        let pointsRound3 = 0;
        let pointsRound4 = 0;
        let pointsRound5 = 0;

        if (Round1DropZone1.children[1]?.getAttribute('type') === '1') { pointsRound1++; }
        if (Round1DropZone2.children[1]?.getAttribute('type') === '2') { pointsRound1++; }
        if (Round1DropZone3.children[1]?.getAttribute('type') === '3') { pointsRound1++; }

        setRound1Points(pointsRound1);
        setRound1MinusPoints(3 - pointsRound1);

        if (Round2DropZone1.children[1]?.getAttribute('type') === '1') { pointsRound2++; }
        if (Round2DropZone2.children[1]?.getAttribute('type') === '2') { pointsRound2++; }
        if (Round2DropZone3.children[1]?.getAttribute('type') === '3') { pointsRound2++; }
        if (Round2DropZone4.children[1]?.getAttribute('type') === '4') { pointsRound2++; }

        setRound2Points(pointsRound2);
        setRound2MinusPoints(4 - pointsRound2);

        if (Round3DropZone1.children[1]?.getAttribute('type') === '1') { pointsRound3++; }
        if (Round3DropZone2.children[1]?.getAttribute('type') === '2') { pointsRound3++; }
        if (Round3DropZone3.children[1]?.getAttribute('type') === '3') { pointsRound3++; }
        if (Round3DropZone4.children[1]?.getAttribute('type') === '4') { pointsRound3++; }
        if (Round3DropZone5.children[1]?.getAttribute('type') === '5') { pointsRound3++; }

        setRound3Points(pointsRound3);
        setRound3MinusPoints(5 - pointsRound3);

        if (Round4DropZone1.children[1]?.getAttribute('type') === '1') { pointsRound4++; }
        if (Round4DropZone2.children[1]?.getAttribute('type') === '2') { pointsRound4++; }
        if (Round4DropZone3.children[1]?.getAttribute('type') === '3') { pointsRound4++; }
        if (Round4DropZone4.children[1]?.getAttribute('type') === '4') { pointsRound4++; }
        if (Round4DropZone5.children[1]?.getAttribute('type') === '5') { pointsRound4++; }
        if (Round4DropZone6.children[1]?.getAttribute('type') === '6') { pointsRound4++; }

        setRound4Points(pointsRound4);
        setRound4MinusPoints(6 - pointsRound4);

        if (Round5DropZone1.children[1]?.getAttribute('type') === '1') { pointsRound5++; }
        if (Round5DropZone2.children[1]?.getAttribute('type') === '2') { pointsRound5++; }
        if (Round5DropZone3.children[1]?.getAttribute('type') === '3') { pointsRound5++; }
        if (Round5DropZone4.children[1]?.getAttribute('type') === '4') { pointsRound5++; }
        if (Round5DropZone5.children[1]?.getAttribute('type') === '5') { pointsRound5++; }
        if (Round5DropZone6.children[1]?.getAttribute('type') === '6') { pointsRound5++; }
        if (Round5DropZone7.children[1]?.getAttribute('type') === '7') { pointsRound5++; }

        setRound5Points(pointsRound5);
        setRound5MinusPoints(7 - pointsRound5);
    }


    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={8} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('objects_in_order_game_title')}</div>
                <div className="description">{t('objects_in_order_game')}</div>
            </div>}
            {round > 0 && round < 6 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    {!isShowComplexImages && <div className="gameRule">{t('objects_in_order_game_rule')}</div>}
                    {isShowComplexImages && <div className="gameRule">{t('objects_in_order_game_rule_2')}</div>}
                </div>
            }
            {round === 6 && <div className="gameEndText">{t('game_end_text_2')}</div>}
            {round === 1 &&
                <div className="centerLandscape">
                    {isShowSortedItems &&
                        <div className="cardsBox">
                            {cardsRound1.map((card, index) => {
                                return (
                                    <div className="handleBox" key={index}>
                                        <img className="handle" src={card.image} />
                                        <div>{index + 1}</div>
                                    </div>
                                );
                            })}
                        </div>}
                    {isShowComplexImages &&
                        <div className="cardsBoxStep2">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div className="dropContainerBox">
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 1)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/shelf.png" />
                                            <img className="elementImage round1Element1" src="/elements-in-order/glass_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 2)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/shelf.png" />
                                            <img className="elementImage round1Element2" src="/elements-in-order/scarf_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 0)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/shelf.png" />
                                            <img className="elementImage round1Element3" src="/elements-in-order/book_t.png" />
                                        </div>
                                    </DragDropContainer>
                                </div>
                            </DropTarget>
                            <div className="dropContainerBoxDown">
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round1DropZone1" className="pickItem">
                                        <p>1</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round1DropZone2" className="pickItem">
                                        <p>2</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round1DropZone3" className="pickItem">
                                        <p>3</p>
                                    </div>
                                </DropTarget>
                            </div>
                        </div>
                    }
                </div>}
            {round === 2 &&
                <div className="centerLandscape">
                    {isShowSortedItems &&
                        <div className="cardsBox">
                            {cardsRound2.map((card, index) => {
                                return (
                                    <div className="handleBox" key={index}>
                                        <img className="handle" src={card.image} />
                                        <div>{index + 1}</div>
                                    </div>
                                );
                            })}
                        </div>}
                    {isShowComplexImages &&
                        <div className="cardsBoxStep2">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div className="dropContainerBox">
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 2)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/paintings.png" />
                                            <img className="elementImage round2Element1" src="/elements-in-order/pen_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 0)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/paintings.png" />
                                            <img className="elementImage round2Element2" src="/elements-in-order/hat_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 1)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/paintings.png" />
                                            <img className="elementImage round2Element3" src="/elements-in-order/cactus_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 3)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/paintings.png" />
                                            <img className="elementImage round2Element4" src="/elements-in-order/sock_t.png" />
                                        </div>
                                    </DragDropContainer>
                                </div>
                            </DropTarget>
                            <div className="dropContainerBoxDown">
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round2DropZone1" className="pickItem">
                                        <p>1</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round2DropZone2" className="pickItem">
                                        <p>2</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round2DropZone3" className="pickItem">
                                        <p>3</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round2DropZone4" className="pickItem">
                                        <p>4</p>
                                    </div>
                                </DropTarget>
                            </div>
                        </div>
                    }
                </div>}
            {round === 3 &&
                <div className="centerLandscape">
                    {isShowSortedItems &&
                        <div className="cardsBox">
                            {cardsRound3.map((card, index) => {
                                return (
                                    <div className="handleBox" key={index}>
                                        <img className="handle" src={card.image} />
                                        <div>{index + 1}</div>
                                    </div>
                                );
                            })}
                        </div>}
                    {isShowComplexImages &&
                        <div className="cardsBoxStep2">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div className="dropContainerBox">
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 1)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/couch.png" />
                                            <img className="elementImage round3Element1" src="/elements-in-order/lipstick_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 2)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/couch.png" />
                                            <img className="elementImage round3Element2" src="/elements-in-order/scarf_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 4)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/couch.png" />
                                            <img className="elementImage round3Element3" src="/elements-in-order/book_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 0)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/couch.png" />
                                            <img className="elementImage round3Element4" src="/elements-in-order/sock_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 3)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/couch.png" />
                                            <img className="elementImage round3Element5" src="/elements-in-order/clock_t.png" />
                                        </div>
                                    </DragDropContainer>
                                </div>
                            </DropTarget>
                            <div className="dropContainerBoxDown">
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round3DropZone1" className="pickItem">
                                        <p>1</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round3DropZone2" className="pickItem">
                                        <p>2</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round3DropZone3" className="pickItem">
                                        <p>3</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round3DropZone4" className="pickItem">
                                        <p>4</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round3DropZone5" className="pickItem">
                                        <p>5</p>
                                    </div>
                                </DropTarget>
                            </div>
                        </div>
                    }
                </div>}
            {round === 4 &&
                <div className="centerLandscape">
                    {isShowSortedItems &&
                        <div className="cardsBox">
                            {cardsRound4.map((card, index) => {
                                return (
                                    <div className="handleBox" key={index}>
                                        <img className="handle" src={card.image} />
                                        <div>{index + 1}</div>
                                    </div>
                                );
                            })}
                        </div>}
                    {isShowComplexImages &&
                        <div className="cardsBoxStep2">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div className="dropContainerBox">
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 5)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/table_room.png" />
                                            <img className="elementImage round4Element1" src="/elements-in-order/glass_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 2)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/table_room.png" />
                                            <img className="elementImage round4Element2" src="/elements-in-order/sock_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 1)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/table_room.png" />
                                            <img className="elementImage round4Element3" src="/elements-in-order/scarf_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 0)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/table_room.png" />
                                            <img className="elementImage round4Element4" src="/elements-in-order/hat_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 3)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/table_room.png" />
                                            <img className="elementImage round4Element5" src="/elements-in-order/pen_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 4)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/table_room.png" />
                                            <img className="elementImage round4Element6" src="/elements-in-order/book_t.png" />
                                        </div>
                                    </DragDropContainer>
                                </div>
                            </DropTarget>
                            <div className="dropContainerBoxDown">
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round4DropZone1" className="pickItem">
                                        <p>1</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round4DropZone2" className="pickItem">
                                        <p>2</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round4DropZone3" className="pickItem">
                                        <p>3</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round4DropZone4" className="pickItem">
                                        <p>4</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round4DropZone5" className="pickItem">
                                        <p>5</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round4DropZone6" className="pickItem">
                                        <p>6</p>
                                    </div>
                                </DropTarget>
                            </div>
                        </div>
                    }
                </div>}
            {round === 5 &&
                <div className="centerLandscape">
                    {isShowSortedItems &&
                        <div className="cardsBox">
                            {cardsRound5.map((card, index) => {
                                return (
                                    <div className="handleBox" key={index}>
                                        <img className="handle" src={card.image} />
                                        <div>{index + 1}</div>
                                    </div>
                                );
                            })}
                        </div>}
                    {isShowComplexImages &&
                        <div className="cardsBoxStep2">
                            <DropTarget onHit={dropped} targetKey='card'>
                                <div className="dropContainerBox">
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 5)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element1" src="/elements-in-order/hat_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 0)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element2" src="/elements-in-order/cactus_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 6)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element3" src="/elements-in-order/lipstick_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 3)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element4" src="/elements-in-order/clock_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 4)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element5" src="/elements-in-order/pen_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 1)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element6" src="/elements-in-order/book_t.png" />
                                        </div>
                                    </DragDropContainer>
                                    <DragDropContainer targetKey='card' onDrop={(e) => cardIsDropped(e, 2)}>
                                        <div className="imageBox">
                                            <img className="cupboardImage" src="/elements-in-order/cupboard.png" />
                                            <img className="elementImage round5Element7" src="/elements-in-order/sock_t.png" />
                                        </div>
                                    </DragDropContainer>
                                </div>
                            </DropTarget>
                            <div className="dropContainerBoxDown">
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone1" className="pickItem">
                                        <p>1</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone2" className="pickItem">
                                        <p>2</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone3" className="pickItem">
                                        <p>3</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone4" className="pickItem">
                                        <p>4</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone5" className="pickItem">
                                        <p>5</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone6" className="pickItem">
                                        <p>6</p>
                                    </div>
                                </DropTarget>
                                <DropTarget onHit={dropped} targetKey='card'>
                                    <div id="Round5DropZone7" className="pickItem">
                                        <p>7</p>
                                    </div>
                                </DropTarget>
                            </div>
                        </div>

                    }
                </div>}
            <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 6 && isShowComplexImages && <div><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 6 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>

            <style jsx>
                {
                    `
                    .pickItem {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 200px;
                        width: 200px;
                        border solid 2px;
                        margin: 10px;
                    }
                    .pickItem *{
                        text-align: center;
                        margin: 0 auto;
                    }
                    .pickItem .imageBox .cupboardImage{
                        width: 100%;
                    }
                    .pickItem .imageBox .elementImage{
                        width: 25%;
                    }
                    .pickItem p {
                        pointer-events: none;
                        position: absolute;
                    }
                    .imageBox{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 200px;
                        margin: 10px;
                    }
                    .dropContainerBox {
                        display: flex;
                        align-items: start;
                        justify-content: center;
                        width: 100wv;
                        min-height: 150px;
                        flex-wrap: wrap;
                        padding-bottom: 50px;
                    }

                    .dropContainerBoxDown {
                        display: flex;
                        align-items: start;
                        justify-content: center;
                        width: 100wv;
                        flex-wrap: wrap;
                    }
                    .round{
                        display: flex
                    }
                    .roundNumber{
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 50%;
                    }
                    .gameRule{
                        font-size: 18px;
                    }
                    .gameRules{
                        text-align:center;
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 30px;
                    }
                    
                    .centerLandscape{
                        user-select: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .cardsBox{
                        display: flex;
                        justify-content: center;
                        width:100%;
                        flex-wrap: wrap;
                        margin-top: 30px;
                    }
                    .handleBox{
                        text-align: center;
                        font-size: 18px;
                    }

                    .cardsBox .handle{
                        width:80px;
                    }
                    .cardsBoxStep2{
                        display: flex;
                        flex-direction: column;
                    }
                    .cupboardImage{
                        width: 100%;
                    }
                    .elementImage{
                        width: 25%;
                        position: absolute;
                    }
                    .round1Element1{
                        bottom: 38%;
                        left: 20%;
                    }
                    .round1Element2{
                        bottom: 1%;
                        right: 20%;
                    }
                    .round1Element3{
                        bottom: 62.5%;
                        right: 20%;
                    }
                    .round2Element1{
                        top: 15%;
                        left: 15%;
                    }
                    .round2Element2{
                        bottom: 18%;
                        right: 13%;
                    }
                    .round2Element3{                      
                        top: 15%;
                        left: 14%;
                    }
                    .round2Element4{
                        bottom: 12%;
                        left: 15%;
                    }
                    .round3Element1{
                        top: 41%;
                        right: 6%;
                    }
                    .round3Element2{
                        top: 2%;
                        right: 10%;
                    }
                    .round3Element3{
                        bottom: 8%;
                        left: 2%;
                    }
                    .round3Element4{
                        top: 36%;
                        right: 3%;
                    }
                    .round3Element5{
                        bottom: 9%;
                        right: 4%;
                    }
                    .round4Element1{
                        top: 18%;
                        right: 24%;
                    }
                    .round4Element2{
                        bottom: 0;
                        right: 20%;
                    }
                    .round4Element3{
                        bottom: 10%;
                        right: 0;
                    }
                    .round4Element4{
                        top: 25%;
                        right: 24%;
                    }
                    .round4Element5{
                        bottom: 4%;
                        left: 4%;
                    }
                    .round4Element6{
                        top: 12%;
                        left: 28%;
                    }
                    .round5Element1{
                        top: 7%;
                        left: 20%;
                    }
                    .round5Element2{
                        bottom: 29.5%;
                        right: 60%;
                    }
                    .round5Element3{
                        top: 8%;
                        right: 10%;
                    }
                    .round5Element4{
                        bottom: 5.5%;
                        right: 20%;
                    }
                    .round5Element5{
                        top: 7.5%;
                        left: 50%;
                    }
                    .round5Element6{
                        top: 26%;
                        right: 40%;
                    }
                    .round5Element7{
                        bottom: 5%;
                        right: 10%;
                    }

                    .cardsBox img{
                        width: 100px;
                        margin: 0 10px;
                    }
                    .cardsBox img{
                        width: 100px;
                        margin: 0 10px;
                    }
                    .cards-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        width: 50%;
                        min-width:320px;
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
                        margin-top: 60px;
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
                        border: solid 2px;
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
                    .round{
                        display: flex;
                        justify-content: center;
                        align-items: center; 
                        flex-direction: column;
                        margin-bottom: 30px;
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
                    @media screen and (max-width: 800px){
                        .roundNumber{
                            font-size: 20px;
                        }
                        .pickItem{
                            width: 150px;
                            height: 150px;
                        }
                        .imageBox{
                            width: 150px;
                            height: 150px;
                        }
                        .cardsBox .handle{
                            width:60px;
                        }
                        .handleBox{
                            font-size: 16px;
                        }
                    }  
                    @media screen and (max-width: 600px) {
                        .box-container .box{
                            width: 60px;
                            height: 140px;
                        }
                        .buttonContainer {
                            padding: 0;
                            margin-bottom: 5px;
                        }
                        .pickItem{
                            width: 100px;
                            height: 100px;
                        }
                        .imageBox{
                            width: 100px;
                            height: 100px;
                        }
                        .cardsBox .handle{
                            width:40px;
                        }
                        .handleBox{
                            font-size: 14px;
                        }
                        .gameRules{
                            font-size: 18px;
                            margin: 0 20px 20px 20px;
                        }

                    }
                    @media screen and (max-width: 480px) {

                        .box-container .box{
                            width: 50px;
                        }
                        .pickItem{
                            width: 60px;
                            height: 60px;
                        }
                        .imageBox{
                            width: 60px;
                            height: 60px;
                        }
                        .cardsBox .handle{
                            width: 40px;
                        }
                    }
                    @media screen and (max-width: 360px) {
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
export default Step13;