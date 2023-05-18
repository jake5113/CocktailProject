<?php
    header('Content-Type: application/xml; charset=utf-8');
    
    // 1. curl 초기화 단계 [객체 생성]
    $ch = curl_init();

    //가고 싶은 메뉴 html이름
    $id = $_GET['id'];

    //기본 도메인
    $domain = "http://mrhicock.dothome.co.kr/html/"; 

    $url = $domain.$id.'.html';
    
    curl_setopt($ch, CURLOPT_URL, $url); 

    // 2-2. 요청의 응답을 받겠다는 설정
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // 3. 설정했으니 curl 작업 실행
    $result = curl_exec($ch);
    if ($result) {
        echo $result;
    } else {
        echo "실패" . curl_error($ch) . "<br>";
    }

    // 4. 연결 종료
    curl_close($ch);
?>
