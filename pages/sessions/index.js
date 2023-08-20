import React from 'react';
import axios from 'axios';
import SessionCard from '../../src/Components/SessionCard';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()
class Session extends React.Component {
    static GetSessionsUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SESSIONS_PROD
                || publicRuntimeConfig.RESTURL_SESSIONS_PROD;
        } else {
            return process.env.RESTURL_SESSIONS_DEV;
        }
    }
    static async getInitialProps() {

        var promise = axios.get(Session.GetSessionsUrl()).then(response => {
            return {
                hasErrored: false,
                sessionData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;


    }

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            sessionData: props.sessionData
        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="container">

            <div className="row">
                <div className="col margintopbottom">
                    <hr/>
                    <h2>Sessions</h2>
                </div>
            </div>

            
            <div className="card-deck row">
                {
                    this.state.sessionData?.map(({id, descriptionShort, title}) => (
                        <SessionCard
                        key={id}
                        descriptionShort={descriptionShort}
                        title={title}
                        />
                    ))
                }

            </div>
        </div>
        )
    }

}

export default Session

