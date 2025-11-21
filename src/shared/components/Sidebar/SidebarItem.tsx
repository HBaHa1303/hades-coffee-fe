'use client';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export default function SidebarItem({ icon, label, path }: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === path || pathname.startsWith(path + '/');

  const handleClick = () => {
    router.push(path);
  };

  return (
    <ListItemButton
      onClick={handleClick}
      selected={isActive}
      sx={{
        borderRadius: 1,
        mb: 0.5,
        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          '& .MuiListItemIcon-root': {
            color: 'white',
          },
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}