export const SIGNUP = "SIGNAUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
    return async (dispatch) => {
        const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVvvuClk7gsbyOYxQaZL5t_3zf3faN5LY",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }),
            }
        );
        console.log("signup", await response.json());

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }
        const resData = await response.json();
        console.log(resData);
        dispatch({ type: SIGNUP });
    };
};
export const login = (email, password) => {
    return async (dispatch) => {
        const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVvvuClk7gsbyOYxQaZL5t_3zf3faN5LY",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }),
            }
        );
        console.log("login", await response.json());
        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = "Something Went Wrong!";
            if (errorId === "EMAIL_NOT_FOUND") {
                message = "This Email coud not be found!";
            } else if (errorId === "INVALID_PASSWORD") {
                message = "This password is not valid!";
            }
            throw new Error(message);
        }
        const resData = await response.json();
        console.log(resData);
        dispatch({ type: LOGIN });
    };
};
