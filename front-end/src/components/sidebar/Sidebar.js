import React, { useEffect, useState } from 'react'
import SidebarItem from './components/SidebarItem';
import Link from 'next/link';
import useTransition from '@/hooks/useTransition';

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
            <div className="bg-white rounded">
                {links.map(item => {
                    return <SidebarItem key={item.title} item={item} isLink={false} />
                })}
                <div>
                    <Link href="/about" locale="en">
                        To en
                    </Link>
                </div>
                <div>
                    <Link href="/about" locale="fa">
                        To fa
                    </Link>
                </div>
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