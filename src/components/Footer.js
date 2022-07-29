
export default function Footer(props){
  return(
    <div className="footer" onClick={() => props.handleClick('info')}>
      <div>About Me</div>
      <div>Description</div>
      <div>Check List</div>
    </div>
  )
}