'use client';
import { Container, Box, Card, Typography, Avatar, TextField, Pagination, Button } from "@mui/material";
import Header from "@/components/Header";
import React, {useState, useCallback, useEffect} from 'react';
import getCurrentTime from "@/util/util";
import { usePathname } from 'next/navigation';
   
interface AnswerData {
  nickname: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  recommend: number;
  questionId: number;
  answerId: number;
  adopted: boolean;
}

interface DetailData {
  nickname: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  answerList: Array<AnswerData>;
  type: string;
  title: string;
  category: string;
  recommend: number;
  view: number;
}

const questionData : DetailData = {
  nickname: "",
  content: "",
  createdAt: "",
  updatedAt: '',
  answerList: [
      {
          "nickname": "",
          "content": "",
          "createdAt": "",
          "updatedAt": '',
          "type": "",
          "recommend": 0,
          "questionId": 1,
          "answerId": 1,
          "adopted": false
      }
  ],
  type: "question",
  title: "",
  category: "",
  recommend: 0,
  view: 1
}

function AnswerBox({answerData} : {answerData: AnswerData}) {
  return (
    <>
      <Box sx={{
        mt: '10px',
        mr: '20px',
        ml: '20px',
        width: '100%',
      }}>
        <Card sx={{mr: '40px'}}
        variant="outlined" >
          <Box style={{
            margin: '20px',
            width: '100%',
            display: 'flex',
            }}>
            <Avatar sx={{ width: 30, height: 30, marginRight: '10px' }}>{answerData.nickname[0]}</Avatar>
            <Box>
              <Typography sx={{ fontSize: '15px' }} component="div">{answerData.nickname}</Typography>
              <Typography sx={{ fontSize: '10px', lineHeight: 1.5 }} component="div">{answerData.createdAt}</Typography>
            </Box>
          </Box>
          <Typography sx={{ margin: "20px" }} my={1}>
            {answerData.content}
          </Typography>
        </Card>
      </Box>
    </>
  )
}

export default function detailPage() {
  const id = usePathname().split('/')[2];
  const url = `http://localhost:8080/v1/question/${id}`
  const [content, setContent] = useState<DetailData>(questionData);
  const [answer, setAnswer] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const fetchData = useCallback(async (url: string) => {
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.log('Failed to fetch!');
    }
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: id,
          nickname: nickname,
          password: password,
          content: answer,
          createdAt: getCurrentTime(),
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(data);
      fetchData(url);
    }
    catch (error) {
      console.log('Failed to fetch!');
    }
  }

  return (
    <Container maxWidth="md">
      <Header head={'Peer flow'} />
      <Card variant="outlined" >
        {content && (
          <>
            <Typography sx={{ margin: '20px' }} variant="h6">{`Q. ${content.title}`}</Typography>
            <Box style={{
              margin: '20px',
              display: 'flex',
            }}>
              <Avatar sx={{ width: 30, height: 30, marginRight: '10px' }}>{content.nickname[0]}</Avatar>
              <Box>
                <Typography sx={{ fontSize: '15px' }} component="div">{content.nickname}</Typography>
                <Typography sx={{ fontSize: '10px', lineHeight: 1.5 }} component="div">{content.createdAt}</Typography>
              </Box>
            </Box>
            <Typography sx={{ margin: "20px" }} my={1}>
              {content.content}
            </Typography>
          </>
        )}
      </Card>
      <Box sx={{
        mt: '20px',
        mr: '20px',
        ml: '20px',
        display: 'flex',
      }}>
        <Card sx={{ width: '100%' }} variant="outlined">
          <Typography sx={{ fontSize: '15px', margin: '10px' }} component="div">댓글</Typography>
        </Card>
      </Box>
      {content && content.answerList.map((answerData) => <AnswerBox key={answerData.answerId} answerData={answerData} />)}
      <Box 
        component={'form'}
        onSubmit={onSubmit}
        sx={{
        mt: '5px',
        mr: '20px',
        ml: '20px',
        mb: '20px',
        flexDirection: 'row',
      }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            <TextField sx={{
              width: '100%',
              mr: '10px',
            }} label="답변을 입력하세요"
            multiline rows={5}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
             />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <TextField value={nickname} label="닉네임" onChange={e => setNickname(e.target.value)} />
              <TextField value={password} label="비밀번호" onChange={e => setPassword(e.target.value)}/>
              <Button variant="outlined" type="submit">등록</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Pagination sx={{
        mt: '5px',
        fontSize: '10px',
      }} count={3} page={1} />
      </Box>
    </Container >
  );
}
