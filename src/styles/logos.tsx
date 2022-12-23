import React from 'react';

import { ReactComponent as ethereum } from '@/assets/logos/logo_ethereum_dk.svg';
import { ReactComponent as kaikas } from '@/assets/logos/logo_kaikas_dk.svg';
import { ReactComponent as klay } from '@/assets/logos/logo_klay_dk.svg';
import { ReactComponent as klayBg } from '@/assets/logos/logo_klay_bg_dk.svg';
import { ReactComponent as klip } from '@/assets/logos/logo_klip_wt.svg';
import { ReactComponent as kmImg } from '@/assets/logos/logo_km_img_dk.svg';
import { ReactComponent as kmDk } from '@/assets/logos/logo_km_two_dk.svg';
import { ReactComponent as kmWt } from '@/assets/logos/logo_km_two_wt.svg';
import { ReactComponent as kmV2Two } from '@/assets/logos/logo_km_v2_two_wt.svg';
import { ReactComponent as kmV3Two } from '@/assets/logos/logo_km_v3_two_wt.svg';
import { ReactComponent as metamask } from '@/assets/logos/logo_metamask_dk.svg';
import { ReactComponent as per } from '@/assets/logos/logo_per_dk.svg';
import { ReactComponent as perBg } from '@/assets/logos/logo_per_bg_dk.svg';
import { ReactComponent as wklay } from '@/assets/logos/logo_wklay_dk.svg';
import { ReactComponent as wklayBg } from '@/assets/logos/logo_wklay_bg_dk.svg';
import { ReactComponent as profile } from '@/assets/logos/logo_profile_dk.svg';
import { ReactComponent as logoChin } from '@/assets/logos/logo-chin-rec.svg';
import { ReactComponent as logoSqr } from '@/assets/logos/logo-chin-sqr.svg';
import { ReactComponent as swapscanner } from '@/assets/logos/logo_swapscanner.svg';
import { ReactComponent as swapscannerFull } from '@/assets/logos/logo_swapscanner_full.svg';

const ethereumImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/logo_ethereum_dk.png')} />
);
const kaikasImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/logo_kaikas_dk.png')} />
);
const klayImg = (props): JSX.Element => <img width={24} {...props} src={require('@/assets/logos/logo_klay_dk.png')} />;
const klipImg = (props): JSX.Element => <img width={24} {...props} src={require('@/assets/logos/logo_klip_wt.png')} />;
const metamaskImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/logo_metamask_dk.png')} />
);
const perImg = (props): JSX.Element => <img width={24} {...props} src={require('@/assets/logos/logo_per_dk.png')} />;
const wklayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/logo_wklay_dk.png')} />
);
const tokenImg = (props): JSX.Element => <img {...props} src={props.icon_src} />;

const channelinImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/logo_channelin_dk.png')} />
);

const facebookGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_facebook_off.png')} />
);
const facebookImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_facebook.png')} />
);
const googleGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_google_off.png')} />
);
const googleImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_google.png')} />
);
const kakaoGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_kakao_off.png')} />
);
const kakaoImg = (props): JSX.Element => <img width={24} {...props} src={require('@/assets/logos/social_kakao.png')} />;
const naverGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_naver_off.png')} />
);
const naverImg = (props): JSX.Element => <img width={24} {...props} src={require('@/assets/logos/social_naver.png')} />;
const twitterGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_twitter_off.png')} />
);
const twitterImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('@/assets/logos/social_twitter.png')} />
);

export default {
	swapscannerFull,
	swapscanner,
	ethereum,
	kaikas,
	klay,
	klayBg,
	klip,
	kmImg,
	kmDk,
	kmWt,
	kmV2Two,
	kmV3Two,
	metamask,
	per,
	wklay,
	perBg,
	wklayBg,
	profile,
	ethereumImg,
	kaikasImg,
	klayImg,
	klipImg,
	metamaskImg,
	perImg,
	wklayImg,
	channelinImg,
	logoChin,
	logoSqr,
	tokenImg,
};
