import React, { useEffect, useState } from "react";
import { ProfileBody, ProfileContainer } from "./ProfileElements";
import auth from "../../services/authService";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = ({ liveUser }) => {
  const [greeting, setGreeting] = useState("welcome");
  const currentHours = new Date().getHours();
  let step = parseInt(currentHours) / 10;

  useEffect(() => {
    switch (step) {
      case 0.9:
        return setGreeting("Lovely Day");
      case 1.0:
        return setGreeting("Lovely Day");
      case 1.1:
        return setGreeting("Lovely Day");
      case 1.2:
        return setGreeting("Good Afternoon");
      case 1.3:
        return setGreeting("Nice Lunch");
      case 1.4:
        return setGreeting("Hope you had Nice Lunch");
      case 1.5:
        return setGreeting("Amazing Afternoon");
      case 1.6:
        return setGreeting("Good Evening");
      case 1.7:
        return setGreeting("Wish you a blessed evening");
      case 1.8:
        return setGreeting("Nice supper");
      case 1.9:
        return setGreeting("Nice Evening");
      case 2.0:
        return setGreeting("Almost Sleep Time");
      case 2.1:
        return setGreeting("Wishing you a good sleep and night");
      case 2.2:
        return setGreeting("Wishing you a good sleep and night");
      case 2.3:
        return setGreeting("Dont be late a good sleep is healthy");
      case 0.0:
        return setGreeting("Early Morning");
      case 0.1:
        return setGreeting("Early Morning");
      case 0.2:
        return setGreeting("Early Morning");
      case 0.3:
        return setGreeting("Early Morning");
      case 0.4:
        return setGreeting("Almost wake up time");
      case 0.5:
        return setGreeting("Good morning");
      case 0.6:
        return setGreeting("Good morning");
      case 0.7:
        return setGreeting("Good morning Healthy breakfast key for the day");
      case 0.8:
        return setGreeting("Good morning and Blessed day ahead");

      default:
        setGreeting("Are you from Mars/Neptune😂 ");
        break;
    }
  }, [step]);

  return (
    <>
      <ProfileContainer>
        <Link
          style={{ position: "absolute", top: "0", left: "0", margin: ".5rem" }}
          to="/"
          className="btn btn-info"
        >
          Home
        </Link>
        <ProfileBody>
          <h6 className="head6">
            Your id is : {auth.getCurrentUser()._id.substring(0, 10)}
          </h6>
          <h6
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              fontStyle: "italic",
              color: "blue",
              letterSpacing: "3px",
              textShadow: "0 0 100px red",
            }}
          >
            {liveUser.isAccept ? (
              <p>
                Congratulations {auth.getCurrentUser().name} its great to have
                you
              </p>
            ) : (
              <p>
                Dear,
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {auth.getCurrentUser().name}
                </span>
                Thank You so much for your participation Come back later and
                join class if you receive a notification
              </p>
            )}
          </h6>

          {liveUser.isAccept && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://t.me/+FED72yazM5MxNDU8"
                className="btn btn-info m-2"
              >
                Click to Join <FaTelegram />
              </a>
              <a
                href="https://chat.whatsapp.com/L0OuZs6kLHREiZax0kgOiq"
                className="btn btn-success"
              >
                Click to Join <FaWhatsapp />
              </a>
            </div>
          )}
          <h6 style={{ fontStyle: "italic" }}>{greeting}</h6>
        </ProfileBody>
      </ProfileContainer>
    </>
  );
};

export default Profile;
