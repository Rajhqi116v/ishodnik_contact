<script type="text/javascript">
$(document).ready(function(){
  $.validator.addMethod('validName', function (value) {
     var result = true;
     var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?"+"абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"+" ";
      for (var i = 0; i < value.length; i++) {
          if (iChars.indexOf(value.charAt(i)) != -1) {
              return false;
          }
      }
      return result;
  }, '');
	
	
  $.validator.addMethod('validDate', function (value) {
      var result = true;
      for (var i = 0; i < value.length; i++) {
        if(!/^([0-9]{4,4})+\.([0-9]{2,2})+\.[0-9]{2,2}$/.test(value)){
           return false;
        }
      }
      return result;
  }, '');
	
  $("#contactForm").validate({
    focusInvalid: false,
    focusCleanup: true,
    rules: {
      name: {
           required: true,
           validName: true,
           minlength: 4,
           maxlength: 25,
           remote: {
              url: "check_name.php",
              type: "post"
           }
      },
      password: {
           required: true,
           rangelength: [4, 25],
           remote: {
                url: "check_pass.php",
                type: "post",
                data: {
                      name: function() {
                          return $("#name").val();
                      }
                }
           }
      },
      password_new: {
           minlength: 4,
           required: true
      },
      password_new_check: {
           required: true,
           equalTo: "#password_new"
      },
      email: {
           required: true,
           email: true
      },
      age: {
           required: true,
           range: [1,99]
      },
      date: {
           validDate:true    
      },
      urlname: {
           url: true
      },
      about: {
           minlength: 10,
           maxlength: 500
      }
    },
    messages: {
      name: {
        required: "Введите имя пользователя",
        validName: "Символы !@#$%^&*()+=-[]\\\';,./{}|\":<>? и пробелы запрещены. Также нельзя использовать русские буквы",
        minlength: "Минимум 4 символа ",
        maxlength: "Максимум 25 символов ",
        remote: "Такое имя уже существует "
      },
      password: {
        required: " Введите текущий пароль ",
        rangelength: "От 4 до 25 символов",
        remote: " Вы неправильно ввели пароль "
      },
      password_new: {
        minlength: "Минимум 4 символа ",
        required: "Введите пароль "
      },
      password_new_check: {
        required: "Повторно введите пароль ",
        equalTo: "Пароль неправильно введён повторно"
      },
      email: {
        required: "Введите адрес ящика",
        email: "Введите корректный адрес"
      },
      age: {
        required: "Укажите ваш возраст",
        range: "Укажите возраст в цифрах (до 99)"
      },
      date: {
        validDate: "Дата введена неверно (формат YYYY.MM.DD)"
      },
      urlname: {
        url: "Введите адрес, начиная с http://"
      },
      about: {
        minlength: "Напишите о себе немного",
        maxlength: "Не пишите так много!"
      }
    },
	  
    errorPlacement: function(error, element) {
      var er = element.attr("name");
      error.appendTo( element.parent().find("label[@for='" + er + "']").find("span") );
    },
    success: function(label) {
      label.html("&nbsp;").addClass("checked");
    }
  });
});
</script>