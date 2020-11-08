$(function(){

  // alert(vw)
  let SiteHight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )
  // alert(scrollHeight)

  let SectionHight = SiteHight/4
  let SectionNumber = 0
  let AllSection = $('section')
  let TextFields = $('.lang')
  let TextRu = [
    'Разрабатывал и создавал сайт для курпной польской строительной фирмы, так же помогал в создании сайта для beaty-студии. Сейчас активно развиваю собственное приложение написаное на JS, это бот для шопинга который нацелен на приобретение лимитированой одежды, есть несколько модулей для разный магазинов, так же для тех же целей написал несколько расширений которые с успехом используются.<br><br>Для сборки настольного приложения использовал Electron JS, подключил аунтификацию связаную с веб-сервером на Node JS, так же для построения логики приложения очень пригодился опят создания соц-сети на React.',
    'Работаю с: JS, React, HTML, CSS, SCSS, WordPress, Gulp, Node.JS, Electron JS, Python.<br>За 2 года успел поработать на фрилансе, так же написать несколько полноценных проектов на JS и Python.<br>Ниже на странице вы сможете увидеть примеры моих работ, сайтов и функционал написаного мною ПО, некоторые проекты я делал для заказчиков, некоторые для обучения и повышения своих навыков.<br>Несколько слов о моих проектах ты найдёшь под фотографией.',
    'Потыкайте на кнопки и увидете, что я могу :)<br>Кликните дважды, чтобы перейти на сайт.',
    'Здесь вы сможете найти контактную информацию.',
    'Тут ты можешь связаться со мной',
    'Кликни и напиши письмо',
    'Чтобы пообщаться со мной с глазу на глаз, найди мой ник maxxim13128',
    'Здесь мы можеи пообщаться не опасаясь дядей ФСБшников',
    'Если я сейчас в России, можете мне набрать, просто кликни',
    'И на последок, можем поскидывать мемы'
  ]
  let TextEn = ['english','english','english','english','english','english','english','english','english','english','english','english','english']


  for(let i=0;i<TextFields.length;i++){
    $(TextFields[i]).html(TextRu[i])
  }

  // Первая секция
  function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },2200);
  }
  autoType(".type-js",300)

  // Вторая секция
  let counter = 0
  let rundinamictext = false
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  var DynamicText = [
    'Привет',
    'Я Веб-разрабочик',
    '2 года опыта',
    'Делаю сайты',
    'Разработываю ботов',
    'Создаю приложения',
    'Всегда открыт к сотруднечеству'
  ]
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  const next = () => {
    if(rundinamictext==true){
      fx.setText(DynamicText[counter]).then(() => {
        setTimeout(next, 1400)
      })
      counter = (counter + 1) % DynamicText.length
    }else{return}
  }
  var text_triger = null
  var loader_triger = null



  if($( document ).width()>1024){
    // $(AllSection).css('height',SectionHight)
    $('.nav__btn').click(function (e) {
      if(e.target.id=='next'){
        SectionNumber++
      }else{
        SectionNumber--
        setTimeout(next,1000)
      }

      if(SectionNumber==0){
        $('.nav__btn:first-child').hide()
        $('.theme').hide()
      }


      if(SectionNumber==1){
        rundinamictext=true
        setTimeout(function(){
          $('.theme').css('display','flex')
          $('.nav__btn:first-child').show()
        },700)
        setTimeout(next,500)
      }else{
        rundinamictext=false
      }

      var iframe = $('iframe')
      var video = $('video')
      if(SectionNumber==2&&iframe.length==0&&video.length==0){
        $('.third__block-loader').css('display','flex')
        $('.third__block button').addClass('came')
      }else{
        setTimeout(function(){
          $('.third__block-loader').hide()
        },700)
      }
      if(SectionNumber==AllSection.length-1){
        $('.nav__btn:nth-child(2)').hide()
      }else{
        $('.nav__btn:nth-child(2)').show()
      }

      $('body, html').animate({
        scrollTop: SectionNumber*SectionHight
      }, 700)

    })
  }
  if($( document ).width()<=1024||screen.width<=1024){
    $('.third__block-loader').css('display','flex')
    function scrollText(){
      var wt1 = $(window).scrollTop();
      var wh1 = $(window).height();
      var et1 = $('.text').offset().top;
      var eh1 = $('.text').outerHeight();
      if (wt1 + wh1 >= et1 && wt1 + wh1 - eh1 * 2 <= et1 + (wh1 - eh1)){
        if (text_triger == null || text_triger == false) {
          rundinamictext=true
          setTimeout(next,500)
        }
        text_triger = true
      } else {
        if (text_triger == null || text_triger == true) {
          rundinamictext=false
        }
        text_triger = false
      }
    }
    $(document).ready(function(){
      scrollText()
    })
    $(window).scroll(function(){
      scrollText()
      if($(document).scrollTop()>=$(window).height()){
        $('.theme').css('display','flex')
      } else{
        $('.theme').css('display','none')
      }
    })

  }



  $('#checkbox1').click(function(){
    $('body').toggleClass('dark')
  })
  $('#checkbox2').click(function(){
    if($('#checkbox2').is(':checked')){
      for(let i=0;i<TextFields.length;i++){
        $(TextFields[i]).html(TextRu[i])
        DynamicText = [
          'Привет',
          'Я Веб-разрабочик',
          '2 года опыта',
          'Делаю сайты',
          'Разработываю ботов',
          'Создаю приложения',
          'Всегда открыт к сотруднечеству'
        ]
      }
    }else{
      for(let i=0;i<TextFields.length;i++){
        $(TextFields[i]).html(TextEn[i])
        DynamicText = [
          'Hello',
          "I'm web-deweloper",
          '2 years of expirience',
          'Make website',
          'Create bots',
          'Develop the app',
          'Always open to collaboration'
        ]
      }
    }
  })



  $.get("https://www.instagram.com/maxim_shparik/?__a=1", function(data) {
    $('.second__block-img').attr("src",data.graphql.user.edge_owner_to_timeline_media.edges[0].node.display_url)
    $('.second__block:first-child').css('height',$('.second__block-img').width())
  })


  $(".third__block:first-child button").click(function (e) {
    if($(e.target).hasClass('video')){
      $('iframe').remove()
      $('video').remove()
      $('.third__block-loader').css('display','none')
      $('.third__block:nth-child(2)').append('<video width="100%" height="100%" controls><source src="'+e.target.id+'" type="video/mp4"></video>')
    }else{
      $('iframe').remove()
      $('video').remove()
      $('.third__block-loader').css('display','flex')
      $('.third__block-loader p').css('visibility','visible')
      var iframe = document.createElement("iframe");
      iframe.style.display = "none"
      iframe.onload = function (){
        iframe.style.display = "block"
        $('.third__block-loader').css('display','none')
      }
      iframe.src =e.target.id;
      $('.third__block:nth-child(2)').append(iframe)
    }
  })






});
