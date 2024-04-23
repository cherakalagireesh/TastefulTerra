import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormWrapper from "../../ui/FormWrapper";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";

export default function LoginForm() {
  return (
    <FormWrapper>
      <Logo />
      <Heading>Login To Cabin</Heading>
      <Form>
        <FormRow label="Cabin Number">
          <Input type="text" id="Cabin Number" />
        </FormRow>
        <FormRow label="Password">
          <Input type="password" id="Password" />
        </FormRow>
        <a
          href="d.html"
          className="text-blue-600 hover:text-blue-600 font-medium mt-3 underline text-xs md:text-sm lg:text-md"
        >
          forget password
        </a>
        <Button>Log in</Button>
      </Form>
    </FormWrapper>
  );
}
