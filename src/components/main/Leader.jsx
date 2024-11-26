import React from "react";
import '../../scss/components/Leader.scss'
import imageInteractive from '../../assets/mobile/image-interactive.jpg'

function Leader() {
  return (
    <section className="content__leader">
      <img src={imageInteractive} alt="image-interactive" />
      <h2>The Leader in interactive vr</h2>
      <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
    </section>
  );
};

export { Leader };