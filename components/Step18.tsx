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

const Step18: React.FC<Props> = ({ exam }) => {
    const [round, setRound] = useState(0);

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [isImageSelected, setIsImageSelected] = useState(false);
    const [markersDiv, setMarkersDiv] = useState([]);
    const [Xcords, setXcords] = useState(0);
    const [Ycords, setYcords] = useState(0);
    const [elementNumber, setElementNumber] = useState(1);
    const [differencesNumber, setDifferencesNumber] = useState(3);

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

    const submit = () => {
        setIsLoading(true);
        const data = {
            findDifferenceGameRound1Points: round1Points,
            findDifferenceGameRound2Points: round2Points,
            findDifferenceGameRound3Points: round3Points,
            findDifferenceGameRound4Points: round4Points,
            findDifferenceGameRound5Points: round5Points,
            findDifferenceGameRound6Points: round6Points,
            findDifferenceGameRound7Points: round7Points,
            findDifferenceGameRound8Points: round8Points,
            findDifferenceGameRound9Points: round9Points,
            findDifferenceGameRound10Points: round10Points,
            findDifferenceGameRound1MinusPoints: round1MinusPoints,
            findDifferenceGameRound2MinusPoints: round2MinusPoints,
            findDifferenceGameRound3MinusPoints: round3MinusPoints,
            findDifferenceGameRound4MinusPoints: round4MinusPoints,
            findDifferenceGameRound5MinusPoints: round5MinusPoints,
            findDifferenceGameRound6MinusPoints: round6MinusPoints,
            findDifferenceGameRound7MinusPoints: round7MinusPoints,
            findDifferenceGameRound8MinusPoints: round8MinusPoints,
            findDifferenceGameRound9MinusPoints: round9MinusPoints,
            findDifferenceGameRound10MinusPoints: round10MinusPoints,
            findDifferenceGameRound1Time: round1Time,
            findDifferenceGameRound2Time: round2Time,
            findDifferenceGameRound3Time: round3Time,
            findDifferenceGameRound4Time: round4Time,
            findDifferenceGameRound5Time: round5Time,
            findDifferenceGameRound6Time: round6Time,
            findDifferenceGameRound7Time: round7Time,
            findDifferenceGameRound8Time: round8Time,
            findDifferenceGameRound9Time: round9Time,
            findDifferenceGameRound10Time: round10Time,
            step: 'step19'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step19`)).then(() => window.scrollTo(0, 0));
    }
    const startGame = () => {
        setRound(round + 1);
    }
    const nextRound = () => {
        checkGame();
        setRound(round + 1);
        setMarkersDiv([]);
    }

    useEffect(() => {
        if (round === 1) {
            const layout = document.getElementById('image1.1');
            document.getElementById('image1.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image1.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 2) {
            const layout = document.getElementById('image2.1');
            document.getElementById('image2.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image2.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 3) {
            const layout = document.getElementById('image3.1');
            document.getElementById('image3.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image3.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 4) {
            const layout = document.getElementById('image4.1');
            document.getElementById('image4.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image4.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 5) {
            const layout = document.getElementById('image5.1');
            document.getElementById('image5.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image5.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 6) {
            const layout = document.getElementById('image6.1');
            document.getElementById('image6.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image6.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 7) {
            const layout = document.getElementById('image7.1');
            document.getElementById('image7.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image7.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 8) {
            const layout = document.getElementById('image8.1');
            document.getElementById('image8.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image8.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 9) {
            const layout = document.getElementById('image9.1');
            document.getElementById('image9.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image9.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 10) {
            const layout = document.getElementById('image10.1');
            document.getElementById('image10.1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
            document.getElementById('image10.2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
    })

    const markOnImage = (e) => {
        if (e.target.classList.contains('backgroundImage')) {
            let newDiv = document.createElement('div');
            newDiv.style.width = "1.275%";
            newDiv.style.height = "2.265%";
            newDiv.style.background = '#66FF33';
            newDiv.style.position = 'absolute';
            newDiv.style.top = Ycords * 100 + '%',
                newDiv.style.left = Xcords * 100 + '%',
                newDiv.style.borderRadius = "50%";
            newDiv.style.transform = 'translate(-50%,-50%)';
            newDiv.style.zIndex = '4';
            newDiv.setAttribute('number', elementNumber.toString());
            setElementNumber(elementNumber + 1);
            let newDiv2 = newDiv.cloneNode(true);
            markersDiv.push(newDiv2);
            if (e.currentTarget.classList.contains('1')) {
                e.currentTarget.parentNode.children[1].appendChild(newDiv);
                e.currentTarget.appendChild(newDiv2);
            } else {
                e.currentTarget.parentNode.children[0].appendChild(newDiv2);
                e.currentTarget.appendChild(newDiv);
            }
        } else {
            if (e.target.hasAttribute('number')) {
                if (e.currentTarget.classList.contains('1')) {
                    const elementToDelete = Array.from(e.currentTarget.parentNode.children[1].children).find((ele) => ele.getAttribute('number') === e.target.getAttribute('number'));
                    e.currentTarget.parentNode.children[1].removeChild(elementToDelete);
                    e.currentTarget.removeChild(e.target);
                } else {
                    const elementToDelete = Array.from(e.currentTarget.parentNode.children[0].children).find((ele) => ele.getAttribute('number') === e.target.getAttribute('number'));
                    e.currentTarget.parentNode.children[0].removeChild(elementToDelete);
                    e.currentTarget.removeChild(e.target);
                }
                const elementIndexToDelete = markersDiv.findIndex((element) => element.getAttribute('number') === e.target.getAttribute('number'));
                markersDiv.splice(elementIndexToDelete, 1);
            }
        }
    }

    const checkIfElementsOverlap = (marker, hiddenElement) => {
        if (marker.x < hiddenElement.x + hiddenElement.width &&
            marker.x + marker.width > hiddenElement.x &&
            marker.y < hiddenElement.y + hiddenElement.height &&
            marker.y + marker.height > hiddenElement.y) {
            return true;
        }
        return false;
    }

    const checkAllElementsOverlap = (markersTab, hiddenElementsTab) => {
        let points = 0;
        for (let i = 0; i < hiddenElementsTab.length; i++) {
            for (let j = 0; j < markersTab.length; j++) {
                if (checkIfElementsOverlap(markersTab[j].getBoundingClientRect(), hiddenElementsTab[i]?.getBoundingClientRect())) {
                    points++;
                    break;
                }
            }
        }
        return points;
    }



    const checkGame = () => {
        if (round === 1) {
            const elTable = document.getElementsByClassName('elementsRound1');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound1Points(points);
            setRound1MinusPoints(markersDiv.length - points);
            setDifferencesNumber(3);
        }

        if (round === 2) {
            const elTable = document.getElementsByClassName('elementsRound2');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound2Points(points);
            setRound2MinusPoints(markersDiv.length - points);
            setDifferencesNumber(4);
        }

        if (round === 3) {
            const elTable = document.getElementsByClassName('elementsRound3');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound3Points(points);
            setRound3MinusPoints(markersDiv.length - points);
            setDifferencesNumber(4);
        }

        if (round === 4) {
            const elTable = document.getElementsByClassName('elementsRound4');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound4Points(points);
            setRound4MinusPoints(markersDiv.length - points);
            setDifferencesNumber(5);
        }

        if (round === 5) {
            const elTable = document.getElementsByClassName('elementsRound5');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound5Points(points);
            setRound5MinusPoints(markersDiv.length - points);
            setDifferencesNumber(5);
        }

        if (round === 6) {
            const elTable = document.getElementsByClassName('elementsRound6');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound6Points(points);
            setRound6MinusPoints(markersDiv.length - points);
            setDifferencesNumber(5);
        }

        if (round === 7) {
            const elTable = document.getElementsByClassName('elementsRound7');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound7Points(points);
            setRound7MinusPoints(markersDiv.length - points);
            setDifferencesNumber(5);
        }

        if (round === 8) {
            const elTable = document.getElementsByClassName('elementsRound8');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound8Points(points);
            setRound8MinusPoints(markersDiv.length - points);
            setDifferencesNumber(6);
        }

        if (round === 9) {
            const elTable = document.getElementsByClassName('elementsRound9');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound9Points(points);
            setRound9MinusPoints(markersDiv.length - points);
            setDifferencesNumber(7);
        }

        if (round === 10) {
            const elTable = document.getElementsByClassName('elementsRound10');
            let points = checkAllElementsOverlap(markersDiv, elTable);

            setRound10Points(points);
            setRound10MinusPoints(markersDiv.length - points);
        }
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={12} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('find_a_difference_game_title')}</div>
                <div className="description">{t('find_a_difference_game')}</div>
            </div>}
            {round > 0 && round < 11 &&
                <div className="round">
                    <div className="roundNumber">{t('round')} {round}</div>
                    {locale === 'pl' && differencesNumber < 5 && <div className="description">{t('find')} {differencesNumber} {t('differences')}</div>}
                    {locale === 'pl' && differencesNumber >= 5 && <div className="description">{t('find')} {differencesNumber} {t('differences_over_4')}</div>}
                    {locale !== 'pl' && <div className="description">{t('find')} {differencesNumber} {t('differences')}</div>}
                </div>
            }
            {round === 11 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            <div className="centerLandscape">
                {round === 1 && <div className="landscapeBox" id="1">
                    <div className="landscapeBoxImage 1 " onClick={markOnImage} id="image1.1">
                        <img className="backgroundImage" src="/differences/1_1.png" />
                        <div className="elementsRound1 element element1Round1" id="element1Round1"></div>
                        <div className="elementsRound1 element element2Round1" id="element2Round1"></div>
                        <div className="elementsRound1 element element3Round1" id="element3Round1"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image1.2">
                        <img className="backgroundImage" src="/differences/1_2.png" />
                        <div className="element element1Round1"></div>
                        <div className="element element2Round1"></div>
                        <div className="element element3Round1"></div>
                    </div>
                </div>}
                {round === 2 && <div className="landscapeBox" id="2">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image2.1">
                        <img className="backgroundImage" src="/differences/2_1.png" />
                        <div className="elementsRound2 element element1Round2" id="element1Round2"></div>
                        <div className="elementsRound2 element element2Round2" id="element2Round2"></div>
                        <div className="elementsRound2 element element3Round2" id="element3Round2"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image2.2">
                        <img className="backgroundImage" src="/differences/2_2.png" />
                        <div className="element element1Round2"></div>
                        <div className="element element2Round2"></div>
                        <div className="element element3Round2"></div>
                    </div>
                </div>}
                {round === 3 && <div className="landscapeBox" id="4">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image3.1">
                        <img className="backgroundImage" src="/differences/3_1.png" />
                        <div className="elementsRound3 element element1Round3" id="element1Round3"></div>
                        <div className="elementsRound3 element element2Round3" id="element2Round3"></div>
                        <div className="elementsRound3 element element3Round3" id="element3Round3"></div>
                        <div className="elementsRound3 element element4Round3" id="element4Round3"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image3.2">
                        <img className="backgroundImage" src="/differences/3_2.png" />
                        <div className="element element1Round3"></div>
                        <div className="element element2Round3"></div>
                        <div className="element element3Round3"></div>
                        <div className="element element4Round3"></div>
                    </div>
                </div>}
                {round === 4 && <div className="landscapeBox" id="4">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image4.1">
                        <img className="backgroundImage" src="/differences/4_1.png" />
                        <div className="elementsRound4 element element1Round4" id="element1Round4"></div>
                        <div className="elementsRound4 element element2Round4" id="element2Round4"></div>
                        <div className="elementsRound4 element element3Round4" id="element3Round4"></div>
                        <div className="elementsRound4 element element4Round4" id="element4Round4"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image4.2">
                        <img className="backgroundImage" src="/differences/4_2.png" />
                        <div className="element element1Round4"></div>
                        <div className="element element2Round4"></div>
                        <div className="element element3Round4"></div>
                        <div className="element element4Round4"></div>
                    </div>
                </div>}
                {round === 5 && <div className="landscapeBox" id="5">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image5.1">
                        <img className="backgroundImage" src="/differences/5_1.png" />
                        <div className="elementsRound5 element element1Round5" id="element1Round5"></div>
                        <div className="elementsRound5 element element2Round5" id="element2Round5"></div>
                        <div className="elementsRound5 element element3Round5" id="element3Round5"></div>
                        <div className="elementsRound5 element element4Round5" id="element4Round5"></div>
                        <div className="elementsRound5 element element5Round5" id="element5Round5"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image5.2">
                        <img className="backgroundImage" src="/differences/5_2.png" />
                        <div className="element element1Round5"></div>
                        <div className="element element2Round5"></div>
                        <div className="element element3Round5"></div>
                        <div className="element element4Round5"></div>
                        <div className="element element5Round5"></div>
                    </div>
                </div>}
                {round === 6 && <div className="landscapeBox" id="6">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image6.1">
                        <img className="backgroundImage" src="/differences/6_1.png" />
                        <div className="elementsRound6 element element1Round6" id="element1Round6"></div>
                        <div className="elementsRound6 element element2Round6" id="element2Round6"></div>
                        <div className="elementsRound6 element element3Round6" id="element3Round6"></div>
                        <div className="elementsRound6 element element4Round6" id="element4Round6"></div>
                        <div className="elementsRound6 element element5Round6" id="element5Round6"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image6.2">
                        <img className="backgroundImage" src="/differences/6_2.png" />
                        <div className="element element1Round6"></div>
                        <div className="element element2Round6"></div>
                        <div className="element element3Round6"></div>
                        <div className="element element4Round6"></div>
                        <div className="element element5Round6"></div>
                    </div>
                </div>}
                {round === 7 && <div className="landscapeBox" id="7">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image7.1">
                        <img className="backgroundImage" src="/differences/7_1.png" />
                        <div className="elementsRound7 element element1Round7" id="element1Round7"></div>
                        <div className="elementsRound7 element element2Round7" id="element2Round7"></div>
                        <div className="elementsRound7 element element3Round7" id="element3Round7"></div>
                        <div className="elementsRound7 element element4Round7" id="element4Round7"></div>
                        <div className="elementsRound7 element element5Round7" id="element5Round7"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image7.2">
                        <img className="backgroundImage" src="/differences/7_2.png" />
                        <div className="element element1Round7"></div>
                        <div className="element element2Round7"></div>
                        <div className="element element3Round7"></div>
                        <div className="element element4Round7"></div>
                        <div className="element element5Round7"></div>
                    </div>
                </div>}
                {round === 8 && <div className="landscapeBox" id="8">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image8.1">
                        <img className="backgroundImage" src="/differences/8_1.png" />
                        <div className="elementsRound8 element element1Round8" id="element1Round8"></div>
                        <div className="elementsRound8 element element2Round8" id="element2Round8"></div>
                        <div className="elementsRound8 element element3Round8" id="element3Round8"></div>
                        <div className="elementsRound8 element element4Round8" id="element4Round8"></div>
                        <div className="elementsRound8 element element5Round8" id="element5Round8"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image8.2">
                        <img className="backgroundImage" src="/differences/8_2.png" />
                        <div className="element element1Round8"></div>
                        <div className="element element2Round8"></div>
                        <div className="element element3Round8"></div>
                        <div className="element element4Round8"></div>
                        <div className="element element5Round8"></div>
                    </div>
                </div>}
                {round === 9 && <div className="landscapeBox" id="9">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image9.1">
                        <img className="backgroundImage" src="/differences/9_1.png" />
                        <div className="elementsRound9 element element1Round9" id="element1Round9"></div>
                        <div className="elementsRound9 element element2Round9" id="element2Round9"></div>
                        <div className="elementsRound9 element element3Round9" id="element3Round9"></div>
                        <div className="elementsRound9 element element4Round9" id="element4Round9"></div>
                        <div className="elementsRound9 element element5Round9" id="element5Round9"></div>
                        <div className="elementsRound9 element element6Round9" id="element6Round9"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image9.2">
                        <img className="backgroundImage" src="/differences/9_2.png" />
                        <div className="element element1Round9"></div>
                        <div className="element element2Round9"></div>
                        <div className="element element3Round9"></div>
                        <div className="element element4Round9"></div>
                        <div className="element element5Round9"></div>
                        <div className="element element6Round9"></div>
                    </div>
                </div>}
                {round === 10 && <div className="landscapeBox" id="10">
                    <div className="landscapeBoxImage 1" onClick={markOnImage} id="image10.1">
                        <img className="backgroundImage" src="/differences/10_1.png" />
                        <div className="elementsRound10 element element1Round10" id="element1Round10"></div>
                        <div className="elementsRound10 element element2Round10" id="element2Round10"></div>
                        <div className="elementsRound10 element element3Round10" id="element3Round10"></div>
                        <div className="elementsRound10 element element4Round10" id="element4Round10"></div>
                        <div className="elementsRound10 element element5Round10" id="element5Round10"></div>
                        <div className="elementsRound10 element element6Round10" id="element6Round10"></div>
                        <div className="elementsRound10 element element7Round10" id="element7Round10"></div>
                    </div>
                    <div className="landscapeBoxImage 2" onClick={markOnImage} id="image10.2">
                        <img className="backgroundImage" src="/differences/10_2.png" />
                        <div className="element element1Round10"></div>
                        <div className="element element2Round10"></div>
                        <div className="element element3Round10"></div>
                        <div className="element element4Round10"></div>
                        <div className="element element5Round10"></div>
                        <div className="element element6Round10"></div>
                        <div className="element element7Round10"></div>
                    </div>
                </div>}
            </div>
            <div className="button">
                {round === 0 && <Button variant="contained" color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 11 && <div><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 11 && <div><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                    .element{
                        position: absolute;
                        pointer-events: none;
                    }
                    .element1Round1{
                        bottom: 9%;
                        left: 5%;
                        width: 13%;
                        height: 11%;
                    }
                    .element2Round1{
                        top: 6%;
                        left: 14%;
                        width: 4%;
                        height: 5%;
                    }
                    .element3Round1{
                        bottom: 7%;
                        right: 2.25%;
                        width: 3%;
                        height: 5%;
                    }
                    .element1Round2{
                        width: 4%;
                        height: 4%;
                        bottom: 4.5%;
                        left: 13%;
                    }
                    .element2Round2{
                        width: 6%;
                        height: 13%;
                        bottom: 23%;
                        left: 74%;
                    }
                    .element3Round2{
                        width: 7%;
                        height: 38%;
                        bottom: 4.5%;
                        right: 3%;
                    }
                    .element1Round3{
                        width: 6%;
                        height: 11%;
                        bottom: 1%;
                        left: 16%;
                    }
                    .element2Round3{
                        width: 23%;
                        height: 32%;
                        bottom: 21%;
                        left: 23%;
                    }
                    .element3Round3{
                        width: 7%;
                        height: 14%;
                        bottom: 33%;
                        right: 40.5%;
                    }
                    .element4Round3{
                        width: 11%;
                        height: 10%;
                        bottom: 54%;
                        right: 10%;
                    }
                    .element1Round4{
                        width: 10%;
                        height: 18%;
                        top: 10%;
                        left: 0%;
                    }
                    .element2Round4{
                        width: 8%;
                        height: 7%;
                        bottom: 37%;
                        left: 18.5%;
                    }
                    .element3Round4{
                        width: 7%;
                        height: 10%;
                        bottom: 30.5%;
                        left: 34.5%;
                    }
                    .element4Round4{
                        width: 4.5%;
                        height: 3%;
                        top: 37%;
                        right: 18.5%;
                    }
                    .element1Round5{
                        width: 12%;
                        height: 9%;
                        bottom: 10%;
                        left: 1%;
                    }
                    .element2Round5{
                        width: 2%;
                        height: 3%;
                        top: 2.5%;
                        left: 50.25%;
                    }
                    .element3Round5{
                        width: 2%;
                        height: 9%;
                        bottom: 6%;
                        left: 36.5%;
                    }
                    .element4Round5{
                        width: 4%;
                        height: 5.5%;
                        top: 26%;
                        right: 14%;
                    }
                    .element5Round5{
                        width: 5%;
                        height: 26.5%;
                        bottom: 12%;
                        right: 14%;
                    }
                    .element1Round6{
                        width: 7%;
                        height: 10%;
                        bottom: 6%;
                        left: 20.5%;
                    }
                    .element2Round6{
                        width: 2%;
                        height: 12%;
                        top: 30%;
                        left: 23%;
                    }
                    .element3Round6{
                        width: 8%;
                        height: 11.5%;
                        bottom: 11%;
                        left: 53.5%;
                    }
                    .element4Round6{
                        width: 6%;
                        height: 10.5%;
                        top: 21%;
                        right: 34%;
                    }
                    .element5Round6{
                        width: 7.5%;
                        height: 10%;
                        bottom: 34%;
                        right: 9%;
                    }
                    .element1Round7{
                        width: 12%;
                        height: 8%;
                        bottom: 60%;
                        left: 6.5%;
                    }
                    .element2Round7{
                        width: 3%;
                        height: 4%;
                        bottom: 17%;
                        left: 22%;
                    }
                    .element3Round7{
                        width: 2%;
                        height: 3%;
                        bottom: 8%;
                        left: 34%;
                    }
                    .element4Round7{
                        width: 2%;
                        height: 8%;
                        bottom: 17%;
                        right: 12.5%;
                    }
                    .element5Round7{
                        width: 2%;
                        height: 3.25%;
                        bottom: 47.25%;
                        right: 1.5%;
                    }
                    .element1Round8{
                        width: 4%;
                        height: 4%;
                        bottom: 49%;
                        left: 18.5%;
                    }
                    .element2Round8{
                        width: 6%;
                        height: 4.5%;
                        bottom: 17.5%;
                        left: 33%;
                    }
                    .element3Round8{
                        width: 2%;
                        height: 3%;
                        bottom: 3%;
                        left: 12%;
                    }
                    .element4Round8{
                        width: 4%;
                        height: 4%;
                        bottom: 25%;
                        right: 26%;
                    }
                    .element5Round8{
                        width: 3%;
                        height: 15.25%;
                        bottom: 8.25%;
                        right: 13.5%;
                    }
                    .element1Round9{
                        width: 2.5%;
                        height: 3%;
                        bottom: 49%;
                        left: 32.5%;
                    }
                    .element2Round9{
                        width: 3%;
                        height: 12.5%;
                        bottom: 42.5%;
                        left: 5%;
                    }
                    .element3Round9{
                        width: 5%;
                        height: 14%;
                        top: 28%;
                        left: 64%;
                    }
                    .element4Round9{
                        width: 4%;
                        height: 7%;
                        bottom: 34%;
                        right: 46.5%;
                    }
                    .element5Round9{
                        width: 5%;
                        height: 10%;
                        bottom: 34.5%;
                        right: 18%;
                    }
                    .element6Round9{
                        width: 10%;
                        height: 5.25%;
                        bottom: 20.25%;
                        left: 13.5%;
                    }
                    .element1Round10{
                        width: 4%;
                        height: 5%;
                        top: 15%;
                        left: 14.5%;
                    }
                    .element2Round10{
                        width: 2%;
                        height: 12.5%;
                        bottom: 41.5%;
                        left: 1%;
                    }
                    .element3Round10{
                        width: 5%;
                        height: 15%;
                        top: 17%;
                        left: 35.5%;
                    }
                    .element4Round10{
                        width: 4%;
                        height: 8%;
                        bottom: 34%;
                        right: 54.5%;
                    }
                    .element5Round10{
                        width: 5%;
                        height: 11%;
                        bottom: 43.5%;
                        right: 34%;
                    }
                    .element6Round10{
                        width: 3%;
                        height: 6%;
                        top: 25%;
                        right: 5.5%;
                    }
                    .element7Round10{
                        width: 1%;
                        height: 8.25%;
                        bottom: 45.25%;
                        right: 20.5%;
                    }
                    .selectedDifferenceBorder{
                        border: 1px solid red;
                    }
                    .round{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center; 
                        margin-bottom: 30px;
                    }
                    .roundNumber{
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                        margin: 10px;
                        max-width: 50%;
                    }
                    .center{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .centerLandscape{
                        user-select: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
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
                        padding: 15px 10% 5px 10%;
                        white-space: pre-wrap;
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
                        margin-top: 20px;
                    }
                    .buttonContainer {
                        padding: 10px;
                    }
                    .handle {
                        width: 120px;
                    }
                    .landscape{
                        margin: 5px 10px;
                        position: relative;
                    }
                    .landscape .element{
                        position: absolute;
                        border-radius: 50%;
                    }
                    .landscapeBox{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        cursor: pointer;
                        margin: 0 10px;
                        width: 100%;
                    }
                    .landscapeBoxImage{
                        margin: 10px;
                        display: flex;
                        position: relative;
                    }
                    .landscapeBox img{
                        width: 100%;
                    }          
                    @media screen and (max-width: 950px){
                        .landscapeBox{
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            cursor: pointer;
                        }
                    }
                    @media screen and (max-width: 800px){
                        .roundNumber{
                            font-size: 20px;
                        }
                    }   
                    @media screen and (max-width: 600px) {
                        .center{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                        .column{
                            border: 2px solid black;
                            width: 340px;
                            height: 200px;
                            margin: 20px;
                            display: flex;
                        }
                        .buttonContainer {
                            padding: 0;
                            margin-bottom: 5px;
                        }

                    }
            `}
            </style>
        </div>
    )
}

export default Step18;
