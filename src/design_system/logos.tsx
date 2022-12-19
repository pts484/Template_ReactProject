import React from 'react';

import { ReactComponent as ethereum } from './Design_System/logos/logo_ethereum_dk.svg';
import { ReactComponent as kaikas } from './Design_System/logos/logo_kaikas_dk.svg';
import { ReactComponent as klay } from './Design_System/logos/logo_klay_dk.svg';
import { ReactComponent as klay_bg } from './Design_System/logos/logo_klay_bg_dk.svg';
import { ReactComponent as klip } from './Design_System/logos/logo_klip_wt.svg';
import { ReactComponent as km_img } from './Design_System/logos/logo_km_img_dk.svg';
import { ReactComponent as km_dk } from './Design_System/logos/logo_km_two_dk.svg';
import { ReactComponent as km_wt } from './Design_System/logos/logo_km_two_wt.svg';
import { ReactComponent as km_v2_two } from './Design_System/logos/logo_km_v2_two_wt.svg';
import { ReactComponent as km_v3_two } from './Design_System/logos/logo_km_v3_two_wt.svg';
import { ReactComponent as metamask } from './Design_System/logos/logo_metamask_dk.svg';
import { ReactComponent as per } from './Design_System/logos/logo_per_dk.svg';
import { ReactComponent as per_bg } from './Design_System/logos/logo_per_bg_dk.svg';
import { ReactComponent as wklay } from './Design_System/logos/logo_wklay_dk.svg';
import { ReactComponent as wklay_bg } from './Design_System/logos/logo_wklay_bg_dk.svg';
import { ReactComponent as profile } from './Design_System/logos/logo_profile_dk.svg';
import { ReactComponent as logo_chin } from './Design_System/logos/logo-chin-rec.svg';
import { ReactComponent as logo_sqr } from './Design_System/logos/logo-chin-sqr.svg';
import { ReactComponent as swapscanner } from './Design_System/logos/logo_swapscanner.svg';
import { ReactComponent as swapscanner_full } from './Design_System/logos/logo_swapscanner_full.svg';

const ethereumImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_ethereum_dk.png')} />
);
const kaikasImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_kaikas_dk.png')} />
);
const klayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_klay_dk.png')} />
);
const klipImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_klip_wt.png')} />
);
const metamaskImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_metamask_dk.png')} />
);
const perImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_per_dk.png')} />
);
const wklayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_wklay_dk.png')} />
);
const tokenImg = (props): JSX.Element => <img {...props} src={props.icon_src} />;

const channelinImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/logo_channelin_dk.png')} />
);

const facebookGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_facebook_off.png')} />
);
const facebookImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_facebook.png')} />
);
const googleGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_google_off.png')} />
);
const googleImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_google.png')} />
);
const kakaoGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_kakao_off.png')} />
);
const kakaoImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_kakao.png')} />
);
const naverGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_naver_off.png')} />
);
const naverImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_naver.png')} />
);
const twitterGrayImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_twitter_off.png')} />
);
const twitterImg = (props): JSX.Element => (
	<img width={24} {...props} src={require('./Design_System/logos/social_twitter.png')} />
);

export default {
	swapscanner_full,
	swapscanner,
	ethereum,
	kaikas,
	klay,
	klay_bg,
	klip,
	km_img,
	km_dk,
	km_wt,
	km_v2_two,
	km_v3_two,
	metamask,
	per,
	wklay,
	per_bg,
	wklay_bg,
	profile,
	ethereumImg,
	kaikasImg,
	klayImg,
	klipImg,
	metamaskImg,
	perImg,
	wklayImg,
	channelinImg,
	logo_chin,
	logo_sqr,
	tokenImg,
};
