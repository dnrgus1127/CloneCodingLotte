import React from 'react'
// import styled from 'styled-components'
import '../../css/Main.css'

export const MainContent = ({ select }) => {
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
                <h3 style={(select === false) ? defalut : selected}>About Us</h3>
            </div>
            <div>
                <p className='transUp' style={(select === false) ? defalut : selected}>지속가능경영을 통해<br></br> 더 나은 내일을 만드는 화학 기업</p>
            </div>
            <div>
                <a style={(select === false) ? defalut : selected} href='/' className='more'>more</a>
            </div>
        </div>
    )
}
