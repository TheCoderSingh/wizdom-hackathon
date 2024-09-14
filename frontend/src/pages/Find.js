import "../css/find.scss";

import TinderCard from "react-tinder-card";
import Erlich from "../assets/erlich.jpg";
import Richard from "../assets/richard.jpg";
import { createRef, useMemo, useRef, useState } from "react";

const Find = () => {
  const db = [
    {
      name: "Richard Hendricks",
      url: Richard,
    },
    {
      name: "Erlich Bachman",
      url: Erlich,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => createRef()),
    [db.length]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = (direction, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const canSwipe = currentIndex >= 0;

  const canGoBack = currentIndex < db.length - 1;

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  return (
    <div style={{ marginLeft: "-8px", marginRight: "-8px" }}>
      <div className="cardContainer">
        {db.map((character, index) => (
          <TinderCard
            key={character.name}
            ref={childRefs[index]}
            className="swipe"
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            />
            <h3>{character.name}</h3>
            <div className="buttons">
              <button
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() => swipe("left")}
              >
                Swipe left!
              </button>
              {/* <button style={{ backgroundColor: !canGoBack && "#c3c4d3" }}>
                Undo swipe!
              </button> */}
              <button
                style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
                onClick={() => swipe("right")}
              >
                Swipe right!
              </button>
            </div>
            {lastDirection ? (
              <h2 key={lastDirection} className="infoText">
                You swiped {lastDirection}
              </h2>
            ) : (
              <div className="infoText">
                <p>Looking for mentees</p>
                <p>Looking to get better at html, css</p>
                <p>Skills: HTML, CSS, Adobe Photoshop</p>
              </div>
            )}
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Find;
