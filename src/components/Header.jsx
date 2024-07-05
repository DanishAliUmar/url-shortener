import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { LinkIcon, LogIn } from 'lucide-react'
const Header = () => {

    const navigate = useNavigate()
    const user = true;
    return (
        <nav className='py-4 flex items-center justify-between'>
            <Link to={'/'}>
                <h4 className="">LOGO.</h4>
            </Link>
            <div className="">
                {!user ?
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                    :
                    (
                        <DropdownMenu>
                            <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Danish Ali</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><LinkIcon className='mr-2 h-4 w-4'/><span className=""> My Links</span></DropdownMenuItem>
                                <DropdownMenuItem className={'text-red-400'}>
                                    <LogIn className='mr-2 h-4 w-4' />
                                    <span className="">Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                }
            </div>
        </nav>
    )
}

export default Header