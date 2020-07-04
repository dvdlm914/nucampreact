import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsite: this.props.campsite,
        };
    }
    render(campsite) {
    if (campsite) {
        return (
            <div className="row"></div>
        );
    }
    return <div></div>;
}
}

 
export default CampsiteInfo;