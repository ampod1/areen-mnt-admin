import * as React from 'react';
import { Form } from 'react-final-form';
import { Box, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { TextInput, NullableBooleanInput, useListContext } from 'react-admin';

const Search = ({
	source,
	placeholder,
}: {
	source: string;
	placeholder: string;
}) => {
	const { displayedFilters, filterValues, setFilters, hideFilter } =
		useListContext();

	console.log('displayedFilters', displayedFilters);
	if (!displayedFilters.main) return null;

	const onSubmit = (values: any) => {
		if (Object.keys(values).length > 0) {
			setFilters(values, displayedFilters);
		} else {
			hideFilter('main');
		}
	};

	const resetFilter = () => {
		setFilters({}, []);
	};

	return (
		<Form onSubmit={onSubmit} initialValues={filterValues}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					{/* <SearchInput source={source} alwaysOn placeholder={placeholder} /> */}
					<Box display="flex" alignItems="flex-end" mb={1}>
						<Box component="span" mr={2}>
							{/* Full-text search filter. We don't use <SearchFilter> to force a large form input */}
							<TextInput
								resettable
								helperText={false}
								source={source}
								alwaysOn
								placeholder={placeholder}
								label="Search"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<SearchIcon color="disabled" />
										</InputAdornment>
									),
								}}
							/>
						</Box>
						<Box component="span" mr={2}>
							{/* Commentable filter */}
							{/* <NullableBooleanInput helperText={false} source="commentable" /> */}
						</Box>
						<Box component="span" mr={2} mb={1.5}>
							<Button variant="outlined" color="primary" type="submit">
								Filter
							</Button>
						</Box>
						<Box component="span" mb={1.5}>
							<Button variant="outlined" onClick={resetFilter}>
								Close
							</Button>
						</Box>
					</Box>
				</form>
			)}
		</Form>
	);
};

export default Search;
