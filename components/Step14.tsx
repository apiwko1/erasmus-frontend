import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import Card from './Card';
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import ButtonWithLoader from './ButtonWithLoader';



interface Props {
    exam: any;
    fieldWidth?: number;
    fieldHeight?: number;
}

const imagesRound1 = [
    { type: 'Tie', image: '/memory/tie.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Tie', image: '/memory/tie.png' },
    { type: 'Duck', image: '/memory/duck.png' },
];

const imagesRound2 = [
    { type: 'Carrot', image: '/memory/carrot.png' },
    { type: 'Sunny', image: '/memory/sunny.png' },
    { type: 'Lipstick', image: '/memory/lipstick.png' },
    { type: 'Carrot', image: '/memory/carrot.png' },
    { type: 'Lipstick', image: '/memory/lipstick.png' },
    { type: 'Sunny', image: '/memory/sunny.png' },
];

const imagesRound3 = [
    { type: 'Cactus', image: '/memory/cactus.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Hat', image: '/memory/hat.png' },
    { type: 'Cactus', image: '/memory/cactus.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Carrot', image: '/memory/carrot.png' },
    { type: 'Hat', image: '/memory/hat.png' },
    { type: 'Carrot', image: '/memory/carrot.png' },
];

const imagesRound4 = [
    { type: 'Sock', image: '/memory/sock.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Sock', image: '/memory/sock.png' },
    { type: 'Cactus', image: '/memory/cactus.png' },
    { type: 'Hat', image: '/memory/hat.png' },
    { type: 'Cactus', image: '/memory/cactus.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Sunny', image: '/memory/sunny.png' },
    { type: 'Sunny', image: '/memory/sunny.png' },
    { type: 'Hat', image: '/memory/hat.png' },
];

const imagesRound5 = [
    { type: 'Lipstick', image: '/memory/lipstick.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Sunny', image: '/memory/sunny.png' },
    { type: 'Lipstick', image: '/memory/lipstick.png' },
    { type: 'Hat', image: '/memory/hat.png' },
    { type: 'Tie', image: '/memory/tie.png' },
    { type: 'Cactus', image: '/memory/cactus.png' },
    { type: 'Tie', image: '/memory/tie.png' },
    { type: 'Cactus', image: '/memory/cactus.png' },
    { type: 'Hat', image: '/memory/hat.png' },
    { type: 'Duck', image: '/memory/duck.png' },
    { type: 'Sunny', image: '/memory/sunny.png' },
]

