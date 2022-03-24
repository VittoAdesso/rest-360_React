import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { UserContext } from "src/context/UserContext";

const LoginForm = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [iniciadaSesion, setIniciadaSesion] = useState(false)

  const { setUsuario } = useContext(UserContext);
  const { state } = useLocation();


  let handleSubmit = async (e) => {
    e.preventDefault();
    props.loginUser(state ? state.prevRoute : null);

    try {
      let response = await fetch("http://localhost:3001/api/users/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let responseJson = await response.json();
      
      if (response.status === 200) {
        setMessage("Sesión iniciada");
        localStorage.setItem("jwtToken", responseJson.token);
        console.log("RESPONSE -->",response);
        console.log("RESPONSE JSON -->",responseJson);
        setUsuario(responseJson.user);
        localStorage.setItem("user", JSON.stringify(responseJson.user));
        
        setIniciadaSesion(true);
      } else {
        setMessage("Correo electrónico o contraseña incorrectos");
      }
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {
  if (iniciadaSesion === true){ navigate('/socios')}
}, [iniciadaSesion, navigate])


  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="email"
          placeholder="Email *"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña *"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <div>
        <button className="standardButton" type="submit">
          Iniciar Sesión
        </button>
      </div>

      {message && <div style={{ color: "tomato" }}>{message}</div>}
    </form>
  );
};

export default LoginForm;
