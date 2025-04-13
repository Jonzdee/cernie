import { AppleCardsCarouselDemo } from "./carousel"
import { BackgroundBeamsDemo } from "./hero"
import {  NavbarDemo } from "./nav"

export default function Home (){
  console.log("hello me --SERVER/CLIENT")
  return(
      <>
    <NavbarDemo />
<BackgroundBeamsDemo />
<AppleCardsCarouselDemo />
      </>
  )
}