import { TypeAnimation } from 'react-type-animation';

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        'D',
        100,
        'Dr',
        100,
        'Dre',
        100,
        'Drea',
        100,
        'Dream',
        100,
        'DreamA',
        100,
        'DreamAI',
        500,
        'DreamAI',
        500,
        'DreamAI',
        500,
        'DreamAI',
        500,
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{
        marginLeft: '5px',
        fontSize: '1em',
        textAlign: 'left',
        color: "#84ffff",
        fontWeight: 'bold',
        display: 'inline-block',
        width: '38.5%',
      }}
      repeat={Infinity}
    />
  );
}

export default Typing;