/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import counterStyles from "./Counter.Styles"
import { Box, Button, Typography } from "@mui/material";
import Cookies from "js-cookie";


const countValueLocal = JSON.parse(localStorage.getItem("count") ?? "null");

const countValueSession = JSON.parse(sessionStorage.getItem("countSession") ?? "null");

const countValueCookie = JSON.parse(Cookies.get("countCookie") ?? "null");

const Counter = () => {
    const [localCount, setLocalCount] = useState(countValueLocal ? countValueLocal : 0);
    const [sessionCount, setSessionCount] = useState(countValueSession ? countValueSession : 0)
    const [cookiesCount, setCookiesCount] = useState(countValueCookie ? countValueCookie : 0)

    const increaseCounter = () => {
        setLocalCount(localCount + 1);
    };

    const decreaseCounter = () => {
        setLocalCount(localCount - 1);
    };

    const saveLocalStorageHandler = () => {
        localStorage.setItem("count", JSON.stringify(localCount))
    }

    const saveSessionStorageHandler = () => {
        sessionStorage.setItem("countSession", JSON.stringify(sessionCount))
    }

    const saveCookieHandler = () => {
        console.log(cookiesCount)
        Cookies.set("countCookie", JSON.stringify(cookiesCount))
    }

    if (localCount === 10) {
        throw new Error("Crashing the app!!");
    }

    return (
        <Box sx={counterStyles.mainContainer}>
            <Typography component="h1" variant="h1" sx={counterStyles.counterAppText}>Counter Application</Typography>
            <Box sx={counterStyles.childContainer}>
                <Box sx={counterStyles.countBtnsContainer}>
                    <Box sx={counterStyles.countContainer}>
                        <Typography sx={counterStyles.countText}>count</Typography>
                        <Typography sx={counterStyles.countValue}>{localCount}</Typography>
                        <Button onClick={saveLocalStorageHandler} variant="contained" size="small" color="secondary">
                            LOCAL SAVE
                        </Button>
                    </Box>
                    <Box sx={counterStyles.countContainer}>
                        <Typography sx={counterStyles.countText}>count</Typography>
                        <Typography sx={counterStyles.countValue}>{sessionCount}</Typography>
                        <Button onClick={saveSessionStorageHandler} variant="contained" size="small" color="secondary">
                            SESSION SAVE
                        </Button>
                    </Box>
                    <Box sx={counterStyles.countContainer}>
                        <Typography sx={counterStyles.countText}>count</Typography>
                        <Typography sx={counterStyles.countValue}>{cookiesCount}</Typography>
                        <Button onClick={saveCookieHandler} variant="contained" size="small" color="secondary">
                            COOKIES SAVE
                        </Button>
                    </Box>
                    <Box sx={counterStyles.btnsContainer}>
                        <Button onClick={increaseCounter} variant="contained" size="small" color="success">
                            INCREMENT LOCAL
                        </Button>
                        <Button onClick={decreaseCounter} variant="contained" size="small">
                            DECREMENT LOCAL
                        </Button>
                    </Box>
                    <Box sx={counterStyles.btnsContainer}>
                        <Button onClick={() => {setSessionCount(sessionCount + 1)}} variant="contained" size="small" color="success">
                            INCREMENT SESSION
                        </Button>
                        <Button onClick={() => {setSessionCount(sessionCount - 1)}} variant="contained" size="small">
                            DECREMENT SESSION
                        </Button>
                    </Box>
                    <Box sx={counterStyles.btnsContainer}>
                        <Button onClick={() => {setCookiesCount(cookiesCount + 1)}} variant="contained" size="small" color="success">
                            INCREMENT COOKIES COUNT
                        </Button>
                        <Button onClick={() => {setCookiesCount(cookiesCount - 1)}} variant="contained" size="small">
                            DECREMENT COOKIES COUNT
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Counter;