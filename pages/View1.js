import React from 'react';
import Container from '../components/Container'
import styled from 'styled-components/native';
import Contents from '../components/Contents';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Text = styled.Text`
    font-size: 20px;
    line-height: 28px;
`;

function View1( {navigation, route} ) {
    navigation.setOptions( { title: route.params.date })
    const [text, setText] = React.useState( '' );
    React.useEffect( () => {
        AsyncStorage.getItem( 'list' )
         .then( data => {
             const list = JSON.parse( data );
             const diary = list.find( element => element.date === route.params.date );
             setText(diary.text);
         })
    }, []);
    return (
        <Container>
            <Contents>
                <Text>{ text }</Text>
            </Contents>
        </Container>
    )
}

export default View1;