import { useState, useEffect } from 'react';

import {
    QuestionsM,
    QuestionsW,
    Conclusion,
    StyleListM,
    StyleListW,
    Stat
} from '../components/DataBase';

import styled from 'styled-components';

import klass from '../images/Klass_Crop.svg';
import artWork from '../images/ArtWork.svg'
import result from '../images/Result.png';
import line from '../images/Line.svg';
import man from '../images/Man.png';
import woman from '../images/Woman.png';

function Home() {
    const [Questions, setQuestions] = useState([]);
    const [answerList, setAnswerList] = useState([]);
    const [selfList, setSelfList] = useState([]);
    const [otherList, setOtherList] = useState([]);

    const [selfStyle, setSelfStyle] = useState([]);
    const [otherStyle, setOtherStyle] = useState([]);

    const [start, setStart] = useState(true);
    const [gednered, setGendered] = useState(true);
    const [gender, setGender] = useState(0);
    const [entire, setEntire] = useState(10);
    const [cnt, setCnt] = useState(0);
    const [conclude, setConclude] = useState(false);

    const onClick_gender = (event) => {
        event.preventDefault();

        const event_gender = Number(event.target.value);
        //value={1} 이것도 문자열로 읽어들이니 숫자형으로 돌려야됨

        console.log("gender : ", event_gender);
        setGender(event_gender);

        if (event_gender === 1)
            setQuestions(QuestionsM);
        else if (event_gender === 2)
            setQuestions(QuestionsW);
    }

    const onClick_start = () => {
        setStart(false);
    }
    const onClick_selection = (event) => {
        event.preventDefault();
        const answer = Number(event.currentTarget.value) + 1;
        setAnswerList(prev => [...prev, answer]);

        if (cnt < entire)
            setCnt(prev => prev + 1);
        else if (cnt == entire)
            setGendered(false);
    }


    useEffect(() => {
        if (Questions.length > 1) {
            setGendered(false);
            console.log("Questions:", Questions);
        }
    }, [Questions])

    useEffect(() => {
        console.log("answerList : ", answerList);
        if (cnt === Questions.length) {
            console.log("cnt, Questions.length",
                cnt, Questions.length)
            Conclusion(answerList, selfList, otherList,
                setSelfList, setOtherList);
        }
    }, [cnt])

    useEffect(() => {
        console.log("selfList, otherList", selfList, otherList);
        if (selfList.length == 6 && otherList.length == 2) {
            console.log('selfList and otherList are both 6', selfList, otherList);
            if (gender === 1) {
                if (selfList[1] === "청순" && otherList[1] == "공감적")
                    setSelfStyle(StyleListM[0]);
                else if (selfList[1] === "청순" && otherList[1] == "이성적")
                    setSelfStyle(StyleListM[1]);
                else if (selfList[1] === "트렌디" && otherList[1] == "공감적")
                    setSelfStyle(StyleListM[2]);
                else if (selfList[1] === "트렌디" && otherList[1] == "이성적")
                    setSelfStyle(StyleListM[3]);
                else if (selfList[1] === "관능적" && otherList[1] == "공감적")
                    setSelfStyle(StyleListM[4]);
                else if (selfList[1] === "관능적" && otherList[1] == "이성적")
                    setSelfStyle(StyleListM[5]);

                if (otherList[0] === "청순" && otherList[1] == "공감적")
                    setOtherStyle(StyleListW[0]);
                else if (otherList[0] === "청순" && otherList[1] == "이성적")
                    setOtherStyle(StyleListW[1]);
                else if (otherList[0] === "트렌디" && otherList[1] == "공감적")
                    setOtherStyle(StyleListW[2]);
                else if (otherList[0] === "트렌디" && otherList[1] == "이성적")
                    setOtherStyle(StyleListW[3]);
                else if (otherList[0] === "관능적" && otherList[1] == "공감적")
                    setOtherStyle(StyleListW[4]);
                else if (otherList[0] === "관능적" && otherList[1] == "이성적")
                    setOtherStyle(StyleListW[5]);
            }
            else if (gender === 2) {
                if (otherList[1] === "공룡") {
                    if (selfList[1] === "청순")
                        setSelfStyle(StyleListW[1]);
                    else if (selfList[1] === "트렌디")
                        setSelfStyle(StyleListW[3]);
                    else if (selfList[1] === "관능적")
                        setSelfStyle(StyleListW[5]);
                }

                else {
                    if (selfList[1] === "청순" && otherList[1] == "공감적")
                        setSelfStyle(StyleListW[0]);
                    else if (selfList[1] === "청순" && otherList[1] == "이성적")
                        setSelfStyle(StyleListW[1]);
                    else if (selfList[1] === "트렌디" && otherList[1] == "공감적")
                        setSelfStyle(StyleListW[2]);
                    else if (selfList[1] === "트렌디" && otherList[1] == "이성적")
                        setSelfStyle(StyleListW[3]);
                    else if (selfList[1] === "관능적" && otherList[1] == "공감적")
                        setSelfStyle(StyleListW[4]);
                    else if (selfList[1] === "관능적" && otherList[1] == "이성적")
                        setSelfStyle(StyleListW[5]);
                }

                if (otherList[0] === "청순" && otherList[1] == "공감적")
                    setOtherStyle(StyleListM[0]);
                else if (otherList[0] === "청순" && otherList[1] == "이성적")
                    setOtherStyle(StyleListM[1]);
                else if (otherList[0] === "트렌디" && otherList[1] == "공감적")
                    setOtherStyle(StyleListM[2]);
                else if (otherList[0] === "트렌디" && otherList[1] == "이성적")
                    setOtherStyle(StyleListM[3]);
                else if (otherList[0] === "관능적" && otherList[1] == "공감적")
                    setOtherStyle(StyleListM[4]);
                else if (otherList[0] === "관능적" && otherList[1] == "이성적")
                    setOtherStyle(StyleListM[5]);
                else if (otherList[1] == "공룡") {
                    if (otherList[0] === "청순")
                        setOtherStyle(StyleListM[6]);
                    else if (otherList[0] === "트렌디")
                        setOtherStyle(StyleListM[7]);
                    else if (otherList[0] === "관능적")
                        setOtherStyle(StyleListM[8]);
                }
            }
        }
    }, [selfList, otherList]);

    useEffect(() => {
        console.log("selfStyle, otherStyle", selfStyle, otherStyle);
        if (selfStyle.length == 2 && otherStyle.length == 2) {
            let tmp_list = [...selfList];
            tmp_list.splice(1, 1);
            setSelfList(tmp_list);

            setTimeout(() => {
                console.log("결론 도출");
                setConclude(true)
            }, 2000);
        }
    }, [selfStyle, otherStyle])

    return (
        <Wrapper>
            <BkImg src={klass}></BkImg>

            {
                start
                    ? <FlexBox_Column>
                        <StartText>
                            K(LASS) TEST에 오신 걸 환영합니다!
                            <br></br>
                            여러분의 스타일과 이상형을 술에 빗대어 찾아드립니다.
                            <br></br>
                            성실하게 답변해주시고 당신의 이상형을 찾아보세요 :)
                        </StartText>
                        <ArtWork>
                            <StartBar onClick={onClick_start}>
                                S T A R T
                            </StartBar>
                        </ArtWork>
                    </FlexBox_Column>
                    : gednered
                        ? <FlexBox_Column>
                            <QGender>
                                당신의 성별은?
                            </QGender>
                            <GenderBox>
                                <Selection onClick={onClick_gender} value={1}>
                                    <ManImg src={man} />
                                    남자</Selection>
                                <Selection onClick={onClick_gender} value={2}>
                                    <WomanImg src={woman} />
                                    여자</Selection>
                            </GenderBox>
                        </FlexBox_Column>
                        : cnt < Questions.length
                            ? <div>
                                <QuestionBox>
                                    {Questions[cnt].question.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                    {/* 개행문자를 jsx문법으로 html에서 출력하는 법(뻘짓같지만 이렇게 해야 개행문자 출력. 개별 <div>생성해야함) */}
                                </QuestionBox>
                                <SelectionBox>
                                    {Questions[cnt].selections.map((item, key) =>
                                        <Selection
                                            onClick={onClick_selection}
                                            key={key}
                                            value={key}>
                                            {item.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                        </Selection>
                                    )}
                                    {cnt === 8 &&
                                        <h1 style={{
                                            fontSize: '10px',
                                        }}>
                                            * 용균이형 : 클라스 회장님
                                        </h1>
                                    }
                                </SelectionBox>

                            </div>
                            : !conclude &&
                            <FlexBox_Column>
                                <QGender style={{ top: '30%' }}>
                                    당신의 스타일 & 이상형은...
                                </QGender>
                            </FlexBox_Column>
            }
            {
                !gednered && !conclude &&
                <UnderBlock>
                    <Index>
                        {cnt}/{entire}
                    </Index>
                    <UnderBox>
                        <UnderBar width={`${cnt / entire * 380}px`} />
                    </UnderBox>
                </UnderBlock>
            }

            {conclude &&
                <FlexBox_Column>
                    <Result>
                        <FakeBox>
                            {selfList.map
                                ((item, key) => <FlexBox_Column key={key}>
                                    <h2>{Stat[key]}</h2>
                                    <h1>{item}</h1>
                                    <Line src={line}></Line>
                                </FlexBox_Column>)
                            }
                        </FakeBox>
                        <RealBox>
                            <h3>당신의 스타일은?</h3>
                            <div>
                                <h1>{selfStyle[0]}</h1><h2>{' ' + selfStyle[1]}</h2>
                            </div>
                            <h3>당신의 이상형은?</h3>
                            <div>
                                <h1>{otherStyle[0]}</h1><h2>{' ' + otherStyle[1]}</h2>
                            </div>
                        </RealBox>
                        <Warning>
                            당신의 스타일과 이상형을<br />
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSctPwYSLhOyk0tQjFsoPDq-u7XHvSDY8rr-YQRm6uBP9yLnrQ/viewform"
                            target="_blank" rel="noopener noreferrer">구글폼</a>
                            에 꼭 작성해주세요!<br />
                        </Warning>
                    </Result>
                </FlexBox_Column>
            }
        </Wrapper>
    )
}
export default Home;
export {
    FlexBox_Column, FlexBox_Row, Wrapper,
    QuestionBox, Selection, SelectionBox
}

const FlexBox_Row = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const FlexBox_Column = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Wrapper = styled.div`
@import url('https://webfontworld.github.io/SCoreDream/SCoreDream.css');
position:absolute;  
//body의 자식요소인, 해당 컴포넌트의 최상위 요소의 기본설정 
//(body에 내장된 padding값 무시 할 수 있는 방법)
top:0;


box-sizing:border-box;
margin:0;
padding:0;

font-family: 'S-Core Dream';

width:100vw;
height:100vh;

color:black;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const BkImg = styled.img`
width:100vw;
height:100vw;
position:absolute;

left:50%;
transform:translateX(-50%);

opacity:0.3;
z-index:-1;

/* 배경 이미지의 위치를 중앙으로 설정 */
background-position: center;

/* 배경 이미지의 크기를 확대해서 보여줌 */
background-size: cover;
`;

const StartText = styled.div`
position:absolute;
top:10%;

width:380px;

font-family:Pretendard;
font-size:16px;
font-weight:bold;
text-align:center;
line-height:24px;

`;
const StartBar = styled.div``;
const ArtWork = styled.div`
position:absolute;
top:25%;
background-image:url(${artWork});
background-position: top;
background-size:cover;

width:380px;
height:380px;
border-radius:10px;

display:flex;
justify-content:center;
align-items:flex-end;


${StartBar}{
position:absolute;
bottom:35px;

background-color:rgba(255,255,255,0.8);
width:100%;
height:40px;

font-size:30px;
font-family:Pretendard;
font-weight:bold;
color:#2D2556;
cursor:pointer;

display:flex;
justify-content:center;
align-items:center;

padding-top:2px;
}
`;


const QuestionBox = styled.div`
position:absolute;
left:50%;
transform:translate(-50%,-50%);
top:15%;

width:360px;

font-size:18px;
font-weight:bold;
line-height:28px;
text-align:center;


margin-bottom:24px;


display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;


const ManImg = styled.img`
width:50px;
height:80px;
margin-bottom:12px;
pointer-events: none;   //기본적으로 클릭을 못 받도록 설정 
`;
const WomanImg = styled.img`
width:40px;
height:80px;
margin-bottom:12px;
pointer-events: none;
`;
const QGender = styled.div`
position:absolute;
top:20%;

width:360px;
margin-bottom:24px;

font-size:18px;
font-weight:bold;

display:flex;
justify-content:center;
align-items:center;
`;
const Selection = styled.button``;
const GenderBox = styled.div`
position:absolute;
top:30%;

display:flex;
justify-content:center;
align-items:center;

gap:12px;

${Selection}{
width:160px;
height:160px;

border:2px solid rgb(200,50,50);
border-radius:20px;
box-shadow:0px 2px 5px gray;

background-color:rgba(255,255,255);

font-family: 'S-Core Dream';
font-size:15px;
font-weight:bold;
color:black;

cursor: pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
`;
const SelectionBox = styled.div`

position:absolute;
top:26%;
left:50%;
transform:translateX(-50%);
gap:24px;
margin-bottom:48px;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


${Selection}{
width:360px;
height:80px;

border:2px solid rgb(200,50,50);
border-radius:20px;
box-shadow:0px 2px 5px gray;

background-color:rgba(255,255,255);

color:black;
font-family: 'S-Core Dream';
font-weight:bold;
font-size:15px;
line-height:20px;

cursor: pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
`;




const Index = styled.div`
/* position:absolute;
bottom:10%; */

width:360px;

display:flex;
justify-content:center;
align-items:center;
`;
const UnderBlock = styled.div`
position:absolute;
top:75%;
margin:0;
padding:0;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

gap:8px;
`;
const UnderBar = styled.div`
width:${props => props.width};
`;
const UnderBox = styled.div`
position:relative;
width:380px;
height:20px;
border-radius:10px;
background-color:lightgray;

${UnderBar}{
position:absolute;
left:0;
height:20px;
border-radius:10px;
background-color:rgb(255,150,150);
z-index:10;

transition: width 0.2s ease-out;
}
`;





const FakeBox = styled.div``;
const RealBox = styled.div``;
const Result = styled.div`
position:absolute;
top:0;

background-image:url(${result});
background-size:cover;
background-position:center;

width:380px;
height:900px;

color:white;

margin-bottom:12px;

${FakeBox}{
position:absolute;
left:50%;
transform:translateX(-50%);
top:20%;

display:flex;
flex-direction:column;
justify-content:flex-gednered;
align-items:flex-gednered;

h1{
width:100%;
text-align:left;
font-size:12px;
padding-left:12px;
margin-bottom:-4px;
}
h2{
width:100%;
color: #FFF;
text-shadow: 0px 0px 12px #FFF;
font-family: S-Core Dream;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom:-4px;
}
}

${RealBox}{
position:absolute;
left:50%;
top:62%;
transform:translateX(-50%);

width:75%;

display:flex;
flex-direction:column;
justify-content:flex-gednered;
align-items:center;

div{
display:flex;
justify-content:flex-gednered;
align-items:flex-end;

margin-bottom: 16px;
}
h3{
font-size:16px;
margin:0 0 4px 0;
text-shadow: 0px 0px 8px #FFF;
font-family: Pretendard;
}
h1{
font-size:12px;
margin:0 4px 4px 0;
}
h2{
font-size:24px;
margin:0 0 4px 0;
text-shadow: 0px 0px 12px #FFF;
font-family: Pretendard;
}
}
`;
const Line = styled.img`
align-self:center;

width:300px;

margin-bottom:-10px;
`;
const Warning = styled.div`
position:absolute;

top:85%;

width:380px;
font-size:18px;
font-weight:bold;
line-height:36px;
text-align:center;
`;

