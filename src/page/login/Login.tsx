import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";
// import { createBrowserHistory } from "history";

interface IProps {}

/*
 * @def : Login
 * @param
 * - :
 * - :
 */
function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const history = useHistory();

  const DUMMY_ID = "host";
  const DUMMY_PW = "qwer1234";
  // const history = createBrowserHistory({ basename: "http://localhost:3000" });

  // 로그인 폼 전송
  const onSubmitLogin = () => {
    console.log(id);
    console.log(pw);
    if (id.length < 3 || pw.length < 3) return alert("test");

    if (DUMMY_ID === id && DUMMY_PW === pw) history.push("/");
  };

  return (
    <section className="center login__page">
      <section className="d-flex flex-column login__form">
        <input
          defaultValue={id}
          onChange={(e: any) => setId(e.target.value)}
          type="text"
          className="form-control mb-3"
          placeholder="아이디"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <input
          defaultValue={pw}
          onChange={(e: any) => setPw(e.target.value)}
          type="text"
          className="form-control mb-5"
          placeholder="패스워드"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <button
          className="btn btn-primary"
          type="button"
          onClick={onSubmitLogin}
        >
          로그인
        </button>
      </section>
    </section>
  );
}

export default Login;
