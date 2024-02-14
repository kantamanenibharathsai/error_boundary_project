import { Box, Typography } from "@mui/material";
import errorPageStyles from "./ErrorPage.Styles"


const ErrorPage = () => {
    return (

        <Box style={{ width: "100%" }} sx={errorPageStyles.errorContainer}>
            {/* <Box
                style={{ width: "100%", height: "99.6vh" }}
                alt=""
                src="https://cdn.dribbble.com/users/272763/screenshots/4576659/astronaut-600x800.gif"
                component="img"
            /> */}
            <Typography sx={errorPageStyles.errorText}>ERR 404 NOT FOUND</Typography>
        </Box>
    );
};

export default ErrorPage;