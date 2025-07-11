import { AppProvider } from "@toolpad/core/AppProvider";
import theme from "../themes/theme";
import {
  Typography,
  Container,
  Paper,
  Button,
  Box,
  SvgIcon,
} from "@mui/material";

function GoogleIcon() {
  return (
    <SvgIcon viewBox="0 0 533.5 544.3" sx={{ width: 20, height: 20 }}>
      <path
        fill="#4285F4"
        d="M533.5 278.4c0-18.5-1.5-37-4.7-54.9H272.1v103.9h147.4c-6.4 34.7-25.1 64.1-53.4 83.5v68h86.1c50.4-46.5 81.3-115 81.3-200.5z"
      />
      <path
        fill="#34A853"
        d="M272.1 544.3c72.3 0 133-23.9 177.3-64.9l-86.1-68c-24.1 16.2-55.1 25.6-91.2 25.6-69.9 0-129.2-47.2-150.3-110.3H33.4v69.5c44.4 87.9 135.4 148.1 238.7 148.1z"
      />
      <path
        fill="#FBBC05"
        d="M121.8 326.6c-10.7-32-10.7-66.3 0-98.3V158.7H33.4c-34.6 68.5-34.6 149.2 0 217.7l88.4-69.8z"
      />
      <path
        fill="#EA4335"
        d="M272.1 107.7c39.3-.6 77.1 14 106 40.8l79.1-79.1C388.3 24.2 331.3 0 272.1 0 168.7 0 77.7 60.2 33.4 148.1l88.4 69.5C142.9 154.9 202.2 107.7 272.1 107.7z"
      />
    </SvgIcon>
  );
}

export default function ThemeSignInPage() {
  const handleGoogleSignIn = () => {
    console.log("Signing in with Google...");
    // Your auth logic here
  };

  return (
    <AppProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            minHeight: "440px", // 👈

            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            DevNest
          </Typography>
          <Typography variant="h4">Welcome Back</Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to your account
          </Typography>

          <Box mt={2} width="66%">
            <Button
              onClick={handleGoogleSignIn}
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                backgroundColor: "#fff",
                color: "#5f6368", // Google's button text color
                borderColor: "#dadce0",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.875rem",

                "&:hover": {
                  backgroundColor: "#f7f8f8",
                  borderColor: "#c6c6c6",
                },
              }}
            >
              Sign in with Google
            </Button>
          </Box>
        </Paper>
      </Container>
    </AppProvider>
  );
}
