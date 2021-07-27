import React from 'react';
import { TouchableOpacity, } from 'react-native';
import { SocialIcon } from 'react-native-elements';


const IconButton = ({ type }) => {
    return (
        <TouchableOpacity>
            <SocialIcon
                raised
                type={type}
                iconSize={40}
                style={{width: 70, height:70, borderColor: '#000000', borderWidth: 3, borderBottomWidth: 6}}
            />
        </TouchableOpacity>

    )

}


export default IconButton;