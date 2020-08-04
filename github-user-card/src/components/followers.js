import React from 'react'

class Followers extends React.Component {
    render() {
        return (

            <div className="card">
                <img src={this.props.data.avatar_url}/>
                <div className="card-info">
                    <p className="name">{this.props.data.login}</p>
        <p>Profile:<a href={this.props.data.html_url}>{this.props.data.html_url}</a></p>
                </div>
            </div>
        )
    }
}
export default Followers
