import "./portfolio.css";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

const ListItem = ({item})=>{
  return (
    <div className="pItem" >
      <div className="pImg">
        <img src={item.img} alt=""  />
      </div>
      <div className="pText">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
}


const Portfolio = () => {
  const ref = useRef(null)
  const [containerDistance,setContainerDistance] = useState(0)
  
  useEffect(()=>{
    if(ref.current){
      const rect = ref.current.getBoundingClientRect()
      setContainerDistance(rect.left)
    }
  },[])

  const {scrollYProgress} = useScroll({target: ref})
  const xTranslate = useTransform(
    scrollYProgress, 
    [0,1], 
    [0, -window.innerWidth * items.length])
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{x:xTranslate}}>
        <div className="empyt" style={{width:window.innerWidth - containerDistance}}/>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </motion.div>
      <section/>
      <section/>
      <section/>
      <section/>
      <section/>
    </div>

  );
};

export default Portfolio;
