import useTransition from '@/hooks/useTransition';
import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';

const SidebarItems = () => {

    const { t, locale } = useTransition()

    const [routeLinks, setRouteLinks] = useState([]);

    useEffect(() => {
        setRouteLinks([
            {
                title: t.about,
                icon: 'user',
                href: '/about'
            },
            {
                title: t.resume,
                icon: 'file',
                href: '/resume'
            },
            {
                title: t.projects,
                icon: 'project',
                href: '/projects'
            },
        ])
    }, [locale]);

    return (
        <>
            {routeLinks.map(item => {
                return <SidebarItem key={item.title} item={item} />
            })}
        </>
    )
}

export default SidebarItems