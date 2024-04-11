import { Grid, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form autoComplete="off">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Name" type="name" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="E-mail"
              type="email"
              placeholder="example@example.co"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Password" type="password" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Confirm Password" type="password" fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/login" color="inherit">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
