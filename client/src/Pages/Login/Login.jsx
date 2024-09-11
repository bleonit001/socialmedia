import "./login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello WORLD.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolores quibusdam consequatur possimus quaerat maxime, voluptatibus dolore tempore assumenda, saepe inventore a magnam harum. Quo, fugit architecto? Libero, et praesentium?</p>
       
        <span>Don't you have an account?</span>

        <button>Register</button>
        </div>
          <div className="right">
            <h1>Log In</h1>
            <form> 
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button>Log In</button>
            </form>
          </div>
        </div>
      </div>
   
  )
}
export default Login