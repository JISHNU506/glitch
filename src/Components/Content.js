import React from "react";
import "./Style.css";

import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("/ironman.glb");
  return <primitive object={scene} {...props} />;
}
export default function Content() {
  return (
    <>
      <div className="container-wrapper">
        <div className="container">
          <div className="sidebar">
            <div className="mark-container">
              <div className="mark">
                <div className="home">
                  <i class="bx bxs-home"></i>
                </div>
                <div className="edit">
                  <i class="bx bxs-edit"></i>
                </div>
              </div>
              <div className="header">
                {" "}
                <h3 id="header">
                  Select Your Avatar <br />
                  <span>
                    your agent represents your identity in this platform
                  </span>
                </h3>
              </div>
            </div>
            <div className="image">
              <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <color attach="background" args={["#101010"]} />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.5}
                  polar={[-0.1, Math.PI / 4]}
                >
                  <Stage environment={null}>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>
          </div>
          <div className="content">
            <div className="items">
            <div className="content-header">
              <h2>iron man - clsssic</h2>
              <span>
                iron man is a 2008 american superhero filim based on the <br />
                marvvel comics charecter of the same name
              </span>

              <h3>perks</h3>
              <span>perks are unique to each agent</span>
              <div className="buttons">
                <button className="perks">flight</button>
                <button className="perks">red</button>
                <button className="perks">strong</button>
              </div>
              <h3>perks</h3>
              <span>
                after being held captive in an afgan cave.billionaire engineer
                tony stark creates a unique weponized suit of armor to fight
                evil .after being held captive
              </span>
              <br />
              <br />
              <button className="agent">select this agent</button>
            </div>
            <div className="images" id="images">
            <div className="header">
                {" "}
                <h3 id="header">
                  Agents <br />
                  <span>
                    You have unlocked 3 agents
                  </span>
                </h3>
              </div>
                <img src="https://i.pinimg.com/originals/1b/c3/cf/1bc3cfcd8c7b7acafe07060c447a4650.jpg" alt="" />
                <img src="https://i.pinimg.com/736x/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYNMu_ew5ZltmXgP6r4H19ZwI4SUqy3GhI3Tv6mWp5Aah7cn1uL_BLPBlKhl_Fup-s-c&usqp=CAU" alt="" />
            </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
