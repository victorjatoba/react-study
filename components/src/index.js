import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" time="6:45" comment="Nice!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Alex" time="9:48" comment="Bad!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Jane" time="10:15" comment="I don't know!" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);