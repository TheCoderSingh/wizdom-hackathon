import "../css/find.scss";
import Layout from "../components/Layout";

import TinderCard from "react-tinder-card";
import { createRef, useEffect, useMemo, useRef, useState } from "react";

import { config } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearSession } from "../redux/actions/UserAction";
import Footer from "../components/Footer";

const endpoint = config.url;

const Find = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const response = await fetch(endpoint + "/api/v1/users/fetch-users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data.users);
      } else {
        const data = await response.json();
        console.error("Fetching users failed:", data);
      }
    } catch (error) {
      console.error("Error during fetching users:", error);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");

    getUsers();
  }, [isLoggedIn, navigate]);

  const [currentIndex, setCurrentIndex] = useState(users.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => createRef()),
    [users.length]
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

  const canGoBack = currentIndex < users.length - 1;

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < users.length) {
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
    <Layout title="Find">
      {/* <Link onClick={async () => dispatch(clearSession())}> Logout </Link> */}
      <div style={{ marginLeft: "-8px", marginRight: "-8px" }}>
        <div className="cardContainer">
          {users.map((character, index) => (
            <TinderCard
              key={character.name}
              ref={childRefs[index]}
              className="swipe"
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{ backgroundImage: "url(" + character.image + ")" }}
                className="card"
              />
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
                  <h3>{character.name}</h3>
                  <p>Project Manager</p>
                  <p>Looking to get better at html, css</p>
                </div>
              )}
            </TinderCard>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Find;
