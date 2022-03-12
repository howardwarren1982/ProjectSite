import * as React from "react"
import "./layout.scss"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      Footer Section
    </>
  )
}

export default Layout

// card code

// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

// import React from "react";
// import { Buttoncomponent } from "components";
// import styles from "./Component14.module.scss";

// const Component14 = () => {
//   return (
//     <div>
//       <div className={styles.component4} />
//       <div className={styles.cardtextside}>
//         <div className={styles.subtitle2}>
//           <p className={styles.aboutThisProject}>
//             About This Project
//           </p>
//         </div>
//         <div className={styles.textbox}>
//           <p
//             className={
//               styles.thisProjectIsMyPortfolioThatYouAr
//             }
//           >
//             This project is my portfolio that you are
//             currently on. I designed this website in Figma.
//             The Anima plugin helped me speed up coding the
//             site. I finished this project using Gatsby
//             because of the ability to easily expand the
//             portfolio in the future.
//           </p>
//         </div>
//         <div className={styles.subtitle2Two}>
//           <p className={styles.aboutThisProject}>
//             Skills Used
//           </p>
//         </div>
//         <p
//           className={
//             styles.reactGatsbyWebsiteDesignFigmaAni
//           }
//         >
//           React (Gatsby)
//           <br />
//           Website design
//           <br />
//           Figma (Anima plugin)
//           <br />
//           SCSS
//           <br />
//           Flexbox
//           <br />
//           Pixel Perfect
//           <br />
//           Responsive
//           <br />
//           GIT
//         </p>
//       </div>
//       <div className={styles.cardpicside}>
//         <div className={styles.frame2}>
//           <div className={styles.cardPicture}>
//             <img
//               alt=""
//               className={styles.unsplashl8kqipcodv8}
//               src="https://static.overlay-tech.com/assets/a416e0f0-218f-433e-8e99-f9fc72520cf3.png"
//             />
//           </div>
//         </div>
//         <div className={styles.buttonrow}>
//           <Buttoncomponent />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Component14;

// card style

// .component4 {
//   width: 100%;
//   height: 100%;
//   background-color: $card-color;
//   border-radius: 20px;
//   box-shadow: -7px 5px 14px 0 $transparent-black;
//   position: relative;
// }
// .cardtextside {
//   width: 46.97%;
//   height: 82.5%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   position: absolute;
//   right: 27px;
//   top: 26.5px;
// }
// .subtitle2 {
//   margin-bottom: 17px;
//   padding: 0 0 5px;
//   display: flex;
//   align-items: center;
// }
// .aboutThisProject {
//   color: $black;
//   @include open-sans-20-bold;
// }
// .textbox {
//   margin-bottom: 17px;
//   padding: 5px 0;
//   height: 95px;
//   align-self: stretch;
//   position: relative;
// }
// .thisProjectIsMyPortfolioThatYouAr {
//   color: $black;
//   position: absolute;
//   left: 0;
//   top: -2.5px;
//   @include open-sans-16-regular;
// }
// .subtitle2Two {
//   margin-bottom: 17px;
//   padding: 5px 0 0;
//   display: flex;
//   align-items: center;
// }
// .reactGatsbyWebsiteDesignFigmaAni {
//   max-width: 188px;
//   color: $black;
//   @include open-sans-16-regular;
// }
// .cardpicside {
//   width: 37.94%;
//   height: 76.67%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   left: 48px;
//   bottom: 50px;
// }
// .frame2 {
//   margin-bottom: 190px;
//   flex: 1;
//   align-self: stretch;
//   position: relative;
// }
// .cardPicture {
//   padding: 10px;
//   position: absolute;
//   left: 0;
//   bottom: -171px;
// }
// .unsplashl8kqipcodv8 {
//   width: 312px;
//   height: 240px;
// }
// .buttonrow {
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   flex: 1;
//   align-self: stretch;
// }

// tablet---------------------------------------------------

// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

// import React from "react";
// import { Buttoncomponent } from "components";
// import styles from "./Fragment.module.scss";

