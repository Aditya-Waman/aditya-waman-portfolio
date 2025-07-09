import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

const TypewriterEffect = ({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setCurrentText(currentWord.substring(0, currentText.length + 1));

          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), delaySpeed);
          }
        } else {
          // Deleting
          setCurrentText(currentWord.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect;
