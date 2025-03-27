import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const resp = await signInWithGooglePopup();
    console.log(resp)
  }


  return (
    <div>
      <h1>I am the sign in page!</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup!</button>
    </div>
  )
}

export default SignIn