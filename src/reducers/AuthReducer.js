import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

const NEW_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(`action: ${JSON.stringify(action)}`);
    
    switch(action.type) {
        case EMAIL_CHANGED:
            NEW_STATE = {...state, email: action.payload};
            // console.log(`NEW_STATE: ${JSON.stringify(NEW_STATE)}`);
            return NEW_STATE;

        case PASSWORD_CHANGED:
            NEW_STATE = {...state, password: action.payload};
            // console.log(`NEW_STATE: ${JSON.stringify(NEW_STATE)}`);
            return NEW_STATE;

        case LOGIN_USER:
            NEW_STATE = {...state, loading: true, error: ''};
            // console.log(`NEW_STATE: ${JSON.stringify(NEW_STATE)}`);
            return NEW_STATE;

        case LOGIN_USER_SUCCESS:
            NEW_STATE = {...state, ...INITIAL_STATE, user: action.payload};
            // console.log(`NEW_STATE: ${JSON.stringify(NEW_STATE)}`);
            return NEW_STATE;

        case LOGIN_USER_FAIL:
            NEW_STATE = {...state, error: 'Authentication Failed', password: '', loading: false};
            // console.log(`NEW_STATE: ${JSON.stringify(NEW_STATE)}`);
            return NEW_STATE;

        case LOGOUT:
            return INITIAL_STATE;

        default:
            return state;
    }

};

