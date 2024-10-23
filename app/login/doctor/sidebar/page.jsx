// // import {
// //   Card,
// //   Typography,
// //   List,
// //   ListItem,
// //   ListItemPrefix,
// //   ListItemSuffix,
// //   Chip,
// // } from "@material-tailwind/react";
// // import {
// //   PresentationChartBarIcon,
// //   ShoppingBagIcon,
// //   UserCircleIcon,
// //   Cog6ToothIcon,
// //   InboxIcon,
// //   PowerIcon,
// // } from "@heroicons/react/24/solid";
 
// // export default function DefaultSidebar() {
// //   return (
// //     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
// //       <div className="mb-2 p-4">
// //         <Typography variant="h5" color="blue-gray">
// //           Sidebar
// //         </Typography>
// //       </div>
// //       <List>
// //         <ListItem>
// //           <ListItemPrefix>
// //             <PresentationChartBarIcon className="h-5 w-5" />
// //           </ListItemPrefix>
// //           Dashboard
// //         </ListItem>
// //         <ListItem>
// //           <ListItemPrefix>
// //             <ShoppingBagIcon className="h-5 w-5" />
// //           </ListItemPrefix>
// //           E-Commerce
// //         </ListItem>
// //         <ListItem>
// //           <ListItemPrefix>
// //             <InboxIcon className="h-5 w-5" />
// //           </ListItemPrefix>
// //           Inbox
// //           <ListItemSuffix>
// //             <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
// //           </ListItemSuffix>
// //         </ListItem>
// //         <ListItem>
// //           <ListItemPrefix>
// //             <UserCircleIcon className="h-5 w-5" />
// //           </ListItemPrefix>
// //           Profile
// //         </ListItem>
// //         <ListItem>
// //           <ListItemPrefix>
// //             <Cog6ToothIcon className="h-5 w-5" />
// //           </ListItemPrefix>
// //           Settings
// //         </ListItem>
// //         <ListItem>
// //           <ListItemPrefix>
// //             <PowerIcon className="h-5 w-5" />
// //           </ListItemPrefix>
// //           Log Out
// //         </ListItem>
// //       </List>
// //     </Card>
// //   );
// // }

// import {
//     Card,
//     Typography,
//     List,
//     ListItem,
//     ListItemPrefix,
//     ListItemSuffix,
//     Chip,
//   } from "@material-tailwind/react";
//   import {
//     PresentationChartBarIcon,
//     ShoppingBagIcon,
//     UserCircleIcon,
//     Cog6ToothIcon,
//     InboxIcon,
//     PowerIcon,
//   } from "@heroicons/react/24/solid";
  
//   export default function DefaultSidebar() {
//     return (
//       <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-6 bg-light-blue-50 shadow-xl shadow-blue-gray-900/5">
//         <div className="mb-6 p-4">
//           <Typography variant="h5" color="blue-gray">
//             Docto's Menu
//           </Typography>
//         </div>
//         <List className="space-y-4">
//           <ListItem className="p-4">
//             <ListItemPrefix>
//               <PresentationChartBarIcon className="h-6 w-6 text-light-blue-700" />
//             </ListItemPrefix>
//             Dashboard
//           </ListItem>
//           <ListItem className="p-4">
//             <ListItemPrefix>
//               <ShoppingBagIcon className="h-6 w-6 text-light-blue-700" />
//             </ListItemPrefix>
//             Today's Appointment
//           </ListItem>
//           <ListItem className="p-4">
//             <ListItemPrefix>
//               <InboxIcon className="h-6 w-6 text-light-blue-700" />
//             </ListItemPrefix>
//             Upcomming Appointment
            
//           </ListItem>
//           <ListItem className="p-4">
//             <ListItemPrefix>
//               <UserCircleIcon className="h-6 w-6 text-light-blue-700" />
//             </ListItemPrefix>
//             Profile
//           </ListItem>
//           <ListItem className="p-4">
//             <ListItemPrefix>
//               <Cog6ToothIcon className="h-6 w-6 text-light-blue-700" />
//             </ListItemPrefix>
//             Settings
//           </ListItem>
//           <ListItem className="p-4">
//             <ListItemPrefix>
//               <PowerIcon className="h-6 w-6 text-light-blue-700" />
//             </ListItemPrefix>
//             Log Out
//           </ListItem>
//         </List>
//       </Card>
//     );
//   }
  

'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Users, User, ChevronRight } from 'lucide-react'

const menuItems = [
  { name: "Today's Appointments", icon: Calendar, path: '/appointments/today' },
  { name: 'Upcoming Appointments', icon: Calendar, path: '/appointments/upcoming' },
  { name: 'My Patients', icon: Users, path: '/patients' },
  { name: 'My Profile', icon: User, path: '/profile' },
]

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-md h-screen">
      {/* <div className="p-4 bg-[#1C4980] text-white">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="bg-white text-[#1C4980] p-1 rounded mr-2">
            <img src="/placeholder.svg?height=24&width=24" alt="Logo" className="w-6 h-6" />
          </span>
          SmartMed
        </h1>
      </div> */}
      <nav className="mt-4">
        <div className="px-4 py-2 text-sm text-gray-600 font-bold">Doctor's Menu</div>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`block px-4 py-2 text-sm transition-colors duration-200 ease-in-out
              ${pathname === item.path
                ? 'bg-[#E5EEF6] text-[#1C4980] font-semibold'
                : 'text-gray-600 hover:bg-[#F0F7FF] hover:text-[#1C4980]'
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </div>
              {pathname === item.path && <ChevronRight className="w-4 h-4" />}
            </div>
            {/* {item.name === "Today's Appointments" && (
              <span className="float-right bg-[#1C4980] text-white rounded-full px-2 py-1 text-xs ml-2">
                24
              </span>
            )} */}
          </Link>
        ))}
      </nav>
    </div>
  )
}