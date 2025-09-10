const WelcomeMessage = ({onGetPostClick}) =>{
   return (
    <center className="welcome-massage"><h1 > There is no posts</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostClick}>Load Post From Server</button>
    </center>
    
   )
}
export default WelcomeMessage;