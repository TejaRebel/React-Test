import "./App.css"
import data from "./data";
import { useState } from "react";

let imageDetails1 = {
  imgUrl : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  imgLink : "https://pixabay.com/images/search/nature/",
  imgAlt : "Tree Image",
  imageTitle : "Tree",
  imageLinktarget : "_blank"
}

let imageDetails2 = {
  imgUrl  : "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  imgLink : "https://www.freepik.com/free-photos-vectors/beautiful-background",
  imgAlt : "Mountains Image",
  imageTitle : "Snow Mountains",
  imageLinktarget : "_blank"
}

const App = () => {
  return (
 <section >
    <main className="testing">
    <Image1 />
    <Image2 />
    <Image2 />
    <Image1 />

    </main>
    <TestingEventHandling />

    <Comments />
 </section>
  );
} ;

const Image1 = () => {
  const styles = {
    width:"400px",
    height:"300px",
  }
  return (
     <section className="images">
      <img style={styles} src={imageDetails1.imgUrl} alt={imageDetails1.imgAlt} /> <br />
      <h1 className="imageTitle">{imageDetails1.imageTitle}</h1>
      <a href={imageDetails1.imgLink} target={imageDetails1.imageLinktarget} >
      <button className="btn">Image Details</button>
      </a>
     </section>
  )
}

const Image2 = () => {
  const styles = {
    width:"400px",
    height:"300px",
  }
  return (
     <section className="images">
      <img style={styles} src={imageDetails2.imgUrl} alt={imageDetails2.imgAlt} /> <br />
      <h1 className="imageTitle">{imageDetails2.imageTitle}</h1>   
      <a href={imageDetails2.imgLink} target={imageDetails2.imageLinktarget} >
      <button className="btn">Image Details</button>
      </a>
     </section>
  )
}


const Comments = () => {
  return (
    <main className="comments">
      {data.map((eachComment) => {
        const {id , name , body , email} = eachComment;
        return (
          <main key={id} className="comments-container">
          <h1 className="comment-title">{name}</h1>
          <h3 className="email">{email}</h3>
          <p className="body">{body}</p>
          </main>
        )
      })}
    </main>
  )
}


const TestingEventHandling = () => {
  const [isOn, setIsOn] = useState(false);
  const [h1Color, setH1Color] = useState('black');

  const toggleColor = () => {
    setIsOn(!isOn);
    setH1Color(isOn ? 'black' : 'red');
  };
  const styles = {
   margin:"2rem 5rem"
  }
  return (
    <main style={styles}>
      <h1 style={{ color: h1Color }}>Click on the button to toggle text color</h1>
      <button onClick={toggleColor}>{isOn ? 'to black' : 'to red'}</button>
    </main>
  );
};

export default Pratice1;