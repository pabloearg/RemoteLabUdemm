import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import ScreensNames from '../ScreensNames';
import { configActions } from '../../store/actions/config';
import { userActions } from '../../store/actions/user';
import { appointmentActions } from '../../store/actions/appointments';
import { BLACK } from '../../styles/colors';
import { useDispatch } from 'react-redux';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import ButtonFooter from '../../Components/buttons/ButtonFooter/ButtonFooter';
import { useNavigation } from '@react-navigation/core'
import { AppointmentApi } from '../../APIs/appointments';
import { SubjectRL, UserRL } from '../../API';
import Auth from '@aws-amplify/auth';
import { UserType } from '../../types';

const Splash = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [buttonLoader, setButtonLoader] = useState(false)
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [legajo, setLegajo] = useState("")

  useEffect(() => {
    initUser()

  }, [])

  const initUser = async () => {
    try {
      const user: UserRL = await dispatch(userActions.getUser());
      console.log("splash user: ", user)
      if (!!user) {
        await dispatch(appointmentActions.getUserAppointments());
        await dispatch(configActions.getConfig());
        // setIsLoading(false)
        if (user.type === UserType.student) {
          goToHome()
          return
        }
        const userSubjects: SubjectRL[] = await dispatch(
          userActions.getUserSubjects(user?.subjects));

        return goToTeacherHome(userSubjects)
      }
      if (!user) {
        console.log("show form")
        setShowForm(true)
        setIsLoading(false)
      }


    } catch (error) {
      setIsLoading(false)
      setHasError(true)
      Alert.alert("error en el login")
    }
  }

  const createUser = async () => {
    setButtonLoader(true)
    const cognitoUser = await Auth.currentAuthenticatedUser()
    const email = cognitoUser?.attributes?.email
    const user: UserRL = {
      email: email,
      firstName: name,
      id: email,
      type: "S",
      lastName: surname,
      appointments: [],
      filedId: legajo,
      quantityViolations: 0,
      subjects: [],
      cleanDate: null,
    }

    try {
      await AppointmentApi.createUser(user)
      console.log("name: ", name)
      console.log("surname: ", surname)
      console.log("legajo: ", legajo)
      await initUser()
      goToHome()
      // setButtonLoader(false)
    } catch (error) {
      setButtonLoader(false)
    }
  }

  const goToHome = () => navigation.navigate(ScreensNames.HOME)

  const goToTeacherHome = (userSubjects: any) => navigation.navigate(ScreensNames.SUBJECTS, { userSubjects })

  if (isLoading) {
    return <FullScreenLoader color={BLACK} />
  }

  if (showForm) {
    return (
      <View style={{ flex: 1 }} pointerEvents={buttonLoader ? "none" : undefined}>
        <View style={{ flex: 1, paddingHorizontal: 28, paddingTop: 40 }}>
          <Input
            placeholder='Nombre'
            value={name}
            onChangeText={setName}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          <Input
            placeholder='Apellido'
            value={surname}
            onChangeText={setSurname}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          <Input
            placeholder='Legajo'
            value={legajo}
            onChangeText={setLegajo}
            keyboardType="number-pad"
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
        </View>
        <ButtonFooter
          isInvestmentButton
          onPress={createUser}
          text={"CONTINUAR"}
          loading={buttonLoader}
        />
      </View>
    );
  }
  return <FullScreenLoader color={BLACK} />
}

const styles = StyleSheet.create({});

export default Splash;
