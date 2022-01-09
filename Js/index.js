function afterload(){
    let day;
    let message;
    switch (new Date().getDay()){
        case 0:
            day="یکشنبه";
            message="خوش است عمر، دریغا که جاودانی نیست\n" +
                "پس اعتماد بر این پنج روز فانی نیست";
            break;
        case 1:
            day="دوشنبه";
            message="هر دو عالم قیمت خود گفته‌ای\n" +
                "نرخ بالا کن، که ارزانی هنوز";
            break;
        case 2:
            day="سه شنبه";
            message="خواهی که شوی خازن اسرار امانت\n" +
                "جبریل صفت در همه احوال، امین باش";
            break;
        case 3:
            day="چهارشنبه";
            message="من همان دم که وضو ساختم از چشمه عشق\n" +
                "چار تکبیر زدم یک سره بر هر چه که هست";
            break;
        case 4:
            day="پنجشنبه";
            message="اگر پند خردمندان به شیرینی نیاموزی\n" +
                "فلک آن پند را روزی، به تلخی ات بیاموزد";
            break;
        case 5:
            day="جمعه";
            message=" پیش صاحب‌نظران، ملک سلیمان بادست\n" +
                "بلکه آنست سلیمان، که ز ملک آزادست";
            break;
        case 6:
            day="شنبه";
            message="توانا بود هرکه دانا بود\n" +
                "ز دانش دل پیر برنا بود";
            break;
    }
    window.alert(message)
    document.getElementById("date").innerText=day;

    let d=new Date();
    let H=d.getHours();H=(H<10)?"0"+H:H;
    let i=d.getMinutes();i=(i<10)?"0"+i:i;
    let s=d.getSeconds();s=(s<10)?"0"+s:s;
    document.getElementById('show_time').innerHTML=H+":"+i+":"+s;
    setTimeout("show_time()",1000);
}

function load(){
    let day;

    switch (new Date().getDay()){
        case 0:
            day="یکشنبه";
            break;
        case 1:
            day="دوشنبه";
            break;
        case 2:
            day="سه شنبه";
           break;
        case 3:
            day="چهارشنبه";
           break;
        case 4:
            day="پنجشنبه";
           break;
        case 5:
            day="جمعه";
           break;
        case 6:
            day="شنبه";
           break;
    }

    document.getElementById("date").innerText=day;

    let d=new Date();
    let H=d.getHours();H=(H<10)?"0"+H:H;
    let i=d.getMinutes();i=(i<10)?"0"+i:i;
    let s=d.getSeconds();s=(s<10)?"0"+s:s;
    document.getElementById('show_time').innerHTML=H+":"+i+":"+s;
    setTimeout("show_time()",1000);
}

function show_time(){
    let d=new Date();
    let H=d.getHours();H=(H<10)?"0"+H:H;
    let i=d.getMinutes();i=(i<10)?"0"+i:i;
    let s=d.getSeconds();s=(s<10)?"0"+s:s;
    document.getElementById('show_time').innerHTML=H+":"+i+":"+s;
    setTimeout("show_time()",1000);
}

function namefunfb(){
    let field_value = document.forms["form-feedback"]["form-txt-fb"].value;
    window.alert(field_value +"\n"+" عزیزنظر شما ثبت شد." );
}


function newsfun(){
    let field_value = document.forms["form-news"]["form-txt-news"].value;
    window.alert(field_value +"\n"+" عزیز شما در خبرنامه ما عضو شدید." );
}