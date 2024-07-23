import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { EyeIcon, EyeOff } from 'lucide-react'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    console.log(username, password, remember)

    const { push } = useRouter()

    const handleLogin = () => {
        push('/dashboard')
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-8 px-4">
            <div className='flex justify-center'>
                <Image src="/images/TS_gold_white_square.png" alt="logo" width={70} height={70} priority className='w-auto' />
            </div>
            <form onSubmit={handleLogin}>
                <Card className='w-full md:w-[400px] rounded-xl'>
                    <CardHeader className='flex justify-center flex-col'>
                        <CardTitle className='text-2xl text-center'>Sign in to an account</CardTitle>
                        <CardDescription className='text-center'>Silahkan masukan username dan password</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col w-full gap-4'>
                        <div className='space-y-1'>
                            <Label htmlFor="username">Username</Label>
                            <Input
                                className="w-full"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    className="w-full"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button variant='link' className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer px-2">

                                    {/* <EyeOff className='size-4 text-muted-foreground' /> */}
                                    <EyeIcon className='size-4 text-muted-foreground' />
                                </Button>

                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" onCheckedChange={() => setRemember(!remember)} />
                            <label
                                htmlFor="remember"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember me
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-4'>
                        <Button className='w-full' onClick={handleLogin}>
                            Login
                        </Button>
                        <p className='text-center text-sm text-muted-foreground'>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default LoginPage
