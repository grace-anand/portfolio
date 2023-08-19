import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import "./about-me.scss"

const AboutMe = () => {
  const aboutMe = `
      I am a full-stack web developer with a passion for learning and creating.
      I have a background in the arts and education, and I am excited to bring 
      my creativity and problem-solving skills to the world of web development.
      I am a team player who is always looking for ways to improve my skills and help others.
      I am currently looking for a full-time position as a web developer.
    `
  const [lettersRef, setLettersRef] = useArrayref()
  
  function useArrayref() {
    const lettersRef = useRef<HTMLSpanElement[]>([])
    lettersRef.current = []
    const setLettersRef = (ref: HTMLSpanElement) => {
      ref && lettersRef.current.push(ref)
    }
    return [lettersRef, setLettersRef]
  }

  const triggerRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(() => {
    const reveal = gsap.to(
      lettersRef?.current,
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
        color: "green",
        duration: 5,
        stagger: 1,
      }
    )
    return () => {
      reveal.kill()
    }
  }, [lettersRef])
  

  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">About Me</h2>
        <p className="about-me__text" ref={triggerRef}>
          {
            aboutMe.split("").map((letter, index) => {
              return <span key={index} className="about-me__text-letter" ref={setLettersRef}>{letter}</span>
            })
          }
        </p>
      </div>
    </section>
  )
}

export default AboutMe