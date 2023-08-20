import React from 'react';
import axios from 'axios';
import SpeakerCard from '../../src/Components/SpeakerCard';

class Speaker extends React.Component {
    static async getInitialProps() {
        const promise = axios.get('http://localhost:4000/speakers')
        .then((response) => { 
            return {
                hasErrored: false,
                speakerData: response.data
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
            speakerData: props.speakerData,
            message: props.message
        }

    }

    componentDidMount () {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col margintopbottom">
                    <h2>Speakers</h2>
                </div>
            </div>
            <div className="card-deck row">
                {this.state.speakerData?.map(({id, bio, firstName, lastName}) => (
                <SpeakerCard 
                key={id} 
                id={id}
                firstName={firstName}
                lastName={lastName}
                bio={bio}
                />
                ))}
             </div>
        </div>
        )
    }
}

export default Speaker;


