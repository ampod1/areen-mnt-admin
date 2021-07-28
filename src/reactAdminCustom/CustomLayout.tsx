import { Layout, Sidebar, SidebarProps, useLocale } from 'react-admin';
import CustomMenu from './CustomMenu';

const CustomSidebar = (props: SidebarProps) => {
	return <Sidebar {...props} />;
};

export default function CustomLayout(props: any) {
	const locale = useLocale();
	console.log(props);
	return (
		<Layout
			style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}
			{...props}
			menu={CustomMenu}
			sidebar={CustomSidebar}
		/>
	);
}
