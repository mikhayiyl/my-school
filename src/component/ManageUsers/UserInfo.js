import React, { useEffect, useState } from "react";
import { InfoContainer, InfoWrapper } from "./UsersElements";
import { Link, useParams } from "react-router-dom";
import config from "../../config.json";
const url = config.ApiUrl + "/users";
const UserInfo = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(url);
      const users = await res.json();
      const user = users.find((usr) => usr._id === id);
      setUser(user);
    };

    getUsers();
  }, [id]);

  if (!user)
    return (
      <h1
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          paddingTop: "50vh",
        }}
      >
        Loading...
      </h1>
    );

  return (
    <>
      <InfoContainer style={{ height: "100vh" }}>
        <Link
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
          to="/users"
          className="btn btn-primary"
        >
          Back
        </Link>
        <InfoWrapper className="table">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">NAME</th>
              <th scope="row">{user.name}</th>
            </tr>
            <tr>
              <th scope="row">EMAIL</th>
              <th scope="row">{user.email}</th>
            </tr>
            <tr>
              <th scope="row">OCCUPATION</th>
              <th scope="row">{user.occupation}</th>
            </tr>
            <tr>
              <th scope="row">CITY</th>
              <th scope="row">{user.city}</th>
            </tr>
            <tr>
              <th scope="row">AGE</th>
              <th scope="row">{user.age}</th>
            </tr>
            <tr>
              <th scope="row">PHONE</th>
              <th scope="row">{user.phone}</th>
            </tr>
            <tr>
              <th scope="row">LANGUAGE</th>
              <th scope="row">{user.language}</th>
            </tr>
            <tr>
              <th scope="row">EXPERIENCE</th>
              <th scope="row">{user.experience}</th>
            </tr>
            <tr>
              <th scope="row">LIST </th>
              <th scope="row">{user.list}</th>
            </tr>
          </tbody>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default UserInfo;
