import IconEvent from '@material-ui/icons/Event';
import * as React from 'react';
// import Search from './Search';
import ProjectFilterList from './ProjectFilter';

import {
	Button,
	CreateButton,
	ExportButton,
	TopToolbar,
	useListContext,
} from 'react-admin';

const ListActions = (props: any) => {
	const { total } = useListContext();
	return (
		<TopToolbar>
			{/* {cloneElement(props.filters, { context: 'button' })} */}
			<CreateButton />
			<ExportButton disabled={total === 0} />
			{/* Add your custom actions */}
			{/* <Search source={props.source} placeholder={props.placeholder} /> */}
		</TopToolbar>
	);
};
export default ListActions;
