'use client';
import { Bars } from 'react-loader-spinner';
const loading = () => {
    return <div className='h-screen flex justify-center items-center'>
        <Bars
            height="60"
            width="60"
            color="#8F00FF"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>;
};

export default loading;