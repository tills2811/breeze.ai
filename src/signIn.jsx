import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import App from './App';
import { auth, provider } from './config.jsx';

function SignIn() {
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem("email"));
    })
    return (
        <div>
            {value ? <App /> :
                <button onClick={handleClick}>Signin with Google</button>
            }
        </div>
    )
}

export default SignIn;