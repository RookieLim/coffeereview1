//구현해야 하는 것
//사진 클릭해서 상세페이지로 넘어갈 때 음료 이름 값 가져오는거
//로그인 여부에 따라 보이는 템플릿 달리 하는 것
//db에 저장할 때 사용자가 쓴 댓글과 아닌 댓글을 어떻게 구분할 것인지

function isEmpty(a){
  if(a){
    return a;
  }
  return '?';
}
function getCoffeeInfo(){
  $.ajax({
    type: "GET",
    url: "/coffeeinfo?sample_give=샘플데이터",
    data: {},
    success: function (response) {
      let articles = response['articles']
      let name = articles['name']
      let kcal = articles['kcal']
      let sat_FAT = articles['sat_FAT']
      let protein = articles['protein']
      let sodium = articles['sodium']
      let sugars = articles['sugars']
      let caffeine = articles['caffeine']
      let img_url = articles['img_url'] //이거를 어떻게 해야할지 모르겠어용
      let temp_html = `
        <p class="detail-title">${name}</p>
      <p class="detail-item-fact">제품 영양 정보</p>
      <ul class="detail-fact">
        <li class="kcal"> 1회 제공량(kcal) :${kcal} </li>
        <li class="na"> 나트륨(mg) :${sodium} </li>
        <li class="fat"> 포화지방(g) :${sat_FAT} </li>
        <li class="sugar"> 당류(g) :${sugars}</li>
        <li class="protein"> 단백질(g) :${protein} </li>
        <li class="caffeine"> 카페인(mg) :${caffeine}</li>
      </ul>
`
      $('#coffeeInfoList').append(temp_html)
    }
  })
}

function reviewSubmit(){
  let reviewvalue = $('#detail-review-content').val()
  $.ajax({
    type: "POST",
    url: "/order",
    data: {review_give:reviewvalue},
    success: function (response) { // 성공하면
      alert(response["msg"]);
      window.location.reload() //새로고침
    }
  })

}


// 댓글쓰기

/*
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

  export default reviewSubmit
// 댓글 삭제
*/

// function reviewDelBtn(e){
//   const reviewDel = document.getElementById("detail-comment-del")
//   reviewDel.addEventListener("click", (event) => {
//     console.log(event.target)
//   })
// }