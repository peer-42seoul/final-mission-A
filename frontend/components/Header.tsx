import {Box, Link} from '@mui/material';

export default function Header({head} : {head: string}) {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
        <Link sx={{textDecoration: 'none', color: 'black'}} href="/">
        <h2>{head === 'all' ? 'peer flow' : head}</h2>
        </Link>
      </Box>
    </header>
  )
}