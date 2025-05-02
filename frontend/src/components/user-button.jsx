import { mockUser, placeholderUserImage } from '@/constants';
import { cn } from '@/lib/utils';
import { LogOut, User2, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { buttonVariants } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = mockUser;
  const dropdownItems = [
    {
      label: 'Profile',
      icon: User2,
      onClick: () => navigate('/profile'),
    },
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      onClick: () => navigate('/Dashboard'),
    },
    {
      label: 'Logout',
      icon: LogOut,
      onClick: () => {},
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(
          'group',
          buttonVariants({
            variant: 'ghost',
            size: 'icon',
            className: 'size-11 !rounded-full',
          })
        )}
      >
        <span className="relative overflow-hidden size-9 rounded-full">
          <img
            src={user.imageUrl || placeholderUserImage}
            alt="Avatar"
            className="rounded-full"
          />
          <span className="absolute top-0 block h-full w-1 -rotate-[25deg] bg-white blur-[1.7px] -left-2 group-hover:left-[105%] transition-all duration-300" />
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]" align="end">
        <div className="flex items-center gap-3">
          <img
            src={user.imageUrl || placeholderUserImage}
            alt="Avatar"
            className="rounded-full min-w-12 size-12 object-cover"
          />
          <div className="text-sm">
            <p className="line-clamp-1">{user.email}</p>
            <p className="leading-4 text-muted-foreground">@{user.username}</p>
          </div>
        </div>
        <ul className="flex flex-col pt-3">
          {dropdownItems.map(({ label, icon, onClick }) => {
            const Icon = icon;
            return (
              <li
                onClick={() => {
                  onClick();
                  setOpen(false);
                }}
                key={label}
                role="button"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'lg' }),
                  'text-foreground/70 hover:text-foreground/70 hover:bg-secondary/50 justify-start'
                )}
              >
                <Icon className="text-muted-foreground size-4" />
                {label}
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
