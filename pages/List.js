import React from 'react';
import Container from '../components/Container'
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px;
    border-bottom-color: #999999;
    border-bottom-width: 1px
`;

const Label = styled.Text`
    font-size: 20px;
`;


// 구조 분해 할당
function List( { navigation } ) {
    const [ list, setList ] = React.useState([]);
    const load = async () => {
        const data = await AsyncStorage.getItem( 'list' );
        if( data !== null ) {
            setList(JSON.parse( data ));
        }
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        });

        load();
    
        return unsubscribe;
      }, [navigation]);
    return (
        <Container>
            <Contents>
                {_.sortBy(list, 'date').map( item => {
                    return (
                        <ListItem key={ item.date } onPress={ () => navigation.navigate( 'View1', { date: item.date } )}>
                            <Label>{item.date}</Label>
                        </ListItem>
                    )
                })}
            </Contents>
            <Button onPress={ ()=> navigation.navigate('Form')}>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;