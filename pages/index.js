import React, {Component} from 'react';

class Index extends Component {
    static async getInitialProps() {
        return {};
    }
    render() {
        return (
            <>
            <div className="container">
                    <div className="row">
                        <div className="col margintopbottom">
                            <h2>Home</h2>
                            <h6 className="margintopbottom20">
                                Silicon Valley Code Camp is a community event where
                                developers learn from fellow developers.
                            </h6>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Index;
