import { Fragment, useState } from "react";

import classes from './Header.module.css';
import headerImg from '../../assets/headerImg.jpeg';
import HeaderCartButton from "./HeaderCartButton";
import { BsPersonCircle } from "react-icons/bs";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../Firebase";

const Header = props => {
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);

    let url;
    if (user) {
        url = auth.currentUser.photoURL;
        props.setUser(user);
    }

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        setShow(false);
    }

    const signOut = () => {
        auth.signOut();
        props.setUser(null);
        window.location.reload();
    }
    console.log(user?.displayName);

    return <Fragment>
        <header className={classes.header}>
            <h1>Book Attic</h1>
            <div className={classes.container}>
                {user && <HeaderCartButton onClick={props.onShowCart} />}
                    {user ? (<div className={classes.user} onClick={() => setShow(!show)}>
                        <img src={url} className={classes.img} alt="User" />
                        {!show && <span className={classes.rotate}>&#62;</span>}
                        {show && <span className={classes.rotate}>&#60;</span>}
                    </div>)
                        : (<button className={classes.signInBtn} onClick={signInWithGoogle}>
                            <BsPersonCircle className={classes.btn} />
                            <span className={classes.txt}>Sign in</span>
                        </button>)}
                    {user && show && <span className={classes.signout} onClick={signOut}>Sign out</span>}
            </div>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImg} alt=""></img>
        </div>
    </Fragment>
};

export default Header;