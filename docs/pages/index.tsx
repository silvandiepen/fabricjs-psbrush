import { useMemo, useRef, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";

const basePath = process.env.BASE_PATH.replace(/\/$/, "");

const Index: NextPage = () => {

  // create a canvas element that never gets reloaded
  const ref = useRef<HTMLCanvasElement>();
  const canvas = useMemo(() => <canvas ref={ref} width="720" height="480" />, []);

  // call window.initialize defined in index.js
  useEffect(() => {
    if (!ref.current || typeof window ==="undefined") {
      return;
    }
    window["initialize"](ref.current);
  }, [ref.current]);

  return (<>
    <Head>
      <title key="title">fabricjs-psbrush | A lightweight pressure-sensitive brush implementation for Fabric.js</title>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.4/dist/semantic.min.css"></link>
    </Head>
    <style jsx>{`
      :global(html, body) {
        background: #eee;
      }
      div.hero {
        padding: 3em 0;
      }
      div.main.content {
        background: #fff;
        padding: 2em 0 0 0;
      }
      div.canvas {
        background: #f5f5f5;
        margin: 2em auto 0 auto;
        padding: 2em 0;
        text-align: center;
        overflow-x: hidden;
      }
      div.canvas :global(.canvas-container) {
        margin: auto;
        border: 1px solid #eee;
        background: #fff;
      }
      footer {
        padding: 2em 0;
      }
    `}</style>
    <div className="hero">
      <div className="ui container">
        <h1 className="ui header">
          fabricjs-psbrush
        </h1>
      </div>
    </div>
    <div className="main content">
      <div className="ui container">
        <p>We're working on documentations -- stay tuned!</p>
        <p>For now, please refer to <a href="https://arch-inc.github.io/fabricjs-psbrush/index.js">the code</a> to see the minimal working example of <code>PSBrush</code>.</p>
      </div>
      <div className="canvas">{canvas}</div>
    </div>
    <footer>
      <div className="ui container">
        <div className="ui horizontal divided list">
          <div className="item">
            &copy; <a href="//research.archinc.jp">Arch Inc.</a> 2020
          </div>
          <div className="item">
            <a href="https://github.com/arch-inc/fabricjs-psbrush"><i className="github icon" /> arch-inc/fabricjs-psbrush</a>
          </div>
        </div>
      </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-psbrush@0.0.12/dist/index.js"></script>
    <script src={`${basePath}/index.js`}></script>
  </>);
}

export default Index;
