import { Formik } from "formik"
import { Button, Checkbox, Flex, Input, SnackBar, Typography } from "@gohubly/design-system"
import useLoginFormLogic from "./LoginForm.logic"

const LoginForm: React.FC<iLoginForm> = () => {
  const logic = useLoginFormLogic()

  return (
    <Formik
      onSubmit={logic.handleSubmitForm}
      initialValues={{
        email: '',
        password: '',
        keepLoggedIn: false,
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        setErrors,
      }) => (
        <form onSubmit={handleSubmit}>
          {logic.service.error && (
            <SnackBar
              variant="CRITICAL"
              margin="24px 0"
              label={logic.service.error.error}
            />
          )}
          <Flex flexDirection="column" gap={32} fullWidth>
            <Flex fullWidth gap={16} flexDirection='column'>
              <Input
                value={values.email}
                onChange={handleChange}
                name="email"
                onBlur={handleBlur}
                label="email address"
                placeholder="example@email.com"
                Size="large"
              />

              <Input
                value={values.password}
                onChange={handleChange}
                type={logic.showPassword ? "text" : "password"}
                name="password"
                onBlur={handleBlur}
                label="password"
                placeholder="Type your password"
                Size="large"
                iconRight={logic.showPassword ? "eyeOff" : "eyeOn"}
                iconRightOnClick={logic.handleToggleShowPassword}
              />

              <Flex alignItems="center" justifyContent="space-between">
                <Checkbox
                  checked={values.keepLoggedIn}
                >
                  Keep me logged in
                </Checkbox>
                <Typography color="primary700" weight='500' size="medium" onClick={() => alert('forgot password')}>
                  I forgot my password
                </Typography>
              </Flex>

            </Flex>

            <Button size="large" type="submit">
              Sign in
            </Button>
          </Flex>
        </form>
      )}
    </Formik>
  )
}

export default LoginForm