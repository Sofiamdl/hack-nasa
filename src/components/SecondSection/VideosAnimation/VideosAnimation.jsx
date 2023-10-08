import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./styles.css";
import Foto1 from "../../../newassets/foto1.png"
import Foto2 from "../../../newassets/foto2.png"
import Foto3 from "../../../newassets/foto3.png"
import { ScrollTrigger, Power4 } from "gsap/all";

export function VideosAnimation({ someText }) {
  
  const [post, setPosts] = useState();
  const [post2, setPosts2] = useState();
  const [post3, setPosts3] = useState();

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=ZNIMsvLiComqonCqmFQcbaE4fJLFjf6kGaTojyxa')
       .then((res) => res.json())
       .then((data) => {
        setPosts(data.latest_photos[0].img_src);
      })
       .catch((err) => {
          console.log(err.message);
       });
       fetch('https://api.nasa.gov/planetary/apod?api_key=ZNIMsvLiComqonCqmFQcbaE4fJLFjf6kGaTojyxa')
       .then((res) => res.json())
       .then((data) => {
        setPosts2(data.hdurl);
      })
       .catch((err) => {
          console.log(err.message);
       });
       fetch('https://images-api.nasa.gov/search?q=Nebula&media_type=image')
       .then((res) => res.json())
       .then((data) => {
        setPosts3(data.collection.items[0].links[0].href);
      })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  const videoOneRef = useRef(null);
  const divVideoOneRef = useRef(null);
  const videoTwoRef = useRef(null);
  const divVideoTwoRef = useRef(null);
  const videoThreeRef = useRef(null);
  const divVideoThreeRef = useRef(null);
  const videosRef = useRef(null);
  const isMobile = window.innerWidth <= 900;

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    if (isMobile) {
      gsap.to(divVideoOneRef.current, {
        scrollTrigger: {
          trigger: videosRef.current,
          start: "top+=20% center",
          end: "top+=120% center",
          scrub: true,
        },
        y: "-34vw",
        rotation: 100,
      });
    } else {
      gsap.to(divVideoOneRef.current, {
        scrollTrigger: {
          trigger: videosRef.current,
          start: "top center",
          end: "top+=100% center",
          scrub: true,
        },
        y: "-34vw",
        rotation: 100,
      });
    }
    gsap.from(videoOneRef.current, {
      scrollTrigger: {
        trigger: videosRef.current,
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top+=1px bottom",
      },
      x: "-54vw",
      rotation: 40,
      opacity: 0,
    });


    gsap.from(videoTwoRef.current, {
      scrollTrigger: {
        trigger: videoTwoRef.current,
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top-1px bottom",
      },
      x: "-54vw",
      rotation: 30,
      opacity: 0,
    });

    gsap.to(divVideoTwoRef.current, {
      scrollTrigger: {
        trigger: divVideoThreeRef.current,
        start: "top-=10% center",
        end: "top+=400% center",
        scrub: true,
      },
      y: "-34vw",
      x: "-13vw",
      rotation: -90,
    });

    gsap.from(videoThreeRef.current, {
      scrollTrigger: {
        trigger: videoThreeRef.current,
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top-1px bottom",
      },
      x: "54vw",
      rotation: 70,
      opacity: 0,
    });

    gsap.to(divVideoThreeRef.current, {
      scrollTrigger: {
        trigger: divVideoThreeRef.current,
        start: "top-=10% center",
        end: "top+=300% center",
        scrub: true,
      },
      y: "-24vw",
      x: "4vw",
      rotation: 100,
    });


    gsap.from(".middle-text", {
      scrollTrigger: {
        trigger: ".middle-text",
        toggleActions: "restart none reverse none",
        start: "top-=295% bottom",
        end: "top-=270% bottom",
      },
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: Power4.easeInOut,

    });


    gsap.from(".bottom-text", {
      scrollTrigger: {
        trigger: ".white-wave-top",
        toggleActions: "restart none reverse none",
        start: "top center",
        end: "top center+=10%",
      },
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: Power4.easeOut,
    });


  }, []);

  return (
    <div ref={videosRef} className="videos-animations-container">
      <div ref={divVideoOneRef} className="video-animations-one">

        <img className="video-one-size" ref={videoOneRef} src={post2} />


      </div>

      <div className="bottom-videos-container">
        <div ref={divVideoTwoRef} className="video-animations-two">


          <img className="video-two-size" ref={videoTwoRef} src={post} />

        </div>
        <div ref={divVideoThreeRef} className="video-animations-three" >

          <img className="video-three-size" ref={videoThreeRef} src={post3} />

        </div>
      </div>

    </div>

  )
}