// const Fragment = () => {
//   return (
//     <div className={styles.mobilProjectCard}>
//       <div className={styles.subtitle2}>
//         <p className={styles.aboutThisProject}>
//           About This Project
//         </p>
//       </div>
//       <p
//         className={styles.loremIpsumDolorSitAmetConsectetur}
//       >
//         Lorem ipsum dolor sit amet, consectetur adipiscing
//         elit, sed do eiusmod tempor incididunt ut labore et
//         dolore magna aliqua. Fames ac turpis egestas
//         integer. Non quam lacus suspendisse faucibus
//         interdum. Blandit
//       </p>
//       <div className={styles.relativeWrapperOne}>
//         <div className={styles.cardtextside}>
//           <div className={styles.textbox} />
//           <p
//             className={
//               styles.psdToHtmlCssAndJsAdobeXdScssFl
//             }
//           >
//             PSD to HTML, CSS and JS
//             <br />
//             Adobe XD
//             <br />
//             SCSS
//             <br />
//             Flexbox
//             <br />
//             Pixel Perfect
//             <br />
//             Responsive
//             <br />
//             GIT
//           </p>
//         </div>
//         <div className={styles.subtitle2Two}>
//           <p className={styles.aboutThisProject}>
//             Skills Used
//           </p>
//         </div>
//       </div>
//       <div className={styles.cardpicside}>
//         <div className={styles.frame2}>
//           <div className={styles.cardPicture}>
//             <img
//               alt=""
//               className={styles.unsplashl8kqipcodv8}
//               src="https://static.overlay-tech.com/assets/e07af941-ba2b-4d3b-bd52-76e5c94f6f53.png"
//             />
//           </div>
//         </div>
//       </div>
//       <Buttoncomponent className={styles.buttoncomponent} />
//     </div>
//   );
// };

// export default Fragment;

// .mobilProjectCard {
//   width: calc(100% - 96.48px);
//   height: calc(100% - 337px);
//   padding: 257px 96.48px 80px 0;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   position: relative;
// }
// .subtitle2 {
//   width: calc(59.61% - 138.01px);
//   height: 6.59%;
//   margin-bottom: 27px;
//   padding: 0 138.01px 0 0;
//   display: flex;
//   align-items: center;
// }
// .aboutThisProject {
//   color: $black;
//   @include open-sans-20-bold;
// }
// .loremIpsumDolorSitAmetConsectetur {
//   max-width: 520.98px;
//   width: 96.74%;
//   height: 21.46%;
//   color: $black;
//   margin-bottom: 31px;
//   margin-left: 1px;
//   @include open-sans-16-regular;
// }
// .relativeWrapperOne {
//   height: 57.8%;
//   align-self: stretch;
//   position: relative;
// }
// .cardtextside {
//   width: calc(100% - 231.52px);
//   height: 100%;
//   padding: 0 231.52px 0 0;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   position: relative;
// }
// .textbox {
//   width: 307px;
//   height: 66px;
//   margin-bottom: 17px;
// }
// .psdToHtmlCssAndJsAdobeXdScssFl {
//   max-width: 188px;
//   color: $black;
//   @include open-sans-16-regular;
// }
// .subtitle2Two {
//   width: calc(34.85% - 80.69px);
//   height: 11.39%;
//   padding: 0 80.69px 0 0;
//   display: flex;
//   align-items: center;
//   position: absolute;
//   left: 1px;
//   top: 35px;
// }
// .cardpicside {
//   width: calc(100% - 100px);
//   height: 34.81%;
//   padding: 0 89px 0 11px;
//   display: flex;
//   align-items: flex-start;
//   position: absolute;
//   left: -18px;
//   top: -40px;
// }
// .frame2 {
//   position: relative;
// }
// .cardPicture {
//   padding: 10px 10px 0;
//   position: absolute;
//   right: -66px;
//   bottom: -11px;
// }
// .unsplashl8kqipcodv8 {
//   width: 592px;
//   height: 261px;
// }
// .buttoncomponent {
//   position: absolute;
//   left: 230px;
//   bottom: -24px;
// }

// phone---------------------------------------------------

// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

