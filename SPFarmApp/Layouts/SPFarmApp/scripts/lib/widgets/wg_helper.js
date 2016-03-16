var Widgets = function () {
    
};

Widgets.prototype.Initialization = function () {
    $.widget("custom.structure", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div class='content' style='position: absolute; left: 90px'><a href=''>Структура компании, сотрудники, отделы и руководители</a><br><a href=''>Офисы в городах России и мира</a></div>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.blogs", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPFarmApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPFarmApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.listitems", {
        _create: function () {
            var name = this.options.name;
            var currentElement = this.element;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPFarmApp/images/blogs_1.png' alt=''></a><a href='' style='font-size: 14pt;'>Маленькие праздники без повода</a><br/><a href='' style='font-size: 10pt;'>Пост для того, чтобы не забыть то, что мы тут только что обсуждали...</a></div>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left' src='/_Layouts/15/SPFarmApp/images/blogs_2.png' alt=''></a><a href='' style='font-size: 14pt;'>Нас ломанули?</a><br/><a href='' style='font-size: 10pt;'>'Если Вас съели - есть два выхода'</a></div>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
            require(['widgets/wg_listitems'], function () {
                CreateListItemsForm(currentElement);
            });
        }
    });

    $.widget("custom.hooray", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<div style='height: 80px'><a href=''/'><img style='float:left;  top: 40px;' src='/_Layouts/15/SPFarmApp/images/hooray.png' alt=''></a><a href='' style='position: absolute; left: 90px; top: 40px; font-size: 10pt;'>Спасибо за замечательные дайджествы новостей компании. Наконец-то в доступной форме мы узнаем, что творится в позитиве и за его пределеами.</a></div>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.myprofile", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<div style='padding: 20px 0px 0px 30px !important; background-color:#92a840; position: absolute; bottom: 0px; width: 100%'><a style='left: 35px' href=''>" + name + "</a></div>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.interview", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .append("<br><p>Вы уже ответили на данный опрос</p>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });

        }
    });

    $.widget("custom.officemap", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.photos", {
        _create: function () {
            var name = this.options.name;
            var currentElement = this.element;
            currentElement
                .addClass("widget")
                .append("<a href=''>" + name + "</a>");

            require(['widgets/wg_photos'], function () {
                CreatePhotosSlider(currentElement);
            });
        }
    });

    $.widget("custom.events", {
        _create: function () {
            var name = this.options.name;
            var date = new Date();
            var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентябра', 'октябра', 'ноября', 'декабря'];
            var day = date.getDay();
            var month = date.getMonth();
            this.element
                .addClass("widget")
                .append("<a style='padding: 0px 0px 0px 100px !important;' href=''>" + name + "</a> <br>")
                .append("<div style='height: 40px'><a style='padding: 0px 0px 0px 100px !important;' href=''>" + date.getDate() + " " + months[month] + ", " + days[day] + "</a></div>")

                .append("<div style='height: 60px'><a style='padding: 0px 0px 0px 100px !important; ' href=''>06:00 - 08:00    Grammar Club</a></div>")
                .append("<div style='height: 60px'><a style='padding: 0px 0px 0px 100px !important;  href=''>07:00 - 10:00    Волейбол</a></div>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.newemployees", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.birthdays", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a style='' href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.ideas", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.note", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.facebook", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.job", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.neighbors", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.portal", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });

    $.widget("custom.services", {
        _create: function () {
            var name = this.options.name;
            this.element
                .addClass("widget")
                .append("<a href=''>" + name + "</a>")
                .click(function () {
                    alert("Calm down. Nothing to see here.");
                });
        }
    });
}