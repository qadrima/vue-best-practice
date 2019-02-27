import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/auth/SignIn'

export default [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        meta: { requiresNonAuth: true }
    }
]