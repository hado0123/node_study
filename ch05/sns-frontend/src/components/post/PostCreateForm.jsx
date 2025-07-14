import { TextField, Button, Box } from '@mui/material'
import { useState } from 'react'

function PostCreateForm({ onSubmit }) {
   const [imgUrl, setImgUrl] = useState('') // 이미지 경로(파일명 포함)
   const [imgFile, setImgFile] = useState(null) // 이미지 파일 객체
   const [content, setContent] = useState('') // 게시물 내용
   const [hashtags, setHashtags] = useState('') //해시태그

   // 이미지 미리보기
   const handleImageChange = (e) => {
      /*
       e.target.files: 업로드한 파일 객체를 배열형태로 가져온다
       e.target.files = [File1, File2, File3..] => 여러개의 파일을 업로드 할 경우
       e.target.files = [File1] => 하나의 파일만 업로드 할 경우
       */
      console.log(e.target.files)
   }

   // 작성한 내용 전송
   const handleSubmit = () => {}

   return (
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }} encType="multipart/form-data">
         {/* 이미지 업로드 필드 */}
         <Button variant="contained" component="label">
            이미지 업로드
            <input type="file" name="img" accept="image/*" hidden onChange={handleImageChange} />
         </Button>

         {imgUrl && (
            <Box mt={2}>
               <img src={imgUrl} alt="업로드 이미지 미리보기" style={{ width: '400px' }} />
            </Box>
         )}

         {/* 게시물 내용 입력 필드 */}
         <TextField label="게시물 내용" variant="outlined" fullWidth multiline rows={4} value={content} onChange={(e) => setContent(e.target.value)} sx={{ mt: 2 }} />

         {/* 해시태그 입력 필드 */}
         <TextField label="해시태그 (# 구분)" variant="outlined" fullWidth value={hashtags} onChange={(e) => setHashtags(e.target.value)} placeholder="예: #여행 #음식 #일상" sx={{ mt: 2 }} />

         <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            등록하기
         </Button>
      </Box>
   )
}

export default PostCreateForm
