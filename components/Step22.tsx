import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from '../hooks/useTranslation';
import dynamic from 'next/dynamic';
import LinearProgressBar from './LinearProgressBar';
const GifPlayer = dynamic(() => import('react-gif-player'), { ssr: false })
import { updateStep } from '../services/exam';
import { Button } from '@material-ui/core';
import ButtonWithLoader from './ButtonWithLoader';
import GetCursorPosition from 'cursor-position';

interface Props {
    exam: any;
    props: any;
}

const Step22: React.FC<Props> = ({ props, exam }) => {
    const [round, setRound] = useState(0);

    const { locale, t } = useTranslation()
    const router = useRouter();
    const token = router?.query?.token as string;
    const [isLoading, setIsLoading] = useState(false);
    const [markerDiv, setMarkerDiv] = useState(null);
    const [Xcords, setXcords] = useState(0);
    const [Ycords, setYcords] = useState(0);

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
            picturesGameRound1Points: round1Points,
            picturesGameRound2Points: round2Points,
            picturesGameRound3Points: round3Points,
            picturesGameRound4Points: round4Points,
            picturesGameRound5Points: round5Points,
            picturesGameRound6Points: round6Points,
            picturesGameRound7Points: round7Points,
            picturesGameRound8Points: round8Points,
            picturesGameRound9Points: round9Points,
            picturesGameRound10Points: round10Points,
            picturesGameRound1MinusPoints: round1MinusPoints,
            picturesGameRound2MinusPoints: round2MinusPoints,
            picturesGameRound3MinusPoints: round3MinusPoints,
            picturesGameRound4MinusPoints: round4MinusPoints,
            picturesGameRound5MinusPoints: round5MinusPoints,
            picturesGameRound6MinusPoints: round6MinusPoints,
            picturesGameRound7MinusPoints: round7MinusPoints,
            picturesGameRound8MinusPoints: round8MinusPoints,
            picturesGameRound9MinusPoints: round9MinusPoints,
            picturesGameRound10MinusPoints: round10MinusPoints,
            picturesGameRound1Time: round1Time,
            picturesGameRound2Time: round2Time,
            picturesGameRound3Time: round3Time,
            picturesGameRound4Time: round4Time,
            picturesGameRound5Time: round5Time,
            picturesGameRound6Time: round6Time,
            picturesGameRound7Time: round7Time,
            picturesGameRound8Time: round8Time,
            picturesGameRound9Time: round9Time,
            picturesGameRound10Time: round10Time,
            step: 'step23'
        }

        updateStep(token, data).then(() => router.push(`/${locale}/${token}/step23`)).then(() => window.scrollTo(0, 0));
    }
    const startGame = () => {
        setRound(round + 1);
    }
    const nextRound = () => {
        checkGame();
        setRound(round + 1);
        setMarkerDiv(null);
    }

    const checkIfElementsOverlap = (marker, hiddenElement) => {
        let dx = (hiddenElement.x + (hiddenElement.width / 2)) - (marker.x + (marker.width / 2));
        let dy = (hiddenElement.y + (hiddenElement.height / 2)) - (marker.y + (marker.height / 2));
        let hiddenElementRadius = hiddenElement.height / 2;
        let markerRadius = marker.height / 2;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance <= hiddenElementRadius + markerRadius) {
            return true;
        }
        return false;
    }

    const checkIfElementsOverlapRound9 = (marker, hiddenElement) => {
        {
            return (marker.left <= hiddenElement.right &&
                hiddenElement.left <= marker.right &&
                marker.top <= hiddenElement.bottom &&
                hiddenElement.top <= marker.bottom)
        }
    }

    const checkGame = () => {
        if (round === 1) {
            if (markerDiv != null) {

                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound1').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound1Points(round1Points + 1)
                else setRound1MinusPoints(round1MinusPoints + 1);
            };
        }
        if (round === 2) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound2').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound2Points(round2Points + 1)
                else setRound2MinusPoints(round2MinusPoints + 1);
            };
        }

        if (round === 3) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound3').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound3Points(round3Points + 1)
                else setRound3MinusPoints(round3MinusPoints + 1);
            };
        }

        if (round === 4) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound4').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound4Points(round4Points + 1)
                else setRound4MinusPoints(round4MinusPoints + 1);
            };
        }

        if (round === 5) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound5').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound5Points(round5Points + 1)
                else setRound5MinusPoints(round5MinusPoints + 1);
            };
        }

        if (round === 6) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound6').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound6Points(round6Points + 1)
                else setRound6MinusPoints(round6MinusPoints + 1);
            };
        }

        if (round === 7) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound7').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound7Points(round7Points + 1)
                else setRound7MinusPoints(round7MinusPoints + 1);
            };
        }

        if (round === 8) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound8').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound8Points(round8Points + 1)
                else setRound8MinusPoints(round8MinusPoints + 1);
            };
        }

        if (round === 9) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound9').getBoundingClientRect();
                if (checkIfElementsOverlapRound9(rectMarker, rectHiddenElement)) setRound9Points(round9Points + 1)
                else setRound9MinusPoints(round9MinusPoints + 1);
            };
        }

        if (round === 10) {
            if (markerDiv != null) {
                const rectMarker = markerDiv.getBoundingClientRect();
                const rectHiddenElement = document.getElementById('elementRound10').getBoundingClientRect();
                if (checkIfElementsOverlap(rectMarker, rectHiddenElement)) setRound10Points(round10Points + 1)
                else setRound10MinusPoints(round10MinusPoints + 1);
            };
        }
    }

    useEffect(() => {
        if (round === 1) {
            const layout = document.getElementById('imageBox1');
            const imgElement = document.getElementById('elementRound1');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('1').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 2) {
            const layout = document.getElementById('imageBox2');
            const imgElement = document.getElementById('elementRound2');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('2').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 3) {
            const layout = document.getElementById('imageBox3');
            const imgElement = document.getElementById('elementRound3');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('3').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 4) {
            const layout = document.getElementById('imageBox4');
            const imgElement = document.getElementById('elementRound4');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('4').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 5) {
            const layout = document.getElementById('imageBox5');
            const imgElement = document.getElementById('elementRound5');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('5').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 6) {
            const layout = document.getElementById('imageBox6');
            const imgElement = document.getElementById('elementRound6');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('6').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 7) {
            const layout = document.getElementById('imageBox7');
            const imgElement = document.getElementById('elementRound7');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('7').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 8) {
            const layout = document.getElementById('imageBox8');
            const imgElement = document.getElementById('elementRound8');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('8').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 9) {
            const layout = document.getElementById('imageBox9');
            const imgElement = document.getElementById('elementRound9');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('9').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
        if (round === 10) {
            const layout = document.getElementById('imageBox10');
            const imgElement = document.getElementById('elementRound10');
            imgElement.style.pointerEvents = 'none';
            document.getElementById('10').addEventListener('mousemove', (e) => {
                setXcords(e.layerX / layout.offsetWidth);
                setYcords(e.layerY / layout.offsetHeight);
            })
        }
    })

    const markOnImage = (e) => {
        let newDiv = document.createElement('div');
        newDiv.id = 'markerDiv';
        if (markerDiv != null) e.target.parentNode.removeChild(markerDiv);
        newDiv.style.width = "0.85%";
        newDiv.style.height = "1.51%";
        newDiv.style.background = 'red';
        newDiv.style.position = 'absolute';
        newDiv.style.top = Ycords * 100 + '%',
            newDiv.style.left = Xcords * 100 + '%',
            newDiv.style.border = '1px solid red';
        newDiv.style.borderRadius = "50%";
        newDiv.style.transform = 'translate(-50%,-50%)';
        newDiv.style.zIndex = '4';
        newDiv.style.pointerEvents = 'none';
        setMarkerDiv(newDiv);
        e.currentTarget.appendChild(newDiv);
    }

    return (
        <div>
            <div className="progressContainer">
                <LinearProgressBar step={16} />
            </div>
            {round === 0 && <div className="gameDescription">
                <div className="descriptionTitle">{t('hidden_elements_game_title')}</div>
                <div className="description">{t('hidden_elements_game')}</div>
            </div>}
            {round > 0 && round < 11 &&
                <div className="round"><div className="roundNumber">{t('round')} {round}</div></div>
            }
            {round === 1 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_1')}</p></div></div>
            }
            {round === 2 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_2')}</p></div></div>
            }
            {round === 3 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_3')}</p></div></div>
            }
            {round === 4 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_4')}</p></div></div>
            }
            {round === 5 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_5')}</p></div></div>
            }
            {round === 6 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_6')}</p></div></div>
            }
            {round === 7 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_7')}</p></div></div>
            }
            {round === 8 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_8')}</p></div></div>
            }
            {round === 9 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_9')}</p></div></div>
            }
            {round === 10 &&
                <div className="round"><div className="roundNumber"><p>{t('hidden_elements_game_rule')}{t('hidden_elements_element_10')}</p></div></div>
            }
            {round === 11 &&
                <div className="center">
                    <div className="gameEndText">{t('game_end_text_2')}</div>
                </div>
            }
            <div className="centerLandscape">
                {round === 1 &&
                    <div className="landscapeBox" id="1">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox1">
                            <img className="landscapeImg" src="/hidden-elements/1.png" />
                            <div className="element elementRound1" id="elementRound1"></div>
                        </div>
                    </div>}
                {round === 2 &&
                    <div className="landscapeBox" id="2">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox2">
                            <img className="landscapeImg" src="/hidden-elements/2.png" />
                            <div className="element elementRound2" id="elementRound2"></div>
                        </div>
                    </div>}
                {round === 3 &&
                    <div className="landscapeBox" id="3">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox3">
                            <img className="landscapeImg" src="/hidden-elements/3.png" />
                            <div className="element elementRound3" id="elementRound3"></div>
                        </div>
                    </div>}
                {round === 4 &&
                    <div className="landscapeBox" id="4">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox4">
                            <img className="landscapeImg" src="/hidden-elements/4.png" />
                            <div className="element elementRound4" id="elementRound4"></div>
                        </div>
                    </div>}
                {round === 5 &&
                    <div className="landscapeBox" id="5">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox5">
                            <img className="landscapeImg" src="/hidden-elements/5.png" />
                            <div className="element elementRound5" id="elementRound5"></div>
                        </div>
                    </div>}
                {round === 6 &&
                    <div className="landscapeBox" id="6">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox6">
                            <img className="landscapeImg" src="/hidden-elements/6.png" />
                            <div className="element elementRound6" id="elementRound6"></div>
                        </div>
                    </div>}
                {round === 7 &&
                    <div className="landscapeBox" id="7">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox7">
                            <img className="landscapeImg" src="/hidden-elements/7.png" />
                            <div className="element elementRound7" id="elementRound7"></div>
                        </div>
                    </div>}
                {round === 8 &&
                    <div className="landscapeBox" id="8">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox8">
                            <img className="landscapeImg" src="/hidden-elements/8.png" />
                            <div className="element elementRound8" id="elementRound8"></div>
                        </div>
                    </div>}
                {round === 9 &&
                    <div className="landscapeBox" id="9">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox9">
                            <img className="landscapeImg" src="/hidden-elements/9.png" />
                            <div className="element elementRound9" id="elementRound9"></div>
                        </div>
                    </div>}
                {round === 10 &&
                    <div className="landscapeBox" id="10">
                        <div onClick={markOnImage} className="landscapeImageBox" id="imageBox10">
                            <img className="landscapeImg" src="/hidden-elements/10.png" />
                            <div className="element elementRound10" id="elementRound10"></div>
                        </div>
                    </div>}
            </div>
            <div className="button">
                {round === 0 && <Button variant="contained" style={{ marginTop: 20 }} color="secondary" onClick={startGame}>{t('start_game')}</Button>}
                {round > 0 && round < 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={nextRound} isLoading={isLoading}></ButtonWithLoader></div>}
                {round === 11 && <div style={{ marginTop: 20 }}><ButtonWithLoader label={t('next')} onClick={submit} isLoading={isLoading}></ButtonWithLoader></div>}
            </div>
            <style jsx>
                {`
                    .landscapeBox{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }
                    .landscapeImageBox{
                        position: relative;
                        width: 85%;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .landscapeImageBox .landscapeImg{
                        width: 100%;
                        display: block;
                    }
                    .element{
                        position: absolute;
                    }
                    .elementRound1{
                        bottom: 21.5%;
                        left: 22.65%;
                        width: 1%;
                        height: 1.5%;
                    }
                    .elementRound2{
                        bottom: 12%;
                        right: 26.5%;
                        width: 1.5%;
                        height: 1.5%;
                    }
                    .elementRound3{
                        bottom: 12%;
                        right: 6.65%;
                        width: 1%;
                        height: 1.5%;
                    }
                    .elementRound4{
                        bottom: 17.5%;
                        right: 22%;
                        width: 1%;
                        height: 1.5%;
                    }
                    .elementRound5{
                        bottom: 22%;
                        right: 2.25%;
                        width: 1.34%;
                        height: 2.85%;
                    }
                    .elementRound6{
                        bottom: 26.25%;
                        left: 7.75%;
                        width: 4%;
                        height: 4.89%;
                    }
                    .elementRound7{
                       bottom: 3%;
                        left: 22%;
                        width: 2%;
                        height: 2.3%;
                    }
                    .elementRound8{
                        right: 22.25%;
                        bottom: 8%;
                        width: 2%;
                        height: 2.75%;
                    }
                    .elementRound9{
                        bottom: 17.75%;
                        left: 11.2%;
                        width: 10.5%;
                        height: 1.6%;
                    }
                    .elementRound10{
                        bottom:  12%;
                        right: 16.75%;
                        width: 1.5%;
                        height: 2.3%;
                    }
                    .round{
                        display: flex;
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
                    .roundNumber p{
                        font-weight: normal;
                        font-size: 20px;
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
                            width: 340px;
                            height: 200px;
                            margin: 20px;
                            display: flex;
                        }      
                        .box-container .box{
                            width: 60px;
                            height: 140px;
                        }
                    }
            `}
            </style>
        </div>
    )
}

export default Step22;
