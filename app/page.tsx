import { BackgroundBeamsDemo } from "./hero";
import { NavbarDemo } from "./nav";
import dynamic from 'next/dynamic';

// Dynamically import AppleCardsCarouselDemo to render only on the client
const AppleCardsCarouselDemo = dynamic(() => import("./carousel"), { ssr: false });

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <BackgroundBeamsDemo />
      <AppleCardsCarouselDemo />
    </>
  );
}
