import React from 'react';
import {Grid, Segment, Button } from 'semantic-ui-react';
import SegmentMenu from "../components/common/SegmentMenu"
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

class ErrorPage extends React.Component{
    constructor(props){
        super(props)
    }

    review(){
        return <Grid.Column>
            <SegmentMenu title="Ошибка !"/>
            <Segment attached>
            <p>
                Ошибка !
            </p>
            </Segment>
            <Button color="blue" size="big" attached="bottom" content="В обзор рецептов" as={Link} to="/recipe/" />
        </Grid.Column>
    }

    render(){
        return <Grid centered stackable columns={2}>
            {this.review()}
        </Grid>
    }
}

export default ErrorPage;