import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
	query mnt_project {
		mnt_project {
			city_id
			code
			created_at
			id
			label
		}
	}
`;