// import React from "react";
// import { Rectangle4, Buttoncomponent } from "components";
// import styles from "./MobilProjectCard.module.scss";

// const MobilProjectCard = () => {
//   return (
//     <div className={styles.mobilProjectCard}>
//       <Rectangle4 className={styles.rectangle4} />
//       <div className={styles.cardpicside}>
//         <div className={styles.frame2}>
//           <div className={styles.cardPicture}>
//             <img
//               alt=""
//               className={styles.unsplashl8kqipcodv8}
//               src="https://static.overlay-tech.com/assets/7012a45b-af00-405b-aaf0-ffaef70e7928.png"
//             />
//           </div>
//         </div>
//       </div>
//       <p className={styles.aboutThisProject}>
//         About This Project
//       </p>
//       <div className={styles.relativeWrapperOne}>
//         <div className={styles.cardtextside}>
//           <div className={styles.textbox} />
//           <p
//             className={
//               styles.psdToHtmlCssAndJsAdobeXdScssFl
//             }
//           >
//             PSD to HTML, CSS and JS
//             <br />
//             Adobe XD
//             <br />
//             SCSS
//             <br />
//             Flexbox
//             <br />
//             Pixel Perfect
//             <br />
//             Responsive
//             <br />
//             GIT
//           </p>
//         </div>
//         <p className={styles.skillsUsed}>Skills Used</p>
//         <p
//           className={
//             styles.loremIpsumDolorSitAmetConsectetur
//           }
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing
//           elit, sed do eiusmod tempor incididunt ut labore
//           et dolore magna aliqua. Fames ac turpis egestas
//           integer. Non quam lacus suspendisse faucibus
//           interdum. Blandit
//         </p>
//       </div>
//       <div className={styles.flexWrapperOne}>
//         <Buttoncomponent
//           className={styles.buttoncomponent}
//         />
//         <Buttoncomponent
//           className={styles.buttoncomponent}
//         />
//       </div>
//     </div>
//   );
// };

// export default MobilProjectCard;

// .mobilProjectCard {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// }
// .rectangle4 {
//   margin-bottom: 28px;
//   margin-left: 39px;
// }
// .cardpicside {
//   height: calc(25.3% - 10px);
//   margin-bottom: 36px;
//   padding: 0 51px 10px 11px;
//   display: flex;
//   align-items: flex-start;
//   align-self: stretch;
// }
// .frame2 {
//   position: relative;
// }
// .cardPicture {
//   padding: 10px;
//   position: absolute;
//   left: -11px;
//   bottom: -71px;
// }
// .unsplashl8kqipcodv8 {
//   width: 340px;
//   height: 169px;
//   position: absolute;
//   right: -28px;
//   top: 10px;
// }
// .aboutThisProject {
//   color: $black;
//   margin-bottom: 144px;
//   margin-left: 45px;
//   @include open-sans-20-bold;
// }
// .relativeWrapperOne {
//   width: 84.81%;
//   height: 31.73%;
//   margin-bottom: 35px;
//   margin-left: 45px;
//   position: relative;
// }
// .cardtextside {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   position: relative;
// }
// .textbox {
//   width: 307px;
//   height: 66px;
//   margin-bottom: 17px;
// }
// .psdToHtmlCssAndJsAdobeXdScssFl {
//   max-width: 188px;
//   color: $black;
//   @include open-sans-16-regular;
// }
// .skillsUsed {
//   color: $black;
//   position: absolute;
//   left: 0;
//   top: 40px;
//   @include open-sans-20-bold;
// }
// .loremIpsumDolorSitAmetConsectetur {
//   max-width: 297px;
//   width: 96.74%;
//   height: 55.7%;
//   color: $black;
//   position: absolute;
//   left: 0;
//   top: -127px;
//   @include open-sans-16-regular;
// }
// .flexWrapperOne {
//   padding: 0 0 0 45px;
//   display: flex;
//   align-items: flex-start;
// }
// .buttoncomponent {
//   align-self: stretch;
//   &:not(:last-of-type) {
//     margin-right: 32px;
//   }
// }
