import styled from 'styled-components';

export default function MiningTutorialLink ({ text, link}) {
    return (<LinkWrapper><TutorialLink href={link}>{text}</TutorialLink></LinkWrapper>)
}

const LinkWrapper = styled.div`
display: grid;
margin: 20px 0 0 0;
border-bottom: solid 1px #3ac5e8;
cursor: pointer;
width: 50vw;

@media screen and (max-width: 960px) {
margin: 10px 0 0 0;
width: 80vw;
}
`

const TutorialLink = styled.a`
display: grid;
text-decoration: none;
color: #dcdcdc;

@media screen and (max-width: 960px) {
font-size: 90%;
font-weight: 300;
}
`