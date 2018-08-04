import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { connect } from 'react-redux';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import { addToken } from './reducer';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`

`;

class App extends Component {
  state = {
    email: '',
    password: '',
  }

  changeVal = (param, value) => {
    this.setState(() => ({
      [param]: value,
    })) 
  }
  submit = () => {
    if (this.state.email === '' || this.state.password === '') {
      this.changeVal('open', true);
    } else {
      axios.post('https://react-back-siujvuooba.now.sh/login').then(({ data }) => {
        console.log(data);
        this.props.addToken(data.token);
      })
    // fetch('https://react-back-siujvuooba.now.sh/login', {
    //   method: 'post',
    //   headers: {
    //   //'Accept': 'application/json, text/plain, */*',
    //   'Content-Type': 'application/json'
    // },
    // //body: JSON.stringify({a: 7, str: 'Some string: &=&'})
    // }).then(res=>res.json())
    // .then(res => console.log(res));
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  }
  
  render() {
    const { email, password, open } = this.state;
    return (
      <Container>
      <StyledForm>
        <FormControl>
          <InputLabel htmlFor="email">email</InputLabel>
          <Input
            value={email}
            id="email"
            required
            onChange={({ target: { value }}) => { this.changeVal('email', value) }}
            type="email"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">contraseña</InputLabel>
          <Input
            id="password"
            value={password}
            required
            onChange={({ target: { value }}) => { this.changeVal('password', value) }}
            type="password"
          />
        </FormControl>
        <ButtonContainer>
          <Button variant="contained" onClick={this.submit}>
            Entrar
          </Button>
          <Button variant="contained">
            Registrar
          </Button>
        </ButtonContainer>
      </StyledForm>
      <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Ingresa email y contraseña</span>}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  addToken
}

export default connect(null, mapDispatchToProps)(App);