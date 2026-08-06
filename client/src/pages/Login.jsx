import { GoogleLogin } from "@react-oauth/google";

const Login = () => {

    const handleSuccess = (credentialResponse) => {

        console.log("Google Response");

        console.log(credentialResponse);

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