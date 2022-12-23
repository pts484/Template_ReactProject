import React from 'react';
import cx from 'classnames';

import Input from '../components/Input';
import DoubleInput from '../components/Input/DoubleInput';
import SmallInput from '../components/Input/SmallInput';
import IconInput from '../components/Input/IconInput';

import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

const InputView = () => (
	<div className="container">
		<h1>Input</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<br />
		<hr />
		<br />
		{/* Header */}
		<div className="row row-cols-5 mb-3">
			<div className="col">
				<input className="cic-input-default" placeholder="플레이스홀더" />
			</div>
			<div className="col">
				<input className={cx('cic-input-default', 'cic-input-default-focus')} defaultValue={'내용 입력 중'} />
			</div>
			<div className="col">
				<input className="cic-input-default" placeholder="플레이스홀더" defaultValue={'내용 입력'} />
			</div>
			<div className="col">
				<input className="cic-input-default" placeholder="플레이스홀더" readOnly={true} />
			</div>
			<div className="col">
				<Input
					// className={'cic-input-default'}
					placeholder="플레이스홀더"
				/>
			</div>
		</div>

		<div className="row row-cols-5 mb-3">
			<div className="col"></div>
			<div className="col">
				<div className={cx('cic-input-default', 'cic-input-error-focus')}>
					<input placeholder="플레이스홀더" defaultValue={'내용 입력 중'} />
				</div>
				<div className={'message-error-box'}>
					<ICONS.error width="16" />
					<p>에러 메세지</p>
				</div>
			</div>
			<div className="col">
				<div className={cx('cic-input-default', 'cic-input-error')}>
					<input placeholder="플레이스홀더" defaultValue={'내용 입력'} />
				</div>
				<div className={'message-error-box'}>
					<ICONS.error width="16" />
					<p>에러 메세지</p>
				</div>
			</div>
			<div className="col"></div>
			<div className="col">
				<Input defaultValue={'실패'} placeholder="플레이스홀더" caption={{ error: '이거슨 에러다!' }} />
			</div>
		</div>

		<div className="row row-cols-5 mb-3">
			<div className="col"></div>
			<div className="col">
				<div className={cx('cic-input-default', 'cic-input-success-focus')}>
					<input placeholder="플레이스홀더" defaultValue={'내용 입력 중'} />
				</div>
				<div className={'message-success-box'}>
					<ICONS.success width="16" />
					<p>성공 메세지</p>
				</div>
			</div>
			<div className="col">
				<div className={cx('cic-input-default', 'cic-input-success')}>
					<input placeholder="플레이스홀더" defaultValue={'내용 입력'} />
				</div>
				<div className={'message-success-box'}>
					<ICONS.success width="16" />
					<p>성공 메세지</p>
				</div>
			</div>
			<div className="col"></div>
			<div className="col">
				<Input
					// className={'cic-input-default'}
					defaultValue={'성공'}
					placeholder="플레이스홀더"
					caption={{ success: '이거슨 성공이다!' }}
				/>
			</div>
		</div>
		<div className="row row-cols-5 mb-3">
			<div className="col">
				<Input
					className=""
					onValue={(value, selValue) => {
						// console.log(value, selValue);
					}}
				/>
			</div>
			<div className="col">
				<Input />
			</div>
			<div className="col">
				<Input />
			</div>
			<div className="col">
				<Input />
			</div>
			<div className="col">
				<Input
					className=""
					defaultValue={'성공'}
					placeholder="플레이스홀더"
					// caption={{ success: '이거슨 성공이다!' }}
					caption={{ error: '이거슨 실패이다!' }}
					selects={[
						{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
						{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
						{ icon: <LOGOS.ethereumImg />, name: 'ethereum', value: 'ethereum' },
					]}
					onValue={(value, selValue) => {
						// console.log(value, selValue);
					}}
				/>
			</div>
			<div className="col-6">
				<DoubleInput
					inputs={{
						first: {
							type: 'number',
							defaultValue: '1',
							placeholder: '수량',
							min: 0,
							// readOnly: true,
						},
						last: {
							type: 'number',
							// defaultValue : '1',
							placeholder: '개당 가격',
							min: 0,
						},
					}}
					caption={{ info: '인포 메세지' }}
					selects={[
						{ icon: <LOGOS.klay_bg />, name: 'KLAY', value: 'klay' },
						{ icon: <LOGOS.per_bg />, name: 'PER', value: 'per' },
						{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
					]}
					onValue={(first, last, select) => console.log({ first, last, select })}
				/>
			</div>
			<div className="col-6">
				<DoubleInput
					inputs={{
						first: {
							type: 'number',
							defaultValue: '1',
							placeholder: '수량',
							min: 0,
						},
						last: {
							type: 'number',
							// defaultValue : '1',
							placeholder: '개당 가격',
							min: 0,
						},
					}}
					caption={{ success: '이거슨 성공이다!' }}
					selects={[
						{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
						{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
						{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
					]}
				/>
			</div>
			<div className="col-6">
				<DoubleInput
					inputs={{
						first: {
							type: 'number',
							defaultValue: '1',
							placeholder: '수량',
							min: 0,
						},
						last: {
							type: 'number',
							// defaultValue : '1',
							placeholder: '개당 가격',
							min: 0,
						},
					}}
					caption={{ error: '이거슨 실패이다!' }}
					selects={[
						{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
						{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
						{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
					]}
				/>
			</div>
		</div>
		<div className="row row-cols-6 mb-4">
			<div className="col">
				<SmallInput defaultValue={'1'} caption={{ info: '기본' }} />
			</div>
			<div className="col">
				<SmallInput defaultValue={'2'} caption={{ error: '에러' }} />
			</div>
			<div className="col">
				<SmallInput defaultValue={'3'} caption={{ success: '성공' }} />
			</div>
		</div>
		<div className="row row-cols-3 mb-3">
			<div className="col-6">
				<textarea className="modalTextArea" placeholder="받는 분의 지갑주소를 입력해주세요"></textarea>
				<div className={'message-info-box'}>
					<ICONS.info className="info-main" width="16" />
					<p>전송하면 복구할 수 없으니 정확한 주소를 입력해주세요.</p>
				</div>
			</div>
			<div className="col-6">
				<div className={'cic-double-input'}>
					<span className="cic-icon-input">
						<ICONS.sns_telegram />
					</span>
					<input className="cic-icon-input-p-2" />
				</div>
			</div>
		</div>
	</div>
);

export default InputView;
