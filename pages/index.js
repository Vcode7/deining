import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Review from "./components/Review";


export default function Home() {
  return (
    <div>
     <Main />
     <hr className="my-20"/>
     <About />
     <Menu />
     <Review />
     <hr className="bg-white my-10"/>
     <Contact />
    </div>
  )
}
