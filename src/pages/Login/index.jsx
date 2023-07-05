import React, { useState } from "react";
import { toast } from "react-toastify";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidUserCircle } from 'react-icons/bi'
import perfil from "../../assets/img-login.svg";
import emailIcon from "../../assets/ic_outline-email.png";
import passw from "../../assets/material-symbols_lock-outline.png";



const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password == "") {
      toast.error(
        'Invalid inputs'
      )
    }
  };

  return (
    <C.Container>
      <C.Content>


      <BiSolidUserCircle size={120} />

        <C.ContentW>
          <C.Label>WELCOME</C.Label>
        </C.ContentW>

        <C.Form action="" onSubmit={e => handleLogin(e)}>


          <C.email>
            <C.labelOne>E-mail</C.labelOne>
            <C.InputGroup>
            <C.Input
              type="email"
              value={email}
              onChange={(e) => [setEmail(e.target.value)]}
            />
             <img src={emailIcon} className="iconImageEmail" draggable="false"/>
            </C.InputGroup>
          </C.email>


          <C.password>
            <C.labelOne>Password</C.labelOne>
            <C.InputGroup>
              <C.Input
                type="password"
                value={password}
                onChange={(e) => [setSenha(e.target.value)]}
              />
              <img src={passw} className="iconImagePass" draggable="false"/>
            </C.InputGroup>
          </C.password>

          <C.Button>LOGIN</C.Button>

        </C.Form>
      </C.Content>
    </C.Container>
  );
};

export default Signin;