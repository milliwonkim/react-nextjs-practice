import React from 'react';

function userProfilePage(props) {
    return <h1>{props.username}</h1>;
}

export default userProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;

    console.log('server side rendering');

    return {
        props: {
            username: 'Max',
        },
    };
}
