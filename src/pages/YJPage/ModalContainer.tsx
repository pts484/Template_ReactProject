import React, { Children, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

declare interface PROPS {
	titleValue?: string;
	contentValue?: string;
	children?: JSX.Element;
	handleSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModalContainer = (props: PROPS) => {
	const { titleValue, contentValue, children, handleSubmit } = props;
	const [view, setView] = useState(false);

	const showView = () => {
		setView(!view);
	};

	return (
		<div>
			<button className="btn-filled-lg" onClick={showView}>
				눌러!
			</button>

			{/* modal component */}
			{view ? (
				<div className="modals-box">
					<div className="modals-bg" onClick={showView}></div>
					<div className="modals-content">
						<div className="modals-header">
							<h6>{titleValue}</h6>
							<button onClick={showView} className="btn-bg-none pt-1">
								<FontAwesomeIcon icon={faX} />
							</button>
						</div>
						<p className="modals-body">{contentValue}</p>
						<div className="modals-footer">
							<button className="btn-grayfilled-xs me-2" onClick={showView}>
								close
							</button>
							{props.children}
							<button
								type="submit"
								className="btn-filled-xs"
								onClick={() => {
									// handleSubmit;
									showView();
								}}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};
