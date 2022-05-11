import React from "react";
import "../style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faCalendar,
  faMap,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function RandomUser(props) {
  let fullName =
    props.user.name.title +
    " " +
    props.user.name.first +
    " " +
    props.user.name.last;
  return (
    <React.Fragment>
      <div className="card container">
        <div className="img">
          <img
            className="width"
            src={props.user.picture.large}
            alt={props.user.cell}
          />
        </div>
        <p>{fullName}</p>
        <div>
          <h4>{props.getValue}</h4>
        </div>
        <ul className="flex">
          <li>
            <a
              onClick={() => props.randomUser("user")}
              //   className="fas fa-user"
            >
              <FontAwesomeIcon className="icon" icon={faUser} />
            </a>
          </li>
          <li>
            <a
              onClick={() => props.randomUser("email")}
              //   className="fas fa-envelope"
            >
              {" "}
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a
              onClick={() => props.randomUser("age")}
              //   className="fab fa-magento"
            >
              <FontAwesomeIcon className="icon" icon={faCalendar} />
            </a>
          </li>
          <li>
            <a
              onClick={() => props.randomUser("address")}
              //   className="fas fa-map"
            >
              <FontAwesomeIcon className="icon" icon={faMap} />
            </a>
          </li>
          <li>
            <a
              onClick={() => props.randomUser("phone")}
              //   className="fas fa-phone"
            >
              {" "}
              <FontAwesomeIcon className="icon" icon={faPhone} />
            </a>
          </li>
          <li>
            <a
              onClick={() => props.randomUser("password")}
              //   className="fas fa-lock"
            >
              <FontAwesomeIcon className="icon" icon={faLock} />
            </a>
          </li>
        </ul>
        <div>
          <button onClick={props.getRandom}>Random User</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default RandomUser;
