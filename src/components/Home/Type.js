import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';



function Type() {
  return (
    // <Typewriter
    //   options={{
    //     strings: [
    //       "Developer",
    //       "Deep Learning Engineer",
    //       "MERN Stack Developer",
    //       "Open Source Contributor",
    //     ],
    //     autoStart: true,
    //     loop: true,
    //     deleteSpeed: 50,
    //   }}
    // />
    <TypeWriterEffect
    // textStyle={{ fontFamily: 'Red Hat Display' }}
    startDelay={100}
    cursorColor="red"
    multiText={[
      'A designer knows he has achieved perfection ',
      'not when there is nothing left to add',
      ', but when there is nothing left to take away',
    ]}
    typeSpeed={100}
    multiTextLoop={true}
  />
  );
}

export default Type;
