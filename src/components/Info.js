import React from 'react';
import SmallHeader from './SmallHeader';
import Home from './Home';

const Info = () => {
	return (
		<div>
			<div className="hide">
				<Home />
			</div>
			<SmallHeader text={'Всичко за нас'}/>
		</div>
	);
}

export default Info;
