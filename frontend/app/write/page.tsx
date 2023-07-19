'use client';
import WritePage from './writePage';

function Page() {
  return (
    <>
      <WritePage />
    </>
  )
}

// function WritePage() {
//   const titleRef = useRef<HTMLInputElement>(null);
//   const categoryRef = useRef<HTMLSelectElement>(null);
//   const userNameRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const contentRef = useRef<HTMLInputElement>(null);
//   const [titleIsValid, setTitleIsValid] = useState<boolean>(true);
//   const [categoryIsValid, setCategoryIsValid] = useState<boolean>(true);
//   const [userNameIsValid, setUserNameIsValid] = useState<boolean>(true);
//   const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
//   const [contentIsValid, setContentIsValid] = useState<boolean>(true);

//   const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const enteredTitle = titleRef.current!.value;
//     const enteredCategory = categoryRef.current!.value;
//     const enteredUserName = userNameRef.current!.value;
//     const enteredPassword = passwordRef.current!.value;
//     const enteredContent = contentRef.current!.value;
//     enteredTitle.trim().length === 0 ? setTitleIsValid(false) : setTitleIsValid(true);
//     enteredCategory.trim().length === 0 ? setCategoryIsValid(false) : setCategoryIsValid(true);
//     enteredUserName.trim().length === 0 ? setUserNameIsValid(false) : setUserNameIsValid(true);
//     enteredPassword.trim().length === 0 ? setPasswordIsValid(false) : setPasswordIsValid(true);
//     enteredContent.trim().length === 0 ? setContentIsValid(false) : setContentIsValid(true);
//     if (!enteredTitle.trim().length || !enteredCategory.trim().length || !enteredUserName.trim().length || !enteredPassword.trim().length || !enteredContent.trim().length) {
//       return;
//     }
//     console.log(enteredTitle, enteredCategory, enteredUserName, enteredPassword, enteredContent);
//     alert('게시글이 작성되었습니다.')
//     location.href = '/';
//   }

//   return (
//     <>
//       <Header head={'게시글 작성'} />
//       <div>
//         <form onSubmit={formSubmit}>
//           <div>
//             <label htmlFor='title'>게시글 제목</label>
//             <div>
//               <input ref={titleRef} type='text' id='title' autoComplete='off' />
//             </div>
//           </div>
//           {!titleIsValid && <p>값을 입력해주세요.</p>}
//           <div>
//             <label htmlFor='category'>카테고리</label>
//             <div>
//               <select ref={categoryRef} id='category'>
//                 <option value='' disabled selected style={{ display: 'none' }}>카테고리를 설정하세요</option>
//                 <option value='minishell'>minishell</option>
//                 <option value='ft_irc'>ft_irc</option>
//                 <option value='minirt'>minirt</option>
//               </select>
//             </div>
//           </div>
//           {!categoryIsValid && <p>값을 입력해주세요.</p>}
//           <div>
//             <label htmlFor='user name'>닉네임</label>
//             <div>
//               <input ref={userNameRef} type='text' id='user name' autoComplete='off' />
//             </div>
//           </div>
//           {!userNameIsValid && <p>값을 입력해주세요.</p>}
//           <div>
//             <label htmlFor='password'>패스워드</label>
//             <div>
//               <input ref={passwordRef} type='password' id='password' autoComplete='off' />
//             </div>
//           </div>
//           {!passwordIsValid && <p>값을 입력해주세요.</p>}
//           <div>
//             <label htmlFor='content'>설명</label>
//             <div>
//               <input ref={contentRef} type='text' id='content' autoComplete='off' />
//             </div>
//           </div>
//           {!contentIsValid && <p>값을 입력해주세요.</p>}
//           <button>작성</button>
//         </form>
//       </div>
//     </>
//   )
// }

export default WritePage;