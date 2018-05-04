import firebase from 'firebase';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
    console.log(name, phone, shift);

    const { currentUser } = firebase.auth();
    // console.log(`firebase.auth() ${JSON.stringify(firebase.auth())}`);

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => navigation.goBack());
    };
};

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
            });
    }
};


/* firebase.auth(): 
{  
    "apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U",
    "authDomain":"manager-8d1fe.firebaseapp.com",
    "appName":"[DEFAULT]",
    "currentUser":{  
       "uid":"C8NiMWjq4FgC7GuuyaiIVXfx0bt2",
       "displayName":null,
       "photoURL":null,
       "email":"test@test.com",
       "emailVerified":false,
       "phoneNumber":null,
       "isAnonymous":false,
       "providerData":[  
          {  
             "uid":"test@test.com",
             "displayName":null,
             "photoURL":null,
             "email":"test@test.com",
             "phoneNumber":null,
             "providerId":"password"
          }
       ],
       "apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U",
       "appName":"[DEFAULT]",
       "authDomain":"manager-8d1fe.firebaseapp.com",
       "stsTokenManager":{  
          "apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U",
          "refreshToken":"AK2wQ-w4IYng8mRgi4YV19p4_2P0dIf88RGxjoOSh2KlERy34JcWiCM84mP_AMIxJPcZj-QtGI7gRNo9OoVr47uX02tbc9BQTJQhevYj2s7SDmOmzy1DX4EvqYLnlInu_KlDd4CVVrDpw3OimMl_gDW5gwP-h9yhyAbwt8xg6CmQF9QjSQFrWOydPvI6B2S1M5rzbuAa2iKaR8ug1OIC7srAbm4L4KgeQg",
          "accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NGQ1ZjMyZTE4NmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFuYWdlci04ZDFmZSIsImF1ZCI6Im1hbmFnZXItOGQxZmUiLCJhdXRoX3RpbWUiOjE1MjU0MDYxOTYsInVzZXJfaWQiOiJDOE5pTVdqcTRGZ0M3R3V1eWFpSVZYZngwYnQyIiwic3ViIjoiQzhOaU1XanE0RmdDN0d1dXlhaUlWWGZ4MGJ0MiIsImlhdCI6MTUyNTQwNjE5NiwiZXhwIjoxNTI1NDA5Nzk2LCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pIdMqLdx1wlFweKZVU19y3Jhk7VvqPlFQgWieB0KVvLKfMRKJ07FAqMB0v4U6Iso120Q992zWaygPEDXv0-PoFbiCMvskX2fFQYOOWIFqsVgi1W0VrBwJgXzT7SwQgFn1mNoekQ3vskq9UAiEl9hC3hhs8UDotmv5ceVd97Kd5jy8--d-aOsjtX24sotLvFP4t3OJCs-7w97T1mDqRn2G9mFNCOHN8UopzaJRkECazboIoISpWnPotoYVx_w8VP7l8cDTHy-5p5p9TtpIfM4ioWiN_d3H2GEFsbQO6eYfdK1WSF5H7huFhXp3qUsIofCxzA9FwdR9OlPmNMh3sJFdg",
          "expirationTime":1525409795252
       },
       "redirectEventId":null,
       "lastLoginAt":"1525406196000",
       "createdAt":"1502772795000"
    }
 } */