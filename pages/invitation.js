/*global Kakao*/
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

import { KAKAO_USER_REQUEST } from '../reducers/invitation';

const Invitation = () => {
  const { kakaoUser, kakaoLoginIng } = useSelector(state => state.invitation);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!kakaoUser) {
      dispatch({
        type : KAKAO_USER_REQUEST
      })
    }
  },[kakaoUser]);
  return (
    <AppLayout>
      <Head>
        <title>정인호♡박은지의 결혼식에 초대합니다.</title>
        <link href={`https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap`} rel="stylesheet"></link>
      </Head>
      <div>
        <div>
          {
            kakaoLoginIng
            ?
            <div>로딩중</div>
            :
            <KakaoLogin 
              kakaoUser = {kakaoUser}
            />
          }
        </div>
      </div>
    </AppLayout>
  );
};

const KakaoLogin = (props) => {
  const kakaoLoginInit = useCallback(() => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj)
        dispatch({
          type : KAKAO_USER_REQUEST
        })
      },
      fail: function (err) {
        console.log(JSON.stringify(err));
      }
    });
  });
  if (props.kakaoUser) {
    return (
      <div>로그인됨</div>
    )
  } else {
    return (
      <button id="kakaoLoginsBtn" onClick={() => kakaoLoginInit()}>
        <div id="msgBox" style={{justifyContent:"center"}}>
          <div id="msgMemoBox">
            <textarea id="loginmsgText" disabled placeholder="카카오 로그인 해주세요."></textarea>
          </div>
        </div>
      </button>
    )
  }
};

export default Invitation;

