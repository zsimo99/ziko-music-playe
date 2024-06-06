import { Container } from "react-bootstrap"
import arrow from "../images/Expand_left.svg"
import video from "../images/Video.svg"
import { useState } from "react"

const videos =[
    {
        title : "Lorem, ipsum dolor.1",
        url:"https://youtu.be/c-ptvXgUfdg?si=v6WCakpNZ-Tml87a",
        id:1
    },
    {
        title : "Lorem, ipsum dolor.2",
        url:"https://youtu.be/ly36kn0ug4k?si=og8cv0ft_IcZLtt6",
        id:2
    },
    {
        title : "Lorem, ipsum dolor.3",
        url:"https://youtu.be/UPNkOwabRDY?si=Lg28gFylvyDC6ehf",
        id:3
    }
]


const Videos=()=>{
    const [counter,setCounter]=useState(0);
    const [clicked,setClicked]=useState(false);
    const getVideo=(url)=>{
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(regex);
            return match ? match[1] : null;
    }
    const changeVideo =(elm)=>{
        setCounter(elm.id-1)
        setClicked(false)
    }
    return(
        <div className="cont">
            <Container>
            <div className="main">
                <div className="videoCon">
                    <h1 className="textHeader">text header</h1>
                    <div className="vide">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${getVideo(videos[counter].url)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <h3 className="about">about</h3>
                    <p className="aboutText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sapiente distinctio praesentium nulla excepturi quis tenetur reprehenderit veritatis provident molestiae. Nam, consectetur? Minima, magnam officia. Magnam dignissimos perspiciatis saepe suscipit!</p>
                </div>
                <div className="contentCont">
                    <span onClick={()=>setClicked(!clicked)} className={`iconS ${!clicked?"clicked":"clickedN"}`}><img src={arrow} alt="" /></span>
                    <ul className={`slide ${!clicked ? "clicked" : ""}`}>
                        <h4 className="listTitle">My List</h4>
                        {videos.map((elm)=><li onClick={()=>changeVideo(elm)} key={elm.id}>{elm.title} {counter+1==(elm.id) && <img src={video} alt="" />}</li>)}
                    </ul>
                </div>
            </div>
        </Container>
        </div>
    )
}
export default Videos