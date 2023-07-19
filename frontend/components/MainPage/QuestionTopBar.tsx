import {Box} from '@mui/material'

export default function QuestionTopBar({children} : {children: React.ReactNode}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
      {children}
    </Box>
  );
}