/* 
-- BEGIN
action: {"type":"@@redux/INIT"}
state: {"email":"","password":"","user":null,"error":"","loading":false}

-- Input email
action: {"type":"email_changed","payload":"te"}
state: {"email":"te","password":"","user":null,"error":"","loading":false}

-- Wrong password
action: {"type":"login_user"}
NEW_STATE: {"email":"","password":"","user":null,"error":"","loading":true}
error: Error: The email address is badly formatted.

action: {"type":"login_user_fail"}
NEW_STATE: {"email":"","password":"","user":null,"error":"Authentication Failed","loading":false}

-- Login succesfull

action: {"type":"login_user"}
NEW_STATE: {"email":"test@test.com","password":"123456","user":null,"error":"","loading":true}

action: {"type":"login_user_success","payload":{"uid":"C8NiMWjq4FgC7GuuyaiIVXfx0bt2","displayName":null,"photoURL":null,"email":"test@test.com","emailVerified":false,"phoneNumber":null,"isAnonymous":false,"providerData":[{"uid":"test@test.com","displayName":null,"photoURL":null,"email":"test@test.com","phoneNumber":null,"providerId":"password"}],"apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U","appName":"[DEFAULT]","authDomain":"manager-8d1fe.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U","refreshToken":"AK2wQ-xdDwI4s9aG49bxaOAWOx6kfqRztTubvUWN1U9qnq2KYJgIXP_NdLL5rpMUtcwO65WIS1zsHX__-D-rcYZeOHgFlTAdf4UW_9LauLjfB2kRczXIA8dkltVB4B6VaOyo7NXOxwtmOjy3bHHKFJkiNArFAsQcZgNsyINqSUVgDG4xE6T0Ct4j6qZe5bjkAPCx_N_ZIuAgaajldhQic6qNxWkee6BADw","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NGQ1ZjMyZTE4NmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFuYWdlci04ZDFmZSIsImF1ZCI6Im1hbmFnZXItOGQxZmUiLCJhdXRoX3RpbWUiOjE1MjUyNDg2NTAsInVzZXJfaWQiOiJDOE5pTVdqcTRGZ0M3R3V1eWFpSVZYZngwYnQyIiwic3ViIjoiQzhOaU1XanE0RmdDN0d1dXlhaUlWWGZ4MGJ0MiIsImlhdCI6MTUyNTI0ODY1MCwiZXhwIjoxNTI1MjUyMjUwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ya43on-9bxOKh0cPZwZ0OyPy2aDIY4PQOImxnPCeQ-4J-2kZcdlZ-tE3hVGlZ6YkwGJBTXlSiJrJyaQ13rbT97cjnFh9JlGpZEKDXPNBh7Qln5oHYf5gflV0l9FMsoThFdoLJDQxJ7ssGFfx5WGSWW5AYHEE61xRo7hNr7p9eTcv-vBbsRUQHDT4fhbc4e6tPppVDhDLxZQnXD1ngVLEOLskcm27LrjatrWUY2tfXLCaZLvtwTT-7cryctSWpIOIZugszCoESAoOubXwuy2u3nyITyDbwUvlByUNXbxD2_YS3gPkaE6psTch5vjZnhksS2u5nBNZ8DSkm57-lMlvVA","expirationTime":1525252251144},"redirectEventId":null,"lastLoginAt":"1525248650000","createdAt":"1502772795000"}}
NEW_STATE: {"email":"","password":"","user":{"uid":"C8NiMWjq4FgC7GuuyaiIVXfx0bt2","displayName":null,"photoURL":null,"email":"test@test.com","emailVerified":false,"phoneNumber":null,"isAnonymous":false,"providerData":[{"uid":"test@test.com","displayName":null,"photoURL":null,"email":"test@test.com","phoneNumber":null,"providerId":"password"}],"apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U","appName":"[DEFAULT]","authDomain":"manager-8d1fe.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyDeOJu77LxkM4YUW3Syea2pV9Kti_PMX0U","refreshToken":"AK2wQ-xdDwI4s9aG49bxaOAWOx6kfqRztTubvUWN1U9qnq2KYJgIXP_NdLL5rpMUtcwO65WIS1zsHX__-D-rcYZeOHgFlTAdf4UW_9LauLjfB2kRczXIA8dkltVB4B6VaOyo7NXOxwtmOjy3bHHKFJkiNArFAsQcZgNsyINqSUVgDG4xE6T0Ct4j6qZe5bjkAPCx_N_ZIuAgaajldhQic6qNxWkee6BADw","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NGQ1ZjMyZTE4NmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFuYWdlci04ZDFmZSIsImF1ZCI6Im1hbmFnZXItOGQxZmUiLCJhdXRoX3RpbWUiOjE1MjUyNDg2NTAsInVzZXJfaWQiOiJDOE5pTVdqcTRGZ0M3R3V1eWFpSVZYZngwYnQyIiwic3ViIjoiQzhOaU1XanE0RmdDN0d1dXlhaUlWWGZ4MGJ0MiIsImlhdCI6MTUyNTI0ODY1MCwiZXhwIjoxNTI1MjUyMjUwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ya43on-9bxOKh0cPZwZ0OyPy2aDIY4PQOImxnPCeQ-4J-2kZcdlZ-tE3hVGlZ6YkwGJBTXlSiJrJyaQ13rbT97cjnFh9JlGpZEKDXPNBh7Qln5oHYf5gflV0l9FMsoThFdoLJDQxJ7ssGFfx5WGSWW5AYHEE61xRo7hNr7p9eTcv-vBbsRUQHDT4fhbc4e6tPppVDhDLxZQnXD1ngVLEOLskcm27LrjatrWUY2tfXLCaZLvtwTT-7cryctSWpIOIZugszCoESAoOubXwuy2u3nyITyDbwUvlByUNXbxD2_YS3gPkaE6psTch5vjZnhksS2u5nBNZ8DSkm57-lMlvVA","expirationTime":1525252251144},"redirectEventId":null,"lastLoginAt":"1525248650000","createdAt":"1502772795000"},"error":"","loading":false}

"payload":{  
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
      "refreshToken":"AK2wQ-xdDwI4s9aG49bxaOAWOx6kfqRztTubvUWN1U9qnq2KYJgIXP_NdLL5rpMUtcwO65WIS1zsHX__-D-rcYZeOHgFlTAdf4UW_9LauLjfB2kRczXIA8dkltVB4B6VaOyo7NXOxwtmOjy3bHHKFJkiNArFAsQcZgNsyINqSUVgDG4xE6T0Ct4j6qZe5bjkAPCx_N_ZIuAgaajldhQic6qNxWkee6BADw",
      "accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NGQ1ZjMyZTE4NmRjMWUxNjA0MjhiZDdhODE1NDI2ZjI3NDg4MmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFuYWdlci04ZDFmZSIsImF1ZCI6Im1hbmFnZXItOGQxZmUiLCJhdXRoX3RpbWUiOjE1MjUyNDg2NTAsInVzZXJfaWQiOiJDOE5pTVdqcTRGZ0M3R3V1eWFpSVZYZngwYnQyIiwic3ViIjoiQzhOaU1XanE0RmdDN0d1dXlhaUlWWGZ4MGJ0MiIsImlhdCI6MTUyNTI0ODY1MCwiZXhwIjoxNTI1MjUyMjUwLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ya43on-9bxOKh0cPZwZ0OyPy2aDIY4PQOImxnPCeQ-4J-2kZcdlZ-tE3hVGlZ6YkwGJBTXlSiJrJyaQ13rbT97cjnFh9JlGpZEKDXPNBh7Qln5oHYf5gflV0l9FMsoThFdoLJDQxJ7ssGFfx5WGSWW5AYHEE61xRo7hNr7p9eTcv-vBbsRUQHDT4fhbc4e6tPppVDhDLxZQnXD1ngVLEOLskcm27LrjatrWUY2tfXLCaZLvtwTT-7cryctSWpIOIZugszCoESAoOubXwuy2u3nyITyDbwUvlByUNXbxD2_YS3gPkaE6psTch5vjZnhksS2u5nBNZ8DSkm57-lMlvVA",
      "expirationTime":1525252251144
   },
   "redirectEventId":null,
   "lastLoginAt":"1525248650000",
   "createdAt":"1502772795000"
}

-- Login failed, input again
NEW_STATE: {"email":"test@test.com","password":"123456","user":null,"error":"Authentication Failed","loading":false}
*/