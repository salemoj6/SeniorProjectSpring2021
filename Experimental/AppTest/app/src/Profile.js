import React from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Layout, Button, Divider, Row, Col} from 'antd';

const {Header, Footer, Content} = Layout;

require('./routes/user.router.js');
require('./routes/achievements.router.js');
require('./routes/game.router.js');
require('./routes/leaderboard.router.js');

const TrophyRoom = () => {

    return (
        <Layout>
            <Content>
                <div>
                    <h3>Trophy Room</h3>
                </div>
            </Content>
        </Layout>
    );
}

async function getUser(id) {

    const user = await (await fetch(`/api/user/${id}`)).json();
    this.setState({item: user});
}

const Profile = () => {

    getUser('60627f8adc5a882878a39bb8');
    const {url, path} = useRouteMatch();
    const {user} = this.state;

    const age = "27";
    const gender = "M";
    const location = "East Coast, US";
    const desc = "Hello";
    const games = "No games";

    return (
        <Layout>
            <Content>
                <div>
                    <ul>
                        <div class="container" name="Basics">
                            <Row gutter={16}>
                                <Col className="gutter-row" span={6}>
                                    <p>{user.username}</p>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <p>{age}, {gender}</p>
                                    <p> {location} </p>
                                </Col>
                            </Row>
                        </div>
                        <div class="container" name="Description">
                            <p>{desc}</p>
                        </div>
                        <div class="container" name="Games">
                            <p>{user.ownedGames}</p>
                        </div>
                        <div>
                            <li>
                                <Link to={`${url}/trophyroom`}>Trophy Room</Link>
                            </li>
                        </div>
                    </ul>
                    <Route path={`${path}/trophyroom`}>
                        <TrophyRoom/>
                    </Route>
                </div>
            </Content>
        </Layout>
    );
};

export default Profile
