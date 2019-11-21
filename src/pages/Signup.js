import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.jpeg";
import { Card, Logo, Form, Input, Button } from "../components/AuthForms";

function Signup() {
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="password again" />
        <Button>Sign Up (not available yet)</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;
