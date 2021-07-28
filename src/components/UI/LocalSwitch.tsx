import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useLocale, useSetLocale } from 'react-admin';

const LocaleSwitcher = () => {
	const locale = useLocale();
	const setLocale = useSetLocale();

	const changeLocaleHandler = (lang: 'ar' | 'en') => {
		setLocale(lang);
		localStorage.setItem('current_locale', lang);
	};
	return (
		<div>
			<Typography component="h4" align="center">
				Language
			</Typography>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Button
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginInline: '5px',
					}}
					disabled={locale === 'ar'}
					onClick={() => changeLocaleHandler('ar')}
				>
					<img
						style={{ width: '30px', height: '30px' }}
						src="/ksa.svg"
						alt="Arabic language"
					/>
					<span style={{ marginInline: '5px' }}>AR</span>
				</Button>
				<Button
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginInline: '5px',
					}}
					disabled={locale === 'en'}
					onClick={() => changeLocaleHandler('en')}
				>
					<img
						style={{ width: '30px', height: '30px' }}
						src="/usa.svg"
						alt="English language"
					/>
					<span style={{ marginInline: '5px' }}>EN</span>
				</Button>
			</div>
		</div>
	);
};

export default LocaleSwitcher;
