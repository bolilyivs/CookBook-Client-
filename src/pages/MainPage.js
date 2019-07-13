import React from 'react';
import { Form, Input, Grid, Segment, Header, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        console.log(new Cookies().get("account"))
    }

    handler(res){
        console.log(res.data)

    }

    review(){
        return <Grid.Column>
            <SegmentMenu title="Добро пожаловать!"/>
            <Segment attached>
            <p>
            Онлайн кулинарная книга, которая представляет собой онлайн сервис со следующими функциями:
                <ol>
                    <li> Регистрация / авторизация пользователей </li>
                    <li> Добавление пользователями новых рецептов</li>
                    <li> Поиск рецептов по  названию, категории, ингредиентам, автору, рейтингу</li>
                    <li> Пользователи могу голосовать за или против</li>
                </ol>  
            </p>
            </Segment>
            <Button color="blue" size="big" attached="bottom" content="Начать обзор рецептов" as={Link} to="/recipe/" />
        </Grid.Column>
    }

    render(){
        return <Grid centered stackable columns={2}>
            {this.review()}
        </Grid>
    }
}

export default MainPage;