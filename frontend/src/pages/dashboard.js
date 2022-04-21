import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'

const Dashboard = () => {
    const getUsers = async () => {
        axios
            .get('/api/user')
            .then((res) => console.log(res.data))
    }

    const getTest = async () => {
        axios
            .get('/api/test')
            .then((res) => console.log(res.data))
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>

                        <button onClick={getUsers} className='bg-blue-500 px-4 py-2 rounded mx-4 text-white'>/user</button>

                        <button onClick={getTest} className='bg-blue-500 px-4 py-2 rounded mx-4 text-white'>/test</button>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
