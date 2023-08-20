import { Component } from "react";

export default class SessionCard extends Component {
    render() {
        const {title, speakersNamesCsv, descriptionShort} = this.props;
        return (
        <div className="card col-4 cardmin margintopbottom">
            <div className="card-body">
                <h4 className="card-title"><a href="#">{title}</a></h4>
                <h6 className="card-title">{speakersNamesCsv}</h6>
                <p className="card-text">{descriptionShort}</p>
            </div>
        </div>
        )
    }
}