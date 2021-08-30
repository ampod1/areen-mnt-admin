import { gql } from '@apollo/client';

export const PROJECT_FIELDS_FRAGMENT = gql`
	fragment ProjectFields on mnt_project {
		city_id
		code
		created_at
		id
		label
	}
`;
export const UNIT_FIELDS_FRAGMENT = gql`
	fragment UnitFields on mnt_unit {
		id
		code
		unit_number
	}
`;
export const CUSTOMER_FIELDS_FRAGMENT = gql`
	fragment CustomerFields on bsc_customer {
		id
		code
		name
	}
`;

export const REQ_STATUS_TYPE_FIELDS_FRAGMENT = gql`
	fragment StatusTypesFields on mnt_request_status_type {
		id
		code
		label
	}
`;

export const GET_PROJECTS = gql`
	${PROJECT_FIELDS_FRAGMENT}
	query mnt_project {
		mnt_project {
			...ProjectFields
		}
	}
`;
export const GET_REQUEST_FILTERS = gql`
	${UNIT_FIELDS_FRAGMENT}
	${CUSTOMER_FIELDS_FRAGMENT}
	${REQ_STATUS_TYPE_FIELDS_FRAGMENT}
	query request_filters {
		mnt_unit {
			...UnitFields
		}
		bsc_customer {
			...CustomerFields
		}
		mnt_request_status_type {
			...StatusTypesFields
		}
	}
`;
