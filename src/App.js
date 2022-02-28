import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import LoginForm from "./registerForm/Forms/LoginForm";
import UserForm from "./registerForm/UserForm";
import Logout from "./registerForm/Forms/LogoutForm";
import Html from "./component/webPages/Html";
import Javascript from "./component/webPages/Javascript";
import Reacti from "./component/webPages/React";
import ReactNative from "./component/webPages/ReactNative";
import Git from "./component/webPages/Git";
import MongoDb from "./component/webPages/MongoDb";
import NodeJs from "./component/webPages/NodeJs";
import Express from "./component/webPages/Express";
import Profile from "./component/Profile/Profile";
import Success from "./registerForm/Success";
import { ToastContainer, toast } from "react-toastify";
import Deadline from "./registerForm/Deadline";
import Users from "./component/ManageUsers/Users";
import authService, {
  deleteUser,
  getCurrentUser as User,
  getUsers,
} from "./services/authService";
import ErrorPage from "./component/webPages/ErrorPage";
import UserInfo from "./component/ManageUsers/UserInfo";

export default class App extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    users: [
      {
        _id: (new Date().getMinutes() * 10).toString(),
        name: "Star Mikahaya",
        isAccept: false,
      },
      {
        _id: (new Date().getMinutes() * 40).toString(),
        name: "Seerar",
        isAccept: true,
      },
    ],
    liveUser: {},
  };

  timer = () => {
    let deadline = new Date("Mar 11,2022 00:00:00").getTime();
    let currentTime = new Date().getTime();
    let duration = deadline - currentTime;
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(duration % (1000 * 60 * 60));

    this.setState({ days, hours, minutes, seconds });
  };

  setIntervals() {
    const interval = setInterval(() => {
      this.timer();
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }

  async populateUsers() {
    try {
      const { data: users } = await getUsers();
      const jwtUser = User() || null;
      if (!jwtUser) {
        return null;
      } else {
        const onlineUser = users.find((user) => user._id === jwtUser._id);
        this.setState({ users: users, liveUser: onlineUser });
      }
    } catch (error) {
      toast.error("An unexpected Error Occured");
    }
  }

  componentDidMount() {
    this.populateUsers();
    this.setIntervals();
  }

  // delete user
  handleDelete = async (id) => {
    const originalUsers = this.state.users;
    try {
      const users = originalUsers.filter((user) => user._id !== id);
      this.setState({ users });
      await deleteUser(id);
    } catch (error) {
      if (error) {
        toast.error("This User does not exist anymore!!");
        this.setState({ users: originalUsers });
      }
    }
  };

  render() {
    const { days, hours, minutes, seconds, users, liveUser } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                liveUser={liveUser}
              />
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="/signin" element={<LoginForm seconds={seconds} />} />
          <Route path="/signout" element={<Logout />} />
          <Route path="/profile" element={<Profile liveUser={liveUser} />} />
          <Route path="/users/user/:id" element={<UserInfo users={users} />} />

          {liveUser.isAdmin && (
            <Route
              path="/users"
              element={<Users users={users} onDelete={this.handleDelete} />}
            />
          )}

          {!authService.getCurrentUser() && (
            <Route
              path="/register"
              exact
              element={seconds > 0 ? <UserForm /> : null}
            />
          )}

          <Route path="/deadline" element={<Deadline />} />
          <Route path="/html" element={<Html />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/react" element={<Reacti />} />
          <Route path="/native" element={<ReactNative />} />
          <Route path="/git" element={<Git />} />
          <Route path="/nodejs" element={<NodeJs />} />
          <Route path="/express" element={<Express />} />
          <Route path="/mongodb" element={<MongoDb />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </React.Fragment>
    );
  }
}
