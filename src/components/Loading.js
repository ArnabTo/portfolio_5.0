'use client'
import { Bars } from 'react-loader-spinner';
const Loading = () => {
    return <Bars
    height="80"
    width="80"
    color="#8F00FF"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />;
};

export default Loading;