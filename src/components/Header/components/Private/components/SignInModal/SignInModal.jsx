import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../../../../../Modal';
import NakedButton from '../../../../../NakedButton';
import Button from '../../../../../Button';
import FormItem from '../../../../../FormItem';
import Input from '../../../../../Input';

const Form = styled.form`
  padding: 16px 0;
`;

const SignInModal = ({
  onClose,
  onSignUp,
}) => (
  <Modal onClose={onClose}>
    <Modal.Header>Sign In</Modal.Header>
    <Modal.Body>
      <Form>
        <FormItem label="Email" htmlFor="email">
          <Input id="email" />
        </FormItem>
        <FormItem label="Password" htmlForm="password">
          <Input id="password" type="password" />
        </FormItem>
        <FormItem>
          <Button width="100%" variant="success">Sign in</Button>
        </FormItem>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      Not a member yet?&nbsp;
      <NakedButton variant="link" onClick={onSignUp}>Sign up now</NakedButton>
    </Modal.Footer>
  </Modal>
);

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default SignInModal;
