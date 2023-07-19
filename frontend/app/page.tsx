'use client'
import { Container, CssBaseline} from '@mui/material';
import MainBoard from '@/components/MainPage/MainBoard';
import QuestionList from '../components/MainPage/QuestionList';
import QuestionTopBar from '@/components/MainPage/QuestionTopBar';
import QuestionSortSelectBox from '@/components/MainPage/QuestionSortSelectBox';
import QuestionSearchWriteBox from '@/components/MainPage/QuestionSearchWriteBox';
import QuestionPagination from '@/components/MainPage/QuestionPagination';
import SideBar from '@/components/MainPage/SideBar'
import React, { useState, useCallback, useEffect } from 'react';
import './globals.css';
import Header from '../components/Header';
import { QuestionData } from '@/interface/interface';

const questionData = {
  // 아래는 게시글의 정보를 담은 데이터입니다.
  "content": [
      {
          "questionId": 1,
          "title": "미니쉘 짱",
          "answerCount": 1,
          "category": "minishell",
          "recommend": 0,
          "view": 0,
          "nickname": "san",
          "createdAt": "2023-07-14/16:45:48",
          "content": "응 안해"
      },
      {
        "questionId": 2,
        "title": "미니쉘 짱짱",
        "answerCount": 1,
        "category": "minishell",
        "recommend": 0,
        "view": 0,
        "nickname": "san",
        "createdAt": "2023-07-13/16:48:48",
        "content": "응 안해"
    },
  ],
  // 아래는 페이징 처리를 위한 데이터입니다.
  "pageable": {
      // 아래는 페이지의 정렬 기준을 나타냅니다.
      "sort": {
          "empty": true, // 정렬할 데이터가 없는지 나타냅니다.
          "sorted": false, // 정렬이 되었는지 나타냅니다.
          "unsorted": true // 정렬이 되지 않았는지 나타냅니다.
      },
      "offset": 0, // 페이지의 시작 인덱스를 나타냅니다.
      "pageNumber": 0, // 페이지의 인덱스를 나타냅니다.
      "pageSize": 10, // 페이지의 사이즈를 나타냅니다.
      "paged": true, // 페이징 처리가 되었는지 나타냅니다.
      "unpaged": false // 페이징 처리가 되지 않았는지 나타냅니다.
  },
  "last": true, // 마지막 페이지인지 나타냅니다.
  "totalElements": 1, // 전체 게시글의 개수를 나타냅니다.
  "totalPages": 1, // 전체 페이지의 개수를 나타냅니다. 
  "size": 10, // 페이지의 사이즈를 나타냅니다. 바깥쪽 사이즈를 
  "number": 0, // 페이지의 인덱스를 나타냅니다.
  // 아래는 페이지의 정렬 기준을 나타냅니다.
  "sort": {
      "empty": true,
      "sorted": false,
      "unsorted": true
  },
  "first": true, // 첫번째 페이지인지 나타냅니다.
  "numberOfElements": 1, // 현재 페이지의 게시글 개수를 나타냅니다.
  "empty": false // 페이지가 비어있는지 나타냅니다.
}

export default function Home() {
  const [category, setCategory] = useState<string>(() => "all");
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState<string>('latest');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [questionContent, setQuestionContent] = useState<QuestionData>(questionData);
  const url = isSearch === true ?
    'http://localhost:8080/v1/search?title=' + title + '&sort=' + sort + '&page=' + page + '&size=10' 
  : 'http://localhost:8080/v1?category=' + category +'&sort=' + sort + '&page=' + page + '&size=10';
 
  const fetchData = useCallback(async (url: string) => {
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setQuestionContent(data);
    } catch (error) {
      console.log('Failed to fetch!');
    }
  }, []);
  
  useEffect(() => {
    fetchData(url);
  }, [fetchData, page, sort, category, isSearch]);

  return (
    <Container sx={{
                  display: 'flex',
                }}>
      <CssBaseline />
      <MainBoard>
        <Header head={category}/>
        <QuestionTopBar>
          <QuestionSortSelectBox  name={'sort select'} sort={sort} setSort={setSort}/>
          <QuestionSearchWriteBox title={title} setTitle={setTitle} setIsSearch={setIsSearch}/>
        </QuestionTopBar>
        <QuestionList questionData={questionContent}/>
        <QuestionPagination totalPage={questionData.totalPages} setPage={setPage} page={page}/>
      </MainBoard>
      <SideBar setCategory={setCategory} setTitle={setTitle} setIsSearch={setIsSearch}/>
    </Container>
  );
}
