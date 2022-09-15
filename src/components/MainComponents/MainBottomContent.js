import React from 'react'
import styled from 'styled-components'
import expologo from '../../assets/images/expologo_w@2x.ab85544.gif'
import expologoColor from '../../assets/images/expologoColor.gif'
import companyTitle from '../../assets/images/bottom/company.gif'
import companyPhoto from '../../assets/images/bottom/Company_photo.gif'
import '../../css/Main.css'
import esgTitle from '../../assets/images/bottom/ESG.png'
import esgPhoto from '../../assets/images/bottom/ESG_Photo.gif'
import investerTitle from '../../assets/images/bottom/Investors.gif'
import business from '../../assets/images/bottom/Business.gif'
import businessImg1 from '../../assets/images/bottom/bottom-img-business-2@2x.691ed85.gif'
import businessImg2 from '../../assets/images/bottom/bottom-img-business-1@2x.8ea8002.gif'
import prCenterImg from '../../assets/images/bottom/PR_Center.gif'
import pressRelease from '../../assets/images/bottom/PressRelease.gif'
import sutainablity from '../../assets/images/bottom/SutainablityReport.gif'
import closeBtn from '../../assets/images/bottom/closeBtn.gif'
import openBtn from '../../assets/images/bottom/openBtn.gif'
import arrowHead from '../../assets/images/bottom/arrowHead.png'
import { useState } from 'react'

const Container = styled.div`
    position: absolute;
    display:  flex;
    width: 100%;
    height: auto;
    bottom: ${(props) => (props.Bottom === 'Off') ? '-420px' : '0px'};
    background-color:  ${(props) => (props.Bottom === 'Off') ? 'hsla(0,0,100%,0)' : 'white'};
    z-index: 900;
    align-items: flex-end;
    flex-flow: column;
    transition: all .5s ease-out;
    flex-flow: column;
`

const StockHead = styled.div`
    border-bottom: 1.5px solid ${(props) => (props.Bottom === 'Off') ? 'white' : 'black'};
    display: flex;
   justify-content: space-between;
   align-items: flex-end;
   padding-bottom: 8px;

`

const StockBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 12px;
`

const MainBottomContent = ({index}) => {
    const [onBottom, setOnBottom] = useState('Off');
    const topHeight = [{ top: "0px" }, { top: "-210px" }, { top: "-420px" }]

    return (
        <Container className={(onBottom === 'Off') ? 'cm_pd closeTab' : 'cm_pd openTab'} Bottom={onBottom}>
            <div className='expoLogo'>
                <img src={(onBottom === 'Off') ? expologo : expologoColor} alt="2030 부산세계박람회"></img>
            </div>
            <div className='mainBottomContent' >
                <div className='relative' style={(onBottom === 'On')? {top: '0px'} : topHeight[index % 3]}>

                    <ul className='topUi' >
                        <li>
                            <div className='title'>
                                <img src={companyTitle} alt=""></img>
                            </div>
                            <p className='text'>
                                미래에 가치를 더하다.<br />
                                Fine Today, Green Tomorrow!
                            </p>
                            <div className='photo'>
                                <img src={companyPhoto} alt=""></img>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <img src={esgTitle} alt=""></img>
                            </div>
                            <p className='text'>
                                세상을 더욱 풍요롭게<br />
                                지속 가능한 내일을 만들기 위한 노력
                            </p>
                            <div className='photo'>
                                <img src={esgPhoto} alt=""></img>
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <img src={investerTitle} alt=""></img>
                            </div>
                            <div className='stock'>
                                <StockHead Bottom={onBottom}>
                                    <p className='stockPrice'>68,800 <span> KRW</span></p>
                                    <p className='prepare'>500</p>
                                </StockHead>
                                <StockBottom>
                                    <p className='stockDate'>2022-09-14</p>
                                    <p className='stockRate'>+3.4%</p>
                                </StockBottom>
                            </div>
                        </li>
                    </ul>
                    <div className='Business'>
                        <div className='title marginBottom'>
                            <img src={business} alt='/'></img>
                        </div>
                        <ul className='middleUi '>
                            <li className='businessCon'>
                                <div>
                                    <img src={businessImg1} alt='케미칼 사업부문'></img>
                                </div>
                                <p className='title'>케미칼 사업부문</p>

                                <div className='btnDetail'>
                                    <a href='/'>자세히보기</a>
                                </div>
                            </li>
                            <li className='businessCon'>
                                <div><img src={businessImg2} alt='그린소재 사업부문'></img></div>
                                <p className='title'>그린소재 사업부문</p>
                                <div className='btnDetail'>
                                    <a href='/'>자세히보기</a>
                                    <a href='/'>브랜드사이트 바로가기</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className='topUi'>
                        <li>
                            <div className='title'>
                                <img src={prCenterImg} alt='PrTitle'></img>
                            </div>
                            <p className='text marginBottom'>
                                롯데정밀화학 Brand Film
                            </p>
                            <p className='stockDate'>
                                2022-09-24
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <img src={pressRelease} alt='PrTitle'></img>
                            </div>
                            <p className='text marginBottom'>
                                롯데그룹 화학군, 세계 최초 암모니아 광분해 기술 공동 실증 나서며 수소경제 활성화 확대                        </p>
                            <p className='stockDate'>
                                2022-09-24
                            </p>
                        </li>
                        <li>
                            <div className='title'>
                                <img src={sutainablity} alt='PrTitle'></img>
                            </div>
                            <p className='text'>
                                롯데정밀화학 Brand Film
                            </p>
                            <p className='stockDate'>
                                2022-09-24
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='bottomBtnArea'>
                <a href='/' className={(onBottom === 'Off') ? 'open' : 'close'} onClick={(event) => {
                    event.preventDefault();
                    if (onBottom === 'Off') {
                        setOnBottom('On')
                    }
                    else {
                        setOnBottom('Off')
                    }
                }}>
                    <img src={(onBottom === 'Off') ? openBtn : closeBtn} alt='123' className='onTextBtn'></img>
                </a>
                <img src={arrowHead} style={(onBottom === 'Off') ? { visiblity: 'inherit' } : { visibility: 'hidden' }} className='arrow' alt='1'></img>

            </div>
        </Container>
    )
}

export default MainBottomContent