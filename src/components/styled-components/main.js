import styled from "styled-components";

// import MainBg from '../assets/images/bgHome2.png'



// getting the screen width for toggling the images in desktop tab and mobile view
const screenWidth = window.innerWidth
const MainBg = 'https://res.cloudinary.com/shariqcloud/image/upload/v1647506517/William%20Barley/mainImages/homebg_zfkdmq.jpg'
export const StyledHome = styled.div`
	background: radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${screenWidth < 500 && MainBg || screenWidth > 500 && screenWidth < 1200 && MainBg || screenWidth > 1200 && MainBg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: auto;
	width:100vw;
	height:75vh;
`;
// export const StyledDest = styled.div`
// 	background-image: url(${screenWidth < 500 && Dest3Img || screenWidth > 500 &&screenWidth<1200 && Dest2Img || screenWidth > 1200 && Dest1Img});
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center;
// 	background-attachment: auto;
// `;
// export const StyledCrew = styled.div`
// 	background-image: url(${screenWidth < 500 && Crew3Img || screenWidth > 500 &&screenWidth<1200 && Crew2Img || screenWidth > 1200 && Crew1Img});
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center;
// 	background-attachment: auto;
// `;
// export const StyledTech = styled.div`
// 	background-image: url(${screenWidth < 500 && Tech3Img || screenWidth > 500 &&screenWidth<1200 && Tech2Img || screenWidth > 1200 && Tech1Img});
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center;
// 	background-attachment: auto;
// `;
