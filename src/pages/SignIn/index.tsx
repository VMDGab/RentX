import React, { useState } from 'react';
import * as Yup from 'yup'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Footer,
  Form,
} from './styles';

export function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    navigation.navigate('SignUpFirstStep')
  }

 async function handleSignIn() {
  
 try{   const schema = Yup.object().shape({
      email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      password: Yup.string().required('Senha obrigatória')
    });;

    await schema.validate({email, password})
  }catch(error){
    if(error instanceof Yup.ValidationError){
     Alert.alert('Opa', error.message)
    }else{
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique suas credenciais'
      )
    }
  }
  }
  
  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>
          <StatusBar barStyle={'dark-content'} translucent backgroundColor='transparent' />
          <Header>
            <Title>Estamos{'\n'}quase lá</Title>
            <Subtitle>Faça seu login para começar{'\n'}uma experiência incrível.</Subtitle>
          </Header>

          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password} 
              />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={() => handleSignIn()}
              loading={false}
              light={false}
            />
            <Button
              title='Criar conta gratuita'
              onPress={handleSignUp}
              loading={false}
              color='#fff'
              light={true}
            />
          </Footer>
        </Container>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}