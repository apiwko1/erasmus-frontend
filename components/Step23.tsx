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
import { imagesRound1, imagesRound2, imagesRound3, imagesRound4, imagesRound5, imagesRound6, imagesRound7, imagesRound8, imagesRound9, imagesRound10 } from '../helpers/constants/sortingGame';

interface Props {
    exam: any;
}


const Step23: React.FC<Props> = ({ exam }) => {
    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [cardsRound1, setCardsRound1] = useState(imagesRound1);
    const [cardsRound2, setCardsRound2] = useState(imagesRound2);
    const [cardsRound3, setCardsRound3] = useState(imagesRound3);
    const [cardsRound4, setCardsRound4] = useState(imagesRound4);
    const [cardsRound5, setCardsRound5] = useState(imagesRound5);
    const [cardsRound6, setCardsRound6] = useState(imagesRound6);
    const [cardsRound7, setCardsRound7] = useState(imagesRound7);
    const [cardsRound8, setCardsRound8] = useState(imagesRound8);
    const [cardsRound9, setCardsRound9] = useState(imagesRound9);
    const [cardsRound10, setCardsRound10] = useState(imagesRound10);
    const [draggedElement, setDraggedElement] = useState(null);

    const [Round1DropZone1, setRound1DropZone1] = useState(null);
    const [Round1DropZone2, setRound1DropZone2] = useState(null);
    const [Round1DropZone3, setRound1DropZone3] = useState(null);

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

    const [Round5DropZone1, setRound5DropZone1] = useState(null);
    const [Round5DropZone2, setRound5DropZone2] = useState(null);
    const [Round5DropZone3, setRound5DropZone3] = useState(null);
    const [Round5DropZone4, setRound5DropZone4] = useState(null);
    const [Round5DropZone5, setRound5DropZone5] = useState(null);

    const [Round6DropZone1, setRound6DropZone1] = useState(null);
    const [Round6DropZone2, setRound6DropZone2] = useState(null);
    const [Round6DropZone3, setRound6DropZone3] = useState(null);
    const [Round6DropZone4, setRound6DropZone4] = useState(null);
    const [Round6DropZone5, setRound6DropZone5] = useState(null);

    const [Round7DropZone1, setRound7DropZone1] = useState(null);
    const [Round7DropZone2, setRound7DropZone2] = useState(null);
    const [Round7DropZone3, setRound7DropZone3] = useState(null);
    const [Round7DropZone4, setRound7DropZone4] = useState(null);
    const [Round7DropZone5, setRound7DropZone5] = useState(null);
    const [Round7DropZone6, setRound7DropZone6] = useState(null);

    const [Round8DropZone1, setRound8DropZone1] = useState(null);
    const [Round8DropZone2, setRound8DropZone2] = useState(null);
    const [Round8DropZone3, setRound8DropZone3] = useState(null);
    const [Round8DropZone4, setRound8DropZone4] = useState(null);
    const [Round8DropZone5, setRound8DropZone5] = useState(null);
    const [Round8DropZone6, setRound8DropZone6] = useState(null);

    const [Round9DropZone1, setRound9DropZone1] = useState(null);
    const [Round9DropZone2, setRound9DropZone2] = useState(null);
    const [Round9DropZone3, setRound9DropZone3] = useState(null);
    const [Round9DropZone4, setRound9DropZone4] = useState(null);
    const [Round9DropZone5, setRound9DropZone5] = useState(null);
    const [Round9DropZone6, setRound9DropZone6] = useState(null);
    const [Round9DropZone7, setRound9DropZone7] = useState(null);

    const [Round10DropZone1, setRound10DropZone1] = useState(null);
    const [Round10DropZone2, setRound10DropZone2] = useState(null);
    const [Round10DropZone3, setRound10DropZone3] = useState(null);
    const [Round10DropZone4, setRound10DropZone4] = useState(null);
    const [Round10DropZone5, setRound10DropZone5] = useState(null);
    const [Round10DropZone6, setRound10DropZone6] = useState(null);
    const [Round10DropZone7, setRound10DropZone7] = useState(null);

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

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [round, setRound] = useState(0);
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
        if (round === 6) {
            e.target.setAttribute('type', cardsRound6[index].type);
            setDraggedElement(e.target);
        }
        if (round === 7) {
            e.target.setAttribute('type', cardsRound7[index].type);
            setDraggedElement(e.target);
        }
        if (round === 8) {
            e.target.setAttribute('type', cardsRound8[index].type);
            setDraggedElement(e.target);
        }
        if (round === 9) {
            e.target.setAttribute('type', cardsRound9[index].type);
            setDraggedElement(e.target);
        }
        if (round === 10) {
            e.target.setAttribute('type', cardsRound10[index].type);
            setDraggedElement(e.target);
        }
    }

    const dropped = (e) => {
        const dropzone = e.currentTarget.parentNode.children[1];
        if (!dropzone.contains(draggedElement)) {
            dropzone.appendChild(draggedElement);
        }
    }

    useEffect(() => {
        if (round === 1) {
            const dropzone1 = document.getElementById("Round1DropZone1")!;
            const dropzone2 = document.getElementById("Round1DropZone2")!;
            const dropzone3 = document.getElementById("Round1DropZone3")!;
            dropzone1.setAttribute('type', 'apple');
            dropzone2.setAttribute('type', 'cupcake');
            dropzone3.setAttribute('type', 'question_mark');
            setRound1DropZone1(dropzone1);
            setRound1DropZone2(dropzone2);
            setRound1DropZone3(dropzone3);
        }

        if (round === 2) {
            const dropzone1 = document.getElementById("Round2DropZone1")!;
            const dropzone2 = document.getElementById("Round2DropZone2")!;
            const dropzone3 = document.getElementById("Round2DropZone3")!;
            dropzone1.setAttribute('type', 'heart');
            dropzone2.setAttribute('type', 'cactus');
            dropzone3.setAttribute('type', 'clock');
            setRound2DropZone1(dropzone1);
            setRound2DropZone2(dropzone2);
            setRound2DropZone3(dropzone3);
        }

        if (round === 3) {
            const dropzone1 = document.getElementById("Round3DropZone1");
            const dropzone2 = document.getElementById("Round3DropZone2");
            const dropzone3 = document.getElementById("Round3DropZone3");
            const dropzone4 = document.getElementById("Round3DropZone4");
            dropzone1.setAttribute('type', 'hat');
            dropzone2.setAttribute('type', 'duck');
            dropzone3.setAttribute('type', 'sock');
            dropzone4.setAttribute('type', 'cupcake');
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
            dropzone1.setAttribute('type', 'pen');
            dropzone2.setAttribute('type', 'scarf');
            dropzone3.setAttribute('type', 'hat');
            dropzone4.setAttribute('type', 'shoe');
            setRound4DropZone1(dropzone1);
            setRound4DropZone2(dropzone2);
            setRound4DropZone3(dropzone3);
            setRound4DropZone4(dropzone4);
        }

        if (round === 5) {
            const dropzone1 = document.getElementById("Round5DropZone1");
            const dropzone2 = document.getElementById("Round5DropZone2");
            const dropzone3 = document.getElementById("Round5DropZone3");
            const dropzone4 = document.getElementById("Round5DropZone4");
            const dropzone5 = document.getElementById("Round5DropZone5");
            dropzone1.setAttribute('type', 'question_mark');
            dropzone2.setAttribute('type', 'apple');
            dropzone3.setAttribute('type', 'sock');
            dropzone4.setAttribute('type', 'tie');
            dropzone5.setAttribute('type', 'cupcake');
            setRound5DropZone1(dropzone1);
            setRound5DropZone2(dropzone2);
            setRound5DropZone3(dropzone3);
            setRound5DropZone4(dropzone4);
            setRound5DropZone5(dropzone5);
        }

        if (round === 6) {
            const dropzone1 = document.getElementById("Round6DropZone1");
            const dropzone2 = document.getElementById("Round6DropZone2");
            const dropzone3 = document.getElementById("Round6DropZone3");
            const dropzone4 = document.getElementById("Round6DropZone4");
            const dropzone5 = document.getElementById("Round6DropZone5");
            dropzone1.setAttribute('type', 'shoe');
            dropzone2.setAttribute('type', 'apple');
            dropzone3.setAttribute('type', 'clock');
            dropzone4.setAttribute('type', 'tie');
            dropzone5.setAttribute('type', 'strawberry');
            setRound6DropZone1(dropzone1);
            setRound6DropZone2(dropzone2);
            setRound6DropZone3(dropzone3);
            setRound6DropZone4(dropzone4);
            setRound6DropZone5(dropzone5);
        }

        if (round === 7) {
            const dropzone1 = document.getElementById("Round7DropZone1");
            const dropzone2 = document.getElementById("Round7DropZone2");
            const dropzone3 = document.getElementById("Round7DropZone3");
            const dropzone4 = document.getElementById("Round7DropZone4");
            const dropzone5 = document.getElementById("Round7DropZone5");
            const dropzone6 = document.getElementById("Round7DropZone6");
            dropzone1.setAttribute('type', 'question_mark');
            dropzone2.setAttribute('type', 'apple');
            dropzone3.setAttribute('type', 'cupcake');
            dropzone4.setAttribute('type', 'tie');
            dropzone5.setAttribute('type', 'hat');
            dropzone6.setAttribute('type', 'scarf');
            setRound7DropZone1(dropzone1);
            setRound7DropZone2(dropzone2);
            setRound7DropZone3(dropzone3);
            setRound7DropZone4(dropzone4);
            setRound7DropZone5(dropzone5);
            setRound7DropZone6(dropzone6);
        }

        if (round === 8) {
            const dropzone1 = document.getElementById("Round8DropZone1");
            const dropzone2 = document.getElementById("Round8DropZone2");
            const dropzone3 = document.getElementById("Round8DropZone3");
            const dropzone4 = document.getElementById("Round8DropZone4");
            const dropzone5 = document.getElementById("Round8DropZone5");
            const dropzone6 = document.getElementById("Round8DropZone6");
            dropzone1.setAttribute('type', 'bow');
            dropzone2.setAttribute('type', 'duck');
            dropzone3.setAttribute('type', 'shoe');
            dropzone4.setAttribute('type', 'apple');
            dropzone5.setAttribute('type', 'hat');
            dropzone6.setAttribute('type', 'sock');
            setRound8DropZone1(dropzone1);
            setRound8DropZone2(dropzone2);
            setRound8DropZone3(dropzone3);
            setRound8DropZone4(dropzone4);
            setRound8DropZone5(dropzone5);
            setRound8DropZone6(dropzone6);
        }

        if (round === 9) {
            const dropzone1 = document.getElementById("Round9DropZone1");
            const dropzone2 = document.getElementById("Round9DropZone2");
            const dropzone3 = document.getElementById("Round9DropZone3");
            const dropzone4 = document.getElementById("Round9DropZone4");
            const dropzone5 = document.getElementById("Round9DropZone5");
            const dropzone6 = document.getElementById("Round9DropZone6");
            const dropzone7 = document.getElementById("Round9DropZone7");
            dropzone1.setAttribute('type', 'tie');
            dropzone2.setAttribute('type', 'cupcake');
            dropzone3.setAttribute('type', 'sock');
            dropzone4.setAttribute('type', 'scarf');
            dropzone5.setAttribute('type', 'duck');
            dropzone6.setAttribute('type', 'apple');
            dropzone7.setAttribute('type', 'hat');
            setRound9DropZone1(dropzone1);
            setRound9DropZone2(dropzone2);
            setRound9DropZone3(dropzone3);
            setRound9DropZone4(dropzone4);
            setRound9DropZone5(dropzone5);
            setRound9DropZone6(dropzone6);
            setRound9DropZone7(dropzone7);
        }

        if (round === 10) {
            const dropzone1 = document.getElementById("Round10DropZone1");
            const dropzone2 = document.getElementById("Round10DropZone2");
            const dropzone3 = document.getElementById("Round10DropZone3");
            const dropzone4 = document.getElementById("Round10DropZone4");
            const dropzone5 = document.getElementById("Round10DropZone5");
            const dropzone6 = document.getElementById("Round10DropZone6");
            const dropzone7 = document.getElementById("Round10DropZone7");
            dropzone1.setAttribute('type', 'heart');
            dropzone2.setAttribute('type', 'clock');
            dropzone3.setAttribute('type', 'scarf');
            dropzone4.setAttribute('type', 'pen');
            dropzone5.setAttribute('type', 'tie');
            dropzone6.setAttribute('type', 'strawberry');
            dropzone7.setAttribute('type', 'cactus');
            setRound10DropZone1(dropzone1);
            setRound10DropZone2(dropzone2);
            setRound10DropZone3(dropzone3);
            setRound10DropZone4(dropzone4);
            setRound10DropZone5(dropzone5);
            setRound10DropZone6(dropzone6);
            setRound10DropZone7(dropzone7);
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
    })

    const goToNextRound = () => {
        if (round < 10) {
            setRound(round + 1);
            return;
        }
        if (round === 10) {
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
            visualDiscriminationGameRound1Points: round1Points,
            visualDiscriminationGameRound2Points: round2Points,
            visualDiscriminationGameRound3Points: round3Points,
            visualDiscriminationGameRound4Points: round4Points,
            visualDiscriminationGameRound5Points: round5Points,
            visualDiscriminationGameRound6Points: round6Points,
            visualDiscriminationGameRound7Points: round7Points,
            visualDiscriminationGameRound8Points: round8Points,
            visualDiscriminationGameRound9Points: round9Points,
            visualDiscriminationGameRound10Points: round10Points,
            visualDiscriminationGameRound1MinusPoints: round1MinusPoints,
            visualDiscriminationGameRound2MinusPoints: round2MinusPoints,
            visualDiscriminationGameRound3MinusPoints: round3MinusPoints,
            visualDiscriminationGameRound4MinusPoints: round4MinusPoints,
            visualDiscriminationGameRound5MinusPoints: round5MinusPoints,
            visualDiscriminationGameRound6MinusPoints: round6MinusPoints,
            visualDiscriminationGameRound7MinusPoints: round7MinusPoints,
            visualDiscriminationGameRound8MinusPoints: round8MinusPoints,
            visualDiscriminationGameRound9MinusPoints: round9MinusPoints,
            visualDiscriminationGameRound10MinusPoints: round10MinusPoints,
            visualDiscriminationGameRound1Time: round1Time,
            visualDiscriminationGameRound2Time: round2Time,
            visualDiscriminationGameRound3Time: round3Time,
            visualDiscriminationGameRound4Time: round4Time,
            visualDiscriminationGameRound5Time: round5Time,
            visualDiscriminationGameRound6Time: round6Time,
            visualDiscriminationGameRound7Time: round7Time,
            visualDiscriminationGameRound8Time: round8Time,
            visualDiscriminationGameRound9Time: round9Time,
            visualDiscriminationGameRound10Time: round10Time,
            step: 'step25'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step25`)).then(() => window.scrollTo(0, 0));
    }

    const checkGame = () => {
        let pointsRound1 = 0;
        let pointsRound2 = 0;
        let pointsRound3 = 0;
        let pointsRound4 = 0;
        let pointsRound5 = 0;
        let pointsRound6 = 0;
        let pointsRound7 = 0;
        let pointsRound8 = 0;
        let pointsRound9 = 0;
        let pointsRound10 = 0;
        let minusPointsRound1 = 0;
        let minusPointsRound2 = 0;
        let minusPointsRound3 = 0;
        let minusPointsRound4 = 0;
        let minusPointsRound5 = 0;
        let minusPointsRound6 = 0;
        let minusPointsRound7 = 0;
        let minusPointsRound8 = 0;
        let minusPointsRound9 = 0;
        let minusPointsRound10 = 0;


        Array.from(Round1DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round1DropZone1.getAttribute('type')) {
                pointsRound1++;
            } else minusPointsRound1++;
        })

        Array.from(Round1DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round1DropZone2.getAttribute('type')) {
                pointsRound1++;
            } else minusPointsRound1++;
        })

        Array.from(Round1DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round1DropZone3.getAttribute('type')) {
                pointsRound1++;
            } else minusPointsRound1++;
        })

        setRound1Points(pointsRound1);
        setRound1MinusPoints(minusPointsRound1);

        Array.from(Round2DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round2DropZone1.getAttribute('type')) {
                pointsRound2++;
            } else minusPointsRound2++;
        })

        Array.from(Round2DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round2DropZone2.getAttribute('type')) {
                pointsRound2++;
            } else minusPointsRound2++;
        })

        Array.from(Round2DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round2DropZone3.getAttribute('type')) {
                pointsRound2++;
            } else minusPointsRound2++;
        })

        setRound2Points(pointsRound2);
        setRound2MinusPoints(minusPointsRound2);

        Array.from(Round3DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round3DropZone1.getAttribute('type')) {
                pointsRound3++;
            } else minusPointsRound3++;
        })

        Array.from(Round3DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round3DropZone2.getAttribute('type')) {
                pointsRound3++;
            } else minusPointsRound3++;
        })

        Array.from(Round3DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round3DropZone3.getAttribute('type')) {
                pointsRound3++;
            } else minusPointsRound3++;
        })

        Array.from(Round3DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round3DropZone4.getAttribute('type')) {
                pointsRound3++;
            } else minusPointsRound3++;
        })

        setRound3Points(pointsRound3);
        setRound3MinusPoints(minusPointsRound3);

        Array.from(Round4DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round4DropZone1.getAttribute('type')) {
                pointsRound4++;
            } else minusPointsRound4++;
        })

        Array.from(Round4DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round4DropZone2.getAttribute('type')) {
                pointsRound4++;
            } else minusPointsRound4++;
        })

        Array.from(Round4DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round4DropZone3.getAttribute('type')) {
                pointsRound4++;
            } else minusPointsRound4++;
        })

        Array.from(Round4DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round4DropZone4.getAttribute('type')) {
                pointsRound4++;
            } else minusPointsRound4++;
        })

        setRound4Points(pointsRound4);
        setRound4MinusPoints(minusPointsRound4);

        Array.from(Round5DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round5DropZone1.getAttribute('type')) {
                pointsRound5++;
            } else minusPointsRound5++;
        })

        Array.from(Round5DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round5DropZone2.getAttribute('type')) {
                pointsRound5++;
            } else minusPointsRound5++;
        })

        Array.from(Round5DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round5DropZone3.getAttribute('type')) {
                pointsRound5++;
            } else minusPointsRound5++;
        })

        Array.from(Round5DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round5DropZone4.getAttribute('type')) {
                pointsRound5++;
            } else minusPointsRound5++;
        })

        Array.from(Round5DropZone5.children).forEach(function (child) {
            if (child.getAttribute('type') === Round5DropZone5.getAttribute('type')) {
                pointsRound5++;
            } else minusPointsRound5++;
        })

        setRound5Points(pointsRound5);
        setRound5MinusPoints(minusPointsRound5);

        Array.from(Round6DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round6DropZone1.getAttribute('type')) {
                pointsRound6++;
            } else minusPointsRound6++;
        })

        Array.from(Round6DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round6DropZone2.getAttribute('type')) {
                pointsRound6++;
            } else minusPointsRound6++;
        })

        Array.from(Round6DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round6DropZone3.getAttribute('type')) {
                pointsRound6++;
            } else minusPointsRound6++;
        })

        Array.from(Round6DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round6DropZone4.getAttribute('type')) {
                pointsRound6++;
            } else minusPointsRound6++;
        })

        Array.from(Round6DropZone5.children).forEach(function (child) {
            if (child.getAttribute('type') === Round6DropZone5.getAttribute('type')) {
                pointsRound6++;
            } else minusPointsRound6++;
        })

        setRound6Points(pointsRound6);
        setRound6MinusPoints(minusPointsRound6);

        Array.from(Round7DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round7DropZone1.getAttribute('type')) {
                pointsRound7++;
            } else minusPointsRound7++;
        })

        Array.from(Round7DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round7DropZone2.getAttribute('type')) {
                pointsRound7++;
            } else minusPointsRound7++;
        })

        Array.from(Round7DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round7DropZone3.getAttribute('type')) {
                pointsRound7++;
            } else minusPointsRound7++;
        })

        Array.from(Round7DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round7DropZone4.getAttribute('type')) {
                pointsRound7++;
            } else minusPointsRound7++;
        })

        Array.from(Round7DropZone5.children).forEach(function (child) {
            if (child.getAttribute('type') === Round7DropZone5.getAttribute('type')) {
                pointsRound7++;
            } else minusPointsRound7++;
        })

        Array.from(Round7DropZone6.children).forEach(function (child) {
            if (child.getAttribute('type') === Round7DropZone6.getAttribute('type')) {
                pointsRound7++;
            } else minusPointsRound7++;
        })

        setRound7Points(pointsRound7);
        setRound7MinusPoints(minusPointsRound7);

        Array.from(Round8DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round8DropZone1.getAttribute('type')) {
                pointsRound8++;
            } else minusPointsRound8++;
        })

        Array.from(Round8DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round8DropZone2.getAttribute('type')) {
                pointsRound8++;
            } else minusPointsRound8++;
        })

        Array.from(Round8DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round8DropZone3.getAttribute('type')) {
                pointsRound8++;
            } else minusPointsRound8++;
        })

        Array.from(Round8DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round8DropZone4.getAttribute('type')) {
                pointsRound8++;
            } else minusPointsRound8++;
        })

        Array.from(Round8DropZone5.children).forEach(function (child) {
            if (child.getAttribute('type') === Round8DropZone5.getAttribute('type')) {
                pointsRound8++;
            } else minusPointsRound8++;
        })

        Array.from(Round8DropZone6.children).forEach(function (child) {
            if (child.getAttribute('type') === Round8DropZone6.getAttribute('type')) {
                pointsRound8++;
            } else minusPointsRound8++;
        })

        setRound8Points(pointsRound8);
        setRound8MinusPoints(minusPointsRound8);

        Array.from(Round9DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone1.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        Array.from(Round9DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone2.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        Array.from(Round9DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone3.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        Array.from(Round9DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone4.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        Array.from(Round9DropZone5.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone5.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        Array.from(Round9DropZone6.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone6.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        Array.from(Round9DropZone7.children).forEach(function (child) {
            if (child.getAttribute('type') === Round9DropZone7.getAttribute('type')) {
                pointsRound9++;
            } else minusPointsRound9++;
        })

        setRound9Points(pointsRound9);
        setRound9MinusPoints(minusPointsRound9);

        Array.from(Round10DropZone1.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone1.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        Array.from(Round10DropZone2.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone2.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        Array.from(Round10DropZone3.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone3.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        Array.from(Round10DropZone4.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone4.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        Array.from(Round10DropZone5.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone5.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        Array.from(Round10DropZone6.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone6.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        Array.from(Round10DropZone7.children).forEach(function (child) {
            if (child.getAttribute('type') === Round10DropZone7.getAttribute('type')) {
                pointsRound10++;
            } else minusPointsRound10++;
        })

        setRound10Points(pointsRound10);
        setRound10MinusPoints(minusPointsRound10);
    }
    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={17} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('sorting_game_title')}</div>
                <div className="description">{t('sorting_game')}</div>
            </div>}
            {round > 0 && round < 11 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    <div className="description">{t('sorting_game_rule')}</div>
                </div>
            }
            {round === 11 && <div className="gameEndText">{t('game_end_text_2')}</div>}
            {round > 0 && <div className="formContainer">
                {round === 1 && <div className="cards-container">
                    {cardsRound1.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 2 && <div className="cards-container">
                    {cardsRound2.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 3 && <div className="cards-container">
                    {cardsRound3.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 4 && <div className="cards-container">
                    {cardsRound4.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 5 && <div className="cards-container">
                    {cardsRound5.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 6 && <div className="cards-container">
                    {cardsRound6.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 7 && <div className="cards-container">
                    {cardsRound7.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 8 && <div className="cards-container">
                    {cardsRound8.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 9 && <div className="cards-container">
                    {cardsRound9.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
                {round === 10 && <div className="cards-container">
                    {cardsRound10.map((card, index) => {
                        return (
                            <DragDropContainer dragData={card} targetKey='card' key={index} onDrop={(e) => cardIsDropped(e, index)}
                            ><img src={card.image} height="80" />
                            </DragDropContainer>
                        );
                    })}
                </div>}
            </div>}
            {round === 1 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/apple_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round1DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cupcake_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round1DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/question_mark_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round1DropZone3" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 2 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/heart_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round2DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cactus_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round2DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/clock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round2DropZone3" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 3 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/hat_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round3DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/duck_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round3DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/sock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round3DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cupcake_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round3DropZone4" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 4 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/pen_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round4DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/scarf_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round4DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/hat_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round4DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/shoe_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round4DropZone4" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 5 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/question_mark_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round5DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/apple_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round5DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/sock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round5DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/tie_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round5DropZone4" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cupcake_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round5DropZone5" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 6 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/shoe_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round6DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/apple_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round6DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/clock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round6DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/tie_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round6DropZone4" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/strawberry_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round6DropZone5" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 7 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/question_mark_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round7DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/apple_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round7DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cupcake_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round7DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/tie_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round7DropZone4" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/hat_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round7DropZone5" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/scarf_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round7DropZone6" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 8 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/bow_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round8DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/duck_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round8DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/shoe_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round8DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/apple_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round8DropZone4" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/hat_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round8DropZone5" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/sock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round8DropZone6" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 9 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/tie_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cupcake_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/sock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/scarf_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone4" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/duck_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone5" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/apple_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone6" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/hat_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round9DropZone7" className="imagesContainer"></div>
                </div>
            </div>}
            {round === 10 && <div className="box-container">
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/heart_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone1" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/clock_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone2" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/scarf_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone3" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/pen_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone4" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/tie_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone5" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/strawberry_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone6" className="imagesContainer"></div>
                </div>
                <div className="dropTargetContainer">
                    <DropTarget onHit={dropped} targetKey='card'>
                        <img src="/boxes/cactus_box.png" height="80" className="box" />
                    </DropTarget>
                    <div id="Round10DropZone7" className="imagesContainer"></div>
                </div>
            </div>}
            <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round === 11 ? <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div> : round < 11 && round > 0 ? <Button variant="contained" color="secondary" onClick={goToNextRound} style={{ marginLeft: 10 }}>{t('next')}</Button> : <></>
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
                    align-items: center;
                    width: 50%;
                    min-width:320px;
                    cursor: pointer !important;
                }
                .round{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center; 
                }
                .roundNumber{
                    font-size: 22px;
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
                    justify-content: center;
                    margin-top: 60px;
                    width: 100%;
                }
                .box-container .box{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    height: 120px;
                    width: 120px;
                    margin: 0 5px;
                }
                .imagesContainer{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
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
                    font-size: 17px;
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
                    cursor: pointer !important;
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
                @media screen and (max-width: 950px) {
                    img{
                        height: 55px;
                    }
                    .box-container .box{
                        width: 80px;
                        height: 80px;
                    }
                }
                @media screen and (max-width: 600px) {
                    img{
                        height: 45px;
                    }
                    .box-container .box{
                        width: 58px;
                        height: 58px;
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
                        width: 38px;
                        height: 38px;
                    }
                }

                @media screen and (max-width: 360px) {
                    img{
                        width: 25px;
                        height: 25px;
                    }
                    .box-container{
                        margin: 40px 2px 0;
                    }
                    .box-container .box img{
                        display: block;
                        text-align: center;
                        width: 17px;
                        height: 17px;
                        box-sizing: border-box;
                        
                    }
                    .box-container .box{
                        width: 35px;
                        height: 35px;
                    }
                }
                 `
                }
            </style>
        </div>
    );

}


export default Step23;