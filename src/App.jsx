import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav"
import Posts from "./components/Posts";
import Modal from './components/Modal'
import { GoPencil } from "react-icons/go";
import './App.css'
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [signIn, setSign] = useState(false)
  const [modal, setModal] = useState(false);
console.log(modal)
  return (
    <div className="overflow- relative font-plex mb-10">
      <div className="hidden md:block" >
        <Nav setModal={setModal} signIn={signIn} setSign={setSign} />
      </div>
      <Hero setModal={setModal} signIn={signIn} />
      <Posts signIn={signIn} />

      <GoPencil
        size={50}
        onClick={() => setModal((prev) => !prev)}
        className="pencil fixed bottom-10 right-5 lg:hidden block text-white p-3 rounded-full"
      />

      {!signIn ? (
        <div
          className={`${
            modal ? "flex" : "hidden"
          }  top-0 items-end md:items-center w-[100vw] h-[100vh] fixed justify-center`}
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <Modal
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setModal={setModal}
            signIn={signIn}
            setSign={setSign}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;