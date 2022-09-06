import React, { useState } from 'react'
import styled from 'styled-components'
import LogoImg from '../../src/assets/images/logo.gif'
import LogoRed from '../../src/assets/images/logo-red.gif'
import SearchIcon from '../assets/images/search-icon.gif'
import LangIcon from '../assets/images/lang-icon.gif'
import SearchIconBlack from '../assets/images/search-icon-black.gif'
import LangIconBlack from '../assets/images/black-lang-icon.gif'
import AllMenuIcon from '../assets/images/allMenu-icon.gif'
import AllMenuIconBlack from '../assets/images/allMenu-icon-black.gif'
import SubGnbOverCategory from './HeaderComponents/SubGnbOverCategory'


const Container = styled.div`
    position: fixed;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: auto;
    top: 0;
    z-index : 1100;
`
const GNB = styled.div`
    /* Global Navigation Bar */
    @media screen and(max-width: 1200px){
        padding : 0 4%;
    }
    /* padding : 0 64px;
    height: 80px;
    justify-content: space-between;
    display: flex;
    align-items: center; */



`

const SubGnb = styled.ul`
    display: flex;
    position: relative;
    align-items: center;
    list-style: none;
    @media screen and (max-width: 1060px){
        display: none;
        
    }
    margin: 0;
    padding: 0;
    
`


const Logo = styled.a`
    width: 115px;
    height: 36px;
    @media screen and (max-width: 800px){
        width: 89px;
        height: 28px;
    }
`

const LotteImg = styled.img`
    width: 100%;
    height: 100%;
    user-select: none;
`

const Button = styled.button`
    color:white;
    font-weight: 700;
    font-size : 17px;
    font-family: 'NotoSansKR_Regular';
    padding: 0;
`

const Li = styled.li`
    margin-right: 50px;
    padding: 0;

`

const UtilMenu = styled.div`
    display: flex;
`
const UtilItem = styled.div`
    width: 40px;
    height: 40px;
    position: relative;


`
const UtilIcon = styled.img`
    width: 100%;
    height: 100%;
`

const LangItem = styled.a`
    font-family: 'NotoSansKR_Regular';
    font-size: 13px;
    font-weight: 500;
    display: block;
    cursor: pointer;
    text-decoration: none;
    /* margin: 0; */
    padding: 0;
`

const SubGndOver = styled.div`
    .subGndOver{
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height:360px;
        /* background-color : #f9f9f9; */
        overflow: hidden;
        transition: all 0.2s ease;
        z-index: -1;
    }
   
`

const GnbOverContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    /* background-color: white; */
    transition: all .2s ease-in-out;

