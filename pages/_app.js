/*global Kakao*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import wrapper from '../store/configureStore';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../sass/reset.scss';

import { KAKAO_USER_REQUEST } from '../reducers/invitation';

const Reactproject = ({ Component }) => {
  const { kakaoUser } = useSelector((state) => state.invitation);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!kakaoUser) {
      dispatch({
        type : KAKAO_USER_REQUEST
      })
    }
  },[kakaoUser]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Reactproject</title>
        <script src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=a64558d99894639bccef41457792c4d7&autoload=false`}></script>
        <script src={`//developers.kakao.com/sdk/js/kakao.min.js`}></script>
        <script>
          Kakao.init(`a64558d99894639bccef41457792c4d7`);
        </script>
      </Head>
      <Component />
    </>
  )
}

export default wrapper.withRedux(Reactproject);