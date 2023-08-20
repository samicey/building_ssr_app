import React from 'react';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()
class Speaker extends React.Component {
    static GetSpeakersUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SPEAKERS_PROD
                || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
        } else {
            return process.env.RESTURL_SPEAKERS_DEV;
        }
    }
    static async getInitialProps({ query: { id } }) {

        const promise = axios.get(`${Speaker.GetSpeakersUrl()}${id}`)
        .then((response) => { 
            return {
                hasErrored: false,
                speakerDataOne: response.data
            }
        })
        .catch((error) => {
            return {
                hasErrored: true,
                message: error.message
            }
        });

        return promise;
    };

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            speakerDataOne: props.speakerDataOne,
            message: props.message
        }

    }

    render() {
        const { speakerDataOne: { id, firstName, lastName, bio }} = this.props;
        return (
            <div className="container">
            <div className="row">
            <img className="col-md-4" src={`/static/speakers/Speaker-${id}.jpg`} />
              <div className="card-body">
                  <h2 className="card-title margintopbottom">{firstName} {lastName}</h2>
                  <p className="card-text margintopbottom">{bio}</p>
              </div>
             </div>
        </div>
        )
    }
}

export default Speaker;


