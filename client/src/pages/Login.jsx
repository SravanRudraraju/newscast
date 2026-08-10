import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
   const handleSuccess = async (credentialResponse) => {
    try {
        const response = await fetch(
            "http://localhost:3000/api/auth/google",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    credential: credentialResponse.credential
                })
            }
        );

        const data = await response.json();
        if(data.success){
            localStorage.setItem("token",data.token)
            localStorage.setItem("user",JSON.stringify(data.user))
            console.log("Login successful")
        } 

    } catch (error) {
        console.log(error);
    }
};

    const handleError = () => {
        console.log("Login Failed");
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    );

};

export default Login;