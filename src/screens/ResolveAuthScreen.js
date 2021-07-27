import React,{useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';


const ResolveAuthScreen = ({navigation}) => {
    const {tryLocalSignIn} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignIn(navigation);
    }, []);
        return null;
        //spinner da gösterebiliriz.
        //Ama en iyisi boş sayfa göstermek.
};

export default ResolveAuthScreen;