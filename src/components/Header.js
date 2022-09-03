import React, { useState } from 'react'
import styled from 'styled-components'
import LogoImg from '../../src/assets/images/logo.gif'
import SearchIcon from '../assets/images/search-icon.gif'
import LangIcon from '../assets/images/lang-icon.gif'
import AllMenuIcon from '../assets/images/allMenu-icon.gif'


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
    padding : 0 64px;
    height: 80px;
    justify-content: space-between;
    display: flex;
    align-items: center;

`

const SubGnb = styled.ul`
    display: flex;
    position: relative;
    align-items: center;
    list-style: none;
    @media screen and (max-width: 800px){
        display: none;
        
    }
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
    font-size : 18px;
`

const Li = styled.li`
    margin-right: 50px;

`

const UtilMenu = styled.div`
    display: flex;
`
const UtilItem = styled.div`
    width: 44px;
    height: 40px;
    position: relative;


`

// const InputOff = styled.div`
//     width: 100%;
//     height: 100%;

//     .searchImg {
//         width: 100%;
//         height: 100%;
//     }
// `
const UtilIcon = styled.img`
    width: 100%;
    height: 100%;
`


// const InputOn = styled.input`
//     opacity: 1;
//     visibility: 1;
//     width: 920px;  
//     height: 40px;
//     background:  #000;
//     color: #fff;
//     border-radius: 20px;
//     padding : 10px 20px;
//     position: absolute;
//     top: 0;;
//     right: 0;
//     border: none;
//     cursor: pointer;
// `

const Header = () => {

    const [search, setSearch] = useState('Off');

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    return (
        <Container>
            <GNB>
                <Logo>
                    <LotteImg src={LogoImg} alt="LOTTE Fine Chemical">

                    </LotteImg>
                </Logo>

                <SubGnb>
                    <Li>
                        <Button>회사소개</Button>
                    </Li>
                    <Li>
                        <Button>비즈니스</Button>
                    </Li>
                    <Li>
                        <Button>투자 정보</Button>
                    </Li>
                    <Li>
                        <Button>EGS</Button>
                    </Li>
                    <Li>
                        <Button>인재 채용</Button>
                    </Li>
                </SubGnb>

                <UtilMenu>
                    <UtilItem >
                        <input className='subSearchInput' placeholder='Search' type='text' style={(search === 'Off') ? { opacity: '0', visibility: 'hidden', width: '40px' } : { opacity: '1', visibility: 'inherit', width: '900px' }}></input>

                        <a href='/'>
                            <UtilIcon src={SearchIcon} onClick={(event) => {
                                event.preventDefault();
                                if (search === 'On') {
                                    setSearch('Off')
                                }
                                else {
                                    setSearch('On')
                                }
                            }} style={(search === 'Off') ? {opacity: '1'} : {opacity: '0.5'}}></UtilIcon>
                        </a>
                        {/* <input className='subSearchInput' placeholder='Search' type='text'  style={{opacity:'1', visibility:'1' , width: '920px'}}></input> */}
                        {/* <SearchInput isClick={search} ></SearchInput> */}
                    </UtilItem>
                    <UtilItem>
                        <UtilIcon src={LangIcon}></UtilIcon>
                    </UtilItem>
                    <UtilItem>
                        <UtilIcon src={AllMenuIcon}></UtilIcon>
                    </UtilItem>
                </UtilMenu>
            </GNB>
        </Container>
    )
}

export default Header