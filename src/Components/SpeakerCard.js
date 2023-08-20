import Link from "next/link";
import { Component } from "react";

export default class SpeakerCard extends Component {
    render() {
        const {id, firstName, lastName, bio} = this.props;
        return (
            <div className="card col-4 cardmin margintopbottom">
              <img className="card-img-top" src={`/static/speakers/Speaker-${id}.jpg`} />
              <div className="card-body">
                <Link href={{pathname: "/speaker", query: { speakerId: id }}} as={`speakers/${id}`} className="btn btn-lg btn-block btn-outline-primary margintopbottom10">
                    See Profile
                </Link>
                  <h4 className="card-title">{firstName} {lastName}</h4>
                  <p className="card-text">{bio}</p>

              </div>
            </div>
        )
    }
}