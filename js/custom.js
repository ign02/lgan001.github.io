$(function() {
            $("body").prepend('    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-pink">' +
                '    <a class="navbar-brand" href="index.html"><img class="logo" src="img/logo.png"></a>' +
                '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">' +
                '        <span class="navbar-toggler-icon"></span>' +
                '    </button>' +
                '    <div class="collapse navbar-collapse" id="navbarCollapse">' +
                '        <ul class="navbar-nav ml-auto">' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" href="Release.html">發售作品</a>' +
                '            </li>' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" href="actors.html">女優一覽</a>' +
                '            </li>' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" href="index.html?srcto=productarea">周邊商品</a>' +
                '            </li>' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" href="index.html?srcto=vendorarea">合作廠商</a>' +
                '            </li>' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" href="help.html">聯繫我們</a>' +
                '            </li>' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" href="index.html?srcto=news">最新消息</a>' +
                '            </li>' +
                '            <li class="nav-item">' +
                '                <a class="nav-link" id="btn_Search"><img src="img/svg/magnifying-glass.svg" class="magnifying-glass"></a>' +
                '            </li>' +
                '        </ul>' +
                '        <form class="form-inline mt-2 mt-md-0" id="SearchForm" style="display: none;">' +
                '            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">' +
                '            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">搜尋</button>' +
                '        </form>' +
                '    </div>' +
                '</nav>');
            $("footer .logo").after('<div class="row">' +
                '     <div class="col-md-3 pt-5">' +
                '         <h4>作品資訊</h4>' +
                '         <a href="Release.html">最新作品</a>' +
                '         <a href="seriesList.html">系列清單</a>' +
                '         <a href="typeList.html">類型清單</a>' +
                '     </div>' +
                '     <div class="col-md-3 pt-5">' +
                '         <h4>熱門女優</h4>' +
                '         <a href="actor.html">女優1</a>' +
                '         <a href="actor.html">女優2</a>' +
                '         <a href="actor.html">女優3</a>' +
                '         <a href="actor.html">女優4</a>' +
                '         <a href="actor.html">女優5</a>' +
                '     </div>' +
                '     <div class="col-md-3 pt-5">' +
                '         <h4>商品資訊</h4>' +
                '         <a href="#">商品1</a>' +
                '         <a href="#">商品2</a>' +
                '         <a href="#">商品3</a>' +
                '         <a href="#">商品4</a>' +
                '         <a href="#">商品5</a>' +
                '     </div>' +
                '     <div class="col-md-3 pt-5">' +
                '         <h4>企業資訊</h4>' +
                '         <a href="help.html">聯絡我們</a>' +
                '         <a href="help.html">演員應徵</a>' +
                '         <a href="index.html#news">最新消息</a>' +
                '     </div>' +
                ' </div>' )

                $("#btn_Search").click(function() {
                    $("#SearchForm").fadeToggle("slow", "linear");
                });

                $('.navbar-collapse a').click(function() {
                    $(".navbar-collapse").collapse('hide');
                });
            });