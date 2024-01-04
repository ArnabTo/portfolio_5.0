'use client';
import { Bars } from 'react-loader-spinner';
const loading = () => {
    return <Bars
    height="85"
    width="85"
    color="#8F00FF"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />;
};

export default loading;