import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/common/components/CustomInput';

//redux toolkit
import {useSelector, useDispatch} from 'react-redux';
import {setUser, removeUser} from '../reduxtoolkit/UserSlice';

const blogValidationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  post: yup
    .string()
    .min(20, ({min, value}) => `${min - value.length} characters to go`)
    .required('Blog post is required'),
});

const Welcome = ({navigation, route}) => {
  // const {user} = route.params;
  // console.log('User--->', user);

  // const dispatch = useDispatch();

  const userInfo = useSelector(state => state.user);

  console.log('User from toolkit store welcome page--->', userInfo);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text>Welcome Screen</Text>
          <Text>Id: {userInfo?._id}</Text>
          <Text>Name: {userInfo?.name}</Text>
          <Text>Email: {userInfo?.email}</Text>

          {/* <Text>{JSON.stringify(user, null, 2)}</Text> */}
          {/* <Formik
            validationSchema={blogValidationSchema}
            initialValues={{
              title: '',
              post: '',
            }}
            onSubmit={values => console.log(values)}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={CustomInput}
                  name="title"
                  placeholder="Title"
                />
                <Field
                  component={CustomInput}
                  name="post"
                  placeholder="Write post..."
                  multiline
                  numberOfLines={3}
                />
                <Button
                  onPress={handleSubmit}
                  title="POST"
                  disabled={!isValid}
                />
              </>
            )}
          </Formik> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
});
export default Welcome;
