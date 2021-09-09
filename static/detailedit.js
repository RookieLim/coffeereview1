// 댓글쓰기

function reviewSubmit() {
const reviewInput = document.getElementById("detail-review-content")
const reviewValue = reviewInput.value.trim()
  
  // 체크박스
  const reviewRadio = document.getElementsByClassName("detail-form-radio")
  for (let i = 0; i<reviewRadio.length; i++){
    const name = reviewRadio[i].id
    if(reviewValue && reviewRadio[i].checked === true){
      let reviewsObj = {};
      const date = new Date().toLocaleString()

      // console.log(date)
      // 날짜
      const commentDate = document.createElement("div")
      commentDate.classList.add("detail-comment-date")
      commentDate.innerText = date
      // console.log(commentDate)
  
      // 작성자
  
      // const commentWrite = document.createElement("div")
      // commentWrite.classList.add("detail-comment-writer")
      // commentWrite.innerText = reviewValue
  
      // 리뷰내용
      
      // const commentDel = document.createElement("i")
      // commentDel.classList.add("fas","fa-minus-circle","detail-comment-del")
      
      const commentReview = document.createElement("div")
      commentReview.classList.add("detail-comment-review")
      commentReview.innerText = reviewValue
      // commentReview.appendChild(commentDel)
      
      const createComment = document.getElementById("detail-comment-box")
      createComment.appendChild(commentReview)
      createComment.appendChild(commentDate)

      reviewsObj = {reviewValue, date, name}
      
      console.log(reviewsObj)
      
      reviewInput.value = "";

    }
  }
}


