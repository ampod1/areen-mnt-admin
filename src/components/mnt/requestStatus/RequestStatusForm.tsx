import React from 'react';
import {
	ReferenceInput,
	SelectInput,
	SimpleForm,
	useLocale,
} from 'react-admin';

const RequestStatusForm = (props: any) => {
	const lang = useLocale();

	return (
		<SimpleForm {...props}>
			<ReferenceInput
				source="req_status_type_id"
				reference="mnt_request_status_type"
			>
				<SelectInput optionText={`label.${lang}`} />
			</ReferenceInput>
			<ReferenceInput
				label="custom_root.main.req_code"
				source="request_id"
				reference="mnt_request"
			>
				<SelectInput optionText="code" />
			</ReferenceInput>
		</SimpleForm>
	);
};

export default RequestStatusForm;
