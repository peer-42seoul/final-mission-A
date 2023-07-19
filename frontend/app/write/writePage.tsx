import Header from "@/components/Header";
import { TextField, Button, Select, MenuItem, Box, Container, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import getCurrentTime from "@/util/util";

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('minishell');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const url = 'https://localhost:8080/v1/question'

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          nickname: userName,
          category: category,
          password: password,
          content: content,
          createdAt: getCurrentTime(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Post Error');
    }
  }

  return (
    <Container maxWidth="md">
      <Header head={'게시글 작성'} />
      <Box component="form" onSubmit={formSubmit} >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TextField value={title} onChange={(e) => {setTitle(e.target.value)}} sx={{ mt: '10px', mr: '10px', maxWidth: '550px' }} label="Title" required autoFocus fullWidth />
        <FormControl sx={{ mt: '10px', minWidth: '120px' }}>
          <InputLabel id="Category-select-label">Category</InputLabel>
          <Select
            labelId="Category-select-label"
            id="Category-select"
            value={category}
            label="Category"
            onChange={(e) => { setCategory(e.target.value as string) }}
          >
            <MenuItem value={'minishell'}>minishell</MenuItem>
            <MenuItem value={'ft_irc'}>ft_irc</MenuItem>
            <MenuItem value={'minirt'}>minirt</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TextField value={userName} onChange={(e) => setUserName(e.target.value)} sx={{ mt: '10px', mr: '10px' }} label="Nick Name" required />
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mt: '10px' }} type="password" label="Password" autoComplete="off" required />
      </Box>
      <TextField value={content} onChange={(e) => setContent(e.target.value)}sx={{ mt: '10px' }} variant="outlined" multiline rows={20} label="Content" required fullWidth />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        mb: '30px',
      }}>
        <Button variant="outlined" sx={{ marginTop: '10px', marginRight: '10px' }} type="submit">작성</Button>
        <Button variant="outlined" href='/' sx={{ marginTop: '10px' }} type="button">취소</Button>
      </Box>
      </Box>
    </Container>
  );
}