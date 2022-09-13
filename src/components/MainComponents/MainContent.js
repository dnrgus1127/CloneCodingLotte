import React from 'react'
// import styled from 'styled-components'
import '../../css/Main.css'
import { ContentText } from '../../data/contentsText'

export const MainContent = ({ select, index }) => {
    const defalut = {
        opacity: 0,
        top: "60px",
    }

    const selected = {
        opacity: 1,
        top: "0px",
    }

    return (
        <div className='content'>
            <div>
                <h3 style={(select === false) ? defalut : selected}>{ContentText[index-1].title}</h3>
            </div>
            <div>
                <p className='transUp' style={(select === false) ? defalut : selected}>{ContentText[index-1].content} <br/> {ContentText[index-1].subContent}</p>
            </div>
            <div>
                <a style={(select === false) ? defalut : selected} href='/' className='more'>more</a>
            </div>
        </div>
    )
}
