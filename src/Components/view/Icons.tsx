import React from 'react';

import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

const Icons = () => (
	<>
		<div className="container">
			<h1>Icons</h1>
			<span className="subhead-long-03 gray-500">설명</span>
			<br />
			<br />
			<hr />
			{/* Header */}

			<div className="row row-cols-1">
				<div>
					<br />
					<br />
					<ICONS.global />
					<ICONS.mypage />
					{/* <ICONS.mypage_two /> */}
					<ICONS.wallet />
					{/* <ICONS.like_line />
					<ICONS.like_fill /> */}
					<ICONS.priceoffer />
					<ICONS.setting />
					<ICONS.logout />
					{/* <ICONS.more_horiz /> */}
					<ICONS.hambuger />
					<ICONS.view />
					<ICONS.refresh />
					<ICONS.clock />
					<ICONS.people />
					<ICONS.gallery />
					<ICONS.disconnect />
				</div>
				<div>
					<ICONS.explore />
					<ICONS.perplus />
					<ICONS.helper />
					<ICONS.convert />
					{/* <ICONS.mypage_img /> */}
					<ICONS.offer />
					<ICONS.property />
					<ICONS.mint />
					<ICONS.fullscreen />
					<ICONS.info />
					<ICONS.verified />
					<ICONS.filter />
					{/* <ICONS.watchlist_line />
					<ICONS.watchlist_fill />
					<ICONS.more_verti /> */}
					<ICONS.shortcut />
					<ICONS.website />
				</div>
				<div>
					{/* <ICONS.sns_twitter />
					<ICONS.sns_telegram />
					<ICONS.sns_kakaoch />
					<ICONS.sns_medium /> */}
					<ICONS.transfer />
					<ICONS.profileimg />
					<ICONS.board />
					<ICONS.chart />
					<ICONS.subscribecancel />
					<ICONS.edit />
					<ICONS.clipboard />
					<ICONS.sale />
					<ICONS.transferarrow />
					<ICONS.offerhand />
					<ICONS.send />
					<ICONS.receive />
					<ICONS.subtract />
				</div>
				<div>
					{/* <ICONS.chevron_down />
					<ICONS.chevron_up />
					<ICONS.chevron_right />
					<ICONS.chevron_left /> */}
					<ICONS.success />
					<ICONS.back />
					<ICONS.loading />
					<ICONS.x />
					<ICONS.add />
					<ICONS.exclamation />
					<ICONS.error />
					{/* <ICONS.sns_discord /> */}
					<ICONS.chains />
					<ICONS.canceloffer />
				</div>
				<div className="mt-4">
					{/* <ICONS.toast_info />
					<ICONS.toast_success />
					<ICONS.toast_error /> */}
				</div>
				<div className="mt-4">
					<ICONS.sports />
					<ICONS.allcategories />
					<ICONS.art />
				</div>
				<div>
					<ICONS.music />
					<ICONS.game />
					<ICONS.photography />
				</div>
				<div>
					<ICONS.virtual />
					<ICONS.collectibles />
					<ICONS.utility />
				</div>
			</div>
		</div>
		<div className="container">
			<h1 className="mt-5">Logos</h1>
			<span className="subhead-long-03 gray-500">설명</span>
			<br />
			<br />
			<hr />
			{/* Header */}

			<div className="row row-cols-1">
				<div style={{ backgroundColor: '#aaaaaa' }}>
					<br />
					<br />
					<LOGOS.ethereumImg />
					<br />
					<br />
					<LOGOS.kaikasImg />
					<br />
					<br />
					<LOGOS.klayImg />
					<br />
					<br />
					<LOGOS.klipImg />
					<br />
					<br />
					{/* <LOGOS.km_img />
					<br />
					<br />
					<LOGOS.km_dk />
					<br />
					<br />
					<LOGOS.km_wt />
					<br />
					<br />
					<LOGOS.km_v2_two />
					<br />
					<br />
					<LOGOS.km_v3_two /> */}
					<br />
					<br />
					<LOGOS.metamaskImg />
					<br />
					<br />
					<LOGOS.perImg />
					<br />
					<br />
					<LOGOS.wklayImg />
					<br />
					<br />
					{/* <LOGOS.logo_chin /> */}
				</div>
			</div>
		</div>
	</>
);
export default Icons;
