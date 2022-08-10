 import React from "react";
 const Login=(props)=>{
    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError}=props;
    return(
        <section className="hq">
            <div>
                <label>
                    username:
                </label>
                <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p>{emailError}</p>
                <label>
                    password:
                </label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <p>{passwordError} </p>
                <div>
                    {hasAccount? (
                        <>
                        <button onClick={handleLogin}>signIn</button>
                        <p>
                            Dont have an account?
                        </p>
                        <span onClick={()=> setHasAccount(!hasAccount)}>
                            signIn
                        </span>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>signup</button>
                        <p>
                            Have an account?
                        </p>
                        <span onClick={()=>setHasAccount(!hasAccount)}></span>
                        </>
                    )}
                </div>
            </div>

        </section>
    )
 }
 export default Login;