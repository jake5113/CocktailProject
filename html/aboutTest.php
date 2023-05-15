<?php
    header('Content-Type:application/xml; chatset=utf-8');
    //curl 라이브러리 [PHP에서 다른 서버에 요청을 하는 라이브러리]
    
    //1. curl 초기화 단계 [객체 생성]
    $ch= curl_init();

    //2. curl로 작업할 요청에 대한 설정 옵션들
    //2-1. 요청할 서버 주소 URL 설정
    curl_setopt($ch, CURLOPT_URL, "http://webtoast2023.dothome.co.kr/AJAX/06_openapi_ajax.html");
    
    
    //sqlite랑 비슷한데? CURLOPT_URL: 이미 정해진값
    
    //2-2. 요청의 응답을 받겠다는 설정
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //세번째 param : 이설정을 할거야? 넵
  

    //3. 설정했으니 crul 작업 실행
    $result = curl_exec($ch);
    if($result){ //false나 null, 0이 아니면 참이다. 
        echo $result;

    } else{
        echo "실패".curl_error($ch)."<br>";
 
    }

    //4. 연결 종료
    curl_close($ch);


?>
