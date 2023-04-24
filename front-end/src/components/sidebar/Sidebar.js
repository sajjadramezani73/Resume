import React, { useEffect, useState } from 'react'
import SidebarItem from './components/SidebarItem';
import useTransition from '@/hooks/useTransition';
import SwitchLanguage from './components/SwitchLanguage';

const Sidebar = () => {

    const { t, locale } = useTransition()

    const [routeLinks, setRouteLinks] = useState([]);
    const [links] = useState([
        {
            icon: 'sun',
        },
        {
            icon: 'moon',
        },
    ]);

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
        <div className="h-full flex flex-col gap-y-2">
            <div className="bg-white rounded pb-4">
                {links.map(item => {
                    return <SidebarItem key={item.icon} item={item} isLink={false} />
                })}
                <SwitchLanguage />
            </div>
            <div className="bg-white rounded flex-grow">
                {routeLinks.map(item => {
                    return <SidebarItem key={item.title} item={item} />
                })}
            </div>
        </div>
    )
}

export default Sidebar