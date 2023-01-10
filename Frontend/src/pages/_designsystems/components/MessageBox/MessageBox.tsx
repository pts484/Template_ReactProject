import React from 'react';
import ICONS from '@/assets/icons';
import cx from 'classnames';
import { info } from 'console';

declare interface MESSAGE {
	error?: boolean;
	success?: boolean;
	classname?: string;
	message: string;
}

const MessageBox = (props: MESSAGE): JSX.Element => {
	const { error, success, classname, message } = props;

	const iconSet = () => {
		if (success) {
			return <ICONS.success width="16" />;
		} else if (error) {
			return <ICONS.error width="16" />;
		}
		return <ICONS.info width="16" />;
	};

	return (
		<>
			<div
				className={cx(
					classname || 'message-box-default',
					success && 'success-message',
					error && 'error-message',
				)}
			>
				{iconSet()}
				<p>{message}</p>
			</div>
		</>
	);
};

export default MessageBox;
