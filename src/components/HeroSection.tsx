
import {motion,  useScroll, useTransform} from 'framer-motion'
import Ripple from "@/components/ui/ripple";

// import {useLottie, useLottieInteractivity} from 'lottie-react'
// import HeroScroll from './heroscroll.json'

import OtherSection from "./OtherSection";

const HeroSection = () => {
  return (
    <div className="">
        {/* <div >
            <LottieAnimation/>
        </div> */}
        <Section1/>
        <Section2/>
    </div>
  )
}

export default HeroSection

// const style = {
//   height : 800
  
// }
// const options = {
// animationData:HeroScroll,
// autoplay:false
// }
// const LottieAnimation = () => {
//   const lottieObj = useLottie(options, style);
//   const Animation = useLottieInteractivity({
//     lottieObj,
//     mode: "scroll",
//     actions: [
//       {
//         visibility: [0, 1],
//         type: "seek",
//         frames: [0, 60],
//       },
//     ],
//   });

//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="sticky top-0 h-screen z-10">
//         {Animation}
//       </div>
//     </div>
//   );
// }








const Section1 = () => {
  const { scrollYProgress } = useScroll();

  // Moving heading out of the viewport as you scroll
  const heading = useTransform(scrollYProgress, [0, 0.5], [0, -3000]);
  const divMove = useTransform(scrollYProgress, [0, 0.15], ["0vw", "-50vw"]);
  const circle = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="h-[200vh] bg-green-500 text-[3.5vw] text-white pb-[10vh] sticky top-0 -z-10 2xl:bg-red-500 overflow-hidden">
      {/* Moving heading */}
      <motion.div style={{ y: heading }} className="absolute left-32 top-[35vh]">
        <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
      </motion.div>

      {/* Red div moving to the left */}
      <motion.div style={{ x: divMove }} className="bg-red-400 h-[80vh] w-[70vw] absolute -right-[36vw] top-24 2xl:top-[25vh] z-20 "></motion.div>

      {/* Yellow circle fading out */}
      <motion.div
        style={{ opacity: circle }}
        className="bg-yellow-400 h-[13vw] w-[13vw] absolute right-96 top-56 rounded-full 2xl:top-[40vh] z-30 "
      ></motion.div>
      <Ripple
            className="absolute -top-[105vh] -right-[30vw] z-10"
            numCircles={3}
            mainCircleSize={200}
          />
    </div>
  );
};



const Section2 = () => {
  return (
    <div className="h-[200vh]  bg-white  pb-[10vh] ">
      <OtherSection/>
    </div>
  );
};
