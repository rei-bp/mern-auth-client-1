import styled from 'styled-components'

const EventComponent = styled.div `
margin: 0 150px;
width: 1140px;
`

const EventTitle = styled.div `
width: 319px;
height: 54px;
flex-grow: 0;
margin: 0 254px 2px 7px;
font-size: 36px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.9px;
text-align: left;
color: #000000;
`
const EventHeader = styled.div `
display: grid;
width: 100%;
grid-template-columns: 60% 40%;
padding-bottom: 10px;
`
const EventLocation = styled.div `
width: 179px;
height: 36px;
flex-grow: 0;
margin: 4px 0 4px 5px;
font-size: 24px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.6px;
text-align: left;
color: #000000;
`
const DateTime = styled.div `
display: flex;
`

const EventDate = styled.div `
width: 270px;
height: 46px;
flex-grow: 0;
margin: 0 20px 0 0;
background-color: #c6f1ff;
`
const DateText = styled.p`
display: flex;
justify-content: center;
`
const EventTime = styled.div `
  width: 270px;
  height: 46px;
  flex-grow: 0;
  margin: 0 0 0 20px;
  background-color: #c6f1ff;
}
`
const TimeText = styled.p`
display: flex;
align-items: center;
justify-content: center;
`

const EventImg = styled.img `
`
const EventDetail = styled.div `
display: grid;
width: 100%;
grid-template-columns: 70% 30%;
`
const EventCreator = styled.div `
`
const CreatorTitle = styled.div `
    display: flex;
    flex-direction: row;
    padding-top: 50px;
`
const CreatorImg = styled.img `
    border-radius: 50%;
`
const CreatorName = styled.div `
    display: flex;
    align-items: center;
    padding: 0 0 0 10px;
    font-size: 54px;
    font-weight: 600; 
`
const EventDescription = styled.div `
padding-top: 30px;
text-align: left;
font-size: 24px;
font-weight: 600;
`
const DescriptionContent = styled.p `
text-align: left;
padding: 0 15px 0 0;
`

const EventTagList = styled.div `
`
const JoinButton = styled.button `
margin-top: 60px;
width: 100%;
height: 70px;
font-size: 24px;
font-weight: 900;
color: #ffffff;
letter-spacing: 1.92px;
background-color: #ff4ba6;
border-width: 0;
`

const Tags = styled.div `
`

//ANDIE WORK HERE
const Participants = styled.div `
`

export default function Event () {
    return (
        <EventComponent className='container'>
                <EventTitle>Event Name</EventTitle>
                <EventHeader>
                    <EventLocation>Address</EventLocation>
                    <DateTime>
                        <EventDate><DateText>Date</DateText></EventDate>
                        <EventTime><TimeText>Time</TimeText></EventTime>
                    </DateTime>
                </EventHeader>
                <EventImg src="http://placekitten.com/1140/579"></EventImg>
            <EventDetail>
                <EventCreator>
                    <CreatorTitle>
                        <CreatorImg src="http://placekitten.com/100/100"></CreatorImg>
                        <CreatorName>Kimberly Johnson</CreatorName>
                    </CreatorTitle>
                    <EventDescription>Event Description</EventDescription>
                    <DescriptionContent>Nibh vestibulum amet cursus amet. Nulla eu urna proin lorem. Quisque suspendisse purus neque aenean aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </DescriptionContent>
                </EventCreator>
                <EventTagList>
                    <JoinButton>JOIN THIS EVENT</JoinButton>

                    <Tags></Tags>
                    <Participants></Participants>
                </EventTagList>
            </EventDetail>
        </EventComponent>
    )
}