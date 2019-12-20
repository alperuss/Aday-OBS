var Obs_MVC = {
    Page: {
        
        Home: {
            Kayit: {
                Send: function () {
                    var name = $("#Name").val();
                    var surname = $("#Surname").val();
                    var studentno = $("#StudentNo").val();
                    var email = $("#Email").val();
                    var phone = $("#Phone").val();
                    var tcid = $("#TcId").val();
                    var birthday = $("#Birthday").val();
                    var birthplace = $("#BirthPlace").val();
                    var male = $("#Male").val();
                    var female = $("#Female").val();
                    var department = $("#Department").val();
                    var startdate = $("#Startdate").val();

                    if (name.length < 2 || name.length > 50) {
                        alert("Adınız 2 karakterden kısa 50'den uzun olamaz");
                        return;
                    }
                    else if (surname.length < 2 || surname.length > 50) {
                        alert("Soyadınız 2 karakterden kısa 50'den uzun olamaz");
                        return;
                    }
                    else if (email.length < 2 || email.length > 50) {
                        alert("Emailiniz 2 karakterden kısa 50'den uzun olamaz");
                        return;
                    }
                    else if (!GuestBook.Helper.IsEmail(email)) {
                        alert("Email adresiniz hatalı");
                        return;
                    }
                    else if (studentno.length < 2 || studentno.length > 50) {
                        alert("Öğrenci numaranız 2 karakterden kısa 50'den uzun olamaz");
                        return;
                    }
                    else if (phone.length < 2 || phone.length > 12) {
                        alert("Numaranız 2 karakterden kısa 11'den uzun olamaz");
                        return;
                    }
                    else if (tcid.length < 10 || tcid.length > 12) {
                        alert("TC kimlik numaranız 10 karakterden kısa 12'den uzun olamaz");
                        return;
                    }
                    else if (birthplace.length < 2 || birthplace.length > 50) {
                        alert("Doğum yeriniz 2 karakterden kısa 50'den uzun olamaz");
                        return;
                    }
                    else if (startdate.length < 2 || startdate.length > 50) {
                        alert("Başlangıç yılınız 2 karakterden kısa 50'den uzun olamaz");
                        return;
                    }






                    $("#SignUp").hide();
                    $("#Home-Kayit-Sending").show();

                    var data = {
                        Name: name,
                        Surname: surname,
                        Email: email,
                        StudentNo: studentno,
                        Phone: phone,
                        TcId: tcid,
                        Birthday: birthday,                       
                        BirthPlace: birthplace,
                        Male: male,
                        Female: female,
                        Department: department,                       
                        Startdate: startdate,                       
                    };

                    var json = JSON.stringify(data);
                    $.ajax({
                        type: "POST",
                        url: "/Home/SendAction",
                        data: json,
                        success: Obs_MVC.Page.Home.Kayit.Send_Callback,
                        error: Obs_MVC.Page.Home.Kayit.Send_Callback_Error,
                        dataType: "json",
                        contentType: "application/json;charset=utf-8"
                    });
                },
                Send_Callback: function (result) {
                    $("#Home-Kayit-Sending").hide();
                    $("#Home-Kayit-Sent").show();
                    console.log(result);
                },
                Send_Callback_Error: function (result) {
                    console.log(result);
                }
            },
            
        }
    },
    Helper: {
        IsEmail: function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
    }
}