const Step14: React.FC<Props> = ({ exam, fieldWidth = 6, fieldHeight = 3 }) => {
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

    const [round1TimeToRememberCards, setRound1TimeToRememberCards] = useState(3000);
    const [round2TimeToRememberCards, setRound2TimeToRememberCards] = useState(5000);
    const [round3TimeToRememberCards, setRound3TimeToRememberCards] = useState(7000);
    const [round4TimeToRememberCards, setRound4TimeToRememberCards] = useState(9000);
    const [round5TimeToRememberCards, setRound5TimeToRememberCards] = useState(11000);

    const [round1TimeToFlipCards, setRound1TimeToFlipCards] = useState(2000);
    const [round2TimeToFlipCards, setRound2TimeToFlipCards] = useState(4000);
    const [round3TimeToFlipCards, setRound3TimeToFlipCards] = useState(6000);
    const [round4TimeToFlipCards, setRound4TimeToFlipCards] = useState(8000);
    const [round5TimeToFlipCards, setRound5TimeToFlipCards] = useState(9800);

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [round, setRound] = useState(-1);
    const [showCursor, setShowCursor] = useState(true);

    const cardIsDropped = (e, index) => {
        if (round === 1) {
            e.target.setAttribute('type', cardsRound1[index].type);
            setDraggedElement(e.target);
        }
        if (round === 2) {
            e.target.setAttribute('type', cardsRound2[index].type);
            setDraggedElement(e.target);
        }
        if (round === 3) {
            e.target.setAttribute('type', cardsRound3[index].type);
            setDraggedElement(e.target);
        }
        if (round === 4) {
            e.target.setAttribute('type', cardsRound4[index].type);
            setDraggedElement(e.target);
        }
        if (round === 5) {
            e.target.setAttribute('type', cardsRound5[index].type);
            setDraggedElement(e.target);
        }
    }

    const dropped = (e) => {
        if (e.currentTarget.firstChild.children.length < 2) {
            const dropzone = e.currentTarget.firstChild;
            dropzone.appendChild(draggedElement);
        }
    }

    const cursorStyle = {
        cursor: 'none',
    }

    const displayCursor = () => {
        document.body.style.cursor = 'default';
        setShowCursor(true);
    }

    useEffect(() => {
        if (round === 1) {
            const dropzone1 = document.getElementById("Round1DropZone1")!;
            const dropzone2 = document.getElementById("Round1DropZone2")!;
            setRound1DropZone1(dropzone1);
            setRound1DropZone2(dropzone2);
        }

        if (round === 2) {
            const dropzone1 = document.getElementById("Round2DropZone1")!;
            const dropzone2 = document.getElementById("Round2DropZone2")!;
            const dropzone3 = document.getElementById("Round2DropZone3")!;
            setRound2DropZone1(dropzone1);
            setRound2DropZone2(dropzone2);
            setRound2DropZone3(dropzone3);
        }

        if (round === 3) {
            const dropzone1 = document.getElementById("Round3DropZone1")!;
            const dropzone2 = document.getElementById("Round3DropZone2")!;
            const dropzone3 = document.getElementById("Round3DropZone3")!;
            const dropzone4 = document.getElementById("Round3DropZone4")!;
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
                setIsGameStarted(true);
                displayCursor();
            }, round1TimeToRememberCards);
        }
        if (round === 2) {
            setTimeout(() => {
                setIsGameStarted(true);
                displayCursor();
            }, round2TimeToRememberCards);
        }
        if (round === 3) {
            setTimeout(() => {
                setIsGameStarted(true);
                displayCursor();
            }, round3TimeToRememberCards);
        }
        if (round === 4) {
            setTimeout(() => {
                setIsGameStarted(true);
                displayCursor();
            }, round4TimeToRememberCards);
        }
        if (round === 5) {
            setTimeout(() => {
                setIsGameStarted(true);
                displayCursor();
            }, round5TimeToRememberCards);
        }
        if (round === 6) {
            checkGame();
        }
    }, [round])

    useEffect(() => {
        if (isGameStarted) {
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
        document.body.style.cursor = 'none';
        setShowCursor(false);
        setRound(1);
    }

    const goToNextRound = () => {
        if (round < 5) {
            document.body.style.cursor = 'none';
            setShowCursor(false);
        }
        if (round != 6) {
            setIsGameStarted(false);
            setRound(round + 1);
        }
    }

    const submit = () => {
        setIsLoading(true);
        const data = {
            memoryGameRound1Points: round1Points,
            memoryGameRound2Points: round2Points,
            memoryGameRound3Points: round3Points,
            memoryGameRound4Points: round4Points,
            memoryGameRound5Points: round5Points,
            memoryGameRound1MinusPoints: round1MinusPoints,
            memoryGameRound2MinusPoints: round2MinusPoints,
            memoryGameRound3MinusPoints: round3MinusPoints,
            memoryGameRound4MinusPoints: round4MinusPoints,
            memoryGameRound5MinusPoints: round5MinusPoints,
            memoryGameRound1Time: round1Time,
            memoryGameRound2Time: round2Time,
            memoryGameRound3Time: round3Time,
            memoryGameRound4Time: round4Time,
            memoryGameRound5Time: round5Time,
            step: 'step16'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step16`)).then(() => window.scrollTo(0, 0));
    }

    const checkGame = () => {
        let pointsRound1 = 0;
        let pointsRound2 = 0;
        let pointsRound3 = 0;
        let pointsRound4 = 0;
        let pointsRound5 = 0;

        if (Round1DropZone1.children[0]?.getAttribute('type') === Round1DropZone1.children[1]?.getAttribute('type')) {
            if (Round1DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound1++;
        }

        if (Round1DropZone2.children[0]?.getAttribute('type') === Round1DropZone2.children[1]?.getAttribute('type')) {
            if (Round1DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound1++;
        }

        setRound1Points(pointsRound1);
        setRound1MinusPoints(2 - pointsRound1);

        if (Round2DropZone1.children[0]?.getAttribute('type') === Round2DropZone1.children[1]?.getAttribute('type')) {
            if (Round2DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound2++;
        }

        if (Round2DropZone2.children[0]?.getAttribute('type') === Round2DropZone2.children[1]?.getAttribute('type')) {
            if (Round2DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound2++;
        }

        if (Round2DropZone3.children[0]?.getAttribute('type') === Round2DropZone3.children[1]?.getAttribute('type')) {
            if (Round2DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound2++;
        }

        setRound2Points(pointsRound2);
        setRound2MinusPoints(3 - pointsRound2);

        if (Round3DropZone1.children[0]?.getAttribute('type') === Round3DropZone1.children[1]?.getAttribute('type')) {
            if (Round3DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        }

        if (Round3DropZone2.children[0]?.getAttribute('type') === Round3DropZone2.children[1]?.getAttribute('type')) {
            if (Round3DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        }

        if (Round3DropZone3.children[0]?.getAttribute('type') === Round3DropZone3.children[1]?.getAttribute('type')) {
            if (Round3DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        }

        if (Round3DropZone4.children[0]?.getAttribute('type') === Round3DropZone4.children[1]?.getAttribute('type')) {
            if (Round3DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound3++;
        }

        setRound3Points(pointsRound3);
        setRound3MinusPoints(4 - pointsRound3);

        if (Round4DropZone1.children[0]?.getAttribute('type') === Round4DropZone1.children[1]?.getAttribute('type')) {
            if (Round4DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        }

        if (Round4DropZone2.children[0]?.getAttribute('type') === Round4DropZone2.children[1]?.getAttribute('type')) {
            if (Round4DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        }

        if (Round4DropZone3.children[0]?.getAttribute('type') === Round4DropZone3.children[1]?.getAttribute('type')) {
            if (Round4DropZone3.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        }

        if (Round4DropZone4.children[0]?.getAttribute('type') === Round4DropZone4.children[1]?.getAttribute('type')) {
            if (Round4DropZone4.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        }

        if (Round4DropZone5.children[0]?.getAttribute('type') === Round4DropZone5.children[1]?.getAttribute('type')) {
            if (Round4DropZone5.children[0]?.getAttribute('type') != undefined) pointsRound4++;
        }

        setRound4Points(pointsRound4);
        setRound4MinusPoints(5 - pointsRound4);

        if (Round5DropZone1.children[0]?.getAttribute('type') === Round5DropZone1.children[1]?.getAttribute('type')) {
            if (Round5DropZone1.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        }

        if (Round5DropZone2.children[0]?.getAttribute('type') === Round5DropZone2.children[1]?.getAttribute('type')) {
            if (Round5DropZone2.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        }

        if (Round5DropZone3.children[0]?.getAttribute('type') === Round5DropZone3.children[1]?.getAttribute('type')) {
            if (Round5DropZone3.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        }

        if (Round5DropZone4.children[0]?.getAttribute('type') === Round5DropZone4.children[1]?.getAttribute('type')) {
            if (Round5DropZone4.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        }

        if (Round5DropZone5.children[0]?.getAttribute('type') === Round5DropZone5.children[1]?.getAttribute('type')) {
            if (Round5DropZone5.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        }

        if (Round5DropZone6.children[0]?.getAttribute('type') === Round5DropZone6.children[1]?.getAttribute('type')) {
            if (Round5DropZone6.children[0]?.getAttribute('type') != undefined) pointsRound5++;
        }

        setRound5Points(pointsRound5);
        setRound5MinusPoints(6 - pointsRound5);
    }


    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={9} />
            </div>
            {round === -1 && <div className="gameDescription">
                <div className="descriptionTitle">{t('remember_pairs_game_title')}</div>
                <div className="description">{t('remember_pairs_game')}</div>
            </div>}
            {round === 6 && <div className="gameEndText">{t('game_end_text_2')}</div>}
            <div className="formContainer">
                {round < 6 && round > 0 && <div className="gameInformations">{t('round')} {round}</div>}
                {round === 1 && <div className="cards-container">
                    {cardsRound1.map((card, index) => {
                        return (
                            <div className="card" style={cursorStyle} key={index}>
                                <DragDropContainer noDragging={isGameStarted ? false : true} dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                ><Card
                                        isFlipped={false}
                                        key={index}
                                        card={card}
                                        index={index}
                                        showCursor={showCursor}
                                        flipTime={round1TimeToFlipCards}
                                    />
                                </DragDropContainer></div>
                        );
                    })}

                </div>}
                {round === 2 && <div className="cards-container">
                    {cardsRound2.map((card, index) => {
                        return (
                            <div className="card" key={index}>
                                <DragDropContainer noDragging={isGameStarted ? false : true} dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                ><Card
                                        isFlipped={false}
                                        key={index}
                                        card={card}
                                        index={index}
                                        showCursor={showCursor}
                                        flipTime={round2TimeToFlipCards}
                                    />
                                </DragDropContainer></div>
                        );
                    })}

                </div>}
                {round === 3 && <div className="cards-container">
                    {cardsRound3.map((card, index) => {
                        return (
                            <div className="card" key={index}>
                                <DragDropContainer noDragging={isGameStarted ? false : true} dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                ><Card
                                        isFlipped={false}
                                        key={index}
                                        card={card}
                                        index={index}
                                        showCursor={showCursor}
                                        flipTime={round3TimeToFlipCards}
                                    />
                                </DragDropContainer></div>
                        );
                    })}

                </div>}
                {round === 4 && <div className="cards-container">
                    {cardsRound4.map((card, index) => {
                        return (
                            <div className="card" key={index}>
                                <DragDropContainer noDragging={isGameStarted ? false : true} dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                ><Card
                                        isFlipped={false}
                                        key={index}
                                        card={card}
                                        index={index}
                                        showCursor={showCursor}
                                        flipTime={round4TimeToFlipCards}
                                    />
                                </DragDropContainer></div>
                        );
                    })}

                </div>}
                {round === 5 && <div className="cards-container">
                    {cardsRound5.map((card, index) => {
                        return (
                            <div className="card" key={index}>
                                <DragDropContainer noDragging={isGameStarted ? false : true} dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                                ><Card
                                        isFlipped={false}
                                        key={index}
                                        card={card}
                                        index={index}
                                        showCursor={showCursor}
                                        flipTime={round5TimeToFlipCards}
                                    />
                                </DragDropContainer></div>
                        );
                    })}

                </div>}
                {round < 6 && round > 0 && locale !== 'pl' && <div className="gameRule">{t('remember_pairs_game_rule')}</div>}
                {round < 6 && round > 0 && locale === 'pl' && !isGameStarted && <div className="gameRule">{t('remember_pairs_game_rule_2')}</div>}
                {round < 6 && round > 0 && locale === 'pl' && isGameStarted && <div className="gameRule">{t('remember_pairs_game_rule')}</div>}
                {round === 1 && <div className="box-container">

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round1DropZone1" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round1DropZone2" className="box"></div>
                    </DropTarget>

                </div>}
                {round === 2 && <div className="box-container">

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round2DropZone1" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round2DropZone2" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round2DropZone3" className="box"></div>
                    </DropTarget>

                </div>}
                {round === 3 && <div className="box-container">

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round3DropZone1" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round3DropZone2" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round3DropZone3" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round3DropZone4" className="box"></div>
                    </DropTarget>

                </div>}
                {round === 4 && <div className="box-container">

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round4DropZone1" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round4DropZone2" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round4DropZone3" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round4DropZone4" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round4DropZone5" className="box"></div>
                    </DropTarget>

                </div>}
                {round === 5 && <div className="box-container">

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round5DropZone1" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round5DropZone2" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card'>
                        <div id="Round5DropZone3" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round5DropZone4" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round5DropZone5" className="box"></div>
                    </DropTarget>

                    <DropTarget onHit={dropped} targetKey='card' >
                        <div id="Round5DropZone6" className="box"></div>
                    </DropTarget>

                </div>}
                <div className="button">
                    {round === -1 ? <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button> : round === 6 ? <ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader> : isGameStarted ? <Button variant="contained" color="secondary" onClick={goToNextRound}>{t('next')}</Button> : <></>
                    }
                </div>

            </div>


            <style jsx>
                {`
                .gameRule{
                    margin: 20px 0 0;
                    font-size: 17px;
                    text-align: center;
                }
                .gameInformations{
                    margin-bottom: 30px;
                    font-weight: bold;
                    font-size: 18px;
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
                    font-size: 15px;
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
                    margin-top: 40px;
                }
                .buttonContainer {
                    padding: 10px;
                }
                .handle {
                    width: 120px;
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
                    .handle {
                        width: 60px;
                    }
                }
                @media screen and (max-width: 480px) {
                    .box-container .box{
                        width: 50px;
                    }
                }
                @media screen and (max-width: 360px) {
                    .box-container .box{
                        width: 40px;
                        height: 100px;
                    }
                }
            `}
            </style>
        </div >
    )
}

export default Step14;
