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
      'Hey there, This is a type writer animation package',
      'it consist of two types...',
      'Single text display and multi text display',
      'Fonts can be customized.',
      'The type speed can be customized as well',
    ]}
    typeSpeed={100}
    multiTextLoop={true}
  />
  );
}

export default Type;
