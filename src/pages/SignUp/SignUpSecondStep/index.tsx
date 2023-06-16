import React, { useState } from 'react';
import { BackButton } from '../../../components/BackButton';
import { Bullets } from '../../../components/Bullets';
import { useNavigation, useRoute } from '@react-navigation/native';
import { InputPassword } from '../../../components/InputPassword';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Confirmation } from '../../Confirmation';
import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';


interface Params {
  user:{
    name: string,
    email: string,
    driverLicense: string,
  }
}

export function SignUpSecondStep() {
  const theme = useTheme()


  const navigation = useNavigation();
  const route = useRoute();

  const {user} = route.params as Params

  function handleGoBack() {
    navigation.goBack()
  }
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


 async function handleRegister() {
  
if(!password || !passwordConfirm){
  return Alert.alert('Opa', 'Informe a senha e confirme para finalizar o cadastro')
}

if(password != passwordConfirm){
  return Alert.alert('Opa', 'As senhas não são iguais')
}

navigation.navigate('Confirmation', {
  title: 'Conta Criada',
  message: `Agora é só fazer seu login\ne aproveitar`,
  nextScreenRoute: 'SignIn',
})

  }
  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
          <BackButton onPress={handleGoBack}/>

            <Steps>
              <Bullets active={true} />
              <Bullets />
            </Steps>

          </Header>

          <Title>
            Crie sua{'\n'}
            conta
          </Title>

          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>2. Dados</FormTitle>
            <InputPassword
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password} 
            />
            <InputPassword
              iconName='lock'
              placeholder='Repetir senha'
              onChangeText={setPasswordConfirm}
              value={passwordConfirm} 
          
            />
         
          </Form>

          <Button
            title='Cadastrar'
            onPress={handleRegister}
            color={theme.colors.success}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}