import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/NClogo.png";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

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

            if (data.success) {
                login(data.user, data.token);
                console.log("Login successful");
                navigate("/");
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleError = () => {
        console.log("Login Failed");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">

                <img
                    src={logo}
                    alt="Newscast logo"
                    className="w-16 h-16 rounded-full mx-auto mb-6"
                />

                <h1 className="text-3xl font-semibold text-gray-800">
                    Welcome to Newscast
                </h1>

                <p className="text-gray-500 mt-3 mb-8">
                    Stay informed with the latest news.
                </p>

                <div className="flex justify-center">
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleError}
                        theme="outline"
                        size="large"
                        text="continue_with"
                        shape="rectangular"
                        width="280"
                    />
                </div>

                <p className="text-xs text-gray-400 mt-8">
                    Sign in to save and access your bookmarks.
                </p>

            </div>

        </div>
    );
};

export default Login;