`





const Header = () => {

    const topHeight = [{ top: "0px" }, { top: "-300px" }, { top: "-600px" }, { top: "-900px" }, { top: "-1200px" }]
    const menuItemData = [
        {
            key: 1,
            array :[
                {
                    key: 1,
                    title: "회사개요",
                    items: ["회사소개", "CEO메세지", "회사연혁",],
                },
                {
                    key: 2,
                    title: "브랜드",
                    items: ["CI", "슬로건"],
                },
                {
                    key: 3,
                    title: "PR",
                    items: ["보도자료", "홍보자료", "SNS"],
                },
                {
                    key: 4,
                    title: "사업장",
                    items: ["사업장"],
                }
            ]
        },
        {
            key: 2,
            array :[
                {
                    key: 1,
                    title: "케미칼사업부문",
                    items: ["염소계열", "암모니아계열", "기타",],
                },
                {
                    key: 2,
                    title: "그린소재사업부문",
                    items: ["산업용", "식의약용"],
                },
                {
                    key: 3,
                    title: "R&D",
                    items: ["연구개발", "품질관리"],
                },
            ]
        },
        {
            key: 3,
            array :[
                {
                    key: 1,
                    title: "주식정보",
                    items: ["주가정보", "주식현황", "이익배당",],
                },
                {
                    key: 2,
                    title: "재무정보",
                    items: ["요약재무", "신용등급"],
                },
                {
                    key: 3,
                    title: "IR정보",
                    items: ["전자공시", "사업보고서", "감사보고서", "IR활동"],
                },
            ]
        },
        {
            key: 4,
            array :[
                {
                    key: 1,
                    title: "회사개요",
                    items: ["회사소개", "CEO메세지", "회사연혁",],
                },
                {
                    key: 2,
                    title: "브랜드",
                    items: ["CI", "슬로건"],
                },
                {
                    key: 3,
                    title: "PR",
                    items: ["보도자료", "홍보자료", "SNS"],
                },
                {
                    key: 4,
                    title: "사업장",
                    items: ["사업장"],
                }
            ]
        },
        {
            key: 5,
            array :[
                {
                    key: 1,
                    title: "회사개요",
                    items: ["회사소개", "CEO메세지", "회사연혁",],
                },
                {
                    key: 2,
                    title: "브랜드",
                    items: ["CI", "슬로건"],
                },
                {
                    key: 3,
                    title: "PR",
                    items: ["보도자료", "홍보자료", "SNS"],
                },
                {
                    key: 4,
                    title: "사업장",
                    items: ["사업장"],
                },
                {
                    key: 5,
                    title: "IR정보",
                    items: ["전자공시", "사업보고서", "감사보고서", "IR활동"],
                },

            ]
        },
        
    ]



    const [search, setSearch] = useState('Off');
    const [selectLang, setSelectLang] = useState('Off');
    const [mouseOver, setMouseOver] = useState('Off');
    const [heightIndex, setHeightIndex] = useState(0);

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return (
        <Container >
            <GNB className={(mouseOver === 'Off') ? 'gndOff' : 'gndOn'}>
                <Logo>
                    <LotteImg src={(mouseOver === 'Off') ? LogoImg : LogoRed} alt="LOTTE Fine Chemical">

                    </LotteImg>
                </Logo>

                <SubGnb onMouseOver={() => {
                    setMouseOver('On')
                }} 
                >
                    <Li>
                        <Button onMouseOver={() => {
                            setHeightIndex(0);
                        }}>회사소개</Button>
                    </Li>
                    <Li>
                        <Button onMouseOver={() => {
                            setHeightIndex(1);
                        }}>비즈니스</Button>
                    </Li>
                    <Li>
                        <Button onMouseOver={() => {
                            setHeightIndex(2);
                        }}>투자 정보</Button>
                    </Li>
                    <Li>
                        <Button onMouseOver={() => {
                            setHeightIndex(3);
                        }}>EGS</Button>
                    </Li>
                    <Li>
                        <Button onMouseOver={() => {
                            setHeightIndex(4);
                        }}>인재 채용</Button>
                    </Li>
                </SubGnb>

                <UtilMenu>
                    <UtilItem >
                        <input className='subSearchInput' placeholder='Search' type='text' style={(search === 'Off') ? { opacity: '0', visibility: 'hidden', width: '40px' } : { opacity: '1', visibility: 'inherit', width: (vw - 235 - 128) }}></input>

                        <a href='/' onClick={(event) => {
                            event.preventDefault();
                            if (search === 'On') {
                                setSearch('Off')
                            }
                            else {
                                setSearch('On')
                            }
                        }} style={(search === 'Off') ? { opacity: '1' } : { opacity: '0.5' }}>
                            <UtilIcon src={(mouseOver === 'Off') ? SearchIcon : SearchIconBlack} ></UtilIcon>
                        </a>
                    </UtilItem>
                    <UtilItem>
                        <div className='langBtnArea' style={(selectLang === 'Off') ? { opacity: 0, visibility: "hidden", width: "40px" } : { opacity: '1', visibility: 'inherit', width: '170px' }}>
                            <LangItem href='/' className='langSelect'>KOR</LangItem>
                            <LangItem href='none' className='langUnselect'>ENG</LangItem>
                        </div>
                        <a href='/' onClick={(event) => {
                            event.preventDefault();
                            if (selectLang === 'On') {
                                setSelectLang('Off')
                            }
                            else {
                                setSelectLang('On')
                            }
                        }} style={(selectLang === 'Off') ? { opacity: '1' } : { opacity: '0.5' }}>

                            <UtilIcon src={(mouseOver === 'Off') ? LangIcon : LangIconBlack}></UtilIcon>
                        </a>
                    </UtilItem>
                    <UtilItem>
                        <UtilIcon src={(mouseOver === 'Off') ? AllMenuIcon : AllMenuIconBlack}></UtilIcon>
                    </UtilItem>
                </UtilMenu>
            </GNB>
            <SubGndOver>
                <div className='subGndOver'  style={(mouseOver === 'Off') ? { top: '-360px' } : { top: '80px' }}>
                    <GnbOverContainer  style={topHeight[heightIndex]}>
                        {menuItemData.map((index)=>{
                            return <SubGnbOverCategory key={index.key} data={index.array}></SubGnbOverCategory>
                        })}
                    </GnbOverContainer>
                    <div className='subGnbOver_util'>
                        <div className='support'></div>
                    </div>

                </div>
            </SubGndOver>


        </Container>
    )
}

export default Header