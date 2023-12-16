import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed';
import Widgets from '@/components/Widgets';

const page = () => {
  return (
    <div>
      <main className=" flex min-h-screen mx-auto">
        <Sidebar />
        <Feed/>
        <Widgets/>
      </main>
    </div>
  );
}

export default page
