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
                            미래에 가치를 더하다.<br />
                            Fine Today, Green Tomorrow!
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
                            <StockBottom></StockBottom>
                        </div>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default MainBottomContent