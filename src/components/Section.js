import React from 'react'
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    console.log(backgroundImg);

    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade botton>
                    {/* button Group */}
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {/* rightbuttonText 가 존재할때만 RightButton 보여줌 */}
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>

                        }

                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>

        </Wrap>
    );
};

export default Section;

//Wrap component
const Wrap = styled.div`
    z-index: 10;
    width:100vw; 
    height : 100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image :url('/images/model-s.jpg');
    display:flex;  // justify-content 를 해쥐위해서 
    flex-direction:column;
    justify-content: space-between;// for vertical alignment
    //for horizental alginment
    align-items : center; 
    background-image :${props => `url("images/${props.bgImage}")`}

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center;
    z-index: -1;
`

const ButtonGroup = styled.div`
        display: flex;
        margin-bottom:30px;
        // once the width becomes 768px -> 버튼 세로정렬로 
        @media (max-width:768px){
            flex-direction:column;
        }

`

const LeftButton = styled.div`
        background-color: rgba(23,26,32,0.8);  
        height:40px;
        width:256px;
        color: white;// text color
        display: flex;
        justify-content: center; // 좌우 center
        align-items: center;    //위아래에서 center
        border-radius: 100px;
        opacity: 0.85;
        text-transform : uppercase;
        font-size: 12px; 
        cursor:pointer;
        margin:8px;
        
        
`

// refer the LeftButton style
const RightButton = styled(LeftButton)`
        background:white;
        opacity:0.65;
        color: black;

`

const DownArrow = styled.img`
    // margin-top:20px;
    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;
`
//space-between때문에 버튼들 사이에도 공백 생김-> 2개의 버튼 그룹(downArrow,ButtonGroup)을 한 컨테이너로 만든다 
const Buttons = styled.div`



`
