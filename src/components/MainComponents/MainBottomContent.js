import React from 'react'
import styled from 'styled-components'
// import expologo from '../../assets/images/expologo_w@2x.ab85544.gif'
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

const Container = styled.div`
    position: absolute;
    display:  flex;
    width: 100%;
    height: auto;
    bottom: -400px;
    background-color: white;
    z-index: 900;
    align-items: flex-end;
    flex-flow: column;
    padding-left: 145px;
    padding-right: 145px;
`

const StockHead = styled.div`
    border-bottom: 1.5px solid black;
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

const MainBottomContent = () => {
    return (
        <Container>
            <div className='expoLogo'>
                <img src={expologoColor} alt="2030 부산세계박람회"></img>
            </div>
            <div className='mainBottomContent'>
                <ul className='topUi'>
                    <li>
                        <div className='title'>
                            <img src={companyTitle} alt=""></img>
                        </div>
                        <p>
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
                        <p>
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
                            <StockHead>
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
            </div>
        </Container>
    )
}

export default MainBottomContent