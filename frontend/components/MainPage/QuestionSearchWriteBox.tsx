import { Box, TextField, Button, InputAdornment, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function QuestionSearchWriteBox({title, setTitle, setIsSearch}: 
  {
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
      <TextField
        id="outlined-search"
        type="search"
        placeholder="검색"
        size={'small'}
        sx={{ marginTop: '15px' }}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'}>
              <IconButton
                onClick={() => {
                  title !== '' ? setIsSearch(true) : setIsSearch(false);
                }}
              >
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button href='/write' sx={{ marginLeft: '5px' }} variant='outlined'>글쓰기</Button>
    </Box>
  )
}