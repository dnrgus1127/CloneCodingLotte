import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    background-color: #f9f9f9ff;

    h3 {
        border-right: 1px solid #fff;
        height: 100%;
    }
`
const Ul = styled.ul`
    position: relative;
    display: flex;
`

const Li = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 164px;
    height: 100%;
    border-right: 1px solid #fff;
    padding-top: 30px;
    padding-left: 20px;
    
    div{
        position: relative;
        display: flex;
    }

    div a{
        position: relative;
        font-family: 'NotoSansKR_Regular';
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        color: black;

    }
    a::after {
        position: absolute;
        content: "";
        display: inline-block;
        width: 0;
        height: 1.2px;
        background-color: #E50019;
        bottom: -6px;
        left: 0;
        transition: all .2s ease-out;
    }

    a:hover:after {
        position: absolute;
        content: "";
        display: inline-block;
        width: 100%;
        height: 1.2px;
        background-color: #E50019;
        bottom: -6px;
        left: 0;
        transition: all .2s ease-out;
    }

    /* ul {
        position: relative;
        display: flex;
        list-style: none;
    } */

    .d3Menu a {
        position: relative;
        font-family: 'NotoSansKR_Regular';
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        color: #999;
    }
`

// style={(hidden === '1') ? { visibility: "hidden" } : { visibility: 'inherit' }}
const SubGnbOverCategory = (props) => {

    return (
        <Container >
            <h3> </h3>
            <Ul>
                {props.data.map((d3menu) => {
                    return <Li key={d3menu.key}>
                        <div>
                            <a href='/'>{d3menu.title}</a>    
                        </div>
                        <ul>
                            {d3menu.items.map((menuItem) => (
                                <li className='d3Menu' key={menuItem}>
                                    <a href='/'>{menuItem}</a>
                                </li>
                            ))}
                        </ul>
                    </Li>
                })}
            {/* <Li>
                <div>
                    <a href='/'>{props.count}</a>
                </div>
                <ul>
                    <li className='d3Menu'>
                        <a href='/'>회사소개</a>
                    </li>
                    <li className='d3Menu'>
                        <a href='/'>회사소개</a>
                    </li>
                    <li className='d3Menu'>
                        <a href='/'>회사소개</a>
                    </li>
                    <li className='d3Menu'>
                        <a href='/'>회사소개</a>
                    </li>
                </ul>
            </Li> */}
        </Ul>
    </Container>
  )
}

export default SubGnbOverCategory