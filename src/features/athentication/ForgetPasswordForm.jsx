import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Form from "../../ui/Form";
import Logo from "../../ui/Logo";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import ExitButton from "../../ui/ExitButton";
import FormWrapper from "../../ui/FormWrapper";

export default function ForgetPassword() {
  return (
    <FormWrapper>
      <ExitButton className="absolute top-3 left-3 md:top-5 md:left-5 lg:top-7 lg:left-7">
        <FontAwesomeIcon icon={faArrowLeft} />
      </ExitButton>
      <Logo />
      <Heading>Forget password</Heading>
      <p className="max-w-sm md:max-w-md lg:max-w-lg mb-3 text-center text-blue-500 text-sm md:text-base lg:text-lg px-6 pb-6">
        We just need your registered cabin number and email to send you password
        reset code
      </p>
      <Form>
        <FormRow label="Cabin Number">
          <Input type="text" id="Cabin Number" />
        </FormRow>
        <FormRow label="Email">
          <Input type="email" id="Email" />
        </FormRow>
        <Button>Submit</Button>
      </Form>
    </FormWrapper>
  );
}
