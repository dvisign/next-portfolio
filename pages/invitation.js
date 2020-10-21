/*global Kakao*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

import { KAKAO_USER_REQUEST } from '../reducers/invitation';

const Invitation = () => {
  const { kakaoUser } = useSelector(state => state.invitation);
  const dispatch = useDispatch();
  
  const kakaoLoginInit = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        dispatch({
          type : KAKAO_USER_REQUEST
        })
      },
      fail: function (err) {
        console.log(JSON.stringify(err));
      }
    });
  };
  return (
    <AppLayout>
      <Head>
        <title>정인호♡박은지의 결혼식에 초대합니다.</title>
        <link href={`https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap`} rel="stylesheet"></link>
      </Head>
      <div>
        <div>
        {
          kakaoUser
          ?
          <div>로그인됨</div>
          :
          <button id="kakaoLoginsBtn" onClick={() => kakaoLoginInit()}>
            <div id="msgBox" style={{justifyContent:"center"}}>
              <div id="msgMemoBox">
                <textarea id="loginmsgText" disabled placeholder="카카오 로그인 해주세요."></textarea>
              </div>
            </div>
          </button>
        }
        </div>
      </div>
    </AppLayout>
  );
};

export default Invitation;

