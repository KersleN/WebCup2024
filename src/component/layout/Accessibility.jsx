'use client';

import { useState, useEffect } from 'react';
import { FaWheelchair } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function AccessibilityButton() {
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);

  useEffect(() => {
    let voices = [];
    const msg = new SpeechSynthesisUtterance();
    // Change the following line to select a different voice
    msg.voice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'en-GB');

    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      // Change the following line to select a different voice
      msg.voice = voices.find((voice) => voice.lang === 'en-GB');
    };

    const handleClick = (e) => {
      if (isSpeechEnabled) {
        let node = e.target;
        while (node && node.nodeType !== Node.TEXT_NODE) {
          node = node.firstChild;
        }
        if (node) {
          const text = node.textContent;
          msg.text = text;
          speechSynthesis.speak(msg);
          node.parentNode.style.color = "red";
          setTimeout(() => {
            node.parentNode.style.color = "";
          }, 1000);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isSpeechEnabled]);

  function toggleSpeech() {
    setIsSpeechEnabled((prevState) => !prevState);
  }

  return (
    <div className="fixed top-32 left-0 m-4 z-10">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
        id="toggle-speech-button"
        onClick={toggleSpeech}
      >
        <FaWheelchair className="mr-2" />
        {isSpeechEnabled ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
}

export default AccessibilityButton;
