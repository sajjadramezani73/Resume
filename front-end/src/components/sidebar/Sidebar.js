import LoadSvgIcon from '@/utils/LoadSvgIcon'
import React, { useState } from 'react'
import SidebarItem from './components/SidebarItem';

const Sidebar = () => {

    const [routeLinks] = useState([
        {
            title: 'درباره من',
            icon: 'user',
            href: '/about'
        },
        {
            title: 'رزومه',
            icon: 'file',
            href: '/resume'
        },
        {
            title: 'پروژه ها',
            icon: 'project',
            href: '/projects'
        },
    ]);
    const [links] = useState([
        {
            icon: 'sun',
        },
        {
            icon: 'moon',
        },
    ]);

    return (
        <div className="h-full flex flex-col gap-y-2">
            <div className="bg-white rounded">
                {links.map(item => {
                    return <SidebarItem key={item.title} item={item} isLink={false} />
                })}
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