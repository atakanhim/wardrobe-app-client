import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useAuth } from './AuthContext';

const TOKEN_KEY= process.env.EXPO_PUBLIC_TOKEN_KEY ?? " ";
const API_URL = process.env.EXPO_PUBLIC_API_URL?? " ";

const GeneralContext = createContext<GeneralProps>({});


interface GeneralProps {
  authState?: {
        accessToken: string | null;
        refreshToken: string | null;
        authenticated: boolean | null;
  };
  generalState?: { name:string |null,surname:string | null };

}

export const GeneralProvider: React.FC<{ children: React.ReactNode }>= ({ children }) => {
    const auth = useAuth();
    const [generalState,setGeneralState] = useState<{name:string | null,surname:string | null}>();

    const authStatee = auth?.authState;

    const anotherContextValue:GeneralProps = {
        authState:authStatee,
        
    

      };

    return (
        <GeneralContext.Provider value={anotherContextValue}>
          {children}
        </GeneralContext.Provider>
      );
 };

 export const useGeneral = () => useContext(GeneralContext);
