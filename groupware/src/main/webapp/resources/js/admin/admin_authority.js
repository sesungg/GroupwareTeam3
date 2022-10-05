//권한조회

$(function () {
    $('.xi-search').click(function () {
        let search_num = document.querySelector("#search_num").value;
        let search_name = document.querySelector("#search_name").value;
        let search_department = document.querySelector("#search_department").value;

        //검색 부분
        let search_details = {
            emp_name: search_name,
            emp_num: search_num,
            dept_name: search_department
        };

        console.log(search_details);

        $.ajax({
            type: "POST",
            url: "/admin/admin_authority/search",
            dataType: "text",
            contentType: "application/json",
            data: JSON.stringify(search_details),
            success: function (data) {
                $('.result_table').html(data);
            },
            error: function (error) {
                alert("오류가 발생했습니다. 페이지를 새로고침해주세요")
                console.log(error)
            }
        });
    })
})














//첫번째 체크박스 기능 (목록 선택)


const all_check_btn = document.querySelector('.all_check_btn'); //최상단 체크박스

//최상단체크박스(전체선택) 체크&체크해제시 전체목록 체크&체크해제 기능
all_check_btn.addEventListener('click', function () { //최상단 체크박스
    let check_btn = document.querySelectorAll('.check_btn'); //목록 내 체크박스들

    // 클릭 시(체크되면)
    if (all_check_btn.checked != true) { //최상단 체크박스가 체크되어있는 경우
        for (let i = 0; i < check_btn.length; i++) { //for문(목록 내 체크박스들이 복수이기때문에)
            check_btn[i].checked = false; //목록 내 체크박스들이 모두 체크 해제된다
        }
    } else { //최상단 체크박스가 체크해제되어있는 경우
        for (let i = 0; i < check_btn.length; i++) {
            check_btn[i].checked = true; //목록 내 체크박스들이 모두 체크된다
        }
    }
});


//수정버튼클릭
//로컬스토리지에 id에 해당하는 체크여부 저장되고
//search_list_contents[i] 에 있는 checkbox[0]이 눌려있으면
//해당하는 id로 접속시
//intro jsp 에 관리자메뉴-전자결재관리 display none