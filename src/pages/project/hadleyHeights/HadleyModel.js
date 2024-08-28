import React from "react";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

import "../projectPage.css";
import "./hadleyHeights.css";
import "./exterior.css";
import ProjectBottomBar from "../../../components/projectBottomBar/ProjectBottomBar";
import LeftSidebar from "../../../components/leftsidebar/LeftSidebar";

import Logo from "../../../assets/images/logo.png";

import { Link } from "react-router-dom";

function Model(props) {
  const { scene } = useGLTF("/Hadley-Hight-I.glb");
  return <primitive object={scene} {...props} />;
}

const HadleyModel = () => {
  return (
    <section className="">
      <div className="row">
        <div className="col">
          <div className="main-mini-heading-section">
            <Link to="/">
              <h1 className="mt-4 mb-2 page-heading-title">Hadley Heights</h1>
            </Link>
            <Link to="/">
              <img
                src={Logo}
                alt="Leos International"
                width={130}
                height={40}
                className="mt-3 mb-3"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="container mode-section-page">
        <div className="row">
          <div className="col">
            <div className="containing-model">
              <Canvas
                dpr={[1, 2]}
                shadows
                // snap
                camera={{ fov: 45 }}
                style={{ position: "absolute" }}
              >
                <color attach="background" args={["#101010"]} />
                <ambientLight />

                <PresentationControls
                  speed={1.5}
                  global
                  cursor={true}
                  zoom={0.5}
                  config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
                  polar={[-0.1, Math.PI / 2]}
                >
                  <Stage environment={"sunset"}>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      <LeftSidebar />
      <ProjectBottomBar />
    </section>
  );
};

export default HadleyModel;
