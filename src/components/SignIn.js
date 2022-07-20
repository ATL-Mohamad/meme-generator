
export default function SignIn(props){

  function inputValue(event){
    event.preventDefault()
    props.handleSubmit(event.target.username.value, event.target.password.value)
  }

  return(
    <div>
      <form className="sign-in-page" onSubmit={inputValue}>
        <div className="username-section">
          <label htmlFor='username'>Enter Your Username</label>
          <input 
          type='text' 
          name="username"
          placeholder="Username"
          required
        />
        </div>
        <div className="password-section">
          <label htmlFor='password'>Enter Your password </label>
          <input 
          type='password' 
          name="password" 
          placeholder="Password"
          required
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}