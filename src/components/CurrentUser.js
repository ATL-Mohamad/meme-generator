
export default function CurrentUser(props){

  return(
    <div className="current-user-container">
      <h4>Signed in as: <i>{props.userInformation.username}</i></h4>
    </div>
  )

}