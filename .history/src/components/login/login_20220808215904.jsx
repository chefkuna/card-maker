import React from 'react';

const Login = (props) => {
  return (
    <section>
      <Header/>
        <section>
          <h1>Login</h1>
          <ul>
            <li>
              <button>Google</button>
            </li>
            <li>
              <button>Github</button>
            </li>
          </ul>
        </section>
      <Footer/>
    </section>
  )
};

export default Login;