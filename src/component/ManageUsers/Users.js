import React, { Component } from "react";
import {
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaRegTrashAlt,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/fa";
import { InfoContainer, InfoWrapper } from "./UsersElements";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
class Users extends Component {
  // handle Reject
  handleReject = (user) => {
    authService.rejectUser(user);
    toast("Rejected " + user.name);
  };

  // handle Accept
  handleAccept = (user) => {
    authService.acceptUser(user);
    toast("Accepted " + user.name);
  };

  render() {
    return (
      <>
        <InfoContainer>
          <Link
            style={{ position: "absolute", top: "1rem", left: "1rem" }}
            to="/"
            className="btn btn-secondary"
          >
            HOME
          </Link>
          <h6
            style={{ position: "absolute", right: "2rem", top: "2rem" }}
            className="badge badge-pill badge-warning"
          >
            {this.props.users.length}
          </h6>
          <InfoWrapper className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>STATE</th>
                <th>ACCEPT</th>
                <th>REJECT</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <Link to={`user/${user._id}`}>{user.name}</Link>
                  </td>
                  <td>{user._id.substring(0, 10)}</td>
                  <td>
                    {user.isAccept ? (
                      <FaRegCheckCircle />
                    ) : (
                      <FaRegTimesCircle />
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleAccept(user)}
                      className="btn btn-warning btn-sm"
                    >
                      Accept <FaUserCheck />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleReject(user)}
                      className="btn btn-danger btn-sm"
                    >
                      Reject <FaUserTimes />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.onDelete(user._id)}
                      className="btn btn-danger btn-sm"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
}

export default Users;
