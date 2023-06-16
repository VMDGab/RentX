import React, { useState } from 'react';
import { BackButton } from '../../../components/BackButton';
import { Bullets } from '../../../components/Bullets';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';

export function SignUpFirstStep() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

 async function handleNextStep() {
  
 try{   
  const schema = Yup.object().shape({
    driverLicense: Yup.string().required('CNH é obrigatória'),
    email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
    name: Yup.string().required('Nome é obrigatório'),
    });;
    const data = {name ,email, driverLicense}
    await schema.validate(data);

    navigation.navigate('SignUpSecondStep', {user: data});
  }catch(error){
    if(error instanceof Yup.ValidationError){
     Alert.alert('Opa!', error.message)
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
          <Header>
            <BackButton onPress={handleGoBack}/>

            <Steps>
              <Bullets active={true} />
              <Bullets />
            </Steps>

          </Header>

          <Title>
            Crie sua{'\n'}conta
          </Title>

          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName='user'
              placeholder='Nome'
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName='mail'
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>

          <Button
            title='Próximo'
            onPress={handleNextStep}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}